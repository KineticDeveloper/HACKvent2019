# HV19.13 TrieMe

https://academy.hacking-lab.com/events/6/challenges/66

Todays challenge is about getting into a system to retrieve "critical information"

    http://whale.hacking-lab.com:8888/trieme/

There is a Java Source to analyze...

## Checking out the website

There are multiple hidden fields in the form:
```html
<form id="j_idt14" name="j_idt14" method="post" action="/trieme/faces/index.xhtml" enctype="application/x-www-form-urlencoded">
    <input type="hidden" name="j_idt14" value="j_idt14" />
    <input id="j_idt14:name" type="text" name="j_idt14:name" value="INTRUSION WILL BE REPORTED!" />
    <input type="submit" name="j_idt14:j_idt15" value="login" />
    <input type="hidden" name="javax.faces.ViewState" id="javax.faces.ViewState" value="-7353277628895621786:-5387205714516825451" autocomplete="off" />
</form>
``` 

The value of the "ViewState" is always changing upon reload.

Further there is a cookie beeing set

    JSESSIONID = FF1957E6152A26A2A3D84502D2C38A75

The URL to fetch the style sheet looks interesting:

    http://whale.hacking-lab.com:8888/trieme/faces/javax.faces.resource/style.css?ln=css

The response to this request returns the CSS but also a Header

    ETag: W/"205-1575875630000"


## Comming back after hours

After wasting a lot of time trying to decode the session state (ViewState parameter) or manipulate access to the CSS to fetch the data source, a hint was given that not so hard stuff is needed. Even non-Java programmer solved it ;-)

So I was investigating into how the input field is mapped/processed in `NotesBean.java`. As an administrator session is identified by the fact that the security token is not contained in the Trie, the goal must be to remove this security token from it.
But how could this be done? There is only a `put()` command executed with the content of the input field. But according to my investigations on documentations, the `put()` command will not erase a key. So how could I manipulate the existing entry?
By abusing the `unescapeJava()` method perhaps? Inserting escape sequences? But which? The list of escape sequences for Java from [StackOverflow](https://stackoverflow.com/questions/1367322/what-are-all-the-escape-characters#1367339) does not show interesting stuff. 
But there is a comment about Unicode escape sequences... So I'm investigating around what "text modifying character codes" which are in Unicode. I focus on [control codes](https://en.wikipedia.org/wiki/List_of_Unicode_characters#Control_codes)... but testing theses does not help at all.
After more hours of wasted time, I'm complaining in the HackVent Discord channel because I do not have an idea how to research information. Blindhero gave me a hint: combine anything strange/uncommon in the source with vulnerability in a google search.

    unescapeJava and vulnerability

This showed the following page:

    [How to unescape a Java string literal in Java?](https://stackoverflow.com/questions/3537706/how-to-unescape-a-java-string-literal-in-java)

In the response they highlight the deficiencies of unescapeJava(). Especially the problem with `\0`.
As soon as I appended this character sequence at the end of the input: `auth_token_4835989\0`
The solution flag appeared:

    HV19{get_th3_chocolateZ}
