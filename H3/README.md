
# HV19.H3 Hidden Three

https://academy.hacking-lab.com/events/6/challenges/67

In HV19.11 (FSJA API) the platinum joke contains a hint:

    Sometimes bugs are rather stupid. But that's how it happens, sometimes. Doing all the crypto stuff right and forgetting the trivial stuff like input validation, Hohoho!

So I'm looking for a bug in the input validation. Probably when registering a user or loging in.

When sending a username containing \' an error message is sent back:

    {"username":"santa666\'', "password": "passwordpassword", "platinum": "true"}

    Unrecognized character escape ''' (code 39)
    at [Source: org.glassfish.jersey.message.internal.ReaderInterceptorExecutor$UnCloseableInputStream@7733f4e4; line: 1, column: 13] (through reference chain: ch.dkuhn.hv19.fsja.model.User["username"])

 Sending "objects" instead of text or booleans, results in a different error message:

     {"username": "santa666", "password": { "!=", ""}, "platinum": "true"}

    Cannot deserialize instance of `java.lang.String` out of START_OBJECT token
    at [Source: org.glassfish.jersey.message.internal.ReaderInterceptorExecutor$UnCloseableInputStream@1927dff3; line: 1, column: 38] (through reference chain: ch.dkuhn.hv19.fsja.model.User["password"])

Sending attributes which are not known

    {"username": "santa666", "password": "passwordpassword", "platinum": "true", "more":{ "!=", ""}}


    Unrecognized field "more" (class ch.dkuhn.hv19.fsja.model.User), not marked as ignorable (3 known properties: "password", "platinum", "username"])
    at [Source: org.glassfish.jersey.message.internal.ReaderInterceptorExecutor$UnCloseableInputStream@e342b2a; line: 1, column: 86] (through reference chain: ch.dkuhn.hv19.fsja.model.User["more"])


Testing on the `register` call, the password field cannot be left empty or contain strange characters.
But trying to register a user with an empty `username` works!
    {"username":"", "password": "12312312313213213123", "platinum": "true"}

There doesn't seem to be any validation on this field... even `\" or \"=\"` and `{\"!=\", \"\"}`are accepted as usernames.


Fresh day, new approach...

I'm looking at the `token` parameter when calling for a random joke. The test script `test_token_chars.js` is testing which characters of the token are not relevant by setting each character to a value:

Initial token:

    eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoic2FudGE2NjYiLCJwbGF0aW51bSI6dHJ1ZX0sImV4cCI6MTU3NjA1NjA5Ni41OTgwMDAwMDB9.U-T46JTYgKUJzUgBWU-_PxmVH-RH-giK0Db5Nbda5v8

- character 0
    remaining token
        eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoi00000000000iLCJwbGF0aW51bSI6dHJ1ZX0sImV4cCI6MTU3NjA1NjA0Ni40OTg0MDA0MDB9.0000000000000000000000000000000000000000000
    
    unused charecter
        c2FudGE2NjY0051wwU-T46JTYgKUJzUgBWU-_PxmVH-RH-giK0Db5Nbda5v8

- character *
    remaining token
        eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoic2FudGE2NjYiLCJwbGF0aW51bSI6dHJ1ZX0sImV4cCI6MTU3NjA1NjA5Ni41OTgwMDAwMDB9.*******************************************

   unused characters
        U-T46JTYgKUJzUgBWU-_PxmVH-RH-giK0Db5Nbda5v8

Trying to decode those sequences show: they are base64 encoded!
The token is base64 encoded! 3 parts separated by `.`

    eyJhbGciOiJIUzI1NiJ9    =   {"alg":"HS256"}
    eyJ1c2Vy.....DAwMDB9    =   {"user":{"username":"santa666","platinum":true},"exp":1576056096.598000000}

It would have been possible to solve HV19.11 by manipulating the access token?!?! It could have been so easy :-)


After discussing my approach with user "bread", he told me that for H3 I have to take a broader view, not only focussing on what we have seen in HV19.11.  
So I started a portscan on `whale.hacking-lab.com` to know whether there are other services running:

    Port Scanning host: 80.74.140.188

        Open TCP Port: 	17     		qotd
        Open TCP Port: 	22     		ssh

QOTD? What is it and how can I access it? [Wikipedia comes to help](https://en.wikipedia.org/wiki/QOTD)  
A service where a sysadmin can broadcast information! Exactly what we are looking for :-)
After accessing the service using `nc 80.74.140.188 17` I got the letter `h`.
This looks not complete.... exactly what's in the H3 description o the challenge:

    Not each quote is compl

I've submitted this incomplete quote, but as the challenge is perhaps changing over time, I've written a command.

After a few minutes (exactly as the time change to 11:00 PM CET) the next letter appeared: `e`
This means I have to wait for a longer period to get the full message.
I have therefore written a bash script to query the service every 10 minutes:

```bash
for ((i=1;i<=500;i++)) do 
    curr=`date`
    res=`nc -w 1 80.74.140.188 17`
    echo "$curr: $res" 
    sleep 600
done
```

    HV19{an0ther_DAILY_fl4g}

