
# HV19.H2 Hidden Two

https://academy.hacking-lab.com/events/6/challenges/55

In [HV19.07 Santa Rider](../07/) we have downloaded a `HV19-SantaRider.zip` which was an MP4 file with a strange name. It's possible that the name could has a meaning... 

    3DULK2N7DcpXFg8qGo9Z9qEQqvaEDpUCBB1v

Firing up [CyberChef](https://gchq.github.io/CyberChef/) and trying `base64` does not work.  
But using `base58` we get the following solution

    HV19{Dont_confuse_0_and_O}


[CyberChef Recipe](https://gchq.github.io/CyberChef/#recipe=From_Base58('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',true)&input=M0RVTEsyTjdEY3BYRmc4cUdvOVo5cUVRcXZhRURwVUNCQjF2)