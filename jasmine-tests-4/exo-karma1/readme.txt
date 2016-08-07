This tutorial has been created to show you the basics of Karma

1/Install nodeJs
--------------------------------------------------------------------------------
2/Create an empty package.json with 
echo {} >> package.json
--------------------------------------------------------------------------------
3/Next we need to install the Karma tool via the NPM package manager:
npm install karma --save-dev
--------------------------------------------------------------------------------
4/it’s useful to install the karma-cli
npm install -g karma-cli
--------------------------------------------------------------------------------
5/install karma plug-ins to enable us to use the Jasmine test framework and Google Chrome as the target browser:
npm install karma-jasmine karma-chrome-launcher --save-dev
--------------------------------------------------------------------------------
5(b)/the package.json should have a new content
{
  "devDependencies": {
    "jasmine-core": "^2.3.4",
    "karma": "^0.12.31",
    "karma-chrome-launcher": "^0.1.12",
    "karma-jasmine": "^0.3.5"
  }
}
--------------------------------------------------------------------------------
6/Create a tests directory
--------------------------------------------------------------------------------
7/Create a new file tests/calculator.controller.test.js
--------------------------------------------------------------------------------
8/Create a configuration file for the Karma settings
karma init karma.conf.js
--------------------------------------------------------------------------------
>What is the location of your source and test files ?
tests/*.test.js
--------------------------------------------------------------------------------
9/Start Karma
karma start karma.conf.js
--------------------------------------------------------------------------------
10/A slight optimisation would be as follows : Updating the package.json file with
{
	"scripts": {
    "test": "karma start karma.conf.js"
  },
  "devDependencies": {
    "jasmine-core": "^2.3.4",
    "karma": "^0.12.31",
    "karma-chrome-launcher": "^0.1.12",
    "karma-jasmine": "^0.3.5"
  }
}
--------------------------------------------------------------------------------
 10/B So that we can type : "npm test" in the console to launch the test
--------------------------------------------------------------------------------
 11/
 mkdir app
touch app/calculator.controller.js
--------------------------------------------------------------------------------
12/
mkdir lib
curl -o lib/angular.min.js https://code.angularjs.org/1.4.0-rc.2/angular.min.js
curl -o lib/angular-mocks.js https://code.angularjs.org/1.4.0-rc.2/angular-mocks.js
--------------------------------------------------------------------------------
13/ in the Karma.conf.js file 

Replace this section:

files: [
 'tests/*.test.js'
],

With this section:

files: [
  'lib/angular.min.js',
  'lib/angular-mocks.js',
  'app/*.js',
  'tests/*.js'
],

--------------------------------------------------------------------------------

