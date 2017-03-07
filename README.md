## Basic API Definition With Express
Express framework initializer is very handy to create our example. To make use of it simply install it from npm. This will create express executable under _/usr/bin/_
``` bash
npm install express-generator -g
```
Usage of express generator is also very easy. Execute the below command after installing express-generator and this will create the folder structure for you and some samples included to start your web application directly.
``` bash
express firstapi
```
In this post, I am concentrating on API, so I haven't provided a view engine for express. If I like to than all I need to do is call express like ``` express ---view=pug firstapp ``` for pug view engine. I am planning to write another post for pug engine also but for now lets go back to our first web api with NodeJS and Express.  

After executing the above command, it will create a folder called _'firstapp'_. Go to that directory and install the dependencies.
``` bash
cd firstapi
npm install
```
