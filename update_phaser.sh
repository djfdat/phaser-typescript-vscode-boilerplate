#!/bin/bash
curl \
-o bin/js/phaser.js https://raw.githubusercontent.com/photonstorm/phaser/master/v2-community/build/phaser.js \
-o bin/js/phaser.map https://raw.githubusercontent.com/photonstorm/phaser/master/v2-community/build/phaser.map \
-o bin/js/phaser.min.js https://raw.githubusercontent.com/photonstorm/phaser/master/v2-community/build/phaser.min.js \
-o tsd/box2d.d.ts https://raw.githubusercontent.com/photonstorm/phaser/master/v2-community/typescript/box2d.d.ts \
-o tsd/p2.d.ts https://raw.githubusercontent.com/photonstorm/phaser/master/v2-community/typescript/p2.d.ts \
-o tsd/phaser.comments.d.ts https://raw.githubusercontent.com/photonstorm/phaser/master/v2-community/typescript/phaser.comments.d.ts \
-o tsd/phaser.d.ts https://raw.githubusercontent.com/photonstorm/phaser/master/v2-community/typescript/phaser.d.ts \
-o tsd/phaser_box2d.d.ts https://raw.githubusercontent.com/photonstorm/phaser/master/v2-community/typescript/phaser_box2d.d.ts \
-o tsd/pixi.comments.d.ts https://raw.githubusercontent.com/photonstorm/phaser/master/v2-community/typescript/pixi.comments.d.ts \
-o tsd/pixi.d.ts https://raw.githubusercontent.com/photonstorm/phaser/master/v2-community/typescript/pixi.d.ts