/* 0.5.4 2021-04-23 21:06:13 */
var app = new function() {
    this.name = "LM (Christmas)", this.version = "2", this.date = "2012", this.folder = "asset-v6/", this.looptime = 4800, this.bpm = 100, this.totalframe = 232, this.nbpolo = 7, this.nbloopbonus = 4, this.bonusloopA = !0, this.bonusendloopA = !0, this.recmaxloop = 38, this.recminloop = 5, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#1c0d0d", this.col0 = "#EB4B4B", this.col1 = "#C32D2D", this.col2 = "#9B2323", this.col3 = "#691E1E", this.col4 = "#371919", this.animearray = [{
        name: "beat1_boom",
        color: "d61718",
        uniqsnd: !1
    }, {
        name: "beat2_kashi",
        color: "d61718",
        uniqsnd: !1
    }, {
        name: "beat3_paomeu",
        color: "d61718",
        uniqsnd: !0
    }, {
        name: "beat4_ptttpeu",
        color: "d61718",
        uniqsnd: !1
    }, {
        name: "beat5_slupttt",
        color: "d61718",
        uniqsnd: !0
    }, {
        name: "effet1_poulll",
        color: "d61718",
        uniqsnd: !1
    }, {
        name: "effet2_tucati",
        color: "d61718",
        uniqsnd: !0
    }, {
        name: "effet3_tuilopta",
        color: "d61718",
        uniqsnd: !1
    }, {
        name: "effet4_tululou",
        color: "d61718",
        uniqsnd: !0
    }, {
        name: "effet5_tumttt",
        color: "d61718",
        uniqsnd: !1
    }, {
        name: "melo1_nananana",
        color: "d61718",
        uniqsnd: !1
    }, {
        name: "melo2_pelulu",
        color: "d61718",
        uniqsnd: !1
    }, {
        name: "melo3_siffle",
        color: "d61718",
        uniqsnd: !1
    }, {
        name: "melo4_tatouti",
        color: "d61718",
        uniqsnd: !1
    }, {
        name: "melo5_tvutvutvu",
        color: "d61718",
        uniqsnd: !1
    }, {
        name: "coeur1_oaaah",
        color: "d61718",
        uniqsnd: !1
    }, {
        name: "coeur2_cougou",
        color: "d61718",
        uniqsnd: !1
    }, {
        name: "coeur3_porticoeur",
        color: "d61718",
        uniqsnd: !1
    }, {
        name: "voix1_isit",
        color: "d61718",
        uniqsnd: !1
    }, {
        name: "voix2_uare",
        color: "d61718",
        uniqsnd: !1
    }], this.bonusarray = [{
        name: "Satisfied",
        src: "v2-b1-satisfy-hb.mp4",
        code: "1,4,6,9,12",
        sound: "bonus-satisfy",
        aspire: "aspire"
    }, {
        name: "Little Miss",
        src: "v2-b2-miss-hb.mp4",
        code: "1,2,10,13,15",
        sound: "bonus-miss",
        aspire: "aspire"
    }, {
        name: "Why this world",
        src: "v2-b3-world-hb.mp4",
        code: "1,3,4,14,18",
        sound: "bonus-world",
        aspire: "aspire"
    }];
    for (var o = 0, n = this.animearray.length; o < n; o++) {
        var i = this.animearray[o].name;
        this.animearray[o].soundA = i + "_a", this.animearray[o].soundB = this.animearray[o].uniqsnd ? i + "_a" : i + "_b", this.animearray[o].anime = i + "-sprite.png", this.animearray[o].animeData = i + ".json"
    }
};
