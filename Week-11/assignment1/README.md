EXPLAINING THE DEPLOYMENT OF REACT APPLICATION TO THE CLOUD SERVER

In this Assignment, I have deployed URL shortener application which is "shortlyurlapp" to a "heroku" cloud server.

Steps and commads to deploye shortly app on the cloud:- 
1. Install the Heroku CLI
2. then open "shortly" project in vs code then open terminal in vs code
3. in terminal gotp the project folder, in my case that folder is "shorltyapp"
4. then write command "heroku login" to login the heroku
5. then you get message
   heroku: Press any key to open up the browser to login or q to exit: 
6. then press any key other then "q"
7. then browser will open with heroku website where you have to click on "login" button
8. then you will be logedin heroku and will get message in terminal
   Logging in... done
   Logged in as vinit91.dev@gmail.com
9. then write command 
   "git init"
10. then you get message:-
   Reinitialized existing Git repository in C:/Users/vinit sharma/Desktop/shortly/shortlyapp/.git/
11. then write command "git add ." to stage the project
12. the write command "git commit -am "your commit message come here"" to do the first commit to heroku
13. then write command "git push heroku master" to submit the project to the heroku. after this command it will take a while to submit project to the heroku then it will give the message of succecful project submission like below
    remote: -----> Build succeeded!
    remote: -----> Discovering process types
    remote:        Procfile declares types     -> (none)
    remote:        Default types for buildpack -> web
    remote:
    remote: -----> Compressing...
    remote:        Done: 65M
    remote: -----> Launching...
    remote:        Released v3
    remote:        https://shortlyurlapp.herokuapp.com/ deployed to Heroku
    remote:
    remote: Verifying deploy... done.
   
   

14. then in above message url is given of shortlyapp and that url is:-
https://shortlyurlapp.herokuapp.com/

just copy and paste the url into the web browser then you can access the shortly app
