# Phaser Typescript VS Code Boilerplate
Phaser Typescript Project Boilerplate for VS Code.

Derived from: http://divillysausages.com/2015/06/09/using-phaser-with-visual-studio-code/

## Getting Started
1. Install [Node].
2. Use NPM (comes with Node) to install [Typescript] from the command line.
```
npm install -g typescript
```
3. Install [VS Code].
4. [Download] and extract this repository to desired destination.
5. Open this folder using VS Code.
6. Press *Ctrl+Shift+B* to compile the typescript files in [src/](src/) to [bin/js/](bin/js/).
7. Press *F5* to start the webserver.
8. Open [localhost:5858] in your favorite web browser. To modify this port, make sure to update the port number in [.vscode/launch.json](.vscode/launch.json) and [server/server.js](server/server.js).

## Project Structure Overview

### [/.vscode](/.vscode)
Contains VS Code project setup to handle compiling typescript code and running the webserver. Only needed if you are using VS Code for these purposes.

### [/bin](/bin)
Directory of all output files that could be directly uploaded. 

#### [/bin/assets](/bin/assets)
Directory of all assets that the game/site/webpage will use. Feel free to make more directories for better organization.

#### [/bin/js](/bin/js)
Directory of compiled javascript as well as phaser. Any additional javascript libraries can be placed here as well.

### [/node-modules](/node-modules)
Contains Node specific setup and packages. 

### [/server](/server)
Contains server setup for node-static

### [/src](/src)
Contains all your source typescript files. These will be compiled into /bin/js. Feel free to make more directories for better organization.

### [/tsd](/tsd)
Contains typescript definition files.

## Updating Dependencies
This setup uses the node.js package [node-static] to handle the hosting of files. While we will attempt to keep this up to date, if your project needs to update this package, run the following command in the command line if the project folder:
```
npm update node-static
```

## Contributing
If something is out of date, please make an Issue or a Pull Request and I'll update it.

[Node]: 			https://nodejs.org
[Typescript]:		https://www.npmjs.com/package/typescript
[VS Code]: 			https://code.visualstudio.com
[Download]: 		https://code.visualstudio.com/
[localhost:5858]:	localhost:5858
[node-static]:		https://github.com/cloudhead/node-static