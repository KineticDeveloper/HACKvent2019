# HV19.11 Frolicsome Santa Jokes API

https://academy.hacking-lab.com/events/6/challenges/64

This time we have to fiddle with the API under http://whale.hacking-lab.com:10101/fsja/

    POST /fsja/register
    POST /fsja/login
    GET /fsja/random

I'm using Postman to implement and test the API calls. User registration and login works flawlessly (body contains the username and password). But getting random jokes only shows "regular" jokes. The `platinum` value is always `false`.

I've written a `request.js` file logging all jokes and stopping as soon as a platinum joke appears. I have no luck... even after hundreds of requests, no platinum joke. 
So I start investigating the API options, doing incorrect HTTP methods, e.g. using `PATCH` method on login.
The response contains the allowed methods: `POST` and `OPTIONS`. So I try the `OPTIONS` method and receive in the body an XML WADL file, containing a reference to the XSD schema with all fields of the `user` object.

Conclusion: I have to register a new user but this time setting `platinum = true` already when registering.

```json
{"username":"santa666", "password": "passwordpassword", "platinum": "true"}
```

After getting again the token with the `login` request, the random joke includes the flag

```json
{
    "joke": "Congratulation! Sometimes bugs are rather stupid. But that's how it happens, sometimes. Doing all the crypto stuff right and forgetting the trivial stuff like input validation, Hohoho! Here's your flag: HV19{th3_cha1n_1s_0nly_as_str0ng_as_th3_w3ak3st_l1nk}",
    "author": "Santa",
    "platinum": true
}
```