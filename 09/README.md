
# HV19.09 Santas Quick Response 3.0

https://academy.hacking-lab.com/events/6/challenges/58

This is a complicated one...

1. QR-Code is broken  
![qr-code.png](qr-code.png)

2. There is a hint for a railway station with an image.  
![railwaystation.jpg](railwaystation.jpg)

   Reverse image search shows hits for
   - Cambridge North railway station - Wikipedia
   - Rule 30 - Wikipedia

Rule 30 is a rule set for a Wolfram cellular automatom which generates any number of values... it generates an interesting pyramid [see here](http://mathworld.wolfram.com/Rule30.html).

According to the hints I've received it's not necessary to apply the algorithm to the QR code but to overlay the rule 30 pyramid with the QR code. By doing this, the missing parts of the QR code appear.

The python script [rule-30.py](rule-30.py) is an implementation to do this. It is loading the QR code, generating a rule 30 pyramid with the appropriate size and combining both images using an XOR operation.
Resulting in the fixed QR code

![combo-16.png](combo-16.png)

And in the flag

    HV19{Cha0tic_yet-0rdered}
