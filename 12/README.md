
# HV19.12 back to basic

https://academy.hacking-lab.com/events/6/challenges/65

This time a Windows Binary has been provided which needs reverse engineering.
I'll setup a Windows VM to analyze and run the software.

Using the VB Decompiler on Windows 10 Dev VM, results in the "BackToBasic.bas" disassembly.
From reading the souce I think, the users input is XORed with some data and then compared to 

    6klzic<=bPBtdvff'yFI~on//N

The flag we are looking for seems to be 27 characters long.

We do know that the first part will be `HV19{` and the last character `}`.

        6klzic<=bPBtdvff'y.FI~on//N
        HV19{.....................}

36 6b 6c 7a 69 63 3c 3d 62 50 42 74 64 76 66 66 27 79 7f 46 49 7e 6f 6e 2f 2f 4e

Location
    00401AE0 ; "insert your flag here"
corresponds
    00001ae0

=> offset +00400000

The whole thing running in xdbg64 was a nightmare and I gave up after many hours...

************ 
                        UNFINISHED !!!!!!!!!!
************ 
