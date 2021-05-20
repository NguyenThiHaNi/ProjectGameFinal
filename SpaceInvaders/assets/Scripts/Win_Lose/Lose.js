const mEmitter = require("mEmitter");

cc.Class({
    extends: cc.Component,

    properties: {
        
        lose : cc.Node,
        home : cc.Button,
    },

    onLoad () {
        cc.tween(this.lose)
        .to (1, {position : cc.v2(0,700)})
        .to (1, {position : cc.v2(0,-100)})
        .start();
    },
    pressHome(){
        

    },

    start () {


    },

    // update (dt) {},
});
