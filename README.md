# EvoMyFirstProject

## Description

```text
The Readme.md contains instruction how to setup project and run tests.
```

#### GitHub repository

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

#### Make a project structure

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

#### Project confguration

Since the project will contain javascript functions and the tests as well, it is needed to add the testing library "JEST".

1. Add JEST as development dependency with the command:
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


5. 'babel.config.cjs' will be added to project structure after run:
yarn add --dev babel-jest @babel/core @babel/preset-env

```
  module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current'
          }
        }
      ]
    ]
  };
```


#### Add JavaScript functions

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

#### Tests run

- The tests are located in the "tests" folder in "rectangle.test.js" file.
- In case of adding new funkctions and tests, remember to export/import function.
- In case of adding new funkctions and tests, remember to add them using your own branch.
- In case of adding new funkctions and tests, remember to commit changes to the repository.

- To run tests:
    1. Navigate to the folder with test (VSC or Terminal);
    2. execute following command: "yarn test"
    3. Example of test executed:
    
       ```
       PASS  tests/rectangle.test.js
        √ Correct calculate rectangle perimeter (4 ms)
        √ Incorrect calculate rectangle perimeter
        √ Correct calculate rectangle area (1 ms)
        √ Incorrect calculate rectangle area (1 ms)
        √ Correct rectangle info (67 ms)
        Test Suites: 1 passed, 1 total
       Tests:       5 passed, 5 total
       Snapshots:   0 total
        Time:        3.709 s
      ```
