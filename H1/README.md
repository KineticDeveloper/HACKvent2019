
# HV19.H1 Hidden One

https://academy.hacking-lab.com/events/6/challenges/50

In HV19.05 there is an unused hint which can be copied.
Looking in detail at this hint, it has a lot of whitespaces at the end of each line.

Googling for a whitespace cipher shows the following tool

    stegsnow - whitespace steganography program

Available for ubuntu

Firing up my ubuntu I can decode the message using the command below:

    stegsnow -C hidden.txt

Result

    HV19{1stHiddenFound}