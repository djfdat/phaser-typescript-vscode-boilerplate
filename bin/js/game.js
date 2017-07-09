var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MyGame;
(function (MyGame) {
    var PhaserGame = (function (_super) {
        __extends(PhaserGame, _super);
        function PhaserGame() {
            var _this = _super.call(this, 800, 600, Phaser.AUTO, 'content', null) || this;
            _this.state.add('Boot', MyGame.BootState);
            _this.state.add('Preloader', MyGame.PreloaderState);
            _this.state.add('Game', MyGame.GameState);
            _this.state.start('Boot');
            return _this;
        }
        return PhaserGame;
    }(Phaser.Game));
    MyGame.PhaserGame = PhaserGame;
})(MyGame || (MyGame = {}));
// when the page has finished loading, create our game
window.onload = function () {
    var game = new MyGame.PhaserGame();
};
var MyGame;
(function (MyGame) {
    var BootState = (function (_super) {
        __extends(BootState, _super);
        function BootState() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BootState.prototype.preload = function () { };
        BootState.prototype.create = function () {
            // Use this if you don't need multitouch
            this.input.maxPointers = 1;
            if (this.game.device.desktop) {
                // Desktop specific settings go here
            }
            this.game.state.start('Preloader', true, false);
        };
        return BootState;
    }(Phaser.State));
    MyGame.BootState = BootState;
})(MyGame || (MyGame = {}));
var MyGame;
(function (MyGame) {
    var GameState = (function (_super) {
        __extends(GameState, _super);
        function GameState() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GameState.prototype.preload = function () { };
        GameState.prototype.create = function () {
            var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
            logo.anchor.setTo(0.5, 0.5);
        };
        return GameState;
    }(Phaser.State));
    MyGame.GameState = GameState;
})(MyGame || (MyGame = {}));
var MyGame;
(function (MyGame) {
    var PreloaderState = (function (_super) {
        __extends(PreloaderState, _super);
        function PreloaderState() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PreloaderState.prototype.preload = function () {
            this.game.load.image('logo', 'assets/logo.png');
        };
        PreloaderState.prototype.create = function () {
            this.game.state.start('Game');
        };
        return PreloaderState;
    }(Phaser.State));
    MyGame.PreloaderState = PreloaderState;
})(MyGame || (MyGame = {}));
//# sourceMappingURL=game.js.map