# Emotions in Motion ~ A comment creator for the Soul.
This repository serves as a special API that creates multiple
comments. It allows users to register and create comments as they wish as well
as an additional special feature of liking an unliking comments.
This API allows users to perform CRUD actions to their created comments.
## Planning Story
In the beginning I decided to challenge myself by using the React Authentication
Template and the Express API Template for this project. It is a project that I
am very passionate about. In order to understand what I had to do to make this
project come alive, I decided to start with the backend first. I had to devise
model schemas that focused on comments, likes, and the user. I knew this would
not be an easy task. I knew that the comment, like, along with the user schemas
that consists of an email, a hashed password, and token all had to have a many
to many relationship. The next thing on my agenda was to attach the correct
routers. My routes consisted of comment routes, like routes, and user routes.
Next, I created comment curl scripts that consisted of create, read, update and
destroy actions. Lastly, I worked on the server end making sure to create the
right connections between all the files. I also made sure to have the correct
middleware in app.use to match the required routes, handler, token and logger to
ensure that my server was always listening to its server devport.
## Tecnologies Used
-   HTML
-   JavaScript
-   CSS/Sass
    +   Flexbox
    +   Bootstrap
-   Mongodb
    +   Express
    +   Cors
    +   Mongoose
-   Axios
-   JSX
#### Links
-   Deployed Front-End:
-   Deployed Back-End: <https://emotions-in-motion-api.herokuapp.com/>

-   Front-End Repository Link: <https://github.com/Max-spec007/Emotions-in-Motion-client>
-   Back-End Repository Link: <https://github.com/Max-spec007/Emotions-in-Motion-api>
## Technical Details
 #### User Account
-   Users have the ability to create brand new accounts in order to login.
-   Users have the ability to change their passwords at anytime or to be able
    to sign out as well.
-   Users have the ability to create a new comments.
-   Users have the ability to see all of their made comments.
-   Users have the ability to edit one of their comments.
-   Users have the ability to delete one or all of their made comments.
## Image
#### ERD Wireframe
![](https://media.git.generalassemb.ly/user/30432/files/2bfa6f00-1838-11eb-8659-9db2f1e0725a)
## User Stories
-   As an unregistered user, I would like to sign up with email and password.
-   As a registered user, I would like to sign in with email and password.
-   As a signed in user, I would like to change my password.
-   As a signed in user, I would like to sign out.
-   As an unregistered user, I would like to see all comments
-   As a signed in user, I would like to create my own comments.
-   As a signed in user, I would like to update my own comments.
-   As a signed in user, I would like to delete my own comments.
## API Endpoints
#### Authentication
| Verb   | URI Pattern            |
|--------|------------------------|
| POST   | `/sign-up`             |
| POST   | `/sign-in`             |
| DELETE | `/sign-out`            |
| PATCH  | `/change-password`     |

| Verb   | URI Pattern            |
|--------|------------------------|
| GET    | `/comments`            |
| GET    | `/comments/:id`        |
| POST   | `/comments`            |
| PATCH  | `/comments/:id`        |
| DELETE | `/comments/:id`        |
| POST   | `/likes`               |
| DELETE | `/likes/:id`           |

All data returned from API actions is formatted as JSON.
## Unsolved Problems/Strived Goals
For future iterations of the comment Api creator, I would like to add more
features such as having one or more users having the ability to comment on other
users comments. Ensuring the comments created are appropriate and meet the
wesites standards.
## Installation
- Fork and clone this repository.
- Create and checkout to a new branch, training, for your work.
- Install dependencies with `npm install`.
- Ensure that you have nodemon installed by running `npm install -g nodemon`.
- Ensure the API is functioning properly by running `npm run server`.
- Lastly, open a new tab in the terminal window and open the repository in Atom
  with the command of `atom .`
