# EvoMyFirstProject
# Hometask: #project setup #unit tests #integration tests

```text
With this task you will go through the process of a project creation, setting up the basic structure for writing both code and tests.
```

#### Task 1: GitHub repository

Go to your personal GitHub accocunt and create a new repository. 
By opening the corresponding page 'github.com/new' you will need to specify the following parameters in order to create a project:

```text
- Repository name
- Description (optional)
- Make a 'Public' repository
- Add a README file - yes
```

When all the parameters are filled in, hit the button 'Create repository'. Repository should be created.
After completing all the steps mentioned above, you need to clone the newly created repository to our local machine. 

#### Task 2: Make a project structure

1. Open terminal and navigate to the project root
2. Initialize the project with the following command 'yarn init'. You will go through a set of basic questions as shown in an example below

```json
{
  "name": "hometask-project-set-up",
  "version": "1.0.0",
  "description": "This is my first project",
  "main": "index.js",
  "author": "rsledevskis",
  "license": "MIT"
}
```

3. Check that the 'package.json' has been created and added to the repository
4. Add the following files and folders to your project
- 'README.md' file
- '.gitignore' file
- 'js' folder 
- 'tests' folder 

So far the project structure should look like this:

```text
project_name
    - js (folder)
    - tests (folder)
    - .gitignore (file)
    - package.json (file)
```

#### Task 3: Project confguration

Since the project will contain javascript functions and the tests as well, it is needed to add the testing library, that we have discovered so far "JEST".

1. Let's add JEST as development dependency with the command:
- Open https://jestjs.io/docs/getting-started
- Copy the command 'yarn add --dev jest'
- Execute the command from the repository root
2. Check the 'package.json' file if the dev dependency was added

```json
  "devDependencies": {
    "jest": "^29.2.2"
  }
```
3. 'package.json' file should be updated with the the command, which will trigger test execution

```json
  "scripts": {
    "test": "jest"
  }
```

4. The following text lines should be added to the '.gitignore' file.

**A gitignore file specifies intentionally untracked files that Git should ignore.**

During development inside the project can appear files, that shouldn't be tracked by git, because they are generated automatically by different reasons e.g. code editor, node, frameworks, etc. Thet are not affecting the code, but they are updating constantly, which forces you manually skip them during commit, so it can be easily skipped by adding them to .gitigore.

```text
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Dependency directories
node_modules/

#IntelliJ
.idea
```

Add above mentioned text part into the .gitignore file

#### Task 4: Add JavaScript functions

- Add '.js' file inside the 'js' folder. Name it 'rectangle.js'
- Add the following functions: 

```javascript
function getRectanglePerimeter(length, width) {
    return 2 * (length + width);
}

function getRectangleArea(length, width) {
    return length * width;
}

function getRectangleInfo(length, width) {
    const area = getRectangleArea(length, width);
    const perimeter = getRectanglePerimeter(length, width);
    return console.log(`The perimeter of a rectangle is ${perimeter} and the area is ${area}`)
}
```

#### Task: 5 Tests, README, commit -> push -> merge

Until this part all of the instructions were pretty detailed in order to make a proper project structure and some basis to start to do something inside the repository. Starting from here you will need to finish the project tasks by yourself. What needs to be done:

- Create a tests file and write tests for the functions provided in the 'rectangle.js' file
- You need to write at least one test for each function to verify the 'happy path'
- Write an instruction in the 'README.md' file how to install the project and run the tests
- Once all mentioned above is done, commit and push the changes to your repository. Do not forget to merge it
- When all is done. Write an e-mail to 'rsledevskis@evolution.com'

```text
To: 'rsledevskis@evolution.com'
Subject: Hometask: [Name] [Surname]
Body: [Link to your github repository]
```

