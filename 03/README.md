# HV19.03 Hodor, Hodor, Hodor

https://academy.hacking-lab.com/events/6/challenges/40

Googling for `hodor language` leads to http://www.hodor-lang.org, which shows promising language examples.

Installing with `npm install hodor-lang` let's me execute the hackvent example: 

    ./node_modules/.bin/hodor hackvent.hd`

The resulting message is:

    Awesome, you decoded Hodors language! 

    As sis a real h4xx0r he loves base64 as well.

    SFYxOXtoMDFkLXRoMy1kMDByLTQyMDQtbGQ0WX0=

Now we have to decode the base64 encoded part `echo "SFYxOXtoMDFkLXRoMy1kMDByLTQyMDQtbGQ0WX0=" | base64 -d` leads to the result

    HV19{h01d-th3-d00r-4204-ld4Y}
