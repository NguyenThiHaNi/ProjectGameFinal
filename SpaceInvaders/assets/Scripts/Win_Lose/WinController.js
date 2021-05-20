cc.Class({
    extends: cc.Component,

    properties: {
        imgWin: cc.Node,
        imgGalaxy: cc.Node,
    },

    onLoad() {
        this.winAnim();
        this.galaxyAnim();
    },

    start() {

    },

    // update (dt) {},
    
    winAnim() {
        cc.tween(this.imgWin)
            .to(0, { scale: 0 , opacity : 0})
            //.to(2, { scale: 1 , opacity : 150})
            .to(2, { scale: 1.5 , opacity : 255})
            .start()
    },
    galaxyAnim() {
        cc.tween(this.imgGalaxy)
            .by(2, { angle: 360 , opacity : 0})
            .by(2, { angle: 360 , opacity : 150})
            .by(2, {angle: 360, opacity : 105})
            .start()
    }
});
