
# HV19.08 SmileNcryptor 4.0

https://academy.hacking-lab.com/events/6/challenges/56

The `dump.sql` contains a table with encoded credit card numbers. 
From the hints it's clear that no encryption was used, but a strange mapping.

The smile `:)` can probably be ignored. We do know that any character has to map to the range of 0-9.
For example `QVXSZUVY\\ZYYZ[a` has ACII codes 81-97 which is bigger than 10.

From the numbers below it's visible that the (ASCII codes)[https://de.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange#ASCII-Tabelle] are increasing from right to left. 
So we suppose that the character position is influencing the mapping.
We have to find a simple mapping going from 81 (at position 0) to 97 (at position 14) to the new range 48-57 (='0' to '9').

    0 'Q' 81 51
    1 'V' 86 55
    2 'X' 88 56
    3 'S' 83 50
    4 'Z' 90 56
    5 'U' 85 50
    6 'V' 86 50
    7 'Y' 89 52
    8 '\\' 92 54
    9 'Z' 90 51
    10 'Y' 89 49
    11 'Y' 89 48
    12 'Z' 90 48
    13 '[' 91 48
    14 'a' 97 53

After playing around with the provided CCs (in `decode.js`) we find an constant offset of 30 and a character position related offset. 

With following JS script I can translate the flag:

```javascript
var cc = 'SlQRUPXWVo\\Vuv_n_\\ajjce'
var str = ""
let offset = 30
for(i=0; i<cc.length;i++) {
    let char_code = cc.charCodeAt(i)
    str += String.fromCharCode(char_code-offset-i)
}
console.log(cc,str)
```

The solution is

    HV19{5M113-420H4-KK3A1-19801}

