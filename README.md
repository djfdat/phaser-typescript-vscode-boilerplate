# Phaser Typescript VS Code Boilerplate
Boilerplate project to get up and running with [Typescript] and [Phaser] in [VS Code].

Derived from: http://divillysausages.com/2015/06/09/using-phaser-with-visual-studio-code/

## Getting Started
1. Install [Node].

2. Use NPM (comes with [Node]) to install [Typescript] from the command line.

  ```
  npm install -g typescript
  ```

3. Install [VS Code].

4. [Download] and extract this repository to desired destination. Rename the folder as desired.

5. Open this folder using [VS Code]. You can do this by right-clicking the folder and selecting 'Open with Code' from your desktop, or from *File > Open Folder* from within VS Code.

6. Press *Ctrl+Shift+P* to bring up the command palette and select 'Tasks: Run Test Task'. This will install required node modules.

7. Press *Ctrl+Shift+B* to compile the typescript files in [src/](src/) to [bin/js/](bin/js/).

8. Press *F5* to start the webserver.

9. Open [localhost:5858] in your favorite web browser. To modify this port, make sure to update the port number in [.vscode/launch.json](.vscode/launch.json) and [server/server.js](server/server.js).

## Project Structure Overview

### [/.vscode](/.vscode)
Contains [VS Code] project setup to handle compiling typescript code and running the webserver. Only needed if you are using VS Code for these purposes.

### [/bin](/bin)
Directory of all output files that can be directly uploaded to host your game files.

#### [/bin/assets](/bin/assets)
Directory of all assets that the game/site/webpage will use. Feel free to make more directories for better organization.

#### [/bin/js](/bin/js)
Directory of compiled javascript as well as Phaser. Any additional javascript libraries can be placed here as well.

### [/node_modules](/node_modules)
Contains [Node] specific setup and packages. Currently the only package used is [node-static] to allow VS Code to run a server.

### [/server](/server)
Contains server setup for the packaged [node-static] web server.

### [/src](/src)
Contains all your source [Typescript] files. These compile into /bin/js. Feel free to make more directories for better organization. This is where you will mainly be working.

### [/tsd](/tsd)
Contains [Typescript] definition files. This is what the typescript compiler uses to add types to objects/functions.

## Updating Dependencies
This setup uses the node.js package [node-static] to handle the hosting of files. While we will attempt to keep this up to date, if your project needs to update this package, run the following command in the command line if the project folder:
```
npm update node-static
```
### Updating Phaser
*Current Version 2.7.2 Community Edition (2016-12-14)*

To update Phaser, run [/update_phaser.sh](/update_phaser.sh).

## Contributing
If something is out of date, please make an Issue or a Pull Request and I'll update it.

[Phaser]:			http://phaser.io/
[Node]: 			https://nodejs.org
[Typescript]:		https://www.npmjs.com/package/typescript
[VS Code]: 			https://code.visualstudio.com
[Download]: 		https://code.visualstudio.com/
[localhost:5858]:	localhost:5858
[node-static]:		https://github.com/cloudhead/node-static
