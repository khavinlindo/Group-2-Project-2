The requirements for Project #2 are as follows:

Must use a Node and Express Web Server
Must be backed by a MySQL Database with a Sequelize ORM
Must have both GET and POST routes for retrieving and adding new data
Must be deployed using Heroku (with Data)
Must utilize at least one new library, package, or technology that we haven’t discussed
Must have a polished frontend / UI
Must have folder structure that meets MVC Paradigm
Must meet good quality coding standards (indentation, scoping, naming)
Must not expose sensitive API key information on the server, see Protecting-API-Keys-In-Node.md


Instructions: 
* One group member should create a new Github repo for the project.
* Protect the repo's master branch as we did during project 1.
  * Once at the repo's page, click the "Settings" tab.
  * Select "Branches" from the left sidebar.
  * Under "Branch protection rules", choose "master" from the dropdown.
  * Check off the following options:
    * "Protect this branch"
    * "Require pull request reviews before merging"
    * "Include administrators"
    * "Require status checks to pass before merging"
    * "Require branches to be up to date before merging"
  
  * Click "Save changes"
* Once complete, invite the other group members as collaborators.
* Upon creation of your repository, we would like you and your group to then create a Heroku application and connect your GitHub Repository for automatic deployment.
  * We have created a written guide and video guide on how you can link your GitHub Repo to your Heroku Application for continuous deployment which your instructor will provide.
* Once connection is complete, link your Heroku Applications live link to your TAs.

=====================================================
DB Tables

1: Grocery List -- ID, Item, Catagory
    catagories -- 1) produce 2) meats, 3) dairy, 4) dry goods, 5) non-grocery
2: Task List -- ID, Task, Priority
    urgency -- 1) Top Priority, 2) Done Today, 3) This Week
3: Calendar 
4: Notes -- ID, Note, Author

=====================================================
Views

Grocery
  all
  by catagory

Task
  all
  by urgency

Notes
  all
  by author
