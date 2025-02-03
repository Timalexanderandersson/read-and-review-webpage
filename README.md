# Read & Review

This is Read & review it is a fullstack project. The website is for people who enjoy reading and who love to share and to get the thougths of recently read books. Or to just discover books that you have not read yet. you can post reviews on the website , and connect with others on the site!
Its made with React and Django REST, and bootstrap.
[Read & Review here!](https://read-and-review-bdeebdc26c44.herokuapp.com/)
![alt text](src/assets/minbilf.PNG)

## Read & Review - - Table Content

- [Planning the project](#Planning)
- [Wireframes](#wireframes)
- [Agile methodology](#Agile-methodology)
- [Website Features](#Features)
- [To be features](#to-be-features)
- [backend](#django-rest)
- [Installed Libraries](#installed-libraries)
- [Technical Stack](#technical-stack)
- [Testing](#testing)
- [Validation](#validation)
- [Testing in React](#testing-in-react)
- [Bugs](#bugs)
- [Deployment](#deployment)
- [Credits](#credits)
- [Acknowledgements](#acknowledgements)

# Planning

### User stories om github

<details>
<summary>User story stack</summary>
<br>
<img src="src/assets/userstoryyyyys.PNG">
</details>

- Here is all the user storys made for this project. from the django rest back end to React front end planning.

[User story github](https://github.com/users/Timalexanderandersson/projects/11)

## Wireframes

Here is all the wireframe created for desktop and mobil format.
except for profiles. which is not included in this project yet.
and the rating system, since i did not have the time before deadline.

## Mobile

Here is the wirefram for mobile.

- here user can see new posts on the page and intro for the webpage.
<details>
<summary>Front page.</summary>
<br>
<img src="src/assets/mobil-frontpage.PNG">
</details>

- sign in for user with password and username.
<details>
<summary>Sign in.</summary>
<br>
<img src="src/assets/mobile-sign-in.PNG">
</details>

- Registration for user with input for password and username.
<details>
<summary>Registration.</summary>
<br>
<img src="src/assets/mobile-register-account.PNG">
</details>

- inside post/sign in, user can comment on post, and delete, comment.
- made with component in react.
<details>
<summary>Inside post sign in.</summary>
<br>
<img src="src/assets/mobile-post-signin-edit.PNG">
</details>

- visitor can not comment on the post.
<details>
<summary>Inside post logged out.</summary>
<br>
<img src="src/assets/mobile-post-not-signin.PNG">
</details>

- here the visitor/user can find new uploaded posts.
<details>
<summary>explore-page.</summary>
<br>
<img src="src/assets/mobile-explore-page.PNG">
</details>

- user can edit the post.
<details>
<summary>Edit post.</summary>
<br>
<img src="src/assets/mobil-edit-post.PNG">
</details>

- user can post a review on to the website.
<details>
<summary>Add post</summary>
<br>
<img src="src/assets/mobil-add-review-post.PNG">
</details>

- Dropdown for user to find links in navigation field.
<details>
<summary>dropdown</summary>
<br>
<img src="src/assets/dropdown-mobile-links.PNG">
</details>

## Desktop

- here user can see new posts on the page and intro for the webpage.
<details>
<summary>front page</summary>
<br>
<img src="src/assets/desktop_frontpage.PNG">
</details>

- here the visitor/user can find new uploaded posts.
<details>
<summary>explore-new</summary>
<br>
<img src="src/assets/desktop-explorepage.PNG">
</details>

- user can post a review on to the website.
<details>
<summary>Add post</summary>
<br>
<img src="src/assets/desktop-add-review-site.PNG">
</details>

- user can edit the post.
<details>
<summary>Edit post</summary>
<br>
<img src="src/assets/desktop-edit-post.PNG">
</details>

- sign in for user with password and username.
<details>
<summary>Sign in</summary>
<br>
<img src="src/assets/desktop-signin.PNG">
</details>

- Registration for user with input for password and username.
<details>
<summary>Registration</summary>
<br>
<img src="src/assets/desktop-signin.PNG">
</details>

- inside post/sign in, user can comment on post, and delete, comment.
- made with component in react.
<details>
<summary>Inside post</summary>
<br>
<img src="src/assets/desktop-post-signin.PNG">
</details>

- visitor can not comment on the post.
<details>
<summary>post not sign in </summary>
<br>
<img src="src/assets/desktop-inside-post.PNG">
</details>

# Agile methodology

Was using Agile methodology while working on the project Read & Review. which worked good, following the user storys and checking them of one by one. making sure they was living up to acceptance criteria.

#### the 3 steps in the user story.

#### To Do

When the user story is created.

#### In Progress

When the user story is in progress to get done.

#### Done

When the user story is done.

### Diagram for models

<details>
<summary>Diagram models comment </summary>
<br>
<img src="src/assets/Comments-model.PNG">
</details>

<details>
<summary>Diagram models post </summary>
<br>
<img src="src/assets/models-post.PNG">
</details>

- lucid.app to create the diagrams

# Features

### navbar

- in the navbar if logged in(explore-page, add-review, signout, homepage )
- if sign out (sign in, explore-page, register, and homepage. )
<details>
<summary>navbar desktop</summary>
<br>
<img src="src/assets/navbardesktop.PNG">
</details>

<details>
<summary>mobile navbar</summary>
<br>
<img src="src/assets/mobilnavbar.PNG">
</details>

### Footer

- In the footer you have links and a text for following our pages on social media. (instagram, youtube, facebook)
<details>
<summary>footer mobil/desktop</summary>
<br>
<img src="src/assets/foooooter.PNG">
</details>

### Contact page

- This page contains a form if visitor/user want to contact the owner of the page.
- Need to fill in the name, email, and alternativ in a dropdown, and then a description about it.

<details>
<summary>Contact desktop</summary>
<br>
<img src="src/assets/froncontactpage.PNG">
</details>

<details>
<summary>Mobile Contact</summary>
<br>
<img src="src/assets/mobilecontact.PNG">
</details>


### frontpage

- Frontpage include a list of 4 of the new add reviews posts. and short intro for the webpage.
<details>
<summary>Frontpage desktop</summary>
<br>
<img src="src/assets/frontpageeee.PNG">
</details>

<details>
<summary>mobile frontpage</summary>
<br>
<img src="src/assets/desktopp.PNG">
</details>

### add-review and edit.

- add-review includes (title, description, and image-upload, and button for creating the post)
- edit include the samethings and contains the information since created.
<details>
<summary>add review desktop/mobil</summary>
<br>
<img src="src/assets/creating.PNG">
</details>

### posts page and comment.

- post shows all the information the user put out. and give users a comment section for commenting.
<details>
<summary>post desktop/mobil sign in</summary>
<br>
<img src="src/assets/postcomment.PNG">
</details>
<details>
<summary>post desktop/mobil sign out</summary>
<br>
<img src="src/assets/notsignin.PNG">
</details>

### explore page.

- contains all the new post with short description on all.
<details>
<summary>explore desktop/mobil </summary>
<br>
<img src="src/assets/exploreeee.PNG">
</details>

### Register.

- Register for user so they can get access to the website.
<details>
<summary> desktop/mobil </summary>
<br>
<img src="src/assets/register.PNG">
</details>

### Sign in.

- sign in for user who already have an account.
<details>
<summary> desktop/mobil </summary>
<br>
<img src="src/assets/signin.PNG">
</details>

# To be features

- planning on making a profile page with an bio for information.
- and rating system with stars.
- and be able to comment on others comments.

# Django Rest backend

[Django rest API](https://github.com/Timalexanderandersson/Read-review-Django-API)

[heroku live](https://read-review-django-api-b8922a0fef0a.herokuapp.com/)

# Installed Libraries

**@testing-library/dom**

**testing-library/jest-dom**

**testing-library/react**

**testing-library/user-event**

**types/react-dom**

**types/react**

**axios**

**bootstrap**

**jest**

**jwt-decode**

**msw**

**nsw**

**react-bootstrap**

**react-dom**

**react-router-dom**

**react-scripts**

**react**

**util**

**web-vitals**

 ## devDependencies (Testing)
  
  **babel/core**

  **@babel/plugin-proposal-private-property-in-object**

  **@babel/plugin-syntax-jsx**

  **@babel/preset-env**

  **@babel/preset-react**

  **@babel/preset-typescript**

  **@testing-library/dom**

  **@testing-library/jest-dom**

  **@testing-library/react**

  **@types/react**

  **@types/react-dom**

  **babel-jest**
  
  **jest**

  **msw**

  **nsw**


# Technical Stack

- React: framework for frontend.
- CSS: style the site.
- Bootstrap.js: style the website.
- Gitpod: development
- Git: version control
- Heroku: for deploying front-end.

# Testing

### Lighthouse

#### Desktop Lighthouse testing

<details>
<summary>Desktop results</summary>
<br>
<img src="src/assets/desktoplighthouse.PNG">
</details>

#### Mobile Lighthouse

<details>
<summary>Mobile results</summary>
<br>
<img src="src/assets/desktoplighthouse.PNG">
</details>

## Validation

- W3C validator shows.
  ![alt text](src/assets/nohtmllll.PNG)

- W3C jigsaw.
  ![alt text](src/assets/csss.PNG)

- JSHint on all pages.
  ![alt text](src/assets/deletecomment.PNG)

- CI python Linter
- tested in all serializers and views.
  ![alt text](src/assets/dawdawdawd.PNG)

## Testing in React.

| Status  | **Delete post - Post deleted getting 204 status in Editpostpage.test.js**                            |
| :-----: | :----------------------------------------------------- |
| &check; | Deleted post (status code 204). |

| Status  | **Registration status - When registrated getting 201 status in Signup.test.js**                           |
| :-----: | :------------------------------------------------------------- |
| &check; | Registration submit getting (status 201).|

| Status  | **Navbar - When User not Sign in. NavBar.test.js**                           |
| :-----: | :------------------------------------------------------------- |
| &check; | User not sign in(Home, Explore now, Sign in, Register, Contact).

| Status  | **Navbar - When Sign in. NavBar.test.js**                           |
| :-----: | :------------------------------------------------------------- |
| &check; | User Sign in (Home, Explore now, Sign out, Add review, Contact).


| Status  | **Create post - button is there in the add review Editpostpage.test.js**                                     |
| :-----: | :----------------------------------------------------------- |
| &check; | The "Create post" button on Editpostpage.test.js |

## Bugs

#### No bugs found inside the project.

### unsolved bugs

#### None.

## Deployment

### Create project repository github

Log in to **GitHub** then navigate to **Code institute template** for making the project. 

[Code institute template ](https://github.com/Code-Institute-Org/ci-full-template).

![starttemplet](src/assets/githubtemp.PNG)

Click on the **"Use this template"** on rigth side of the page, and then press the **"Create a new repository"**

![repository](<src/assets/skapa ny.PNG>)

Creating a descriptive project name in the **"Repository name"** field. In the Public/Private section choose Public.
Then click **"Create Repository"**.

![allneeded](<src/assets/allt desista.PNG>)

### Create heroku app

Login to the **heroku platform**.

Navigate to the dropdown bar to the right of the website(New) on the homepage, choose to **"Create new app"**

<details>
<summary> <strong>New</strong></summary>
<br>
<img src="src/assets/skapanyappheroku.PNG">
</details>
<details>
<summary> <strong>Create app</strong></summary>
<br>
<img src="src/assets/härskapar.PNG">
</details>


Give the app a project name, and choose the location you are in(Eu/US).
<details>
<summary> <strong>Us/Eu</strong></summary>
<br>
<img src="src/assets/skapadennyyy.PNG">
</details>

Then press **"Create app"**

### deploy heroku application

Navigate to **"Deploy"** section between the **"Resources"** and **"Metrics"**.

<details>
<summary> <strong>Navigate to Deploy and adding github repository</strong></summary>
<br>
<img src="src/assets/deployeengit.PNG">
</details>

Go to **Deployment method** and choose the **Github** and connect to your Repository project.


Go down to **"Manual deploy"** section and press the **"Deploy Branch"**.

<details>
<summary> <strong>Deploy Branch</strong></summary>
<br>
<img src="src/assets/längstnerepåsidan.PNG">
</details>

## Credits

### Help from websites.

- cloudinary.com for uploading pictures.
- https://www.pexels.com/ for pictures.
- https://www.geeksforgeeks.org
- how-to-setup-404-page-in-react-routing/ 404 page.
- https://stackoverflow.com/questions/3715047/
- how-to-reload-a-page-using-javascript
- code institute project for Django REST framework.
- and moments project from code institute for help with my React.
- https://www.w3schools.com/
- https://favicon.io/favicon-converter/ för favicon
- google font Crimson Text
- https://stackoverflow.com/questions/43692479/how-to-upload-an-image-in-react-js
- [cooler](https://coolors.co/) website for colors on the website.
  https://www.youtube.com/watch?v=IYCa1F-OWmk
- balsamiq for making wireframe.
- lucid.app for making my models.
- https://www.kindacode.com/article/react-removing-items-from-a-list#google_vignette
- https://developer.mozilla.org/en-US/docs/Web/API/File/name finding file Name
- https://github.com/testing-library/jest-dom/issues/202
- https://archive.jestjs.io/docs/en/22.x/mock-function-api#mockfnmockresolvedvaluevalue
- https://testing-library.com/docs/react-testing-library/intro/
- https://altcademy.com/blog/how-to-write-data-in-json-file-using-reactjs/
- https://www.freecodecamp.org/news/how-to-persist-a-logged-in-user-in-react/


## Acknowledgements

- and thanks my mentor Spence for help with guidance with my project.
