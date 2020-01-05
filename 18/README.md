# HV19.18 Dance with me

https://academy.hacking-lab.com/events/6/challenges/90

The ZIP file `HV19-dance.zip` seems to contain an debian binary archive. According to a quick google search these archives are "regular unix archives", so `ar` can be used to access the content.

```bash
ar x dance
```

It contains: 

- `debian-binary` which contains the debian archive version `2.0`
- `control.tar.gz` which contains a description of the package `com.hacking-lab.dance` indicating that it is for `iphoneos-arm` architecture
- `data.tar.lzma` containing the LZMA compressed binary (which probably could be run on a jailbroken iPhone). This file could be extracted using `tar -x --lzma -f data.tar.lzma` and contains `/usr/bin/dance`.

This binary `dance` is a 
    Mach-O universal binary with 3 architectures: [arm_v7:Mach-O executable arm_v7] [arm64:Mach-O 64-bit executable arm64] [arm64e:Mach-O 64-bit executable arm64e]

It probably has to be reverse engineered with Ghidra.

************ 
                        UNFINISHED !!!!!!!!!!
************ 
