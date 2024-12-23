/* 0.5.0 2020-11-20 12:44:31 */
var app = new function() {
    this.name = "The Original", this.version = "1", this.date = "2009", this.folder = "asset-v5/", this.looptime = 5333, this.bpm = 90, this.totalframe = 260, this.nbpolo = 7, this.nbloopbonus = 2, this.bonusloopA = !2, this.bonusendloopA = !2, this.recmaxloop = 34, this.recminloop = 4, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#121212", this.col0 = "#919191", this.col1 = "#5f5f5f", this.col2 = "#4b4b4b", this.col3 = "#373737", this.col4 = "#232323", this.animearray = [{
        name: "percussions1",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "percussions2",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "percussions3",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "effects1",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "effects2",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "effects3",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "effects4",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "instruments1",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "instruments2",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "instruments3",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "chorus1",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "chorus2",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "voices1",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "voices2",
        color: "828282",
        uniqsnd: !0
    }], this.bonusarray = [{
        name: "Choir",
        src: "b1-choir.webm",
        code: "4,6,7,8,12",
        sound: "bonus-choirold",
        aspire: "aspire"
    }, {
        name: "Sailor",
        src: "b2-sailor.webm",
        code: "1,8,10,11,14",
        sound: "bonus-sailorold",
        aspire: "aspire"
    }, {
        name: "Santa",
        src: "b3-santa.webm",
        code: "1,9,12,13,14",
        sound: "bonus-santaold",
        aspire: "aspire"
    }], this.unlockerarray = [];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var i = this.animearray[n].name;
        this.animearray[n].soundA = i + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? i + "_a" : i + "_b", this.animearray[n].anime = i + "-sprite.png", this.animearray[n].animeData = i + ".json"
    }
};
