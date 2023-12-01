# playwright-test

## Install

to install run the command 

```sh
npm init playwright@latest
```

During installation it is possible to config paywright. 
The installation command will ask 4 questions:

- ✔ Do you want to use TypeScript or JavaScript? · TypeScript
- ✔ Where to put your end-to-end tests? · tests
- ✔ Add a GitHub Actions workflow? (y/N) · true
- ✔ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true

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

## Record a test

To record a test og in the "Testing" section of VSCode and press "Record New".
A blank chromium tab will be opened and a new test file will be created in the tests/ folder.

The tab has 4 buttons on top. From left to right:
- a "Record" red dot: this will stop the recording
- Pick locator: will get the element identificator in the page. This is considered a best prectise in order to write end to end tests finding elements on the webpage. For more check the docs [Best Practises](https://playwright.dev/docs/best-practices)
- Assert visibility: will add an assertion to check the element visibility
```js
  await expect(page.locator('div').filter({ hasText: /^Account email$/ }).locator('div')).toBeVisible();
```
- Assert Text: will add an assertion to check the presence of the element that contains a specific text. A text area will popup to specify the text for the condition
```js  
  await expect(page.locator('form')).toContainText('Account email');
```
- Assert Value: will add an assertion to check the presence of the element with a specific value (or empty)
```js
  await expect(page.getByTestId('signin-email')).toBeEmpty();
```

### Record at cursor

If we need to add a single assertion on a page we can simply use the "Record at cursor" functionality which will add only a single assertion or action.
It can be usefult to add asertions or action to an already existing test without creating a new one.