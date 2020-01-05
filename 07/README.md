
# HV19.07 Santa Rider

https://academy.hacking-lab.com/events/6/challenges/48

Santas gadget has a glitch, we have to check the video in `HV19-SantaRider.zip`...

There are 8 LEDs blinking in a cyclic way (=> 8 Bits?)

The color cycling does not work properly. The LED lights during the glitch are showing a code:

    01001000
    01010110
    00110001
    00111001
    01111011
    00110001
    01101101
    01011111
    01100001
    01101100
    01110011
    00110000
    01011111
    01110111
    00110000
    01110010
    01101011
    00110001
    01101110
    01100111
    01011111
    00110000
    01101110
    01011111
    01100001
    01011111
    01110010
    00110011
    01101101
    00110000
    01110100
    00110011
    01011111
    01100011
    00110000
    01101110
    01110100
    01110010
    00110000
    01101100
    01111101
    00000000

Converting this binary string using JavaScript:

```javascript
String.fromCharCode(parseInt("01001000", 2))+
String.fromCharCode(parseInt("01010110", 2))+
String.fromCharCode(parseInt("00110001", 2))+
String.fromCharCode(parseInt("00111001", 2))+
String.fromCharCode(parseInt("01111011", 2))+
String.fromCharCode(parseInt("00110001", 2))+
String.fromCharCode(parseInt("01101101", 2))+
String.fromCharCode(parseInt("01011111", 2))+
String.fromCharCode(parseInt("01100001", 2))+
String.fromCharCode(parseInt("01101100", 2))+
String.fromCharCode(parseInt("01110011", 2))+
String.fromCharCode(parseInt("00110000", 2))+
String.fromCharCode(parseInt("01011111", 2))+
String.fromCharCode(parseInt("01110111", 2))+
String.fromCharCode(parseInt("00110000", 2))+
String.fromCharCode(parseInt("01110010", 2))+
String.fromCharCode(parseInt("01101011", 2))+
String.fromCharCode(parseInt("00110001", 2))+
String.fromCharCode(parseInt("01101110", 2))+
String.fromCharCode(parseInt("01100111", 2))+
String.fromCharCode(parseInt("01011111", 2))+
String.fromCharCode(parseInt("00110000", 2))+
String.fromCharCode(parseInt("01101110", 2))+
String.fromCharCode(parseInt("01011111", 2))+
String.fromCharCode(parseInt("01100001", 2))+
String.fromCharCode(parseInt("01011111", 2))+
String.fromCharCode(parseInt("01110010", 2))+
String.fromCharCode(parseInt("00110011", 2))+
String.fromCharCode(parseInt("01101101", 2))+
String.fromCharCode(parseInt("00110000", 2))+
String.fromCharCode(parseInt("01110100", 2))+
String.fromCharCode(parseInt("00110011", 2))+
String.fromCharCode(parseInt("01011111", 2))+
String.fromCharCode(parseInt("01100011", 2))+
String.fromCharCode(parseInt("00110000", 2))+
String.fromCharCode(parseInt("01101110", 2))+
String.fromCharCode(parseInt("01110100", 2))+
String.fromCharCode(parseInt("01110010", 2))+
String.fromCharCode(parseInt("00110000", 2))+
String.fromCharCode(parseInt("01101100", 2))+
String.fromCharCode(parseInt("01111101", 2))+
String.fromCharCode(parseInt("00000000", 2))
```

The solution is:

    HV19{1m_als0_w0rk1ng_0n_a_r3m0t3_c0ntr0l}