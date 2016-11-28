module MyGame {

	export class PhaserGame extends Phaser.Game
	{
		
		constructor()
		{
			super(800, 600, Phaser.AUTO, 'content', null);

			this.state.add('Boot', BootState);
			this.state.add('Preloader', PreloaderState);
			this.state.add('Game', GameState);

			this.state.start('Boot');
		}
		
		// preload()
		// {
		// 	// add our logo image to the assets class under the
		// 	// key 'logo'. We're also setting the background colour
		// 	// so it's the same as the background colour in the image
		// 	this.game.load.image( 'logo', "assets/logo.png" );
		// 	this.game.stage.backgroundColor = 0xB20059;
		// }
		
		// create()
		// {
		// 	// add the 'logo' sprite to the game, position it in the
		// 	// center of the screen, and set the anchor to the center of
		// 	// the image so it's centered properly. There's a lot of
		// 	// centering in that last sentence
		// 	var logo = this.game.add.sprite( this.game.world.centerX, this.game.world.centerY, 'logo' );
		// 	logo.anchor.setTo( 0.5, 0.5 );
		// }
	}

}

// when the page has finished loading, create our game
window.onload = () => {
	var game = new MyGame.PhaserGame();
}