module MyGame {

	export class BootState extends Phaser.State {

		preload() {}

		create() {
			// Use this if you don't need multitouch
			this.input.maxPointers = 1;

			if (this.game.device.desktop) {
				// Desktop specific settings go here
			}

			this.game.state.start('Preloader', true, false);
		}

	}

}