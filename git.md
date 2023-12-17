# GIT AND GITHUB
Git is an open-source distributed version control system designed for tracking changes in source code during software development. <br>
GitHub is a platform built around Git that offers various collaboration features.

## GIT Commands
List of Git Commands :

1. **git init** : To initialize an empty git repository <br>
	- ```
	  git init <repo name>
	  ```

2. **git status** : Shows the working tree status. Shows modified changes that are yet to be committed. If all files are committed then working tree is clean <br>
	- ```
 	  git status
	  ```

3. **git add** : It adds files that are not committed yet to the staging area

	- ```
	  git add <filename> 
	  ```
	 
	- ```
	  git add . (To add all the unstaged files)
	  ```

4. **git commit** : To commit all the changes made to a file. Commit serves as savepoints in a project allowing you to track progress and revert if needed

	- ```
 	  git commit -m “ Commit Message”
	  ```

5. **git restore** : To remove a file from the staging area or to discard the changes made in the last commit

	- ```
	  git restore — — staged <filename>
	  ```

6. **git log** : To display all the commits made in a repository

	- ```
	  git log
	  ```

7. **git reset** : Resets the repository to a previously specified commit

	- ```
 	  git reset <commit id>
	  ```


8. **git stash** : Saves the current changes made to a file without committing them

	- ```
	  git stash
	  ```

	- **git stash pop** : To retrieve the stashed changes

	- **git stash clear** : Removes all the files in your stash history

9. **git remote** : Allows you to manage connections with your remote repositories

	- ```
	   git remote add <remote-name> <remote-url>
	  ```

10. **git push** : Command to push a local branch to your remote repository

	- ```
	  git push origin <branch name that you want>
	  ```

11. **git branch** : Since its is not advisable to directly commit on the master branch we create a new branch to make new changes.

	- ```
	  git branch <branch name>
	  ```

12. **git checkout** : Navigates to that branch and all changes and commits are made in that branch. These commits are not visible in the master branch unless we push it.

	- ```
	   git checkout <branch name>
	  ```
## Forking Repositories

Forking allows us to copy the source code of a public repository locally and make changes in that. The changes made will not be visible in the repository. The repository that has been forked is called the upstream repository. Once we fork a repository it will be available in our GitHub account and we can make changes in that. <br>

Forking can be done using the following command : <br>
```
git clone <url of repo to be cloned> 
``` 
or just by clicking on fork in GitHub account.

## Pull Request

After making changes in a forked repository a pull request can be created to the original repository to merge your changes into it. If your pull request gets accepted then your code will be visible on the main repo to everyone contributing to that repo.

## Squashing Commits
Merging all commits into a single commit
You can squash commits using the following command: <br>
```
git rebase -i <commit id> : 
```
Allows you to modify,squash or reorder commits

## Merge Conflicts

Merge conflicts occur when Git cannot automatically resolve code differences between two commits.Merge conflicts can be resolved manually.


