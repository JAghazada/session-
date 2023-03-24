li>span{
        font-weight:600
    }
    .code{
        font-weight:600
    }
    .project-name{
        color:darkgreen;
        font-size:20px;
        font-weight:600;
}
# Project Name
<span class="project-name">Session Example</span>

#Project Description
This project is a basic web application that allows users to register, login, add items to their basket, and view their basket. Each user's basket is stored separately in a session using MongoDB and the Express-session package. The project is built with Node.js and Mongoose.

#Installation
To install this project, follow these steps:

Clone the repository to your local machine.
Run <span class="code">`npm install`</span> to install the required dependencies.
Create a <span class="code">`.env`</span>  file and add the required environment variables.
Start the server by running <span class="code">`npm run start`</span>.
Usage
Once the server is running, you can access the following routes:
<ul>
    <li><span>`POST /register`</span>: Register a new user.</li>
    <li><span>`GET /login`</span>: Login with an existing user.</li>
    <li><span>`GET /getbasket`</span>: Get the user's basket.</li>
    <li><span>`POST /updatebasket`</span>: Update the user's basket.</li>
</ul>

To use the application, register a new user or login with an existing user. Then, you can add items to your basket and view your basket.

Note that the login and signup functionality is not equipped with detailed error handling, as this project is only for learning purposes.

#Contributing
If you would like to contribute to this project, feel free to submit a pull request.

#License
This project is licensed under the MIT License.