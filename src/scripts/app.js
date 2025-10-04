'use strict'; // Attention de bien mettre type="module" dans la balise script du html
import Phaser from "phaser";

const config = {
    type: Phaser.AUTO,
    width: 986, // window.innerWidth, // pour avoir full screen
    height: 675, // window.innerHeight, //pour avoir full screen
    parent: 'niveau02',
    scene: {
        preload,
        create,
        update,
    },
    /* physics: {
        default: 'arcade',
        arcade: { gravity : { y : 0 } }
    } */
};

const game = new Phaser.Game(config);

function preload(){

}

function create(){

}

function update(){

}

console.log('app');