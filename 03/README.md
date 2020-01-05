# HV19.03 Hodor, Hodor, Hodor

https://academy.hacking-lab.com/events/6/challenges/40

```
$HODOR: hhodor. Hodor. Hodor!?  = `hodor?!? HODOR!? hodor? Hodor oHodor. hodor? , HODOR!?! ohodor!?  dhodor? hodor odhodor? d HodorHodor  Hodor!? HODOR HODOR? hodor! hodor!? HODOR hodor! hodor? ! 

hodor?!? Hodor  Hodor Hodor? Hodor  HODOR  rhodor? HODOR Hodor!?  h4Hodor?!? Hodor?!? 0r hhodor?  Hodor!? oHodor?! hodor? Hodor  Hodor! HODOR Hodor hodor? 64 HODOR Hodor  HODOR!? hodor? Hodor!? Hodor!? .

HODOR?!? hodor- hodorHoOodoOor Hodor?!? OHoOodoOorHooodorrHODOR hodor. oHODOR... Dhodor- hodor?! HooodorrHODOR HoOodoOorHooodorrHODOR RoHODOR... HODOR!?! 1hodor?! HODOR... DHODOR- HODOR!?! HooodorrHODOR Hodor- HODORHoOodoOor HODOR!?! HODOR... DHODORHoOodoOor hodor. Hodor! HoOodoOorHodor HODORHoOodoOor 0Hooodorrhodor HoOodoOorHooodorrHODOR 0=`;
hodor.hod(hhodor. Hodor. Hodor!? );
```
[File hackvent.hd](hackvent.hd)

Googling for `hodor language` leads to http://www.hodor-lang.org, which shows promising language examples.

Installing it with `npm install hodor-lang` let's me execute the challenges example: 

    ./node_modules/.bin/hodor hackvent.hd`

The resulting message is:

    Awesome, you decoded Hodors language! 

    As sis a real h4xx0r he loves base64 as well.

    SFYxOXtoMDFkLXRoMy1kMDByLTQyMDQtbGQ0WX0=

Now we have to decode the `base64` encoded part `echo "SFYxOXtoMDFkLXRoMy1kMDByLTQyMDQtbGQ0WX0=" | base64 -d` leads to the result

    HV19{h01d-th3-d00r-4204-ld4Y}
