# HV19.H4 Hidden Four

https://academy.hacking-lab.com/events/6/challenges/74

For [HV19.14 "Achtung das Flag"](../14/) we have received a very strange flag as a result.

    HV19{s@@jSfx4gPcvtiwxPCagrtQ@,y^p-za-oPQ^a-z\x20\n^&&s[(.)(..)][\2\1]g;s%4(...)%"p$1t"%ee}

As strange as it sounds, this flag resembles a regular expression amd as the challenge is a programming challenge and the related HV19.14 was a perl program, we try to run above flag as a Perl program.

```bash
echo 's@@jSfx4gPcvtiwxPCagrtQ@,y^p-za-oPQ^a-z\x20\n^&&s[(.)(..)][\2\1]g;s%4(...)%"p$1t"%ee' | perl
```

Output is "Squ4ring the Circle", therefore the flag must be 

    HV19{Squ4ring the Circle}
