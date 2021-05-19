cc.Class({
    extends: cc.Component,

    properties: {
        imgNameGame: cc.Node,
        galaxy : cc.Node,
    },

    onLoad() {
        this.imgName();
        this.galaxyAnim();
    },

    start() {

    },

    // update (dt) {},

    imgName() {
        let anim = cc.tween()
            .to(1, { scale: 0.7 })
            .to(1, { scale: 1 })
        cc.tween(this.imgNameGame).then(anim).repeatForever().start()
    },

    galaxyAnim() {
        let anim = cc.tween()
            .to(1, { scale: 0.7 })
            .to(1, { scale: 1 })
        cc.tween(this.galaxy).then(anim).repeatForever().start()
    },
});
