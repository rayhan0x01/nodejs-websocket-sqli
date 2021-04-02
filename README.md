# NodeJS WebSocket SQLi vulnerable WebApp

A one-day build of a vulnerable WebSocket app on NodeJS to practice boolean based SQLi over WebSocket. 

I made this for others to learn and automate SQLi over WebSocket, additionally an input box is added to the homepage to quickly test out a query. Here are some exercises for practice:

* Try dumping some data from the DB through the input box on the homepage.
* Build a script to automate dumping data via boolean-based blind SQLi over WebSocket.
* Build a script to automate dumping data via Time-based blind SQLi over WebSocket.
* Build a middle-ware HTTP Server script to relay SQLMap payloads to WebSocket.

Check my blog post where I have shared the last exercise here: https://rayhan0x01.github.io/ctf/2021/02/17/Tale-of-exporting-a-custom-CLR-assembly-DLL.html?v=2


## Run

1. run : `docker-compose up`
2. visit : http://localhost:8156/


## ScreenShots

![](screenshots/1.png#center)

![](screenshots/2.png#center)

