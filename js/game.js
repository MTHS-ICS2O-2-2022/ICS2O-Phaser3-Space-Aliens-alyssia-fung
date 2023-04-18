/* global Phaser */

// Copyright (c) 2023 Alyssia Fung. All rights reserved.
//
// Created by: Alyssia Fung
// Created on: Mar 2023
// This is the Phaser3 configuration file

  /**
   * Start Phaser Game.
   */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  // set background colour
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}

const game = new Phaser.Game(config)
console.log(game)
