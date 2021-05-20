cc.Class({
    extends: cc.Component,

    properties: {
        frameResume : cc.Sprite,
        resume : cc.Button,
        home : cc.Button,
        cancel : cc.Button,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        Emitter.instance.registerEvent('layoutResume',this.press.bind(this));
            
    },

    start () {

    },

    // update (dt) {},
});
