
# HV19.10 Guess what

https://academy.hacking-lab.com/events/6/challenges/60

There is a binary file to download. According to `file guess` I have to run it on Linux or have to disassemble it.

    guess: ELF 64-bit LSB pie executable, x86-64, version 1 (SYSV), dynamically linked, 
    interpreter /lib64/ld-linux-x86-64.so.2, BuildID[sha1]=49c9aa78f42d91d24c2f4cfb4a5f8f6571b8ac8e, 
    for GNU/Linux 3.2.0, stripped

Running it under Ubuntu gives the following output

    ./guess3 
    Your input: ...
    nooooh. try harder!

Doing an `ltrace -o ltrace.txt ./guess3` generates calls to `strlen("HV19...`.

    strlen("HV19{Sh3ll_0bfuscat10n_1s_fut1l3"...)                                               = 34

The flag must be `HV19{Sh3ll_0bfuscat10n_1s_fut1l3}`

Testing the application with this input, reveals "success":

    Your input: HV19{Sh3ll_0bfuscat10n_1s_fut1l3}
    success