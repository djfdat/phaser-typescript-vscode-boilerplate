var PhaserGame = (function () {
    function PhaserGame() {
        // create our phaser game
        // 800 - width
        // 600 - height
        // Phaser.AUTO - determine the renderer automatically (canvas, webgl)
        // 'content' - the name of the container to add our game to
        // { preload:this.preload, create:this.create} - functions to call for our states
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    }
    PhaserGame.prototype.preload = function () {
        // add our logo image to the assets class under the
        // key 'logo'. We're also setting the background colour
        // so it's the same as the background colour in the image
        this.game.load.image('logo', "assets/logo.png");
        this.game.stage.backgroundColor = 0xB20059;
    };
    PhaserGame.prototype.create = function () {
        // add the 'logo' sprite to the game, position it in the
        // center of the screen, and set the anchor to the center of
        // the image so it's centered properly. There's a lot of
        // centering in that last sentence
        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
    };
    return PhaserGame;
})();
// when the page has finished loading, create our game
window.onload = function () {
    var game = new PhaserGame();
};
//# sourceMappingURL=game.js.map