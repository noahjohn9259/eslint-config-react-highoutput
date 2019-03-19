# Installation
1. We need to install everything needed by the config:
```
$ npx install-peerdeps --dev eslint-config-react-highoutput
```
2. All the dependecies will be installed in your project and will be shown a list of dependencies on your package.json.
3. Create a .eslintrc file in the root of your project's directory (it should live where package.json does). Your .eslintrc file should look like this:
```
{
  "extends": [
    "react-highoutput"
  ]
}
```
Tip: You can alternatively put this object in your package.json under the property "eslintConfig":. This makes one less file in your project.
4. You can add two scripts to your package.json to lint and/or fix:
```
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
},
```
5. Now you can manually lint your code by running npm run lint and fix all fixable issues with npm run lint:fix. You probably want your editor to do this though.
