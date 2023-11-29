# playwright-test

## Install

to install run the command 

```sh
npm init playwright@latest
```

During installation it is possible to config paywright. 
The installation command will ask 4 questions:

✔ Do you want to use TypeScript or JavaScript? · TypeScript
✔ Where to put your end-to-end tests? · tests
✔ Add a GitHub Actions workflow? (y/N) · true
✔ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true

## VS Code plugin

An useful plugin to install is "Playwright Test for VSCode". 
This plugin gives many possibility. The main ones are:
 - debug the tests
 - show browser window during tests
 - record a new tests from a browser and convert it into code

### VS Code issue (MacOS)

A possible issue is in the "testing" tab of VSCode the tests are not showing in the test explorer after installing the plugin. 
If a simple restart of VSCode is not enough, to fix this issue is necessary to do the following steps:
- make sure VSCode is in the Application folder
- add to ~/.bash_profile, or to ~/.zshrc the line to add VSCode to PATH 
```
export PATH="$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"
```
- close VSCode if is open
- start a new terminal and navigate in the workspace folder
- launch the command "code ."