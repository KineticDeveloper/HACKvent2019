# HV19.06 bacon and eggs

https://academy.hacking-lab.com/events/6/challenges/47

After googling we found out about [bacon cipher](https://en.wikipedia.org/wiki/Bacon%27s_cipher) in which two typefaces are used to encode a hidden message with a binary alphabet.
The text is written in two type faces: italic and normal.

    A 00000
    B 00001
    C 00010
    D 00011
    E 00100
    F 00101
    H 00111
    I 01000
    K 01010
    L 01011
    M 01100
    N 01101
    O 01110
    P 01111
    R 10001
    S 10010
    T 10011
    U 10100
    V 10101
    W 10110
    X 10111

I interpreted italic characters as `1` and non-italic as `0`. The text had to be transformed to ones and zeros. Leading to a message

    SANTALIKESHISBACONBUTALSOTHISBACONTHEPASSWORDISHVXBACONCIPHERISSIMPLEBUTCOOLXREPLACEXWITHBRACKETSANDUSEUPPERCASEFORALLCHARACTER

More readable with added spaces:

    SANTA LIKES HIS BACON BUT ALSO THIS BACON THE PASSWORD IS HVXBACONCIPHERISSIMPLEBUTCOOLX REPLACE X WITH BRACKETS AND USE UPPERCASE FOR ALL CHARACTER

Resulting in

    HV{BACONCIPHERISSIMPLEBUTCOOL}