# IAESTE Workshop Web-dev-2021

Repository for IAESTE Workshop Web-dev-2021, contains the resources and solutions to the tasks given during the project.

# Tasks
 - Week 1 <br>
   <a href="https://github.com/IAESTE-LC-Manipal/Web-dev-2021/blob/main/Week1.md">HTML Basics - Portfolio</a>

# Instructions
 - Create a new branch with your name using the command `git checkout -b <branch-name>`, with branch name in format
 	`<first-name>"-"<last-name>`. eg.- `git checkout -b Sannyaa`.
 
 - All commits should be made to your own branch, Never commit to main. To prevent this always check what branch you're
   on before committing any changes, command to check current branch `git branch`, command to checkout(change to) a branch,
   `git checkout <branch-name>`.
 
 - To pull solutions after they are uploaded to master, change branch to master and do a git pull.  
 	`git checkout main`  
 	`git pull origin main`
 
 - Steps to submit your code.
 	* Add files to be committed using the command `git add .` (the "." after add means all files in the current directory will be added)
 	* Add a descriptive commit message for the same. Command- `git commit -m "<msg>"`.  
    Format - `Task #<task-no.> : description`. Mention any errors or issues in the code in the commit message, if any.
 	
  * Finally, push your code. command - `git push origin <branch-name>`
  

 ```shell
 git checkout -b Sannyaa
 git checkout Sannyaa	// to make sure you are in your own branch
 git add .	// adds all files and subfolders to be committed in the current directory
 git commit -m "Task #0: description"
 git push origin Sannyaa
 ```

 - All solutions will be uploaded to main.
