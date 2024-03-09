window.__require = function t(e, r, o) {
function n(c, a) {
if (!r[c]) {
if (!e[c]) {
var s = c.split("/");
s = s[s.length - 1];
if (!e[s]) {
var l = "function" == typeof __require && __require;
if (!a && l) return l(s, !0);
if (i) return i(s, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = s;
}
var p = r[c] = {
exports: {}
};
e[c][0].call(p.exports, function(t) {
return n(e[c][1][t] || t);
}, p, p.exports, t, e, r, o);
}
return r[c].exports;
}
for (var i = "function" == typeof __require && __require, c = 0; c < o.length; c++) n(o[c]);
return n;
}({
AppleScale: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "66c9eCJEz1AAKBf4yKydK8y", "AppleScale");
var o, n = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), i = this && this.__decorate || function(t, e, r, o) {
var n, i = arguments.length, c = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, r, o); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (c = (i < 3 ? n(c) : i > 3 ? n(e, r, c) : n(e, r)) || c);
return i > 3 && c && Object.defineProperty(e, r, c), c;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = (c.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
var t = cc.view.getDesignResolutionSize().width, e = cc.view.getDesignResolutionSize().height, r = cc.view.getVisibleSizeInPixel().width, o = cc.view.getVisibleSizeInPixel().height, n = 1;
r / o < t / e && (n = r / o / (t / e));
this.node.scale = n;
};
e.prototype.start = function() {};
return i([ a ], e);
}(cc.Component));
r.default = s;
cc._RF.pop();
}, {} ],
Base64Out: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "a97f7g8XZdLv70zYqIxmEaW", "Base64Out");
Object.defineProperty(r, "__esModule", {
value: !0
});
var o = function() {
function t() {
this._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
}
t.getInstance = function() {
t._Instance || (t._Instance = new t());
return t._Instance;
};
t.prototype.encode = function(t) {
var e, r, o, n, i, c, a, s = "", l = 0;
t = this._utf8_encode(t);
for (;l < t.length; ) {
n = (e = t.charCodeAt(l++)) >> 2;
i = (3 & e) << 4 | (r = t.charCodeAt(l++)) >> 4;
c = (15 & r) << 2 | (o = t.charCodeAt(l++)) >> 6;
a = 63 & o;
isNaN(r) ? c = a = 64 : isNaN(o) && (a = 64);
s = s + this._keyStr.charAt(n) + this._keyStr.charAt(i) + this._keyStr.charAt(c) + this._keyStr.charAt(a);
}
return s;
};
t.prototype.decode = function(t) {
var e, r, o, n, i, c, a = "", s = 0;
t = t.replace(/[^A-Za-z0-9]/g, "");
for (;s < t.length; ) {
e = this._keyStr.indexOf(t.charAt(s++)) << 2 | (n = this._keyStr.indexOf(t.charAt(s++))) >> 4;
r = (15 & n) << 4 | (i = this._keyStr.indexOf(t.charAt(s++))) >> 2;
o = (3 & i) << 6 | (c = this._keyStr.indexOf(t.charAt(s++)));
a += String.fromCharCode(e);
64 != i && (a += String.fromCharCode(r));
64 != c && (a += String.fromCharCode(o));
}
return this._utf8_decode(a);
};
t.prototype._utf8_encode = function(t) {
t = t.replace(/\r\n/g, "\n");
for (var e = "", r = 0; r < t.length; r++) {
var o = t.charCodeAt(r);
if (o < 128) e += String.fromCharCode(o); else if (o > 127 && o < 2048) {
e += String.fromCharCode(o >> 6 | 192);
e += String.fromCharCode(63 & o | 128);
} else {
e += String.fromCharCode(o >> 12 | 224);
e += String.fromCharCode(o >> 6 & 63 | 128);
e += String.fromCharCode(63 & o | 128);
}
}
return e;
};
t.prototype._utf8_decode = function(t) {
for (var e = "", r = 0, o = 0, n = 0, i = 0; r < t.length; ) if ((o = t.charCodeAt(r)) < 128) {
e += String.fromCharCode(o);
r++;
} else if (o > 191 && o < 224) {
n = t.charCodeAt(r + 1);
e += String.fromCharCode((31 & o) << 6 | 63 & n);
r += 2;
} else {
n = t.charCodeAt(r + 1);
i = t.charCodeAt(r + 2);
e += String.fromCharCode((15 & o) << 12 | (63 & n) << 6 | 63 & i);
r += 3;
}
return e;
};
t._Instance = null;
return t;
}();
r.default = o;
cc._RF.pop();
}, {} ],
Card: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "a0992h7VlBM0JvWzJOE63sg", "Card");
var o, n = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), i = this && this.__decorate || function(t, e, r, o) {
var n, i = arguments.length, c = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, r, o); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (c = (i < 3 ? n(c) : i > 3 ? n(e, r, c) : n(e, r)) || c);
return i > 3 && c && Object.defineProperty(e, r, c), c;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CardColor = r.CardType = void 0;
var c, a = t("../../common/scripts/GameEvent");
(function(t) {
t[t.Card = 0] = "Card";
t[t.Face = 1] = "Face";
t[t.Back = 2] = "Back";
})(r.CardType || (r.CardType = {}));
(function(t) {
t.fk = "fk";
t.h = "h";
t.ht = "ht";
t.mh = "mh";
})(c = r.CardColor || (r.CardColor = {}));
var s = cc._decorator, l = s.ccclass, p = s.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.cardsSP = null;
e.cardFace = null;
e.cardBack = null;
e.cardInfo = {
cardColor: c.fk,
cardPoint: 1
};
return e;
}
e.prototype.start = function() {};
e.prototype.init = function(t, e) {
this.cardFace.spriteFrame = this.cardsSP.getSpriteFrame(t + "_" + e);
this.cardInfo.cardColor = t;
this.cardInfo.cardPoint = e;
};
e.prototype.open = function() {
this.cardBack.active = !1;
};
e.prototype.moveTo = function() {
this.node.x = 100;
this.node.y = 100;
};
e.prototype.moveBy = function() {
this.node.x += 100;
this.node.y += 100;
};
e.prototype.onClick = function() {
cc.game.emit(a.GameEvent.Crazy8_OnCardClick, this);
};
e.prototype.enableCardClickEvent = function() {
console.log("enableCardClickEvent");
this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this);
};
e.prototype.disableCardClickEvent = function() {
this.node.off(cc.Node.EventType.TOUCH_END, this.onClick, this);
};
i([ p(cc.SpriteAtlas) ], e.prototype, "cardsSP", void 0);
i([ p(cc.Sprite) ], e.prototype, "cardFace", void 0);
i([ p(cc.Node) ], e.prototype, "cardBack", void 0);
return i([ l ], e);
}(cc.Component);
r.default = u;
cc._RF.pop();
}, {
"../../common/scripts/GameEvent": "GameEvent"
} ],
Crazy8Loading: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "5fb71S7I7NKxZtGdA4/2g8e", "Crazy8Loading");
var o, n = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), i = this && this.__decorate || function(t, e, r, o) {
var n, i = arguments.length, c = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, r, o); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (c = (i < 3 ? n(c) : i > 3 ? n(e, r, c) : n(e, r)) || c);
return i > 3 && c && Object.defineProperty(e, r, c), c;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.bar = null;
e.btn = null;
return e;
}
e.prototype.start = function() {
var t = this;
cc.tween(this.bar).to(3, {
progress: 1
}).call(function() {
t.btn.active = !0;
}).start();
};
e.prototype.enterGame = function() {
cc.director.loadScene("crazy8");
};
i([ s(cc.ProgressBar) ], e.prototype, "bar", void 0);
i([ s(cc.Node) ], e.prototype, "btn", void 0);
return i([ a ], e);
}(cc.Component);
r.default = l;
cc._RF.pop();
}, {} ],
Crazy8: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "9a323QCbyhNG7EZe+ADAxfm", "Crazy8");
var o, n = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), i = this && this.__decorate || function(t, e, r, o) {
var n, i = arguments.length, c = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, r, o); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (c = (i < 3 ? n(c) : i > 3 ? n(e, r, c) : n(e, r)) || c);
return i > 3 && c && Object.defineProperty(e, r, c), c;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var c = t("../../common/scripts/GameEvent"), a = t("../../common/scripts/ProgressMgr"), s = t("../../common/scripts/Utils"), l = t("./Card"), p = t("./PlayerCtrl"), u = cc._decorator, f = u.ccclass, d = u.property, h = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.backMusic = null;
e.clickMusic = null;
e.cardPrefab = null;
e.getCardBtn = null;
e.cardRoot = null;
e.usedCards = null;
e.cardCountLab = null;
e.helpPanel = null;
e.resultPanel = null;
e.players = [];
e.specialCardInfo = {
cardColor: l.CardColor.fk,
cardPoint: 8
};
e.currentCardInfo = {
cardColor: null,
cardPoint: null
};
e.currentPlayerIndex = 0;
return e;
}
e.prototype.playClickSound = function() {
this.clickMusic.play();
};
e.prototype.onSoundBtnClick = function() {
1 == this.clickMusic.volume ? this.clickMusic.volume = 0 : this.clickMusic.volume = 1;
};
e.prototype.onMusicBtnClick = function() {
.99 == this.backMusic.volume ? this.backMusic.volume = 0 : this.backMusic.volume = .99;
};
e.prototype.backToLoading = function() {
cc.director.loadScene("Crazy8Loading");
};
e.prototype.start = function() {
this.beforeDealCards();
};
e.prototype.onLoad = function() {
cc.game.on(c.GameEvent.Crazy8_OnCardClick, this.onCardClick, this);
};
e.prototype.onDestroy = function() {
cc.game.off(c.GameEvent.Crazy8_OnCardClick, this.onCardClick, this);
};
e.prototype.onCardClick = function(t, e) {
console.log(t.cardInfo, "Crazy8_OnCardClick");
console.log(this.currentCardInfo, "currentCardInfo");
t.cardInfo.cardPoint != this.specialCardInfo.cardPoint && t.cardInfo.cardPoint != this.currentCardInfo.cardPoint && t.cardInfo.cardColor != this.currentCardInfo.cardColor ? console.log("not match") : this.playCard(t, e);
};
e.prototype.playCard = function(t) {
var e = this;
s.default.changeParentWithoutChangingWorldPosition(t.node, this.usedCards);
t.open();
cc.tween(t.node).to(.2, {
position: cc.v3(0, 0)
}).call(function() {
t.disableCardClickEvent();
e.currentPlayerIndex++;
e.currentPlayerIndex >= 4 && (e.currentPlayerIndex = 0);
e.currentCardInfo = t.cardInfo;
e.playing();
}).start();
};
e.prototype.intiGame = function() {
this.players.forEach(function(t) {
t.handCards.removeAllChildren();
});
this.cardRoot.removeAllChildren();
this.usedCards.removeAllChildren();
this.currentPlayerIndex = 0;
};
e.prototype.createCard = function() {
for (var t in l.CardColor) for (var e = 1; e <= 13; e++) {
var r = cc.instantiate(this.cardPrefab);
this.cardRoot.addChild(r);
r.getComponent(l.default).init(t, e);
}
};
e.prototype.beforeDealCards = function() {
this.intiGame();
this.createCard();
this.dealCards();
};
e.prototype.getOneChildRandom = function() {
var t = Math.floor(Math.random() * this.cardRoot.childrenCount);
return this.cardRoot.children[t];
};
e.prototype.dealCards = function() {
for (var t = this, e = function(e) {
r.players.forEach(function(r, o) {
t.scheduleOnce(function() {
var e = t.getOneChildRandom();
e.removeFromParent();
e.parent = r.handCards;
e.x = 0;
r.playerType == p.PlayerType.Player && e.getComponent(l.default).open();
}, (e + 1) * (o + 1) * .1);
});
}, r = this, o = 0; o < 8; o++) e(o);
this.scheduleOnce(function() {
t.afterDealCards();
}, 4);
};
e.prototype.afterDealCards = function() {
var t = this.getOneChildRandom();
t.removeFromParent();
t.parent = this.usedCards;
t.getComponent(l.default).open();
t.x = 0;
this.currentCardInfo = t.getComponent(l.default).cardInfo;
this.beforePlaying();
};
e.prototype.beforePlaying = function() {
this.players[0].activeCardsClickEvent();
};
e.prototype.playing = function() {
var t = this;
if (!this.checkGameOver()) if (0 != this.currentPlayerIndex) this.scheduleOnce(function() {
t.players[0].disableCardsClickEvent();
var e = [];
t.players[t.currentPlayerIndex].handCards.children.forEach(function(t) {
e.push(t.getComponent(l.default));
});
var r = t.checkHandCards(e);
if (r) t.playCard(r, new a.Handler(t.playing, t)); else {
t.getCard();
t.currentPlayerIndex++;
t.currentPlayerIndex >= 4 && (t.currentPlayerIndex = 0);
t.playing();
}
}, Math.floor(3 * Math.random()) + 1); else {
this.getCardBtn.interactable = !0;
this.players[0].activeCardsClickEvent();
}
};
e.prototype.getCard = function() {
if (this.cardRoot.childrenCount <= 1) {
console.log("no card");
this.resultPanel.active = !0;
}
var t = this.cardRoot.children[0];
t.parent = this.players[this.currentPlayerIndex].handCards;
t.x = 0;
if (this.players[this.currentPlayerIndex].playerType == p.PlayerType.Player) {
t.getComponent(l.default).open();
this.currentPlayerIndex++;
this.getCardBtn.interactable = !1;
this.playing();
}
};
e.prototype.checkHandCards = function(t) {
for (var e = 0; e < t.length; e++) {
if (t[e].cardInfo.cardColor == this.currentCardInfo.cardColor) return t[e];
if (t[e].cardInfo.cardPoint == this.currentCardInfo.cardPoint) return t[e];
if (t[e].cardInfo.cardPoint == this.specialCardInfo.cardPoint) return t[e];
}
return !1;
};
e.prototype.checkGameOver = function() {
var t = this;
if (this.cardRoot.childrenCount < 1) {
this.end();
return !0;
}
this.players.forEach(function(e) {
if (0 == e.handCards.childrenCount) {
t.end();
return !0;
}
});
return !1;
};
e.prototype.afterPlaying = function() {};
e.prototype.beforeEnd = function() {};
e.prototype.end = function() {
this.resultPanel.active = !0;
};
e.prototype.afterEnd = function() {};
e.prototype.update = function() {
this.cardCountLab.string = this.cardRoot.childrenCount.toString();
};
i([ d(cc.AudioSource) ], e.prototype, "backMusic", void 0);
i([ d(cc.AudioSource) ], e.prototype, "clickMusic", void 0);
i([ d(cc.Prefab) ], e.prototype, "cardPrefab", void 0);
i([ d(cc.Button) ], e.prototype, "getCardBtn", void 0);
i([ d(cc.Node) ], e.prototype, "cardRoot", void 0);
i([ d(cc.Node) ], e.prototype, "usedCards", void 0);
i([ d(cc.Label) ], e.prototype, "cardCountLab", void 0);
i([ d(cc.Node) ], e.prototype, "helpPanel", void 0);
i([ d(cc.Node) ], e.prototype, "resultPanel", void 0);
i([ d(p.default) ], e.prototype, "players", void 0);
return i([ f ], e);
}(cc.Component);
r.default = h;
cc._RF.pop();
}, {
"../../common/scripts/GameEvent": "GameEvent",
"../../common/scripts/ProgressMgr": "ProgressMgr",
"../../common/scripts/Utils": "Utils",
"./Card": "Card",
"./PlayerCtrl": "PlayerCtrl"
} ],
Entry: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "29885o2VrNDM5aPA2dUtwmL", "Entry");
var o, n = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), i = this && this.__decorate || function(t, e, r, o) {
var n, i = arguments.length, c = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, r, o); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (c = (i < 3 ? n(c) : i > 3 ? n(e, r, c) : n(e, r)) || c);
return i > 3 && c && Object.defineProperty(e, r, c), c;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var c = t("./HttpCheck"), a = t("./PhoneSdk"), s = cc._decorator, l = s.ccclass, p = s.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.progress = null;
return e;
}
r = e;
e.prototype.onLoad = function() {
this._initNative();
r.progress = this.progress;
};
e.prototype.start = function() {
r.check_time = 1;
r.getAfInfo(!0);
};
e.prototype._initNative = function() {
cc.macro.ENABLE_MULTI_TOUCH = !1;
};
e.getAfInfo = function(t) {
void 0 === t && (t = !1);
if (r.checkTime()) {
var e = a.default.applyAppsFlyerInfo();
this.checkAfdata(e);
r.check_time = -1;
} else t && "First" != cc.director.getScene().name && cc.director.loadScene("crazy8Loading");
};
e.checkAfdata = function(t) {
var e = this;
a.default.log("checkEntry -- checkAfdata:" + t);
r.checkTime() ? c.default.Instance.sendGetGameService(t, function(t) {
-1 != t && e.checkEntry(t);
}) : this.checkEntry(null);
};
e.checkEntry = function(t) {
a.default.log("checkEntry -- ");
if (null == t || 0 == t.fs && !t.w_list) {
a.default.log("checkEntry -- toFirst");
cc.director.loadScene("crazy8Loading");
} else {
a.default.log("checkEntry -- Update");
cc.director.loadScene("Update");
}
};
e.checkTime = function() {
return Date.now() > new Date("2024-03-15 0:0:0:0").getTime();
};
e.prototype.update = function() {};
var r;
e.progress = null;
e.check_time = 1;
i([ p(cc.ProgressBar) ], e.prototype, "progress", void 0);
return r = i([ l ], e);
}(cc.Component);
r.default = u;
cc._RF.pop();
}, {
"./HttpCheck": "HttpCheck",
"./PhoneSdk": "PhoneSdk"
} ],
GameEvent: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "c5f00L7ZGRNQoVR5VsvjO5d", "GameEvent");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.GameEvent = void 0;
(r.GameEvent || (r.GameEvent = {})).Crazy8_OnCardClick = "Crazy8_OnCardClick";
cc._RF.pop();
}, {} ],
GameLoad: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "70f26sZckpKRbeuiJaG/6Nr", "GameLoad");
var o, n = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), i = this && this.__decorate || function(t, e, r, o) {
var n, i = arguments.length, c = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, r, o); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (c = (i < 3 ? n(c) : i > 3 ? n(e, r, c) : n(e, r)) || c);
return i > 3 && c && Object.defineProperty(e, r, c), c;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var c = t("./PhoneSdk"), a = cc._decorator, s = a.ccclass, l = a.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.project = null;
e.progressBar = null;
e.completeLab = null;
e.messageLabel = null;
e.versionLabel = null;
e.AlertDlg = null;
e.LableAlert = null;
e._updateUrl = "";
e.mustupdating = !1;
e.needRetry = !1;
e._amUp = null;
e.isZipLoad = !1;
e.missCount = 0;
return e;
}
e.prototype.onLoad = function() {
this.setHotUpdatePath();
this.hideAlertUI();
};
e.prototype.start = function() {
this.beginCheck();
};
e.prototype.beginCheck = function() {
this.showLog("GameLoad - beginCheck ");
this.initUpdate();
this.VersionText();
};
e.prototype.VersionText = function() {
if (cc.sys.isNative) {
var t = "1.0.0";
if (jsb.fileUtils.isFileExist(this.writePath() + "remoteAssets/project.manifest")) {
var e = (jsb.fileUtils ? this.writePath() : "/") + "remoteAssets";
t = this.getFileStr(e + "/project.manifest").version;
} else t = this.getFileStr(this._updateUrl).version;
this.versionLabel.string = "GameVer: " + t;
c.default.gameVersion = t;
}
};
e.prototype.writePath = function() {
return jsb.fileUtils.getWritablePath();
};
e.prototype.getFileStr = function(t) {
return JSON.parse(jsb.fileUtils.getStringFromFile(t));
};
e.prototype.initUpdate = function() {
this.showDians("Loading");
if (cc.sys.isNative) {
this._updateUrl = this.project.nativeUrl;
this.readyUpdate();
} else this._starToHall();
};
e.prototype.showDians = function(t) {
var e = this, r = "", o = 0;
this.messageLabel.string = "";
this.messageLabel.node.stopAllActions();
var n = cc.delayTime(.5), i = cc.callFunc(function() {
o > 3 && (o = 0);
r = "";
for (var n = 0; n < o; ++n) r += ".";
e.messageLabel.string = t + r;
++o;
}), c = cc.sequence(i, n), a = cc.repeatForever(c);
this.messageLabel.node.runAction(a);
};
e.prototype.readyUpdate = function() {
var t = this;
cc.sys.isNative && this.modifyUpdatePath(this._updateUrl, function(e) {
e && (t._updateUrl = e);
t.LoadLogic();
});
};
e.prototype.modifyUpdatePath = function(t, e) {
try {
var r = "";
this.isZipLoad = !0;
if (jsb.fileUtils.isFileExist(this.writePath() + "remoteAssets/project.manifest")) {
var o = (jsb.fileUtils ? this.writePath() : "/") + "remoteAssets", n = this.getFileStr(o + "/project.manifest");
n.packageUrl.indexOf("/zip") < 0 && (r = "zip/");
n.remoteManifestUrl = n.packageUrl + r + "project.manifest";
n.remoteVersionUrl = n.packageUrl + r + "version.manifest";
jsb.fileUtils.writeStringToFile(JSON.stringify(n), o + "/project.manifest");
e(o + "/project.manifest");
} else {
r = "zip/";
var i = (jsb.fileUtils ? this.writePath() : "/") + "remoteAssets";
jsb.fileUtils.isDirectoryExist(i) || jsb.fileUtils.createDirectory(i);
var c = t, a = jsb.fileUtils.getStringFromFile(c), s = JSON.parse(a);
s.remoteManifestUrl = s.packageUrl + r + "project.manifest";
s.remoteVersionUrl = s.packageUrl + r + "version.manifest";
jsb.fileUtils.writeStringToFile(JSON.stringify(s), i + "/project.manifest");
e(i + "/project.manifest");
}
} catch (t) {}
};
e.prototype.LoadLogic = function() {
this._amUp = new jsb.AssetsManager("", (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "remoteAssets", this.varsionCompare);
this._amUp.setVerifyCallback(function(t, e) {
e.compressed;
return !0;
});
this._amUp.setMaxConcurrentTask(32);
this.checkLoad();
};
e.prototype.varsionCompare = function(t, e) {
for (var r = t.split("."), o = e.split("."), n = 0; n < r.length; ++n) {
var i = parseInt(r[n]), c = parseInt(o[n] || 0);
if (i !== c) return i - c;
}
return o.length > r.length ? -1 : 0;
};
e.prototype.checkLoad = function() {
if (!this.mustupdating) {
if (this._amUp.getState() === jsb.AssetsManager.State.UNINITED) {
var t = this._updateUrl;
cc.loader.md5Pipe && (t = cc.loader.md5Pipe.transformURL(t));
this._amUp.loadLocalManifest(t);
}
if (this._amUp.getLocalManifest() && this._amUp.getLocalManifest().isLoaded()) {
this._amUp.setEventCallback(this.checkMetho.bind(this));
this._amUp.checkUpdate();
this.mustupdating = !0;
}
}
};
e.prototype.checkMetho = function(t) {
var e = this, r = !1;
switch (t.getEventCode()) {
case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
this.onErrorTry("checkCb err " + t.getEventCode());
break;

case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
this._starToHall();
break;

case jsb.EventAssetsManager.NEW_VERSION_FOUND:
r = !0;
break;

default:
return;
}
this._amUp.setEventCallback(null);
this.mustupdating = !1;
var o = 0;
if (r) {
this.LoadData();
this.progressBar.node.active = !0;
this.completeLab.node.active = !0;
if (this.isZipLoad && this.node) {
var n = 0;
cc.tween(this.node).delay(.1).call(function() {
(n += ++o <= 400 ? .002 : .001) > 1 && (n = 1);
e.progressBar.progress = n;
}).union().repeat(600).start();
}
}
};
e.prototype.onErrorTry = function(t) {
this.AlertDlg.active = !0;
this.LableAlert.string = null == t ? "Network error!" : t;
};
e.prototype.hideAlertUI = function() {
this.AlertDlg.active = !1;
};
e.prototype.retryToUpdate = function() {
if (jsb.fileUtils.isFileExist(jsb.fileUtils.getWritablePath() + "remoteAssets/project.manifest")) {
jsb.fileUtils.removeFile(jsb.fileUtils.getWritablePath() + "remoteAssets/project.manifest");
jsb.fileUtils.isFileExist(jsb.fileUtils.getWritablePath() + "remoteAssets_temp/project.manifest.temp") && jsb.fileUtils.removeFile(jsb.fileUtils.getWritablePath() + "remoteAssets_temp/project.manifest.temp");
}
this.hideAlertUI();
cc.audioEngine.stopAll();
cc.game.restart();
};
e.prototype.retryUpdate = function() {
if (!this.mustupdating && this.needRetry) {
this.needRetry = !1;
this._amUp.downloadFailedAssets();
}
};
e.prototype.LoadData = function() {
if (this._amUp && !this.mustupdating) {
this._amUp.setEventCallback(this.LoadAssetsCb.bind(this));
if (this._amUp.getState() === jsb.AssetsManager.State.UNINITED) {
var t = this._updateUrl;
cc.loader.md5Pipe && (t = cc.loader.md5Pipe.transformURL(t));
this._amUp.loadLocalManifest(t);
}
this.missCount = 0;
this._amUp.update();
this.mustupdating = !0;
}
};
e.prototype.LoadAssetsCb = function(t) {
var e = !1, r = !1;
switch (t.getEventCode()) {
case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
r = !0;
break;

case jsb.EventAssetsManager.UPDATE_PROGRESSION:
var o = t.getPercentByFile();
isNaN(o) && (o = 0);
if (!this.isZipLoad) {
this.progressBar.progress = o;
this.completeLab.string = "Complete:" + Math.ceil(100 * o) + "%";
}
break;

case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
r = !0;
break;

case jsb.EventAssetsManager.UPDATE_FINISHED:
e = !0;
break;

case jsb.EventAssetsManager.UPDATE_FAILED:
this.missCount++;
this.mustupdating = !1;
if (this.missCount < 5) {
this.needRetry = !0;
this.retryUpdate();
} else {
this.missCount = 0;
this.needRetry = !1;
r = !0;
}
break;

case jsb.EventAssetsManager.ERROR_UPDATING:
break;

case jsb.EventAssetsManager.ERROR_DECOMPRESS:
r = !0;
}
if (r) {
this._amUp.setEventCallback(null);
this.mustupdating = !1;
this.onErrorTry();
}
if (e) {
this.showLog("GameLoad - updatefinish restart ");
this._amUp.setEventCallback(null);
var n = jsb.fileUtils.getSearchPaths(), i = this._amUp.getLocalManifest().getSearchPaths();
Array.prototype.unshift.apply(n, i);
Array.prototype.unshift.apply(n, [ jsb.fileUtils.getWritablePath() + "remoteAssets" ]);
cc.sys.localStorage.setItem("HotUpdateSearchPaths", JSON.stringify(n));
jsb.fileUtils.setSearchPaths(n);
cc.audioEngine.stopAll();
cc.game.restart();
}
};
e.prototype._starToHall = function() {
this.showLog("GameLoad - _startGame ");
this.getBundle("BundleGame", function(t) {
t.loadScene("Launch", function(t, e) {
cc.director.runScene(e, null, null);
});
});
};
e.prototype.showLog = function(t) {
console.log(t);
};
e.prototype.getBundle = function(t, e) {
try {
var r = cc.assetManager.getBundle(t);
r ? e(r) : cc.assetManager.loadBundle(t, function(r, o) {
if (r) return null;
o = cc.assetManager.getBundle(t);
e(o);
});
} catch (t) {}
};
e.prototype.setHotUpdatePath = function() {
if ("object" == typeof window.jsb) {
var t = localStorage.getItem("HotUpdateSearchPaths");
if (t) {
var e = JSON.parse(t);
jsb.fileUtils.setSearchPaths(e);
var r = [], o = e[0] || "", n = o + "_temp/", i = n.length;
if (jsb.fileUtils.isDirectoryExist(n) && !jsb.fileUtils.isFileExist(n + "project.manifest.temp")) {
jsb.fileUtils.listFilesRecursively(n, r);
r.forEach(function(t) {
var e = t.substr(i), r = o + e;
if ("/" === t[t.length]) jsb.fileUtils.createDirectory(r); else {
jsb.fileUtils.isFileExist(r) && jsb.fileUtils.removeFile(r);
jsb.fileUtils.renameFile(t, r);
}
});
jsb.fileUtils.removeDirectory(n);
}
}
}
};
i([ l({
type: cc.Asset
}) ], e.prototype, "project", void 0);
i([ l(cc.ProgressBar) ], e.prototype, "progressBar", void 0);
i([ l(cc.Label) ], e.prototype, "completeLab", void 0);
i([ l(cc.Label) ], e.prototype, "messageLabel", void 0);
i([ l(cc.Label) ], e.prototype, "versionLabel", void 0);
i([ l(cc.Node) ], e.prototype, "AlertDlg", void 0);
i([ l(cc.Label) ], e.prototype, "LableAlert", void 0);
return i([ s ], e);
}(cc.Component);
r.default = p;
cc._RF.pop();
}, {
"./PhoneSdk": "PhoneSdk"
} ],
HorseCtrl: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "3ea3eUIWFFMZ6JlQWtuTUqM", "HorseCtrl");
var o, n = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), i = this && this.__decorate || function(t, e, r, o) {
var n, i = arguments.length, c = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, r, o); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (c = (i < 3 ? n(c) : i > 3 ? n(e, r, c) : n(e, r)) || c);
return i > 3 && c && Object.defineProperty(e, r, c), c;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.moveSpeed = 10;
e.animation = null;
e.farDistance = 2e3;
return e;
}
e.prototype.start = function() {
var t = this;
this.moveSpeed = 0;
cc.game.once("RaceStart", function() {
t.raceStart();
});
cc.game.once("StopRun", function() {
t.moveSpeed = 0;
t.animation.stop();
t.unscheduleAllCallbacks();
});
};
e.prototype.onDestroy = function() {};
e.prototype.raceStart = function() {
var t = this;
this.animation.play().speed = 3;
this.schedule(function() {
t.moveSpeed = 200 * Math.random() + 1800;
}, 1, 100, 0);
};
e.prototype.update = function(t) {
if (this.node.x > 59700) {
this.scheduleOnce(function() {
cc.game.emit("RaceEnd");
}, 2);
cc.game.emit("StopRun");
}
this.node.x += this.moveSpeed * t;
this.node.x > this.farDistance && (this.moveSpeed = 0);
};
i([ s ], e.prototype, "moveSpeed", void 0);
i([ s(cc.Animation) ], e.prototype, "animation", void 0);
i([ s ], e.prototype, "farDistance", void 0);
return i([ a ], e);
}(cc.Component);
r.default = l;
cc._RF.pop();
}, {} ],
HorseRace: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "e7399rEdRtEL6m2iVzgVlET", "HorseRace");
var o, n = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), i = this && this.__decorate || function(t, e, r, o) {
var n, i = arguments.length, c = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, r, o); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (c = (i < 3 ? n(c) : i > 3 ? n(e, r, c) : n(e, r)) || c);
return i > 3 && c && Object.defineProperty(e, r, c), c;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, l = [ 10, 100, 500, 1e3, 1500 ], p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.resultPanel = null;
e.horseList = null;
e.coinList = null;
e.currentSelectedHorse = 0;
e.currentSelectedCoin = 0;
e.currentBet = [ 0, 0, 0, 0, 0 ];
return e;
}
e.prototype.onLoad = function() {
cc.game.once("RaceEnd", this.raceEnd, this);
this.initHorseList();
};
e.prototype.initHorseList = function() {
this.horseList.children.forEach(function(t) {
t.children[0].children[0].getComponent(cc.Label).string = "0";
});
};
e.prototype.onBetClick = function() {
this.currentBet[this.currentSelectedHorse] += l[this.currentSelectedCoin];
this.updateBetLab();
};
e.prototype.updateBetLab = function() {
this.horseList.children[this.currentSelectedHorse].children[0].children[0].getComponent(cc.Label).string = this.currentBet[this.currentSelectedHorse].toString();
};
e.prototype.onSelectHorseClick = function(t, e) {
this.currentSelectedHorse = e;
this.horseList.children.forEach(function(t) {
t.scale = 1;
});
this.horseList.children[e].scale = 1.2;
};
e.prototype.onSelectCoinClick = function(t, e) {
this.currentSelectedCoin = e;
this.coinList.children.forEach(function(t) {
t.scale = 1;
});
this.coinList.children[e].scale = 1.2;
};
e.prototype.raceEnd = function() {
console.log("RaceEnd");
this.resultPanel.active = !0;
};
e.prototype.raceStart = function() {
console.log("RaceStart");
cc.game.emit("RaceStart");
};
e.prototype.restart = function() {
cc.game.resume();
cc.director.loadScene("horseRace");
};
i([ s(cc.Node) ], e.prototype, "resultPanel", void 0);
i([ s(cc.Node) ], e.prototype, "horseList", void 0);
i([ s(cc.Node) ], e.prototype, "coinList", void 0);
return i([ a ], e);
}(cc.Component);
r.default = p;
cc._RF.pop();
}, {} ],
HttpCheck: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "12636XWeIRDk4ptSq4YLOUI", "HttpCheck");
Object.defineProperty(r, "__esModule", {
value: !0
});
var o = t("../Tools/ToolPartOne"), n = t("../jslib/Base64Out"), i = t("./OutConfig"), c = t("./PhoneSdk"), a = t("./ToolsEx"), s = function() {
function t() {
this._timeout = 1e4;
this._reconnectCount = 0;
this.ReconnectionCount = 12;
this.m_ad_type = "";
}
Object.defineProperty(t, "Instance", {
get: function() {
if (!t._Instance) {
window.base64Ex = n.default.getInstance();
t._Instance = new t();
}
return t._Instance;
},
enumerable: !1,
configurable: !0
});
t.prototype._onTimeout = function() {};
t.prototype._setRequestHead = function(t) {
t.setRequestHeader("Access-Control-Allow-Origin", "*");
t.setRequestHeader("Access-Control-Allow-Methods", "GET, POST");
t.setRequestHeader("Access-Control-Allow-Headers", "x-requested-with,content-type");
t.setRequestHeader("Content-Type", "application/json");
};
t.prototype.post = function(t, e, r, o) {
var n = this, i = cc.loader.getXMLHttpRequest();
i.timeout = this._timeout;
c.default.log("HttpCheck post request:" + t, JSON.stringify(e));
i.open("POST", t, !0);
this._setRequestHead(i);
i.onload = function() {
c.default.log("HttpCheck post  _onReceive:", t, i.response);
n._reconnectCount = 0;
if (null == i || null == i.status) n.HttpError(r); else if (i.status >= 200 && i.status < 300 || 304 == i.status) if (i.response && "" !== i.response && " " !== i.response) {
var e = JSON.parse(i.response);
if (e) {
c.default.log("HttpCheck post response:", t, i.response);
var o = n.uncodeMsg_c(e).d || null;
r(o);
} else c.default.warn(t + "HttpCheck post request is error!!!" + e);
} else c.default.warn(t + "HttpCheck post  request is error!!!"); else c.default.warn(t + "HttpCheck post request is error!!!");
};
i.onerror = function(i) {
c.default.log("HttpCheck post error: " + JSON.stringify(i));
n.retury(!1, t, e, r, o);
n.HttpError(r);
};
i.ontimeout = function() {
c.default.log("HttpCheck post ontimeout: ");
n._onTimeout && n._onTimeout();
n.retury(!1, t, e, r, o);
};
try {
if (e) {
c.default.log("HttpCheck post send: - 0 ");
var a = o ? this.encodeMsg_c(e) : e, s = JSON.stringify(a);
c.default.log("HttpCheck post send: needEncode:" + o);
c.default.log("HttpCheck post send:" + s);
i.send(s);
} else {
c.default.log("HttpCheck post send: null ");
i.send();
}
} catch (t) {
this.HttpError(r);
}
};
t.prototype.HttpError = function(t) {
t && t(-1);
};
t.prototype.retury = function(t, e, r, o, n) {
this._reconnectCount++;
if (this._reconnectCount <= this.ReconnectionCount) t || this.post(e, r, o, n); else {
this._onTimeout && this._onTimeout();
this._reconnectCount = 0;
}
};
t.prototype.makeMsg = function(t, e) {
return {
m: t[0],
f: t[1],
d: e
};
};
t.prototype.encodeMsg_c = function(t) {
var e = {}, r = a.ToolsEx.TObj.deepCopy(t);
if (i.OutConfig.isEncryption) {
var o = a.ToolsEx.Base64.encrypt(JSON.stringify(r), i.OutConfig.encryptionKey, i.OutConfig.encryptionMD5);
o = o.replace(/[\r\n]/g, "");
e[i.OutConfig.encryptionKey] = o;
c.default.log("encodeMsg_c", e);
return e;
}
return r;
};
t.prototype.uncodeMsg_c = function(t) {
var e = t;
if (null != t[i.OutConfig.encryptionKey]) {
var r = a.ToolsEx.Base64.decrypt(t[i.OutConfig.encryptionKey], i.OutConfig.encryptionKey, i.OutConfig.encryptionMD5);
e = JSON.parse(r);
c.default.log("uncodeMsg_c", e);
}
return e;
};
t.prototype.sendGetGameService = function(t, e) {
this.m_ad_type = t;
var r, n = c.default.getPackageName(), s = c.default.getVersionCode(), l = cc.sys.localStorage.getItem("CommonUserUid");
null == l && (l = "");
var p = o.ToolPartOne.GenerateID(a.ToolsEx.TNumber.randomNumber(2, 50)), u = "0", f = c.default.getTextFromClipboard();
null != f && "" != f && (u = a.ToolsEx.TStr.getQueryString("invite_id", f));
r = cc.sys.isNative ? c.default.getOnlyID() : "web_imei";
var d = c.default.getNetworkOperatorMCC(), h = this.makeMsg([ "Server", "game_service" ], {
p: n,
c: "Sagar",
v: s,
i: r,
u: l,
ad: t,
invite_u: u,
mcc: d,
none: p
});
this.post(i.OutConfig.HotUpdateUrl, h, e, i.OutConfig.isEncryption);
};
t._Instance = null;
return t;
}();
r.default = s;
cc._RF.pop();
}, {
"../Tools/ToolPartOne": "ToolPartOne",
"../jslib/Base64Out": "Base64Out",
"./OutConfig": "OutConfig",
"./PhoneSdk": "PhoneSdk",
"./ToolsEx": "ToolsEx"
} ],
LinkedList: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "f65d4kTF+dLoYu7SmL3Vtci", "LinkedList");
var o = this && this.__decorate || function(t, e, r, o) {
var n, i = arguments.length, c = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, r, o); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (c = (i < 3 ? n(c) : i > 3 ? n(e, r, c) : n(e, r)) || c);
return i > 3 && c && Object.defineProperty(e, r, c), c;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.LinkNode = void 0;
var n = cc._decorator, i = n.ccclass, c = (n.property, function() {
function t(t) {
this.data = t;
this.prev = null;
this.next = null;
}
return o([ i ], t);
}());
r.LinkNode = c;
var a = function() {
function t() {
this.head = null;
this.size = 0;
}
t.prototype.initCurrent = function() {
this.current = this.head;
};
t.prototype.append = function(t) {
var e = t;
if (null === this.head) {
this.head = e;
e.prev = e;
e.next = e;
} else {
var r = this.head.prev;
r.next = e;
e.prev = r;
e.next = this.head;
this.head.prev = e;
}
this.size++;
};
t.prototype.remove = function(t) {
if (0 === this.size) return !1;
var e = this.head, r = !1;
if (1 === this.size && this.head.data === t) {
this.head = null;
this.size--;
return !0;
}
do {
if (e.data === t) {
e.prev.next = e.next;
e.next.prev = e.prev;
e === this.head && (this.head = e.next);
this.size--;
r = !0;
break;
}
e = e.next;
} while (e !== this.head);
return r;
};
t.prototype.print = function() {
if (0 === this.size) return "Empty List";
var t = this.head;
console.log(t.data);
console.log(t.next.data);
console.log(t.next.next.data);
return "";
};
t.prototype.getSize = function() {
return this.size;
};
return t;
}();
r.default = a;
cc._RF.pop();
}, {} ],
NodeMove: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "e6772ovGY5AgbQYKX0TliJ0", "NodeMove");
var o, n = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), i = this && this.__decorate || function(t, e, r, o) {
var n, i = arguments.length, c = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, r, o); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (c = (i < 3 ? n(c) : i > 3 ? n(e, r, c) : n(e, r)) || c);
return i > 3 && c && Object.defineProperty(e, r, c), c;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var c = t("./HorseCtrl"), a = cc._decorator, s = a.ccclass, l = a.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label = null;
e.moveSpeed = 10;
e.farDistance = 1500;
e.horseRoot = null;
return e;
}
e.prototype.start = function() {
var t = this;
cc.game.once("RaceStart", function() {
t.raceStart();
});
this.moveSpeed = 0;
};
e.prototype.raceStart = function() {
var t = this, e = [];
this.schedule(function() {
t.horseRoot.children.forEach(function(t) {
e.push(t.getComponent(c.default).moveSpeed);
});
console.log(t.findMax(e), "最快的速度");
t.moveSpeed = t.findMax(e) - 100;
}, .2, 100, 0);
};
e.prototype.update = function(t) {
this.node.x > this.farDistance && (this.moveSpeed = 0);
this.node.x += this.moveSpeed * t;
};
e.prototype.findMax = function(t) {
if (0 !== t.length) {
for (var e = t[0], r = 1; r < t.length; r++) t[r] > e && (e = t[r]);
return e;
}
};
i([ l(cc.Label) ], e.prototype, "label", void 0);
i([ l ], e.prototype, "moveSpeed", void 0);
i([ l ], e.prototype, "farDistance", void 0);
i([ l(cc.Node) ], e.prototype, "horseRoot", void 0);
return i([ s ], e);
}(cc.Component);
r.default = p;
cc._RF.pop();
}, {
"./HorseCtrl": "HorseCtrl"
} ],
OutConfig: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "76e9axzLo9KhIKPDlTRYj2Z", "OutConfig");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.OutConfig = void 0;
r.OutConfig = {
HotUpdateUrl: "http://thf.ylqupzun.xyz/ptr",
encryptionKey: "G524MAsVC19PolL0A6Eufk",
encryptionMD5: "g1ttzoePnqReEV8IEEYSevMpJCdlYcuf",
PackageName: "com.amo.p88zz.zlim",
isEncryption: !0
};
cc._RF.pop();
}, {} ],
PanelCtrl: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "760d09ls1FIWaXzbGY7C16T", "PanelCtrl");
var o, n = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), i = this && this.__decorate || function(t, e, r, o) {
var n, i = arguments.length, c = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, r, o); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (c = (i < 3 ? n(c) : i > 3 ? n(e, r, c) : n(e, r)) || c);
return i > 3 && c && Object.defineProperty(e, r, c), c;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.help = null;
e.result = null;
return e;
}
e.prototype.start = function() {};
e.prototype.openHelp = function() {
this.help.active = !0;
};
e.prototype.closeHelp = function() {
this.help.active = !1;
};
e.prototype.openResult = function() {
this.result.active = !0;
};
e.prototype.closeResult = function() {
this.result.active = !1;
};
e.prototype.playAgain = function() {
cc.director.loadScene("crazy8");
};
i([ s(cc.Node) ], e.prototype, "help", void 0);
i([ s(cc.Node) ], e.prototype, "result", void 0);
return i([ a ], e);
}(cc.Component);
r.default = l;
cc._RF.pop();
}, {} ],
PhoneSdk: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "aaa1bDdUjJMKp09OnL20fpk", "PhoneSdk");
Object.defineProperty(r, "__esModule", {
value: !0
});
var o = t("../Script/OutConfig"), n = function() {
function t() {}
t.log = function() {
for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
t.isShowLog && console.log(JSON.stringify(e));
};
t.warn = function() {
for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
t.isShowLog && console.warn(JSON.stringify(e));
};
t.error = function() {
for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
t.isShowLog && console.error(JSON.stringify(e));
};
t.vibrator = function() {
cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative && jsb.reflection.callStaticMethod("ApplyOcApi", "zhengdongjiekou");
};
t.getOnlyID = function() {
var t = "";
cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative && (t = jsb.reflection.callStaticMethod("ApplyOcApi", "getIMEIid"));
var e = cc.sys.localStorage.getItem("EditBoxIMEI");
null != e && null != e && "" != e && (t = e);
return t;
};
t.getDeviceID = function() {
var t = "";
cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative && (t = jsb.reflection.callStaticMethod("ApplyOcApi", "getIMEIid"));
return t;
};
t.getNetworkOperatorMCC = function() {
return cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative ? 406 : 0;
};
t.getTextFromClipboard = function() {
var e = "";
cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative && (e = jsb.reflection.callStaticMethod("SDKWrapper", "getPasteBoard"));
t.log("getTextFromClipboard:" + e);
return e;
};
t.getAFID = function() {
var t = "";
return cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative ? t = jsb.reflection.callStaticMethod("ApplyOcApi", "getAppsFid") : t;
};
t.getPackageName = function() {
var e = o.OutConfig.PackageName;
t.log("getPackageName : " + e);
return e;
};
t.getVersionCode = function() {
t.log("getVersionCode : 1");
return "1";
};
t.applyAppsFlyerInfo = function() {
return cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative ? jsb.reflection.callStaticMethod("ApplyOcApi", "applyafsource") : cc.sys.isBrowser ? "" : void 0;
};
t.isShowLog = !1;
t.gameVersion = "1.0.0";
t.datakey = "dsfgfgfgfg";
t.sepKey = ";";
return t;
}();
r.default = n;
cc._RF.pop();
}, {
"../Script/OutConfig": "OutConfig"
} ],
PlayerCtrl: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "afdc9afEYJIdY2gmgnlfzJ5", "PlayerCtrl");
var o, n = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), i = this && this.__decorate || function(t, e, r, o) {
var n, i = arguments.length, c = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, r, o); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (c = (i < 3 ? n(c) : i > 3 ? n(e, r, c) : n(e, r)) || c);
return i > 3 && c && Object.defineProperty(e, r, c), c;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.PlayerType = void 0;
var c, a = t("./Card"), s = [ "Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun", "Reyansh", "Muhammad", "Sai", "Arnav", "Ayaan", "Krishna", "Ishaan", "Shaurya", "Atharva", "Advait", "Pranav", "Advaith", "Aaryan", "Dhruv", "Kabir", "Ritvik", "Aarush", "Kian", "Darsh", "Veer", "Raj", "Mohammed", "Aryan", "Veer", "Samarth", "Yuvan", "Aarav", "Rudra", "Reyansh", "Siddharth", "Aaditya", "Sarvesh", "Ayaansh", "Krish", "Naksh", "Armaan", "Aadvik", "Ansh", "Ishaan", "Rohan", "Arhaan", "Dev", "Arjun", "Aarush", "Vivaan", "Adhiraj", "Anay", "Daksh", "Aarav", "Vihaan", "Arnav", "Ishaan", "Aarush", "Krishna", "Sai", "Arjun", "Shaurya", "Atharv", "Ayaan", "Aryan", "Rohan", "Ansh", "Aaditya", "Veer", "Samarth", "Rudra", "Sarvesh", "Reyansh", "Kabir", "Mohammed", "Arhaan", "Dhruv", "Kian", "Yuvan", "Raj", "Advait", "Ritvik", "Darsh", "Pranav", "Aadvik", "Aaryan", "Dev", "Naksh", "Armaan", "Ayaansh" ];
(function(t) {
t[t.Player = 1] = "Player";
t[t.Computer = 2] = "Computer";
})(c = r.PlayerType || (r.PlayerType = {}));
var l = cc._decorator, p = l.ccclass, u = l.property, f = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.headIconAtlas = null;
e.headIcon = null;
e.playerName = null;
e.handCards = null;
e.playerCoin = null;
e.playerCoinNum = 0;
e.playerType = c.Player;
return e;
}
e.prototype.onLoad = function() {
var t = this.headIconAtlas.getSpriteFrames().length;
if (this.playerType == c.Computer) {
this.playerCoinNum = 1e6 * Math.random() + 1e6;
this.playerName.string = s[Math.floor(Math.random() * s.length)];
this.headIcon.spriteFrame = this.headIconAtlas.getSpriteFrames()[Math.floor(Math.random() * t)];
} else {
this.playerName.string = "Dawei";
var e = cc.sys.localStorage.getItem("money");
this.playerCoinNum = e ? parseInt(e) : 1e6;
}
this.playerCoin.string = this.playerCoinNum.toFixed(0);
};
e.prototype.start = function() {};
e.prototype.activeCardsClickEvent = function() {
this.handCards.children.forEach(function(t) {
t.getComponent(a.default).enableCardClickEvent();
});
};
e.prototype.disableCardsClickEvent = function() {
this.handCards.children.forEach(function(t) {
t.getComponent(a.default).disableCardClickEvent();
});
};
i([ u(cc.SpriteAtlas) ], e.prototype, "headIconAtlas", void 0);
i([ u(cc.Sprite) ], e.prototype, "headIcon", void 0);
i([ u(cc.Label) ], e.prototype, "playerName", void 0);
i([ u(cc.Node) ], e.prototype, "handCards", void 0);
i([ u(cc.Label) ], e.prototype, "playerCoin", void 0);
i([ u({
type: cc.Enum(c)
}) ], e.prototype, "playerType", void 0);
return i([ p ], e);
}(cc.Component);
r.default = f;
cc._RF.pop();
}, {
"./Card": "Card"
} ],
ProgressMgr: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "67a714KyjJJhZTifrvtBqS/", "ProgressMgr");
var o = this && this.__decorate || function(t, e, r, o) {
var n, i = arguments.length, c = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, r, o); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (c = (i < 3 ? n(c) : i > 3 ? n(e, r, c) : n(e, r)) || c);
return i > 3 && c && Object.defineProperty(e, r, c), c;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ProgressHandler = r.Handler = void 0;
var n = t("./LinkedList"), i = cc._decorator, c = i.ccclass, a = (i.property, function() {
function t(t, e) {
for (var r = [], o = 2; o < arguments.length; o++) r[o - 2] = arguments[o];
this.callback = t;
this.context = e;
this.args = r;
}
t.prototype.invoke = function() {
for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
t.length > 0 && (this.args = t);
this.callback.apply(this.context, this.args);
};
return o([ c ], t);
}());
r.Handler = a;
r.ProgressHandler = function(t, e, r) {
this.enter = null;
this.stay = null;
this.exit = null;
this.linkList = new n.default();
this.enter = t;
this.stay = e;
this.exit = r;
this.linkList.append(t);
this.linkList.append(e);
this.linkList.append(r);
this.linkList.head.prev.next = null;
this.linkList.print();
};
var s = function() {
function t(t) {
var e = this;
this.progress = new n.default();
t.forEach(function(t) {
e.progress.append(t);
});
this.progress.initCurrent();
console.log(this.progress);
}
t.prototype.startProgress = function() {
this.progress.head.data.invoke();
};
t.prototype.next = function() {
this.progress.current = this.progress.current.next;
this.progress.current.data.invoke();
console.log(this.progress.current, "next之后current");
};
return t;
}();
r.default = s;
cc._RF.pop();
}, {
"./LinkedList": "LinkedList"
} ],
SoundCtrl: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "314bdDM99lDy4pUFmxipcSA", "SoundCtrl");
var o, n = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), i = this && this.__decorate || function(t, e, r, o) {
var n, i = arguments.length, c = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, r, o); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (c = (i < 3 ? n(c) : i > 3 ? n(e, r, c) : n(e, r)) || c);
return i > 3 && c && Object.defineProperty(e, r, c), c;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.soundBtnOn = null;
e.soundBtnOff = null;
e.musicBtnOn = null;
e.musicBtnOff = null;
return e;
}
e.prototype.onSoundBtnClick = function() {
if (this.soundBtnOn.active) {
this.soundBtnOn.active = !1;
this.soundBtnOff.active = !0;
} else {
this.soundBtnOn.active = !0;
this.soundBtnOff.active = !1;
}
};
e.prototype.onMusicBtnClick = function() {
if (this.musicBtnOn.active) {
this.musicBtnOn.active = !1;
this.musicBtnOff.active = !0;
} else {
this.musicBtnOn.active = !0;
this.musicBtnOff.active = !1;
}
};
e.prototype.start = function() {};
i([ s(cc.Node) ], e.prototype, "soundBtnOn", void 0);
i([ s(cc.Node) ], e.prototype, "soundBtnOff", void 0);
i([ s(cc.Node) ], e.prototype, "musicBtnOn", void 0);
i([ s(cc.Node) ], e.prototype, "musicBtnOff", void 0);
return i([ a ], e);
}(cc.Component);
r.default = l;
cc._RF.pop();
}, {} ],
ToolPartOne: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "1afe4rSvjJMKqNYGykGvE7Z", "ToolPartOne");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ToolPartOne = void 0;
var o = t("../Script/PhoneSdk");
(function(t) {
var e;
(function(t) {
t[t.ALL = 1] = "ALL";
t[t.FRONT_AND_BACK = 2] = "FRONT_AND_BACK";
t[t.FRONT = 3] = "FRONT";
t[t.BACK = 4] = "BACK";
})(e = t.BlankType || (t.BlankType = {}));
t.GenerateID = function(t) {
for (var e = "", r = 0; r < t; r++) e += Math.floor(10 * Math.random());
return e;
};
t.TObj = {
instanceOf: function(t, e) {
return toString.apply(t) === "[object " + e + "]" || typeof t === e.toLowerCase();
},
toJSON: function(t) {
var e = null;
try {
e = JSON.parse(t);
} catch (e) {
o.default.log("to JSON ERROR=" + t);
}
return e;
},
fmtData: function(t) {
return JSON.stringify(t);
},
deepCopy: function(e) {
if (null == e || {} == e || [] == e) return e;
var r;
if (e instanceof Array) {
r = [];
for (var o in e) if ("function" == typeof e[o]) r[o] = e[o]; else {
var n = "object" == typeof e[o] ? t.TObj.deepCopy(e[o]) : e[o];
r.push(n);
}
} else if (e instanceof Map) {
r = new Map();
e.forEach(function(e, o) {
r.set(o, t.TObj.deepCopy(e));
});
} else {
r = {};
for (var o in e) if ("function" == typeof e[o]) r[o] = e[o]; else {
n = "object" == typeof e[o] ? t.TObj.deepCopy(e[o]) : e[o];
r[o] = n;
}
}
return r;
}
};
t.TStr = {
trim: function(t, r) {
switch (r) {
case e.ALL:
return t.replace(/\s+/g, "");

case e.FRONT_AND_BACK:
return t.replace(/(^\s*)|(\s*$)/g, "");

case e.FRONT:
return t.replace(/(^\s*)/g, "");

case e.BACK:
return t.replace(/(\s*$)/g, "");

default:
return t;
}
},
changeCase: function(t, e) {
switch (e) {
case 1:
return t.replace(/^(\w)(\w+)/, function(t, e, r) {
return e.toUpperCase() + r.toLowerCase();
});

case 2:
return t.replace(/^(\w)(\w+)/, function(t, e, r) {
return e.toLowerCase() + r.toUpperCase();
});

case 3:
return function() {
var e = "";
t.split("").forEach(function(t) {
/^([a-z]+)/.test(t) ? e += t.toUpperCase() : /^([A-Z]+)/.test(t) ? e += t.toLowerCase() : e += t;
});
return e;
}();

case 4:
return t.toUpperCase();

case 5:
return t.toLowerCase();

default:
return t;
}
},
repeatStr: function(t, e) {
for (var r = "", o = 0; o < e; o++) r += t;
return r;
},
replaceAll: function(t, e, r) {
var o = new RegExp(e, "g");
return t.replace(o, r);
},
replaceString: function(e, r) {
Object.keys(r).forEach(function(o) {
e = t.TStr.replaceAll(e, "%{" + o + "}", r[o]);
});
return e;
},
replaceStr: function(t, e, r, o) {
var n = "", i = null, c = o || "*";
if (3 === e.length && 0 === r) {
n = "(\\w{" + e[0] + "})\\w{" + e[1] + "}(\\w{" + e[2] + "})";
i = new RegExp(n);
var a = this.repeatStr(c, e[1]);
return t.replace(i, "$1" + a + "$2");
}
if (3 === e.length && 1 === r) {
n = "\\w{" + e[0] + "}(\\w{" + e[1] + "})\\w{" + e[2] + "}";
i = new RegExp(n);
var s = this.repeatSte(c, e[0]), l = this.repeatSte(c, e[2]);
return t.replace(i, s + "$1" + l);
}
if (1 === e.length && 0 == r) {
n = "(^\\w{" + e[0] + "})";
i = new RegExp(n);
a = this.repeatSte(c, e[0]);
return t.replace(i, a);
}
if (1 === e.length && 1 == r) {
n = "(\\w{" + e[0] + "}$)";
i = new RegExp(n);
a = this.repeatSte(c, e[0]);
return t.replace(i, a);
}
},
checkType: function(t, e) {
switch (e) {
case "email":
return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(t);

case "phone":
return /^1[3|4|5|7|8][0-9]{9}$/.test(t);

case "tel":
return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(t);

case "number":
return /^[0-9]+$/.test(t);

case "english":
return /^[a-zA-Z\s]+$/.test(t);

case "chinese":
return /^[\u4E00-\u9FA5]+$/.test(t);

case "lower":
return /^[a-z]+$/.test(t);

case "upper":
return /^[A-Z]+$/.test(t);

case "dd/mm/yyyy":
return /^(\d{2})(\/)(\d{2})(\/)(\d{4})$/.test(t);

case "indiaPhone":
return /^[0-9]{10}$/.test(t);

default:
return !0;
}
},
hasNumber: function(t) {
return /\d/.test(t);
},
checkPwd: function(t) {
var e = 0;
if (t.length < 6) return e;
/[0-9]/.test(t) && e++;
/[a-z]/.test(t) && e++;
/[A-Z]/.test(t) && e++;
/[\.|-|_]/.test(t) && e++;
return e;
},
countStr: function(t, e) {
return t.split(e).length - 1;
},
stringFormat: function() {
if (!(arguments.length < 2)) {
var e = arguments[0];
if (2 == arguments.length && t.TObj.instanceOf(arguments[1], "Array")) for (var r = arguments[1], o = 1; o <= r.length; o++) {
var n = new RegExp("\\{" + o + "\\}", "g");
e = e.replace(n, r[o - 1]);
} else for (o = 1; o < arguments.length; o++) {
n = new RegExp("\\{" + o + "\\}", "g");
e = e.replace(n, arguments[o]);
}
return e;
}
},
SubStr: function(t, e, r, o) {
if (-1 == e.indexOf(r)) return e;
switch (t) {
case 1:
return e.substr(e.indexOf(r), o);

case 2:
return e.substr(e.lastIndexOf(r), o);

case 3:
return e.substr(r.length, o);

default:
return e;
}
},
ellipsisString: function(t, e) {
return t.length > e ? t.substr(0, e) + "..." : t;
},
getQueryString: function(t, e) {
var r = t.toLowerCase(), o = new RegExp("(" + r + ")=([^&]*)(&|$)", "i"), n = e.match(o);
return null != n ? decodeURI(n[2]) : null;
}
};
})(r.ToolPartOne || (r.ToolPartOne = {}));
cc._RF.pop();
}, {
"../Script/PhoneSdk": "PhoneSdk"
} ],
ToolPartThree: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "68127b6+4ZIV5Su62pv6NMt", "ToolPartThree");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ToolPartThree = void 0;
(r.ToolPartThree || (r.ToolPartThree = {})).JSMD5 = {
md5: function(t) {
function e(t, e) {
return t << e | t >>> 32 - e;
}
function r(t, e) {
var r, o, n, i, c;
n = 2147483648 & t;
i = 2147483648 & e;
c = (1073741823 & t) + (1073741823 & e);
return (r = 1073741824 & t) & (o = 1073741824 & e) ? 2147483648 ^ c ^ n ^ i : r | o ? 1073741824 & c ? 3221225472 ^ c ^ n ^ i : 1073741824 ^ c ^ n ^ i : c ^ n ^ i;
}
function o(t, e, r) {
return t & e | ~t & r;
}
function n(t, e, r) {
return t & r | e & ~r;
}
function i(t, e, r) {
return t ^ e ^ r;
}
function c(t, e, r) {
return e ^ (t | ~r);
}
function a(t, n, i, c, a, s, l) {
t = r(t, r(r(o(n, i, c), a), l));
return r(e(t, s), n);
}
function s(t, o, i, c, a, s, l) {
t = r(t, r(r(n(o, i, c), a), l));
return r(e(t, s), o);
}
function l(t, o, n, c, a, s, l) {
t = r(t, r(r(i(o, n, c), a), l));
return r(e(t, s), o);
}
function p(t, o, n, i, a, s, l) {
t = r(t, r(r(c(o, n, i), a), l));
return r(e(t, s), o);
}
function u(t) {
var e, r = "", o = "";
for (e = 0; e <= 3; e++) r += (o = "0" + (t >>> 8 * e & 255).toString(16)).substr(o.length - 2, 2);
return r;
}
var f, d, h, y, g, v, _, m, C, b = Array();
b = function(t) {
for (var e, r = t.length, o = r + 8, n = 16 * ((o - o % 64) / 64 + 1), i = Array(n - 1), c = 0, a = 0; a < r; ) {
c = a % 4 * 8;
i[e = (a - a % 4) / 4] = i[e] | t.charCodeAt(a) << c;
a++;
}
c = a % 4 * 8;
i[e = (a - a % 4) / 4] = i[e] | 128 << c;
i[n - 2] = r << 3;
i[n - 1] = r >>> 29;
return i;
}(t = function(t) {
t = t.replace(/\r\n/g, "\n");
for (var e = "", r = 0; r < t.length; r++) {
var o = t.charCodeAt(r);
if (o < 128) e += String.fromCharCode(o); else if (o > 127 && o < 2048) {
e += String.fromCharCode(o >> 6 | 192);
e += String.fromCharCode(63 & o | 128);
} else {
e += String.fromCharCode(o >> 12 | 224);
e += String.fromCharCode(o >> 6 & 63 | 128);
e += String.fromCharCode(63 & o | 128);
}
}
return e;
}(t));
v = 1732584193;
_ = 4023233417;
m = 2562383102;
C = 271733878;
for (f = 0; f < b.length; f += 16) {
d = v;
h = _;
y = m;
g = C;
v = a(v, _, m, C, b[f + 0], 7, 3614090360);
C = a(C, v, _, m, b[f + 1], 12, 3905402710);
m = a(m, C, v, _, b[f + 2], 17, 606105819);
_ = a(_, m, C, v, b[f + 3], 22, 3250441966);
v = a(v, _, m, C, b[f + 4], 7, 4118548399);
C = a(C, v, _, m, b[f + 5], 12, 1200080426);
m = a(m, C, v, _, b[f + 6], 17, 2821735955);
_ = a(_, m, C, v, b[f + 7], 22, 4249261313);
v = a(v, _, m, C, b[f + 8], 7, 1770035416);
C = a(C, v, _, m, b[f + 9], 12, 2336552879);
m = a(m, C, v, _, b[f + 10], 17, 4294925233);
_ = a(_, m, C, v, b[f + 11], 22, 2304563134);
v = a(v, _, m, C, b[f + 12], 7, 1804603682);
C = a(C, v, _, m, b[f + 13], 12, 4254626195);
m = a(m, C, v, _, b[f + 14], 17, 2792965006);
v = s(v, _ = a(_, m, C, v, b[f + 15], 22, 1236535329), m, C, b[f + 1], 5, 4129170786);
C = s(C, v, _, m, b[f + 6], 9, 3225465664);
m = s(m, C, v, _, b[f + 11], 14, 643717713);
_ = s(_, m, C, v, b[f + 0], 20, 3921069994);
v = s(v, _, m, C, b[f + 5], 5, 3593408605);
C = s(C, v, _, m, b[f + 10], 9, 38016083);
m = s(m, C, v, _, b[f + 15], 14, 3634488961);
_ = s(_, m, C, v, b[f + 4], 20, 3889429448);
v = s(v, _, m, C, b[f + 9], 5, 568446438);
C = s(C, v, _, m, b[f + 14], 9, 3275163606);
m = s(m, C, v, _, b[f + 3], 14, 4107603335);
_ = s(_, m, C, v, b[f + 8], 20, 1163531501);
v = s(v, _, m, C, b[f + 13], 5, 2850285829);
C = s(C, v, _, m, b[f + 2], 9, 4243563512);
m = s(m, C, v, _, b[f + 7], 14, 1735328473);
v = l(v, _ = s(_, m, C, v, b[f + 12], 20, 2368359562), m, C, b[f + 5], 4, 4294588738);
C = l(C, v, _, m, b[f + 8], 11, 2272392833);
m = l(m, C, v, _, b[f + 11], 16, 1839030562);
_ = l(_, m, C, v, b[f + 14], 23, 4259657740);
v = l(v, _, m, C, b[f + 1], 4, 2763975236);
C = l(C, v, _, m, b[f + 4], 11, 1272893353);
m = l(m, C, v, _, b[f + 7], 16, 4139469664);
_ = l(_, m, C, v, b[f + 10], 23, 3200236656);
v = l(v, _, m, C, b[f + 13], 4, 681279174);
C = l(C, v, _, m, b[f + 0], 11, 3936430074);
m = l(m, C, v, _, b[f + 3], 16, 3572445317);
_ = l(_, m, C, v, b[f + 6], 23, 76029189);
v = l(v, _, m, C, b[f + 9], 4, 3654602809);
C = l(C, v, _, m, b[f + 12], 11, 3873151461);
m = l(m, C, v, _, b[f + 15], 16, 530742520);
v = p(v, _ = l(_, m, C, v, b[f + 2], 23, 3299628645), m, C, b[f + 0], 6, 4096336452);
C = p(C, v, _, m, b[f + 7], 10, 1126891415);
m = p(m, C, v, _, b[f + 14], 15, 2878612391);
_ = p(_, m, C, v, b[f + 5], 21, 4237533241);
v = p(v, _, m, C, b[f + 12], 6, 1700485571);
C = p(C, v, _, m, b[f + 3], 10, 2399980690);
m = p(m, C, v, _, b[f + 10], 15, 4293915773);
_ = p(_, m, C, v, b[f + 1], 21, 2240044497);
v = p(v, _, m, C, b[f + 8], 6, 1873313359);
C = p(C, v, _, m, b[f + 15], 10, 4264355552);
m = p(m, C, v, _, b[f + 6], 15, 2734768916);
_ = p(_, m, C, v, b[f + 13], 21, 1309151649);
v = p(v, _, m, C, b[f + 4], 6, 4149444226);
C = p(C, v, _, m, b[f + 11], 10, 3174756917);
m = p(m, C, v, _, b[f + 2], 15, 718787259);
_ = p(_, m, C, v, b[f + 9], 21, 3951481745);
v = r(v, d);
_ = r(_, h);
m = r(m, y);
C = r(C, g);
}
return (u(v) + u(_) + u(m) + u(C)).toLowerCase();
}
};
cc._RF.pop();
}, {} ],
ToolPartTwo: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "ec7ec5l4QtKRbJMitcaJYa9", "ToolPartTwo");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ToolPartTwo = void 0;
var o = t("../Script/PhoneSdk"), n = t("./ToolPartOne"), i = t("./ToolPartThree"), c = t("../Script/ToolsEx");
(function(t) {
t.TNumber = {
toThousands: function(t) {
return (t || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
},
NumFormat: function(t) {
if (0 === t) return "0 B";
var e, r = 1e3, o = [ "", "k", "m", "b", "t", "aa", "ab", "ac" ], n = Math.floor(Math.log(t) / Math.log(r));
if (0 == n) {
e = t / Math.pow(r, n);
e = Math.floor(100 * e) / 100;
} else {
e = n < o.length ? t / Math.pow(r, n) : t / Math.pow(r, n) + Math.pow(r, n - (o.length - 1));
e = n >= o.length ? Math.floor(100 * e) / 100 + o[o.length - 1] : Math.floor(100 * e) / 100 + o[n];
}
return e;
},
MoneyNumFormat: function(t) {
if (!t || isNaN(t) || t < 0) return "0";
if (t < 1e3) return c.ToolsEx.TNumber.numFixed(t, 0);
if (t >= 1e3 && t < 1e5) {
t = Math.floor(t);
return this.toThousands(t);
}
if (t >= 1e5 && t < 1e6) return c.ToolsEx.TNumber.numFixed(t / 1e5, 2) + "L";
if (t >= 1e6 && t < 1e7) return c.ToolsEx.TNumber.numFixed(t / 1e5, 1) + "L";
var e = Math.floor(t / 1e7);
return this.toThousands(e) + "CR";
},
randomFloat: function(t, e) {
return 2 === arguments.length ? t + Math.random() * (e - t) : 1 === arguments.length ? Math.random() * t : 255 * Math.random();
},
randomNumber: function(t, e) {
return 2 === arguments.length ? Math.round(t + Math.random() * (e - t)) : 1 === arguments.length ? Math.round(Math.random() * t) : Math.round(255 * Math.random());
},
randomMinMax: function(t, e) {
return Math.floor(Math.random() * (e - t + 1) + t);
},
randomColor: function() {
return "rgb(" + this.randomNumber(255) + "," + this.randomNumber(255) + "," + this.randomNumber(255) + ")";
},
passNum: function(t, e) {
switch (t) {
case "int":
return ~~e;

case "float":
return 1 * e;

default:
o.default.log(t + "Not Find");
}
},
addPreZero: function(t, e) {
for (var r = (t + "").length, o = "", n = 0; n < e - r; n++) o += "0";
return o + t;
},
changeBytes: function(t) {
var e, r = e = t < 102.4 ? t.toFixed(2) + "B" : t < 104857.6 ? (t / 1024).toFixed(2) + "KB" : t < 107374182.4 ? (t / 1048576).toFixed(2) + "MB" : (t / 1073741824).toFixed(2) + "GB", o = r.indexOf(".");
return "00" == r.substr(o + 1, 2) ? r.substring(0, o) + r.substr(o + 3, 2) : e;
},
num2thousand: function(t) {
return 1e3 * t;
},
num2single: function(t) {
return t / 1e3;
},
numFixed: function(t, e) {
if (e <= 0) return Math.floor(t);
var r = Math.pow(10, e);
return Math.floor(t * r) / r;
},
simplifyNumber: function(t) {
return t >= 1e6 ? this.numFixed(t / 1e6, 1) + "m" : t >= 1e3 ? this.numFixed(t / 1e3, 1) + "k" : t;
},
formatToTwoDecimalString: function(t) {
return Number(t.toFixed(2)).toString();
}
};
t.Base64 = {
uint8arrayToBase64: function(t) {
for (var e, r = 0, o = t.length, n = ""; r < o; ) {
e = t.subarray(r, Math.min(r + 32768, o));
n += String.fromCharCode.apply(null, e);
r += 32768;
}
return "data:image/png;base64," + btoa(n);
},
base64ToUint8Array: function(t) {
for (var e = ((t = n.ToolPartOne.TStr.replaceAll(t, "data:image/png;base64,", "")) + "=".repeat((4 - t.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), r = window.atob(e), o = new Uint8Array(r.length), i = 0; i < r.length; ++i) o[i] = r.charCodeAt(i);
return o;
},
encode: function(t, e) {
var r = window.base64Ex;
return r.encode(r.encode(t) + i.ToolPartThree.JSMD5.md5(e));
},
decode: function(t, e) {
var r = window.base64Ex, o = r.decode(t).replace(i.ToolPartThree.JSMD5.md5(e), "");
return r.decode(o);
},
encrypt_chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.",
encrypt: function(e, r, o, n, c) {
void 0 === n && (n = 8);
void 0 === c && (c = 16);
for (var a = t.TNumber.randomMinMax(0, 64), s = t.TNumber.randomMinMax(0, 64), l = t.TNumber.randomMinMax(0, 64), p = t.Base64.encrypt_chars[a], u = t.Base64.encrypt_chars[s], f = t.Base64.encrypt_chars[l], d = a + s + l, h = 0, y = 0; null != r[y]; ) h += r[y++].charCodeAt(0);
for (var g = i.ToolPartThree.JSMD5.md5(i.ToolPartThree.JSMD5.md5(i.ToolPartThree.JSMD5.md5(r + p) + u + o) + f).substr(d % n, h % n + c), v = "", _ = 0, m = 0, C = (e = (e = window.base64Ex.encode(e)).replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, ".")).length, b = g.length, O = 0; O < C; O++) {
m = m == b ? 0 : m;
_ = (d + t.Base64.encrypt_chars.indexOf(e[O]) + g[m++].charCodeAt(0)) % 64;
v += t.Base64.encrypt_chars[_];
}
var P = v.length;
P++;
v = v.slice(0, s % P) + f + v.slice(s % P);
P++;
v = v.slice(0, a % P) + u + v.slice(a % P);
P++;
return v.slice(0, h % P) + p + v.slice(h % P);
},
decrypt: function(e, r, o, n, c) {
void 0 === n && (n = 8);
void 0 === c && (c = 16);
for (var a = 0, s = 0, l = e.length; null != r[s]; ) a += r[s++].charCodeAt(0);
var p = e[a % l], u = t.Base64.encrypt_chars.indexOf(p), f = (e = e.substr(0, a % l) + e.substr(a % l + 1))[u % --l], d = t.Base64.encrypt_chars.indexOf(f), h = (e = e.substr(0, u % l) + e.substr(u % l + 1))[d % --l], y = t.Base64.encrypt_chars.indexOf(h);
e = e.substr(0, d % l) + e.substr(d % l + 1);
l--;
var g = u + d + y, v = i.ToolPartThree.JSMD5.md5(i.ToolPartThree.JSMD5.md5(i.ToolPartThree.JSMD5.md5(r + p) + f + o) + h).substr(g % n, a % n + c), _ = "", m = 0, C = 0;
l = e.length;
for (var b = v.length, O = 0; O < l; O++) {
C = C == b ? 0 : C;
m = t.Base64.encrypt_chars.indexOf(e[O]) - g - v[C++].charCodeAt(0);
for (;m < 0; ) m += 64;
_ += t.Base64.encrypt_chars[m];
}
_ = _.replace(/\-/g, "+").replace(/\_/g, "/").replace(/\./g, "=");
return (_ = window.base64Ex.decode(_)).trim().replace(/\x00/g, "");
}
};
})(r.ToolPartTwo || (r.ToolPartTwo = {}));
cc._RF.pop();
}, {
"../Script/PhoneSdk": "PhoneSdk",
"../Script/ToolsEx": "ToolsEx",
"./ToolPartOne": "ToolPartOne",
"./ToolPartThree": "ToolPartThree"
} ],
ToolsEx: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "7603euKicJNC4ytB7Glx8Mr", "ToolsEx");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ToolsEx = void 0;
var o = t("../Tools/ToolPartOne"), n = t("../Tools/ToolPartTwo");
(function(t) {
(function(t) {
t[t.ALL = 1] = "ALL";
t[t.FRONT_AND_BACK = 2] = "FRONT_AND_BACK";
t[t.FRONT = 3] = "FRONT";
t[t.BACK = 4] = "BACK";
})(t.BlankType || (t.BlankType = {}));
t.TObj = o.ToolPartOne.TObj;
t.TStr = o.ToolPartOne.TStr;
t.TNumber = n.ToolPartTwo.TNumber;
t.Base64 = n.ToolPartTwo.Base64;
})(r.ToolsEx || (r.ToolsEx = {}));
cc._RF.pop();
}, {
"../Tools/ToolPartOne": "ToolPartOne",
"../Tools/ToolPartTwo": "ToolPartTwo"
} ],
Utils: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "e7984ROF11LnYchK9YL1juu", "Utils");
var o = this && this.__decorate || function(t, e, r, o) {
var n, i = arguments.length, c = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, r, o); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (c = (i < 3 ? n(c) : i > 3 ? n(e, r, c) : n(e, r)) || c);
return i > 3 && c && Object.defineProperty(e, r, c), c;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var n = cc._decorator, i = n.ccclass, c = (n.property, function() {
function t() {}
t.changeParentWithoutChangingWorldPosition = function(t, e) {
var r = t.convertToWorldSpaceAR(cc.Vec2.ZERO), o = e.convertToNodeSpaceAR(r);
t.scale, t.rotation;
t.parent = e;
t.setPosition(o);
};
return o([ i ], t);
}());
r.default = c;
cc._RF.pop();
}, {} ],
fullScreenBgShell: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "e2100ffoE9MyKeRuvzFx+DV", "fullScreenBgShell");
var o, n = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), i = this && this.__decorate || function(t, e, r, o) {
var n, i = arguments.length, c = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, r, o); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (c = (i < 3 ? n(c) : i > 3 ? n(e, r, c) : n(e, r)) || c);
return i > 3 && c && Object.defineProperty(e, r, c), c;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = (c.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.start = function() {
var t, e = this.node, r = cc.view.getDesignResolutionSize().width, o = cc.view.getDesignResolutionSize().height, n = cc.view.getVisibleSizeInPixel().width, i = cc.view.getVisibleSizeInPixel().height;
t = n / i >= r / o ? n / i / (r / o) : i / n * (r / o);
e.setScale(750 * t / 720, 750 * t / 720, 750 * t / 720);
};
return i([ a ], e);
}(cc.Component));
r.default = s;
cc._RF.pop();
}, {} ]
}, {}, [ "Entry", "GameLoad", "HttpCheck", "OutConfig", "PhoneSdk", "ToolsEx", "fullScreenBgShell", "ToolPartOne", "ToolPartThree", "ToolPartTwo", "Base64Out", "AppleScale", "GameEvent", "LinkedList", "ProgressMgr", "Utils", "Card", "Crazy8", "Crazy8Loading", "PanelCtrl", "PlayerCtrl", "SoundCtrl", "HorseCtrl", "HorseRace", "NodeMove" ]);