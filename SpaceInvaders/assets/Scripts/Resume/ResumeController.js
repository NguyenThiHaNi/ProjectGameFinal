const mEmitter = require("mEmitter");
cc.Class({
    extends: cc.Component,

    properties: {
        pause : cc.Button,
        pauseMenu : cc.Node,
        //checkResume : false,
    },

    // LIFE-CYCLE CALLBACKS:
    pressPause(){
        this.pauseMenu.active = true;
        this.pause.node.active = false;
        cc.log(this.pause.active)

    },
    pressResume() {
        this.pauseMenu.active = false;
        this.pause.node.active = true;
    },
     onLoad () {
         
     },

    start () {

    },

    // update (dt) {},
});
