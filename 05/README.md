# HV19.05 Santa Parcel Tracking

https://academy.hacking-lab.com/events/6/challenges/44

Reading the barcode as it is shown with a barcode reader

![Santas Barcode](barcode.png)

    Not the solution

Splitting the `barcode.png` into raw RGB channels

```bash
magick barcode.png -separate channels_%d.png
convert channels_0.png channels_0.bmp
convert channels_1.png channels_1.bmp
convert channels_2.png channels_2.bmp
```

and looking at the 3rd channel shows an interesting pattern

```bash
hexdump -C channels_2.bmp
```

    00002b50  03 ff 03 34 03 ff 09 53  09 ff 06 38 03 ff 03 48  |...4...S...8...H|
    00002b60  09 ff 0c 56 03 ff 03 31  03 ff 03 39 06 ff 0c 7b  |...V...1...9...{|
    00002b70  03 ff 03 44 06 ff 06 31  03 ff 06 66 06 ff 06 66  |...D...1...f...f|
    00002b80  06 ff 03 69 06 ff 0c 63  03 ff 03 75 06 ff 03 6c  |...i...c...u...l|
    00002b90  06 ff 06 74 0c ff 03 5f  03 ff 03 74 03 ff 06 6f  |...t..._...t...o|
    00002ba0  06 ff 03 5f 0c ff 06 67  03 ff 06 33 06 ff 06 74  |..._...g...3...t|
    00002bb0  06 ff 03 5f 03 ff 0c 61  06 ff 03 5f 06 ff 03 53  |..._...a..._...S|
    00002bc0  09 ff 0c 50 03 ff 03 54  03 ff 06 5f 06 ff 03 52  |...P...T..._...R|
    00002bd0  03 ff 03 33 0c ff 03 61  06 ff 0c 64 06 ff 03 65  |...3...a...d...e|
    00002be0  03 ff 03 72 06 ff 0c 7d  03 ff 03 53 06 ff 03 31  |...r...}...S...1|
    00002bf0  0c ff 06 30 03 ff 03 39  06 ff 03 30 09 ff 0c 4f  |...0...9...0...O|
    00002c00  03 ff 03 4d 03 ff 06 5a  0c ff 03 45 03 ff 03 30  |...M...Z...E...0|
    00002c10  06 ff 09 45 03 ff 06 33  03 ff 09 4e 03 ff 06 46  |...E...3...N...F|
    00002c20  09 ff 09 50 03 ff 03 36  03 ff 06 45 1e ff 01 00  |...P...6...E....|
    00002c30  00 00 1e ff 06 58 03 ff  03 38 06 ff 09 59 06 ff  |.....X...8...Y..|
    00002c40  0c 49 03 ff 03 4f 03 ff  09 46 03 ff 03 30 03 ff  |.I...O...F...0..|
    00002c50  0c 5a 03 ff 09 50 03 ff  03 34 03 ff 09 53 09 ff  |.Z...P...4...S..|
    00002c60  06 38 03 ff 03 48 09 ff  0c 56 03 ff 03 31 03 ff  |.8...H...V...1..|
    00002c70  03 39 06 ff 0c 7b 03 ff  03 44 06 ff 06 31 03 ff  |.9...{...D...1..|
    00002c80  06 66 06 ff 06 66 06 ff  03 69 06 ff 0c 63 03 ff  |.f...f...i...c..|
    00002c90  03 75 06 ff 03 6c 06 ff  06 74 0c ff 03 5f 03 ff  |.u...l...t..._..|
    00002ca0  03 74 03 ff 06 6f 06 ff  03 5f 0c ff 06 67 03 ff  |.t...o..._...g..|
    00002cb0  06 33 06 ff 06 74 06 ff  03 5f 03 ff 0c 61 06 ff  |.3...t..._...a..|
    00002cc0  03 5f 06 ff 03 53 09 ff  0c 50 03 ff 03 54 03 ff  |._...S...P...T..|
    00002cd0  06 5f 06 ff 03 52 03 ff  03 33 0c ff 03 61 06 ff  |._...R...3...a..|
    00002ce0  0c 64 06 ff 03 65 03 ff  03 72 06 ff 0c 7d 03 ff  |.d...e...r...}..|


=> Yuppeee

    HV19{D1fficult_to_g3t_a_SPT_R3ader}