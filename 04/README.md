# HV19.04 password policy circumvention

https://academy.hacking-lab.com/events/6/challenges/42

In this challenge we have been given a [HV19-PPC.ahk](HV19-PPC.ahk) file which is a language/script for AutoHotkey... a Windows tool.

I've tried to translate the original password manually from

    merry christmas geeks

to the derived password

    HV19{R3herm3m, ber3r-e    theDecte 0fmbec}

but it was obviously not valid.

A friend had access to a Windows machine, could install the AutoHotkey application and was then able to generate the proper solution:

    HV19{R3memb3r, rem3mber - the 24th 0f December}

