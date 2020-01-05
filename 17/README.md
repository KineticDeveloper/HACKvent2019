# HV19.17 Unicode Portal

https://academy.hacking-lab.com/events/6/challenges/87

After registering a dummy user I had access to santas authentication code `user.php`.

Here I've spotted the following "issues":

- the user `santa` is the only admin user (defined in `isAdmin` function)
- checking for an existing username in `isUsernameAvailable` uses `lower(username) = binary lower(usr)`
- registering an existing/duplicate user in `registerUser` is causing the update of its password if the `UPPER(usr)` matches an existing user.

So based on this knowledge I had to register a new user whose name is similar to santa, but which is not matching santa exactly.
From the "hint" in the challenges title and the fact that the whole portals topic is Unicode, I focused on finding a Unicode letter variant which is accepteed as "new" but is conflicting with the existing santa user. This allows me to override santas password and therefore login as admin.

The solution is

    HV19{h4v1ng_fun_w1th_un1c0d3}
