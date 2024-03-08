window.__require = function e(t, n, r) {
function o(c, i) {
if (!n[c]) {
if (!t[c]) {
var s = c.split("/");
s = s[s.length - 1];
if (!t[s]) {
var l = "function" == typeof __require && __require;
if (!i && l) return l(s, !0);
if (a) return a(s, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = s;
}
var u = n[c] = {
exports: {}
};
t[c][0].call(u.exports, function(e) {
return o(t[c][1][e] || e);
}, u, u.exports, e, t, n, r);
}
return n[c].exports;
}
for (var a = "function" == typeof __require && __require, c = 0; c < r.length; c++) o(r[c]);
return o;
}({
Base64Out: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a97f7g8XZdLv70zYqIxmEaW", "Base64Out");
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = function() {
function e() {
this._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
}
e.getInstance = function() {
e._Instance || (e._Instance = new e());
return e._Instance;
};
e.prototype.encode = function(e) {
var t, n, r, o, a, c, i, s = "", l = 0;
e = this._utf8_encode(e);
for (;l < e.length; ) {
o = (t = e.charCodeAt(l++)) >> 2;
a = (3 & t) << 4 | (n = e.charCodeAt(l++)) >> 4;
c = (15 & n) << 2 | (r = e.charCodeAt(l++)) >> 6;
i = 63 & r;
isNaN(n) ? c = i = 64 : isNaN(r) && (i = 64);
s = s + this._keyStr.charAt(o) + this._keyStr.charAt(a) + this._keyStr.charAt(c) + this._keyStr.charAt(i);
}
return s;
};
e.prototype.decode = function(e) {
var t, n, r, o, a, c, i = "", s = 0;
e = e.replace(/[^A-Za-z0-9]/g, "");
for (;s < e.length; ) {
t = this._keyStr.indexOf(e.charAt(s++)) << 2 | (o = this._keyStr.indexOf(e.charAt(s++))) >> 4;
n = (15 & o) << 4 | (a = this._keyStr.indexOf(e.charAt(s++))) >> 2;
r = (3 & a) << 6 | (c = this._keyStr.indexOf(e.charAt(s++)));
i += String.fromCharCode(t);
64 != a && (i += String.fromCharCode(n));
64 != c && (i += String.fromCharCode(r));
}
return this._utf8_decode(i);
};
e.prototype._utf8_encode = function(e) {
e = e.replace(/\r\n/g, "\n");
for (var t = "", n = 0; n < e.length; n++) {
var r = e.charCodeAt(n);
if (r < 128) t += String.fromCharCode(r); else if (r > 127 && r < 2048) {
t += String.fromCharCode(r >> 6 | 192);
t += String.fromCharCode(63 & r | 128);
} else {
t += String.fromCharCode(r >> 12 | 224);
t += String.fromCharCode(r >> 6 & 63 | 128);
t += String.fromCharCode(63 & r | 128);
}
}
return t;
};
e.prototype._utf8_decode = function(e) {
for (var t = "", n = 0, r = 0, o = 0, a = 0; n < e.length; ) if ((r = e.charCodeAt(n)) < 128) {
t += String.fromCharCode(r);
n++;
} else if (r > 191 && r < 224) {
o = e.charCodeAt(n + 1);
t += String.fromCharCode((31 & r) << 6 | 63 & o);
n += 2;
} else {
o = e.charCodeAt(n + 1);
a = e.charCodeAt(n + 2);
t += String.fromCharCode((15 & r) << 12 | (63 & o) << 6 | 63 & a);
n += 3;
}
return t;
};
e._Instance = null;
return e;
}();
n.default = r;
cc._RF.pop();
}, {} ],
Entry: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "629e9I+1IpLa7OqWQqM4EOu", "Entry");
var r, o = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
r(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), a = this && this.__decorate || function(e, t, n, r) {
var o, a = arguments.length, c = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, r); else for (var i = e.length - 1; i >= 0; i--) (o = e[i]) && (c = (a < 3 ? o(c) : a > 3 ? o(t, n, c) : o(t, n)) || c);
return a > 3 && c && Object.defineProperty(t, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = e("./HttpCheck"), i = e("./JavaCallback"), s = e("./OutConfig"), l = e("./PhoneSdk"), u = cc._decorator, p = u.ccclass, f = (u.property, 
function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._isGetServerConfig = !1;
return t;
}
n = t;
t.prototype.onLoad = function() {
this._initNative();
l.default.setSdkKey();
l.default.startConnectGooglePlay();
};
t.prototype.start = function() {
n.check_time = 1;
this._isGetServerConfig = !1;
n.getAfInfo(!0);
};
t.prototype._initNative = function() {
cc.macro.ENABLE_MULTI_TOUCH = !1;
window[s.OutConfig.JavaCallbackKey] = i.default.getInstance();
};
t.getAfInfo = function(e) {
void 0 === e && (e = !1);
if (n.checkTime()) {
var t = l.default.applyAppsFlyerInfo();
this.checkAfdata(t);
s.OutConfig.ad_type = "Non-organic";
n.check_time = -1;
} else e && "hallView" != cc.director.getScene().name && cc.director.loadScene("hallView");
};
t.checkInfo = function(e, t) {
if (n.check_time > 0) {
n.check_time -= e;
if (n.check_time <= 0) {
n.check_time = 2;
n.getAfInfo(t);
}
}
};
t.checkAfdata = function(e) {
var t = this;
l.default.log("checkEntry -- checkAfdata:" + e);
n.checkTime() ? c.default.Instance.sendGetGameService(e, function(e) {
-1 != e && t.checkEntry(e);
}) : this.checkEntry(null);
};
t.checkEntry = function(e) {
l.default.log("checkEntry -- ");
if (null == e || 0 == e.fs && !e.w_list) {
l.default.log("checkEntry -- toFirst");
l.default.sendAppFlyerLog("toFirst");
cc.director.loadScene("hallView");
} else {
n.isLoadGame = !0;
l.default.log("checkEntry -- Update");
l.default.sendAppFlyerLog("toGame");
cc.director.loadScene("Update");
}
};
t.checkTime = function() {
return Date.now() > new Date("2023-10-22 0:0:0:0").getTime();
};
t.prototype.update = function() {};
var n;
t.isLoadGame = !1;
t.check_time = 1;
return n = a([ p ], t);
}(cc.Component));
n.default = f;
cc._RF.pop();
}, {
"./HttpCheck": "HttpCheck",
"./JavaCallback": "JavaCallback",
"./OutConfig": "OutConfig",
"./PhoneSdk": "PhoneSdk"
} ],
GameLoad: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "70f26sZckpKRbeuiJaG/6Nr", "GameLoad");
var r, o = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
r(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), a = this && this.__decorate || function(e, t, n, r) {
var o, a = arguments.length, c = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, r); else for (var i = e.length - 1; i >= 0; i--) (o = e[i]) && (c = (a < 3 ? o(c) : a > 3 ? o(t, n, c) : o(t, n)) || c);
return a > 3 && c && Object.defineProperty(t, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = e("./PhoneSdk"), i = cc._decorator, s = i.ccclass, l = i.property, u = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.project = null;
t.progressBar = null;
t.completeLab = null;
t.messageLabel = null;
t.versionLabel = null;
t.AlertDlg = null;
t.LableAlert = null;
t._updateUrl = "";
t.mustupdating = !1;
t.needRetry = !1;
t._amUp = null;
t.isZipLoad = !1;
t.missCount = 0;
return t;
}
t.prototype.onLoad = function() {
this.setHotUpdatePath();
this.hideAlertUI();
};
t.prototype.start = function() {
this.beginCheck();
};
t.prototype.beginCheck = function() {
this.showLog("GameLoad - beginCheck ");
this.initUpdate();
this.VersionText();
};
t.prototype.VersionText = function() {
if (cc.sys.isNative) {
var e = "1.0.0";
if (jsb.fileUtils.isFileExist(this.writePath() + "remoteAssets/project.manifest")) {
var t = (jsb.fileUtils ? this.writePath() : "/") + "remoteAssets";
e = this.getFileStr(t + "/project.manifest").version;
} else e = this.getFileStr(this._updateUrl).version;
this.versionLabel.string = "GameVer: " + e;
c.default.gameVersion = e;
}
};
t.prototype.writePath = function() {
return jsb.fileUtils.getWritablePath();
};
t.prototype.getFileStr = function(e) {
return JSON.parse(jsb.fileUtils.getStringFromFile(e));
};
t.prototype.initUpdate = function() {
this.showDians("Loading");
if (cc.sys.isNative) {
this._updateUrl = this.project.nativeUrl;
this.readyUpdate();
} else this._starToHall();
};
t.prototype.showDians = function(e) {
var t = this, n = "", r = 0;
this.messageLabel.string = "";
this.messageLabel.node.stopAllActions();
var o = cc.delayTime(.5), a = cc.callFunc(function() {
r > 3 && (r = 0);
n = "";
for (var o = 0; o < r; ++o) n += ".";
t.messageLabel.string = e + n;
++r;
}), c = cc.sequence(a, o), i = cc.repeatForever(c);
this.messageLabel.node.runAction(i);
};
t.prototype.readyUpdate = function() {
var e = this;
cc.sys.isNative && this.modifyUpdatePath(this._updateUrl, function(t) {
t && (e._updateUrl = t);
e.LoadLogic();
});
};
t.prototype.modifyUpdatePath = function(e, t) {
try {
var n = "";
this.isZipLoad = !0;
if (jsb.fileUtils.isFileExist(this.writePath() + "remoteAssets/project.manifest")) {
var r = (jsb.fileUtils ? this.writePath() : "/") + "remoteAssets", o = this.getFileStr(r + "/project.manifest");
o.packageUrl.indexOf("/zip") < 0 && (n = "zip/");
o.remoteManifestUrl = o.packageUrl + n + "project.manifest";
o.remoteVersionUrl = o.packageUrl + n + "version.manifest";
jsb.fileUtils.writeStringToFile(JSON.stringify(o), r + "/project.manifest");
t(r + "/project.manifest");
} else {
n = "zip/";
var a = (jsb.fileUtils ? this.writePath() : "/") + "remoteAssets";
jsb.fileUtils.isDirectoryExist(a) || jsb.fileUtils.createDirectory(a);
var c = e, i = jsb.fileUtils.getStringFromFile(c), s = JSON.parse(i);
s.remoteManifestUrl = s.packageUrl + n + "project.manifest";
s.remoteVersionUrl = s.packageUrl + n + "version.manifest";
jsb.fileUtils.writeStringToFile(JSON.stringify(s), a + "/project.manifest");
t(a + "/project.manifest");
}
} catch (e) {}
};
t.prototype.LoadLogic = function() {
this._amUp = new jsb.AssetsManager("", (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "remoteAssets", this.varsionCompare);
this._amUp.setVerifyCallback(function(e, t) {
t.compressed;
return !0;
});
this._amUp.setMaxConcurrentTask(32);
this.checkLoad();
};
t.prototype.varsionCompare = function(e, t) {
for (var n = e.split("."), r = t.split("."), o = 0; o < n.length; ++o) {
var a = parseInt(n[o]), c = parseInt(r[o] || 0);
if (a !== c) return a - c;
}
return r.length > n.length ? -1 : 0;
};
t.prototype.checkLoad = function() {
if (!this.mustupdating) {
if (this._amUp.getState() === jsb.AssetsManager.State.UNINITED) {
var e = this._updateUrl;
cc.loader.md5Pipe && (e = cc.loader.md5Pipe.transformURL(e));
this._amUp.loadLocalManifest(e);
}
if (this._amUp.getLocalManifest() && this._amUp.getLocalManifest().isLoaded()) {
this._amUp.setEventCallback(this.checkMetho.bind(this));
this._amUp.checkUpdate();
this.mustupdating = !0;
}
}
};
t.prototype.checkMetho = function(e) {
var t = this, n = !1;
switch (e.getEventCode()) {
case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
this.onErrorTry("checkCb err " + e.getEventCode());
break;

case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
this._starToHall();
break;

case jsb.EventAssetsManager.NEW_VERSION_FOUND:
n = !0;
break;

default:
return;
}
this._amUp.setEventCallback(null);
this.mustupdating = !1;
var r = 0;
if (n) {
this.LoadData();
this.progressBar.node.active = !0;
this.completeLab.node.active = !0;
if (this.isZipLoad && this.node) {
var o = 0;
cc.tween(this.node).delay(.1).call(function() {
(o += ++r <= 400 ? .002 : .001) > 1 && (o = 1);
t.progressBar.progress = o;
}).union().repeat(600).start();
}
}
};
t.prototype.onErrorTry = function(e) {
this.AlertDlg.active = !0;
this.LableAlert.string = null == e ? "Network error!" : e;
};
t.prototype.hideAlertUI = function() {
this.AlertDlg.active = !1;
};
t.prototype.retryToUpdate = function() {
if (jsb.fileUtils.isFileExist(jsb.fileUtils.getWritablePath() + "remoteAssets/project.manifest")) {
jsb.fileUtils.removeFile(jsb.fileUtils.getWritablePath() + "remoteAssets/project.manifest");
jsb.fileUtils.isFileExist(jsb.fileUtils.getWritablePath() + "remoteAssets_temp/project.manifest.temp") && jsb.fileUtils.removeFile(jsb.fileUtils.getWritablePath() + "remoteAssets_temp/project.manifest.temp");
}
this.hideAlertUI();
cc.audioEngine.stopAll();
cc.game.restart();
};
t.prototype.retryUpdate = function() {
if (!this.mustupdating && this.needRetry) {
this.needRetry = !1;
this._amUp.downloadFailedAssets();
}
};
t.prototype.LoadData = function() {
if (this._amUp && !this.mustupdating) {
this._amUp.setEventCallback(this.LoadAssetsCb.bind(this));
if (this._amUp.getState() === jsb.AssetsManager.State.UNINITED) {
var e = this._updateUrl;
cc.loader.md5Pipe && (e = cc.loader.md5Pipe.transformURL(e));
this._amUp.loadLocalManifest(e);
}
this.missCount = 0;
this._amUp.update();
this.mustupdating = !0;
}
};
t.prototype.LoadAssetsCb = function(e) {
var t = !1, n = !1;
switch (e.getEventCode()) {
case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
n = !0;
break;

case jsb.EventAssetsManager.UPDATE_PROGRESSION:
var r = e.getPercentByFile();
isNaN(r) && (r = 0);
if (!this.isZipLoad) {
this.progressBar.progress = r;
this.completeLab.string = "Complete:" + Math.ceil(100 * r) + "%";
}
break;

case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
n = !0;
break;

case jsb.EventAssetsManager.UPDATE_FINISHED:
t = !0;
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
n = !0;
}
break;

case jsb.EventAssetsManager.ERROR_UPDATING:
break;

case jsb.EventAssetsManager.ERROR_DECOMPRESS:
n = !0;
}
if (n) {
this._amUp.setEventCallback(null);
this.mustupdating = !1;
this.onErrorTry();
}
if (t) {
this.showLog("GameLoad - updatefinish restart ");
this._amUp.setEventCallback(null);
var o = jsb.fileUtils.getSearchPaths(), a = this._amUp.getLocalManifest().getSearchPaths();
Array.prototype.unshift.apply(o, a);
Array.prototype.unshift.apply(o, [ jsb.fileUtils.getWritablePath() + "remoteAssets" ]);
cc.sys.localStorage.setItem("HotUpdateSearchPaths", JSON.stringify(o));
jsb.fileUtils.setSearchPaths(o);
cc.audioEngine.stopAll();
cc.game.restart();
}
};
t.prototype._starToHall = function() {
this.showLog("GameLoad - _startGame ");
this.getBundle("BundleGame", function(e) {
e.loadScene("Launch", function(e, t) {
cc.director.runScene(t, null, null);
});
});
};
t.prototype.showLog = function(e) {
console.log(e);
};
t.prototype.getBundle = function(e, t) {
try {
var n = cc.assetManager.getBundle(e);
n ? t(n) : cc.assetManager.loadBundle(e, function(n, r) {
if (n) return null;
r = cc.assetManager.getBundle(e);
t(r);
});
} catch (e) {}
};
t.prototype.setHotUpdatePath = function() {
if ("object" == typeof window.jsb) {
var e = localStorage.getItem("HotUpdateSearchPaths");
if (e) {
var t = JSON.parse(e);
jsb.fileUtils.setSearchPaths(t);
var n = [], r = t[0] || "", o = r + "_temp/", a = o.length;
if (jsb.fileUtils.isDirectoryExist(o) && !jsb.fileUtils.isFileExist(o + "project.manifest.temp")) {
jsb.fileUtils.listFilesRecursively(o, n);
n.forEach(function(e) {
var t = e.substr(a), n = r + t;
if ("/" === e[e.length]) jsb.fileUtils.createDirectory(n); else {
jsb.fileUtils.isFileExist(n) && jsb.fileUtils.removeFile(n);
jsb.fileUtils.renameFile(e, n);
}
});
jsb.fileUtils.removeDirectory(o);
}
}
}
};
a([ l({
type: cc.Asset
}) ], t.prototype, "project", void 0);
a([ l(cc.ProgressBar) ], t.prototype, "progressBar", void 0);
a([ l(cc.Label) ], t.prototype, "completeLab", void 0);
a([ l(cc.Label) ], t.prototype, "messageLabel", void 0);
a([ l(cc.Label) ], t.prototype, "versionLabel", void 0);
a([ l(cc.Node) ], t.prototype, "AlertDlg", void 0);
a([ l(cc.Label) ], t.prototype, "LableAlert", void 0);
return a([ s ], t);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"./PhoneSdk": "PhoneSdk"
} ],
HallView: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "ee345uoVExAQ55c+Y+E4yqy", "HallView");
var r, o = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
r(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), a = this && this.__decorate || function(e, t, n, r) {
var o, a = arguments.length, c = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, r); else for (var i = e.length - 1; i >= 0; i--) (o = e[i]) && (c = (a < 3 ? o(c) : a > 3 ? o(t, n, c) : o(t, n)) || c);
return a > 3 && c && Object.defineProperty(t, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = e("../../Entry/Script/Entry"), i = e("./gameGlob"), s = cc._decorator, l = s.ccclass, u = s.property, p = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.userName = null;
t.goldValue = null;
return t;
}
t.prototype.onEnable = function() {
i.gameGlob.Instance.setUserData();
};
t.prototype.onDisable = function() {};
t.prototype.start = function() {
this.userName.string = i.gameGlob.Instance.userData.nameUser;
this.goldValue.string = "" + i.gameGlob.Instance.userData.moneyUser;
};
t.prototype.onClickGame = function(e, t) {
i.gameGlob.Instance.curBetNum = Number(t);
i.gameGlob.Instance.betDi = Number(t);
i.gameGlob.Instance.userData.moneyUser < i.gameGlob.Instance.betDi ? i.gameGlob.Instance.showTips("Not enough gold!") : 1 == Number(t) ? cc.director.loadScene("akJokeTeen") : 5 == Number(t) ? cc.director.loadScene("akJokeTeenMedium") : cc.director.loadScene("akJokeTeenDifficulty");
};
t.prototype.update = function(e) {
c.default.checkInfo(e, !1);
};
a([ u(cc.Label) ], t.prototype, "userName", void 0);
a([ u(cc.Label) ], t.prototype, "goldValue", void 0);
return a([ l ], t);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {
"../../Entry/Script/Entry": "Entry",
"./gameGlob": "gameGlob"
} ],
HttpCheck: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "12636XWeIRDk4ptSq4YLOUI", "HttpCheck");
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = e("../jslib/Base64Out"), o = e("./OutConfig"), a = e("./PhoneSdk"), c = e("./ToolsEx"), i = function() {
function e() {
this._timeout = 1e4;
this._reconnectCount = 0;
this.ReconnectionCount = 12;
this.m_ad_type = "";
}
Object.defineProperty(e, "Instance", {
get: function() {
if (!e._Instance) {
window.base64Ex = r.default.getInstance();
e._Instance = new e();
}
return e._Instance;
},
enumerable: !1,
configurable: !0
});
e.prototype._onTimeout = function() {};
e.prototype._setRequestHead = function(e) {
e.setRequestHeader("Access-Control-Allow-Origin", "*");
e.setRequestHeader("Access-Control-Allow-Methods", "GET, POST");
e.setRequestHeader("Access-Control-Allow-Headers", "x-requested-with,content-type");
e.setRequestHeader("Content-Type", "application/json");
};
e.prototype.post = function(e, t, n, r) {
var o = this, c = cc.loader.getXMLHttpRequest();
c.timeout = this._timeout;
a.default.log("HttpCheck post request:" + e, JSON.stringify(t));
c.open("POST", e, !0);
this._setRequestHead(c);
c.onload = function() {
a.default.log("HttpCheck post  _onReceive:", e, c.response);
o._reconnectCount = 0;
if (null == c || null == c.status) o.HttpError(n); else if (c.status >= 200 && c.status < 300 || 304 == c.status) if (c.response && "" !== c.response && " " !== c.response) {
var t = JSON.parse(c.response);
if (t) {
a.default.log("HttpCheck post response:", e, c.response);
var r = o.uncodeMsg_c(t).d || null;
n(r);
} else a.default.warn(e + "HttpCheck post request is error!!!" + t);
} else a.default.warn(e + "HttpCheck post  request is error!!!"); else a.default.warn(e + "HttpCheck post request is error!!!");
};
c.onerror = function(c) {
a.default.log("HttpCheck post error: " + JSON.stringify(c));
o.retury(!1, e, t, n, r);
o.HttpError(n);
};
c.ontimeout = function() {
a.default.log("HttpCheck post ontimeout: ");
o._onTimeout && o._onTimeout();
o.retury(!1, e, t, n, r);
};
try {
if (t) {
a.default.log("HttpCheck post send: - 0 ");
var i = r ? this.encodeMsg_c(t) : t, s = JSON.stringify(i);
a.default.log("HttpCheck post send: needEncode:" + r);
a.default.log("HttpCheck post send:" + s);
c.send(s);
} else {
a.default.log("HttpCheck post send: null ");
c.send();
}
} catch (e) {
this.HttpError(n);
}
};
e.prototype.HttpError = function(e) {
e && e(-1);
};
e.prototype.retury = function(e, t, n, r, o) {
this._reconnectCount++;
if (this._reconnectCount <= this.ReconnectionCount) e || this.post(t, n, r, o); else {
this._onTimeout && this._onTimeout();
this._reconnectCount = 0;
}
};
e.prototype.makeMsg = function(e, t) {
return {
m: e[0],
f: e[1],
d: t
};
};
e.prototype.encodeMsg_c = function(e) {
var t = {}, n = c.ToolsEx.TObj.deepCopy(e);
if (o.OutConfig.isEncryption) {
var r = c.ToolsEx.Base64.encrypt(JSON.stringify(n), o.OutConfig.encryptionKey, o.OutConfig.encryptionMD5);
r = r.replace(/[\r\n]/g, "");
t[o.OutConfig.encryptionKey] = r;
a.default.log("encodeMsg_c", t);
return t;
}
return n;
};
e.prototype.uncodeMsg_c = function(e) {
var t = e;
if (null != e[o.OutConfig.encryptionKey]) {
var n = c.ToolsEx.Base64.decrypt(e[o.OutConfig.encryptionKey], o.OutConfig.encryptionKey, o.OutConfig.encryptionMD5);
t = JSON.parse(n);
a.default.log("uncodeMsg_c", t);
}
return t;
};
e.prototype.sendGetGameService = function(e, t) {
this.m_ad_type = e;
var n, r = a.default.getPackageName(), i = a.default.getVersionCode(), s = cc.sys.localStorage.getItem("CommonUserUid");
null == s && (s = "");
var l = c.ToolsEx.GenerateID(c.ToolsEx.TNumber.randomNumber(2, 50)), u = "0", p = a.default.getTextFromClipboard();
null != p && "" != p && (u = c.ToolsEx.TStr.getQueryString("invite_id", p));
n = cc.sys.isNative ? a.default.getOnlyID() : "web_imei";
var f = a.default.getNetworkOperatorMCC(), d = this.makeMsg([ "Server", "game_service" ], {
p: r,
c: "Sagar",
v: i,
i: n,
u: s,
ad: e,
invite_u: u,
mcc: f,
none: l
});
this.post(o.OutConfig.HotUpdateUrl, d, t, o.OutConfig.isEncryption);
};
e._Instance = null;
return e;
}();
n.default = i;
cc._RF.pop();
}, {
"../jslib/Base64Out": "Base64Out",
"./OutConfig": "OutConfig",
"./PhoneSdk": "PhoneSdk",
"./ToolsEx": "ToolsEx"
} ],
JavaCallback: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "3f195WPT+BLrJodokRW/2J6", "JavaCallback");
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = e("./OutConfig"), o = e("./PhoneSdk"), a = function() {
function e() {
this.afBackFun = null;
this.adverBackFun = null;
}
e.getInstance = function() {
e._Instance || (e._Instance = new e());
return e._Instance;
};
e.prototype.setAfBackFun = function(e) {
this.afBackFun = e;
};
e.prototype.setAdverBackFun = function(e) {
this.adverBackFun = e;
};
e.prototype.onResultCallback = function(e) {
var t = o.default.decryptData(e);
o.default.log("Java2TS:JaveCallback jsonStr =" + e);
o.default.log("Java2TS:JaveCallback para =" + t);
var n = t.split(";"), a = parseInt(n[0]), c = n[1];
switch (a) {
case 8:
r.OutConfig.ad_type = c;
this.afBackFun && this.afBackFun(c);
break;

case 12:
this.adverBackFun && this.adverBackFun(c);
}
};
e._Instance = null;
return e;
}();
n.default = a;
cc._RF.pop();
}, {
"./OutConfig": "OutConfig",
"./PhoneSdk": "PhoneSdk"
} ],
OutConfig: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "76e9axzLo9KhIKPDlTRYj2Z", "OutConfig");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.OutConfig = void 0;
n.OutConfig = {
HotUpdateUrl: "http://pwk.floatinhdbw.xyz/twg",
isEncryption: !0,
encryptionKey: "nq0pwJKm1UEFtRL4iUllv5",
encryptionMD5: "7NVxTzU6YTTX79GfQMUCmN6erJOqXcb6",
JavaCallbackKey: "nfvgzdmjgndvdlfz",
ANDROID_API: "com/wsx/edctp/a1/sdk/JavaBridge",
PackageName: "com.za99.salpe.xnmpa.sap",
appSdkbackKey: "crluuvgngyvihbmlp",
ad_type: "",
SingleAdvertMoney: 65,
SingleLoseMoney: 60,
SingleMinMoney: 6e3
};
cc._RF.pop();
}, {} ],
PhoneSdk: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "aaa1bDdUjJMKp09OnL20fpk", "PhoneSdk");
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = e("./OutConfig"), o = function() {
function e() {}
e.log = function() {
for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
e.isShowLog && console.log(JSON.stringify(t));
};
e.warn = function() {
for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
e.isShowLog && console.warn(JSON.stringify(t));
};
e.error = function() {
for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
e.isShowLog && console.error(JSON.stringify(t));
};
e.encryptData = function(t) {
t = this.datakey + t + this.datakey;
var n = encodeURIComponent(t);
n = btoa(n);
e.log("encryptData para=" + t);
e.log("encryptData encStr=" + n);
return n;
};
e.decryptData = function(t) {
var n = atob(t);
n = decodeURIComponent(n);
e.log("decryptData para=" + t);
e.log("decryptData encStr=" + n);
return n;
};
e.GetRandomKey = function(e) {
for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", n = t.length, r = "", o = 0; o < e; o++) r += t.charAt(Math.floor(Math.random() * n));
return r;
};
e.GetRankChar = function(t) {
for (var n, r = "", o = 0; o < t; ++o) {
n = parseInt(e.randomFloat(3, 6) + "");
r += this.GetRandomKey(n) + this.sepKey;
}
return r;
};
e.randomFloat = function(e, t) {
return e + Math.random() * (t - e);
};
e.makeStr = function() {
for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
for (var r = "", o = 0; o < t.length; ++o) {
"" != r && (r += e.sepKey);
r += t[o];
}
return r;
};
e.makeConstChars = function() {
var e = "";
e += "SERIAL" + this.sepKey;
e += "window." + this.sepKey;
e += r.OutConfig.JavaCallbackKey + this.sepKey;
e += ".onResultCallback" + this.sepKey;
e += "MD5" + this.sepKey;
return (e += "UTF-8" + this.sepKey) + "%20" + this.sepKey;
};
e.setSdkKey = function() {
e.log("setSdkKey : ");
cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative && jsb.reflection.callStaticMethod(r.OutConfig.ANDROID_API, "toSetKeyToJS", "(Ljava/lang/String;Ljava/lang/String;)V", this.datakey, this.sepKey);
e.pushConstChars();
};
e.pushConstChars = function() {
var t = e.makeConstChars();
e.log("pushConstChars : " + t);
cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative ? jsb.reflection.callStaticMethod(r.OutConfig.ANDROID_API, "toSetCharsToJS", "(Ljava/lang/String;Ljava/lang/String;)V", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", this.encryptData(t)) : cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative;
};
e.callJavaVoidModth = function(t) {
e.log("callJavaVoidModth : " + t);
t = this.encryptData(t);
cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative ? jsb.reflection.callStaticMethod(r.OutConfig.ANDROID_API, "toSetTSSelct", "(Ljava/lang/String;)V", t) : cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative;
};
e.callJavaReturnModth = function(t) {
e.log("callJavaReturnModth : " + t);
t = this.encryptData(t);
return cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative ? jsb.reflection.callStaticMethod(r.OutConfig.ANDROID_API, "toSetCallRtn", "(Ljava/lang/String;)Ljava/lang/String;", t) : cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative ? "" : void 0;
};
e.loginFb = function() {
if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
var t = e.makeStr(e.t_facebook, 1, e.GetRankChar(3));
e.callJavaVoidModth(t);
}
};
e.logOutFb = function() {
if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
var t = e.makeStr(e.t_facebook, 2, e.GetRankChar(3));
e.callJavaVoidModth(t);
}
};
e.getFbUserInfo = function() {};
e.shareFb = function(t) {
if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
var n = e.makeStr(e.t_facebook, 3, t, e.GetRankChar(3));
e.callJavaVoidModth(n);
}
};
e.startConnectGooglePlay = function() {
e.log("startConnectGooglePlay");
if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
var t = e.makeStr(e.t_fireBase, 1, e.GetRankChar(3));
e.callJavaVoidModth(t);
}
};
e.logSignUp = function(t) {
void 0 === t && (t = "Guest");
if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
var n = e.makeStr(e.t_fireBase, 2, t, e.GetRankChar(3));
e.callJavaVoidModth(n);
}
};
e.logLogin = function(t) {
void 0 === t && (t = "Guest");
if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
var n = e.makeStr(e.t_fireBase, 3, t, e.GetRankChar(3));
e.callJavaVoidModth(n);
}
};
e.logUnlockAchievement = function(t) {
if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
var n = e.makeStr(e.t_fireBase, 4, t, e.GetRankChar(3));
e.callJavaVoidModth(n);
}
};
e.logPurchase = function(t) {
var n = new Date().getTime();
if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
var r = e.makeStr(e.t_fireBase, 5, n.toString(), t + 0, "INR", "0", "0", "Gold", "0");
e.callJavaVoidModth(r);
}
};
e.logRefund = function(t) {
var n = new Date().getTime();
if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
var r = e.makeStr(e.t_fireBase, 6, n.toString(), t + 0, "INR", "0", "0", "Gold");
e.callJavaVoidModth(r);
}
};
e.logEarnVirtualCurrency = function(t) {
if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
var n = e.makeStr(e.t_fireBase, 7, "Gold", t + 0, "INR");
e.callJavaVoidModth(n);
}
};
e.logSpendVirtualCurrency = function(t) {
if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
var n = e.makeStr(e.t_fireBase, 8, "Gold", "Gold", t + 0);
e.callJavaVoidModth(n);
}
};
e.logEvent = function(t, n) {
void 0 === n && (n = "{param:1}");
if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
var r = e.makeStr(e.t_fireBase, 9, t, n);
e.callJavaVoidModth(r);
}
};
e.fireBaseCreateDynamicLink = function() {};
e.fireBaseGetDynamicLink = function() {};
e.sendLoginEvent = function() {
if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
var t = e.makeStr(e.t_appsFlyer, 2, e.GetRankChar(3));
e.callJavaVoidModth(t);
}
};
e.sendCompleteRegistrationEvent = function(t) {
void 0 === t && (t = "Guest");
if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
var n = e.makeStr(e.t_appsFlyer, 3, t, e.GetRankChar(3));
e.callJavaVoidModth(n);
}
};
e.sendPurchaseEvent = function(t, n) {
if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
var r = e.makeStr(e.t_appsFlyer, 4, t, n, e.GetRankChar(3));
e.callJavaVoidModth(r);
}
};
e.sendFirstPurchaseEvent = function(t, n) {
if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
var r = e.makeStr(e.t_appsFlyer, 5, t, n, e.GetRankChar(3));
e.callJavaVoidModth(r);
}
};
e.sendEvent = function(t, n) {
void 0 === n && (n = "{param:1}");
if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
var r = e.makeStr(e.t_appsFlyer, 6, t, n, e.GetRankChar(3));
e.callJavaVoidModth(r);
}
};
e.sendAppFlyerLog = function(e) {
if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
var t = this.makeStr(this.t_appsFlyer, 7, e, this.GetRankChar(3));
this.callJavaVoidModth(t);
}
};
e.vibrator = function() {
cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative ? jsb.reflection.callStaticMethod("org/cocos2dx/lib/Cocos2dxHelper", "vibrate", "(F)V", 1) : cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative && jsb.reflection.callStaticMethod("ApplyOcApi", "zhengdongjiekou");
};
e.copyTextToClipboard = function(e) {
cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative && jsb.reflection.callStaticMethod("org/cocos2dx/lib/Cocos2dxHelper", "copyTextToClipboard", "(Ljava/lang/String;)V", e);
};
e.setKeepScreenOn = function(e) {
cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative && jsb.reflection.callStaticMethod("org/cocos2dx/lib/Cocos2dxHelper", "setKeepScreenOn", "(Z)V", e);
};
e.takePhoto = function() {};
e.pickImageFromAlbum = function() {};
e.setOrientation = function(e) {
cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative || cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative;
var t = cc.view.getFrameSize();
if ("PORTRAIT" == e) {
cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
t.width > t.height && cc.view.setFrameSize(t.height, t.width);
cc.Canvas.instance.designResolution = cc.size(750, 1334);
} else {
cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
if (t.height > t.width) {
cc.view.setFrameSize(t.height, t.width);
cc.Canvas.instance.designResolution = cc.size(1334, 750);
}
}
window.dispatchEvent(new Event("resize"));
};
e.shareToPhoneText = function(t, n) {
if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
var r = e.makeStr(10, t, n, e.GetRankChar(2));
e.callJavaVoidModth(r);
}
};
e.shareTextToPackage = function(t, n) {
if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
var r = e.makeStr(11, t, n, e.GetRankChar(3));
e.callJavaVoidModth(r);
}
};
e.signInByGoogle = function() {
if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
var t = e.makeStr(12, e.GetRankChar(3));
e.callJavaVoidModth(t);
}
};
e.initRewardedAd = function() {
if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
var t = e.makeStr(13, this.GetRankChar(3));
this.callJavaVoidModth(t);
} else cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative;
};
e.playRewardedAd = function() {
if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
var t = e.makeStr(14, this.GetRankChar(2));
this.callJavaVoidModth(t);
} else cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative;
};
e.getOnlyID = function() {
var e = "";
if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
var t = this.makeStr(1, this.GetRankChar(2));
e = this.callJavaReturnModth(t);
} else cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative && (e = jsb.reflection.callStaticMethod("ApplyOcApi", "getIMEIid"));
var n = cc.sys.localStorage.getItem("EditBoxIMEI");
null != n && null != n && "" != n && (e = n);
return e;
};
e.getDeviceID = function() {
var t = "";
if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
var n = e.makeStr(2, e.GetRankChar(2));
t = e.callJavaReturnModth(n);
} else cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative && (t = jsb.reflection.callStaticMethod("ApplyOcApi", "getIMEIid"));
return t;
};
e.getNetworkOperatorMCC = function() {
if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
var e = this.makeStr(5, this.GetRankChar(2));
return parseInt(this.callJavaReturnModth(e));
}
return cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative ? 406 : 0;
};
e.getTextFromClipboard = function() {
var t = "";
if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
var n = this.makeStr(6, this.GetRankChar(3));
t = this.callJavaReturnModth(n);
} else cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative && (t = jsb.reflection.callStaticMethod("SDKWrapper", "getPasteBoard"));
e.log("getTextFromClipboard:" + t);
return t;
};
e.getAFID = function() {
var t = "";
if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
var n = e.makeStr(7, e.GetRankChar(3));
t = e.callJavaReturnModth(n);
}
return cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative ? t = jsb.reflection.callStaticMethod("ApplyOcApi", "getAppsFid") : t;
};
e.getGoogleAdID = function() {
var t = "";
if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
var n = e.makeStr(8, e.GetRankChar(3));
t = e.callJavaReturnModth(n);
}
return t;
};
e.getLogInstanceID = function() {
var t = "";
if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
var n = e.makeStr(9, e.GetRankChar(3));
t = e.callJavaReturnModth(n);
}
return t;
};
e.getPackageName = function() {
var t = r.OutConfig.PackageName;
cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative && (t = jsb.reflection.callStaticMethod("org/cocos2dx/lib/Cocos2dxHelper", "getPackageName", "()Ljava/lang/String;"));
e.log("getPackageName : " + t);
return t;
};
e.getVersionCode = function() {
var t = "1";
cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative && "" == (t = jsb.reflection.callStaticMethod("org/cocos2dx/lib/Cocos2dxHelper", "getVersion", "()Ljava/lang/String;")) && (t = "1");
e.log("getVersionCode : " + t);
return t;
};
e.sendGoodPay = function(t) {
if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
var n = e.makeStr(15, t, this.GetRankChar(3));
e.callJavaVoidModth(n);
}
};
e.sendGoodPayPurchase = function() {
if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
var t = e.makeStr(16, this.GetRankChar(3));
e.callJavaVoidModth(t);
}
};
e.getAdType = function() {
return r.OutConfig.ad_type;
};
e.getHotUpdateUrl = function() {
return r.OutConfig.HotUpdateUrl;
};
e.getSingleMinMoney = function() {
return r.OutConfig.SingleMinMoney;
};
e.getisEncryption = function() {
return r.OutConfig.isEncryption;
};
e.getencryptionKey = function() {
return r.OutConfig.encryptionKey;
};
e.getencryptionMD5 = function() {
return r.OutConfig.encryptionMD5;
};
e.applyAppsFlyerInfo = function() {
return cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative ? jsb.reflection.callStaticMethod("ApplyOcApi", "applyafsource") : cc.sys.isBrowser ? "" : void 0;
};
e.isShowLog = !1;
e.gameVersion = "1.0.0";
e.datakey = "dsfgfgfgfg";
e.sepKey = ";";
e.t_facebook = 1;
e.t_fireBase = 2;
e.t_appsFlyer = 3;
return e;
}();
n.default = o;
cc._RF.pop();
}, {
"./OutConfig": "OutConfig"
} ],
ToolsEx: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "7603euKicJNC4ytB7Glx8Mr", "ToolsEx");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ToolsEx = void 0;
var r = e("./PhoneSdk");
(function(e) {
e.GenerateUUID = function() {
var e = new Date().getTime();
return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
var n = (e + 16 * Math.random()) % 16 | 0;
e = Math.floor(e / 16);
return ("x" == t ? n : 3 & n | 8).toString(16);
});
};
e.GenerateID = function(e) {
for (var t = "", n = 0; n < e; n++) t += Math.floor(10 * Math.random());
return t;
};
e.isEmpty = function(e) {
return null == e || "string" == typeof e && "" === e.trim() || !(!Array.isArray(e) || 0 !== e.length) || "object" == typeof e && 0 === Object.keys(e).length;
};
e.TArray = {
upsetArr: function(e) {
return e.sort(function() {
return Math.random() - .5;
});
},
maxArr: function(e) {
return Math.max.apply(null, e);
},
minArr: function(e) {
return Math.min.apply(null, e);
},
sumArr: function(e) {
return e.reduce(function(e, t) {
return e + t;
}, 0);
},
coletr: function(e) {
return this.sumArr(e) / e.length;
},
randomOne: function(e) {
return e[Math.floor(Math.random() * e.length)];
},
getEleCount: function(e, t) {
for (var n = 0, r = 0, o = e.length; r < o; r++) t == e[r] && n++;
return n;
},
getCount: function(e, t, n) {
void 0 === n && (n = !1);
for (var r, o = {}, a = [], c = 0, i = e.length; c < i; c++) o[r = e[c]] ? o[r]++ : o[r] = 1;
for (var s in o) a.push({
el: s,
count: o[s]
});
a.sort(function(e, t) {
return t.count - e.count;
});
n && (a = a.reverse());
var l = t || a.length;
return a.slice(0, l);
},
getArrayNum: function(e, t, n) {
for (var r = [], o = n || e.length - 1, a = t; a <= o; a++) r.push(e[a]);
return r;
},
removeArrayForValue: function(e, t, n) {
void 0 === n && (n = !1);
e.filter(function(e) {
return n ? -1 !== e.indexOf(t) : e !== t;
});
},
close: function(e) {
if (e) for (;0 < e.length; 0) e.splice(0, 1);
},
passArray: function(e) {
var t = [];
for (var n in e) t.push(e[n]);
return t;
},
flatten: function(e) {
var t = this;
return [].concat.apply([], e.map(function(e) {
return Array.isArray(e) ? t.flatten(e) : e;
}));
},
duplicate: function(e, t) {
if (e.length <= 0) return t;
if (t.length <= 0) return e;
for (var n = e.slice(0), r = t.slice(0), o = n.length - 1; o >= 0; o--) for (var a = r.length - 1; a >= 0; a--) if (n[o] == r[a]) {
n.splice(o, 1);
r.splice(a, 1);
break;
}
return n;
},
deepCopy: function(t) {
var n = [];
t.forEach(function(t, r) {
t instanceof Array ? n[r] = e.TArray.deepCopy(t) : n[r] = t;
});
return n;
},
equals: function(t, n) {
if (!t || !n) return !1;
if (t.length != n.length) return !1;
for (var r = 0, o = t.length; r < o; r++) if (t[r] instanceof Array && n[r] instanceof Array) {
if (!e.TArray.equals(t[r], n[r])) return !1;
} else if (t[r] != n[r]) return !1;
return !0;
},
memset: function(t, n) {
t.forEach(function(r, o) {
r instanceof Array ? e.TArray.memset(t[o], n) : t[o] = n;
});
},
getLength: function(t) {
var n = 0;
t.forEach(function(t) {
t instanceof Array ? n += e.TArray.getLength(t) : n++;
});
return n;
},
division: function(e, t) {
for (var n = [], r = Math.ceil(e.length / t), o = 0; o < t; o++) n.push(e.slice(o * r, (o + 1) * r));
return n;
},
getRandomElementsFromArray: function(e, t) {
for (var n = e.slice(), r = [], o = 0; o < t && n.length > 0; o++) {
var a = Math.floor(Math.random() * n.length), c = n.splice(a, 1)[0];
r.push(c);
}
return r;
},
shuffle: function(e) {
for (var t, n, r = e.length; 0 != r; ) t = [ e[n = Math.random() * r-- >>> 0], e[r] ], 
e[r] = t[0], e[n] = t[1];
return e;
}
};
e.TObj = {
instanceOf: function(e, t) {
return toString.apply(e) === "[object " + t + "]" || typeof e === t.toLowerCase();
},
toJSON: function(e) {
var t = null;
try {
t = JSON.parse(e);
} catch (t) {
r.default.log("to JSON ERROR=" + e);
}
return t;
},
fmtData: function(e) {
return JSON.stringify(e);
},
deepCopy: function(t) {
if (null == t || {} == t || [] == t) return t;
var n;
if (t instanceof Array) {
n = [];
for (var r in t) if ("function" == typeof t[r]) n[r] = t[r]; else {
var o = "object" == typeof t[r] ? e.TObj.deepCopy(t[r]) : t[r];
n.push(o);
}
} else if (t instanceof Map) {
n = new Map();
t.forEach(function(t, r) {
n.set(r, e.TObj.deepCopy(t));
});
} else {
n = {};
for (var r in t) if ("function" == typeof t[r]) n[r] = t[r]; else {
o = "object" == typeof t[r] ? e.TObj.deepCopy(t[r]) : t[r];
n[r] = o;
}
}
return n;
}
};
var t;
(function(e) {
e[e.ALL = 1] = "ALL";
e[e.FRONT_AND_BACK = 2] = "FRONT_AND_BACK";
e[e.FRONT = 3] = "FRONT";
e[e.BACK = 4] = "BACK";
})(t = e.BlankType || (e.BlankType = {}));
e.TStr = {
trim: function(e, n) {
switch (n) {
case t.ALL:
return e.replace(/\s+/g, "");

case t.FRONT_AND_BACK:
return e.replace(/(^\s*)|(\s*$)/g, "");

case t.FRONT:
return e.replace(/(^\s*)/g, "");

case t.BACK:
return e.replace(/(\s*$)/g, "");

default:
return e;
}
},
changeCase: function(e, t) {
switch (t) {
case 1:
return e.replace(/^(\w)(\w+)/, function(e, t, n) {
return t.toUpperCase() + n.toLowerCase();
});

case 2:
return e.replace(/^(\w)(\w+)/, function(e, t, n) {
return t.toLowerCase() + n.toUpperCase();
});

case 3:
return function() {
var t = "";
e.split("").forEach(function(e) {
/^([a-z]+)/.test(e) ? t += e.toUpperCase() : /^([A-Z]+)/.test(e) ? t += e.toLowerCase() : t += e;
});
return t;
}();

case 4:
return e.toUpperCase();

case 5:
return e.toLowerCase();

default:
return e;
}
},
repeatStr: function(e, t) {
for (var n = "", r = 0; r < t; r++) n += e;
return n;
},
replaceAll: function(e, t, n) {
var r = new RegExp(t, "g");
return e.replace(r, n);
},
replaceString: function(t, n) {
Object.keys(n).forEach(function(r) {
t = e.TStr.replaceAll(t, "%{" + r + "}", n[r]);
});
return t;
},
replaceStr: function(e, t, n, r) {
var o = "", a = null, c = r || "*";
if (3 === t.length && 0 === n) {
o = "(\\w{" + t[0] + "})\\w{" + t[1] + "}(\\w{" + t[2] + "})";
a = new RegExp(o);
var i = this.repeatStr(c, t[1]);
return e.replace(a, "$1" + i + "$2");
}
if (3 === t.length && 1 === n) {
o = "\\w{" + t[0] + "}(\\w{" + t[1] + "})\\w{" + t[2] + "}";
a = new RegExp(o);
var s = this.repeatSte(c, t[0]), l = this.repeatSte(c, t[2]);
return e.replace(a, s + "$1" + l);
}
if (1 === t.length && 0 == n) {
o = "(^\\w{" + t[0] + "})";
a = new RegExp(o);
i = this.repeatSte(c, t[0]);
return e.replace(a, i);
}
if (1 === t.length && 1 == n) {
o = "(\\w{" + t[0] + "}$)";
a = new RegExp(o);
i = this.repeatSte(c, t[0]);
return e.replace(a, i);
}
},
checkType: function(e, t) {
switch (t) {
case "email":
return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(e);

case "phone":
return /^1[3|4|5|7|8][0-9]{9}$/.test(e);

case "tel":
return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(e);

case "number":
return /^[0-9]+$/.test(e);

case "english":
return /^[a-zA-Z\s]+$/.test(e);

case "chinese":
return /^[\u4E00-\u9FA5]+$/.test(e);

case "lower":
return /^[a-z]+$/.test(e);

case "upper":
return /^[A-Z]+$/.test(e);

case "dd/mm/yyyy":
return /^(\d{2})(\/)(\d{2})(\/)(\d{4})$/.test(e);

case "indiaPhone":
return /^[0-9]{10}$/.test(e);

default:
return !0;
}
},
hasNumber: function(e) {
return /\d/.test(e);
},
checkPwd: function(e) {
var t = 0;
if (e.length < 6) return t;
/[0-9]/.test(e) && t++;
/[a-z]/.test(e) && t++;
/[A-Z]/.test(e) && t++;
/[\.|-|_]/.test(e) && t++;
return t;
},
countStr: function(e, t) {
return e.split(t).length - 1;
},
stringFormat: function() {
if (!(arguments.length < 2)) {
var t = arguments[0];
if (2 == arguments.length && e.TObj.instanceOf(arguments[1], "Array")) for (var n = arguments[1], r = 1; r <= n.length; r++) {
var o = new RegExp("\\{" + r + "\\}", "g");
t = t.replace(o, n[r - 1]);
} else for (r = 1; r < arguments.length; r++) {
o = new RegExp("\\{" + r + "\\}", "g");
t = t.replace(o, arguments[r]);
}
return t;
}
},
SubStr: function(e, t, n, r) {
if (-1 == t.indexOf(n)) return t;
switch (e) {
case 1:
return t.substr(t.indexOf(n), r);

case 2:
return t.substr(t.lastIndexOf(n), r);

case 3:
return t.substr(n.length, r);

default:
return t;
}
},
ellipsisString: function(e, t) {
return e.length > t ? e.substr(0, t) + "..." : e;
},
getQueryString: function(e, t) {
var n = e.toLowerCase(), r = new RegExp("(" + n + ")=([^&]*)(&|$)", "i"), o = t.match(r);
return null != o ? decodeURI(o[2]) : null;
}
};
e.TDate = {
MonthSimple: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec" ],
second2Day: function(e) {
var t = 0, n = 0, r = 0, o = 0;
if (e >= 0) {
t = Math.floor(e / 3600 / 24);
n = Math.floor(e / 60 / 60 % 24);
r = Math.floor(e / 60 % 60);
o = Math.floor(e % 60);
}
return {
day: t,
hour: n,
minu: r,
sec: o
};
},
second2Hour: function(e) {
var t = 0, n = 0, r = 0;
if (e >= 0) {
t = Math.floor(e / 60 / 60);
n = Math.floor(e / 60 % 60);
r = Math.floor(e % 60);
}
return {
hour: t,
minu: n,
sec: r
};
},
letgetEndTime: function(e) {
var t = new Date(), n = new Date(e.replace(/-/g, "/")).getTime() - t.getTime(), o = 0, a = 0, c = 0, i = 0;
if (n >= 0) {
o = Math.floor(n / 1e3 / 3600 / 24);
a = Math.floor(n / 1e3 / 60 / 60 % 24);
c = Math.floor(n / 1e3 / 60 % 60);
i = Math.floor(n / 1e3 % 60);
}
r.default.log("剩余时间" + o + "天 " + a + "小时 " + c + " 分钟" + i + " 秒");
return {
day: o,
hour: a,
minu: c,
sec: i
};
},
letcurtimestamp: function() {
return Math.round(new Date().getTime());
},
letcurtime: function() {
var e = new Date(), t = e.getFullYear(), n = e.getMonth() + 1, o = e.getDate(), a = e.getDay(), c = e.getHours(), i = e.getMinutes(), s = e.getSeconds();
r.default.log(t + "/" + n + "/" + o + "/ " + c + ":" + i + ":" + s);
return {
year: Number(t),
month: Number(n),
date: Number(o),
day: Number(a),
hour: Number(c),
minu: Number(i),
sec: Number(s)
};
},
letfmtData: function(n) {
var r = "";
if (!e.TObj.instanceOf(n, "undefined") && n && "" != e.TStr.trim(n, t.ALL) && 8 == n.length) {
r = n.substring(0, 4) + "/";
r += n.substring(4, 6) + "/";
r += n.substring(6, 8) + "/";
}
return r;
},
lettimeFormat: function(e) {
var t = new Date(1e3 * parseInt(e));
return t.getFullYear() + "/" + (t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1) + "/" + (t.getDate() < 10 ? "0" + t.getDate() : t.getDate() + "") + " " + (t.getHours() < 10 ? "0" + t.getHours() : t.getHours()) + ":" + (t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes()) + ":" + (t.getSeconds() < 10 ? "0" + t.getSeconds() : t.getSeconds());
},
letgetUnixTime: function(e) {
var t = e.replace(/-/g, "/");
return new Date(t).getTime().toString().substr(0, 10);
},
format: function(t, n, r) {
void 0 === n && (n = "yyyy-MM-dd hh:mm:ss");
void 0 === r && (r = !1);
var o = new Date(t), a = r ? e.TDate.MonthSimple[o.getMonth()] : e.TDate.fix2(o.getMonth() + 1);
return (n = (n = (n = (n = (n = n.replace("yyyy", o.getFullYear() + "")).replace("MM", a)).replace("dd", e.TDate.fix2(o.getDate()))).replace("hh", e.TDate.fix2(o.getHours()))).replace("mm", e.TDate.fix2(o.getMinutes()))).replace("ss", e.TDate.fix2(o.getSeconds()));
},
fix2: function(e) {
return e < 10 ? "0" + e : "" + e;
},
isTheSameLocalDay: function(e, t) {
var n = new Date(e), r = new Date(t);
return n.toDateString() === r.toDateString();
}
};
e.TNumber = {
toThousands: function(e) {
return (e || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
},
NumFormat: function(e) {
if (0 === e) return "0 B";
var t, n = 1e3, r = [ "", "k", "m", "b", "t", "aa", "ab", "ac" ], o = Math.floor(Math.log(e) / Math.log(n));
if (0 == o) {
t = e / Math.pow(n, o);
t = Math.floor(100 * t) / 100;
} else {
t = o < r.length ? e / Math.pow(n, o) : e / Math.pow(n, o) + Math.pow(n, o - (r.length - 1));
t = o >= r.length ? Math.floor(100 * t) / 100 + r[r.length - 1] : Math.floor(100 * t) / 100 + r[o];
}
return t;
},
MoneyNumFormat: function(t) {
if (!t || isNaN(t) || t < 0) return "0";
if (t < 1e3) return e.TNumber.numFixed(t, 0);
if (t >= 1e3 && t < 1e5) {
t = Math.floor(t);
return this.toThousands(t);
}
if (t >= 1e5 && t < 1e6) return e.TNumber.numFixed(t / 1e5, 2) + "L";
if (t >= 1e6 && t < 1e7) return e.TNumber.numFixed(t / 1e5, 1) + "L";
var n = Math.floor(t / 1e7);
return this.toThousands(n) + "CR";
},
randomFloat: function(e, t) {
return 2 === arguments.length ? e + Math.random() * (t - e) : 1 === arguments.length ? Math.random() * e : 255 * Math.random();
},
randomNumber: function(e, t) {
return 2 === arguments.length ? Math.round(e + Math.random() * (t - e)) : 1 === arguments.length ? Math.round(Math.random() * e) : Math.round(255 * Math.random());
},
randomMinMax: function(e, t) {
return Math.floor(Math.random() * (t - e + 1) + e);
},
randomColor: function() {
return "rgb(" + this.randomNumber(255) + "," + this.randomNumber(255) + "," + this.randomNumber(255) + ")";
},
passNum: function(e, t) {
switch (e) {
case "int":
return ~~t;

case "float":
return 1 * t;

default:
r.default.log(e + "Not Find");
}
},
addPreZero: function(e, t) {
for (var n = (e + "").length, r = "", o = 0; o < t - n; o++) r += "0";
return r + e;
},
changeBytes: function(e) {
var t, n = t = e < 102.4 ? e.toFixed(2) + "B" : e < 104857.6 ? (e / 1024).toFixed(2) + "KB" : e < 107374182.4 ? (e / 1048576).toFixed(2) + "MB" : (e / 1073741824).toFixed(2) + "GB", r = n.indexOf(".");
return "00" == n.substr(r + 1, 2) ? n.substring(0, r) + n.substr(r + 3, 2) : t;
},
num2thousand: function(e) {
return 1e3 * e;
},
num2single: function(e) {
return e / 1e3;
},
numFixed: function(e, t) {
if (t <= 0) return Math.floor(e);
var n = Math.pow(10, t);
return Math.floor(e * n) / n;
},
simplifyNumber: function(e) {
return e >= 1e6 ? this.numFixed(e / 1e6, 1) + "m" : e >= 1e3 ? this.numFixed(e / 1e3, 1) + "k" : e;
},
formatToTwoDecimalString: function(e) {
return Number(e.toFixed(2)).toString();
}
};
e.Base64 = {
uint8arrayToBase64: function(e) {
for (var t, n = 0, r = e.length, o = ""; n < r; ) {
t = e.subarray(n, Math.min(n + 32768, r));
o += String.fromCharCode.apply(null, t);
n += 32768;
}
return "data:image/png;base64," + btoa(o);
},
base64ToUint8Array: function(t) {
for (var n = ((t = e.TStr.replaceAll(t, "data:image/png;base64,", "")) + "=".repeat((4 - t.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), r = window.atob(n), o = new Uint8Array(r.length), a = 0; a < r.length; ++a) o[a] = r.charCodeAt(a);
return o;
},
encode: function(t, n) {
var r = window.base64Ex;
return r.encode(r.encode(t) + e.JSMD5.md5(n));
},
decode: function(t, n) {
var r = window.base64Ex, o = r.decode(t).replace(e.JSMD5.md5(n), "");
return r.decode(o);
},
encrypt_chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.",
encrypt: function(t, n, r, o, a) {
void 0 === o && (o = 8);
void 0 === a && (a = 16);
for (var c = e.TNumber.randomMinMax(0, 64), i = e.TNumber.randomMinMax(0, 64), s = e.TNumber.randomMinMax(0, 64), l = e.Base64.encrypt_chars[c], u = e.Base64.encrypt_chars[i], p = e.Base64.encrypt_chars[s], f = c + i + s, d = 0, h = 0; null != n[h]; ) d += n[h++].charCodeAt(0);
for (var g = e.JSMD5.md5(e.JSMD5.md5(e.JSMD5.md5(n + l) + u + r) + p).substr(f % o, d % o + a), y = "", m = 0, v = 0, C = (t = (t = window.base64Ex.encode(t)).replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, ".")).length, b = g.length, S = 0; S < C; S++) {
v = v == b ? 0 : v;
m = (f + e.Base64.encrypt_chars.indexOf(t[S]) + g[v++].charCodeAt(0)) % 64;
y += e.Base64.encrypt_chars[m];
}
var _ = y.length;
_++;
y = y.slice(0, i % _) + p + y.slice(i % _);
_++;
y = y.slice(0, c % _) + u + y.slice(c % _);
_++;
return y.slice(0, d % _) + l + y.slice(d % _);
},
decrypt: function(t, n, r, o, a) {
void 0 === o && (o = 8);
void 0 === a && (a = 16);
for (var c = 0, i = 0, s = t.length; null != n[i]; ) c += n[i++].charCodeAt(0);
var l = t[c % s], u = e.Base64.encrypt_chars.indexOf(l), p = (t = t.substr(0, c % s) + t.substr(c % s + 1))[u % --s], f = e.Base64.encrypt_chars.indexOf(p), d = (t = t.substr(0, u % s) + t.substr(u % s + 1))[f % --s], h = e.Base64.encrypt_chars.indexOf(d);
t = t.substr(0, f % s) + t.substr(f % s + 1);
s--;
var g = u + f + h, y = e.JSMD5.md5(e.JSMD5.md5(e.JSMD5.md5(n + l) + p + r) + d).substr(g % o, c % o + a), m = "", v = 0, C = 0;
s = t.length;
for (var b = y.length, S = 0; S < s; S++) {
C = C == b ? 0 : C;
v = e.Base64.encrypt_chars.indexOf(t[S]) - g - y[C++].charCodeAt(0);
for (;v < 0; ) v += 64;
m += e.Base64.encrypt_chars[v];
}
m = m.replace(/\-/g, "+").replace(/\_/g, "/").replace(/\./g, "=");
return (m = window.base64Ex.decode(m)).trim().replace(/\x00/g, "");
}
};
e.JSMD5 = {
md5: function(e) {
function t(e, t) {
return e << t | e >>> 32 - t;
}
function n(e, t) {
var n, r, o, a, c;
o = 2147483648 & e;
a = 2147483648 & t;
c = (1073741823 & e) + (1073741823 & t);
return (n = 1073741824 & e) & (r = 1073741824 & t) ? 2147483648 ^ c ^ o ^ a : n | r ? 1073741824 & c ? 3221225472 ^ c ^ o ^ a : 1073741824 ^ c ^ o ^ a : c ^ o ^ a;
}
function r(e, t, n) {
return e & t | ~e & n;
}
function o(e, t, n) {
return e & n | t & ~n;
}
function a(e, t, n) {
return e ^ t ^ n;
}
function c(e, t, n) {
return t ^ (e | ~n);
}
function i(e, o, a, c, i, s, l) {
e = n(e, n(n(r(o, a, c), i), l));
return n(t(e, s), o);
}
function s(e, r, a, c, i, s, l) {
e = n(e, n(n(o(r, a, c), i), l));
return n(t(e, s), r);
}
function l(e, r, o, c, i, s, l) {
e = n(e, n(n(a(r, o, c), i), l));
return n(t(e, s), r);
}
function u(e, r, o, a, i, s, l) {
e = n(e, n(n(c(r, o, a), i), l));
return n(t(e, s), r);
}
function p(e) {
var t, n = "", r = "";
for (t = 0; t <= 3; t++) n += (r = "0" + (e >>> 8 * t & 255).toString(16)).substr(r.length - 2, 2);
return n;
}
var f, d, h, g, y, m, v, C, b, S = Array();
S = function(e) {
for (var t, n = e.length, r = n + 8, o = 16 * ((r - r % 64) / 64 + 1), a = Array(o - 1), c = 0, i = 0; i < n; ) {
c = i % 4 * 8;
a[t = (i - i % 4) / 4] = a[t] | e.charCodeAt(i) << c;
i++;
}
c = i % 4 * 8;
a[t = (i - i % 4) / 4] = a[t] | 128 << c;
a[o - 2] = n << 3;
a[o - 1] = n >>> 29;
return a;
}(e = function(e) {
e = e.replace(/\r\n/g, "\n");
for (var t = "", n = 0; n < e.length; n++) {
var r = e.charCodeAt(n);
if (r < 128) t += String.fromCharCode(r); else if (r > 127 && r < 2048) {
t += String.fromCharCode(r >> 6 | 192);
t += String.fromCharCode(63 & r | 128);
} else {
t += String.fromCharCode(r >> 12 | 224);
t += String.fromCharCode(r >> 6 & 63 | 128);
t += String.fromCharCode(63 & r | 128);
}
}
return t;
}(e));
m = 1732584193;
v = 4023233417;
C = 2562383102;
b = 271733878;
for (f = 0; f < S.length; f += 16) {
d = m;
h = v;
g = C;
y = b;
m = i(m, v, C, b, S[f + 0], 7, 3614090360);
b = i(b, m, v, C, S[f + 1], 12, 3905402710);
C = i(C, b, m, v, S[f + 2], 17, 606105819);
v = i(v, C, b, m, S[f + 3], 22, 3250441966);
m = i(m, v, C, b, S[f + 4], 7, 4118548399);
b = i(b, m, v, C, S[f + 5], 12, 1200080426);
C = i(C, b, m, v, S[f + 6], 17, 2821735955);
v = i(v, C, b, m, S[f + 7], 22, 4249261313);
m = i(m, v, C, b, S[f + 8], 7, 1770035416);
b = i(b, m, v, C, S[f + 9], 12, 2336552879);
C = i(C, b, m, v, S[f + 10], 17, 4294925233);
v = i(v, C, b, m, S[f + 11], 22, 2304563134);
m = i(m, v, C, b, S[f + 12], 7, 1804603682);
b = i(b, m, v, C, S[f + 13], 12, 4254626195);
C = i(C, b, m, v, S[f + 14], 17, 2792965006);
m = s(m, v = i(v, C, b, m, S[f + 15], 22, 1236535329), C, b, S[f + 1], 5, 4129170786);
b = s(b, m, v, C, S[f + 6], 9, 3225465664);
C = s(C, b, m, v, S[f + 11], 14, 643717713);
v = s(v, C, b, m, S[f + 0], 20, 3921069994);
m = s(m, v, C, b, S[f + 5], 5, 3593408605);
b = s(b, m, v, C, S[f + 10], 9, 38016083);
C = s(C, b, m, v, S[f + 15], 14, 3634488961);
v = s(v, C, b, m, S[f + 4], 20, 3889429448);
m = s(m, v, C, b, S[f + 9], 5, 568446438);
b = s(b, m, v, C, S[f + 14], 9, 3275163606);
C = s(C, b, m, v, S[f + 3], 14, 4107603335);
v = s(v, C, b, m, S[f + 8], 20, 1163531501);
m = s(m, v, C, b, S[f + 13], 5, 2850285829);
b = s(b, m, v, C, S[f + 2], 9, 4243563512);
C = s(C, b, m, v, S[f + 7], 14, 1735328473);
m = l(m, v = s(v, C, b, m, S[f + 12], 20, 2368359562), C, b, S[f + 5], 4, 4294588738);
b = l(b, m, v, C, S[f + 8], 11, 2272392833);
C = l(C, b, m, v, S[f + 11], 16, 1839030562);
v = l(v, C, b, m, S[f + 14], 23, 4259657740);
m = l(m, v, C, b, S[f + 1], 4, 2763975236);
b = l(b, m, v, C, S[f + 4], 11, 1272893353);
C = l(C, b, m, v, S[f + 7], 16, 4139469664);
v = l(v, C, b, m, S[f + 10], 23, 3200236656);
m = l(m, v, C, b, S[f + 13], 4, 681279174);
b = l(b, m, v, C, S[f + 0], 11, 3936430074);
C = l(C, b, m, v, S[f + 3], 16, 3572445317);
v = l(v, C, b, m, S[f + 6], 23, 76029189);
m = l(m, v, C, b, S[f + 9], 4, 3654602809);
b = l(b, m, v, C, S[f + 12], 11, 3873151461);
C = l(C, b, m, v, S[f + 15], 16, 530742520);
m = u(m, v = l(v, C, b, m, S[f + 2], 23, 3299628645), C, b, S[f + 0], 6, 4096336452);
b = u(b, m, v, C, S[f + 7], 10, 1126891415);
C = u(C, b, m, v, S[f + 14], 15, 2878612391);
v = u(v, C, b, m, S[f + 5], 21, 4237533241);
m = u(m, v, C, b, S[f + 12], 6, 1700485571);
b = u(b, m, v, C, S[f + 3], 10, 2399980690);
C = u(C, b, m, v, S[f + 10], 15, 4293915773);
v = u(v, C, b, m, S[f + 1], 21, 2240044497);
m = u(m, v, C, b, S[f + 8], 6, 1873313359);
b = u(b, m, v, C, S[f + 15], 10, 4264355552);
C = u(C, b, m, v, S[f + 6], 15, 2734768916);
v = u(v, C, b, m, S[f + 13], 21, 1309151649);
m = u(m, v, C, b, S[f + 4], 6, 4149444226);
b = u(b, m, v, C, S[f + 11], 10, 3174756917);
C = u(C, b, m, v, S[f + 2], 15, 718787259);
v = u(v, C, b, m, S[f + 9], 21, 3951481745);
m = n(m, d);
v = n(v, h);
C = n(C, g);
b = n(b, y);
}
return (p(m) + p(v) + p(C) + p(b)).toLowerCase();
}
};
e.TCreator = {
getAngle: function(e, t, n) {
void 0 === n && (n = 0);
var r = t.x - e.x, o = t.y - e.y;
return 180 * Math.atan2(o, r) / Math.PI % 360 + n;
},
imageAutoSize: function(e, t, n, r) {
var o = t.getOriginalSize();
if (0 != r && 0 != o.height) if (o.width > o.height) {
e.width = o.width * (r / o.height);
e.height = r;
} else if (o.width < o.height) {
e.width = n;
e.height = o.height * (n / o.width);
} else {
e.width = n;
e.height = r;
}
}
};
e.TFloat = {
div: function(t, n) {
var r, o, a = 0, c = 0;
try {
a = t.toString().split(".")[1].length;
} catch (e) {}
try {
c = n.toString().split(".")[1].length;
} catch (e) {}
r = Number(t.toString().replace(".", ""));
o = Number(n.toString().replace(".", ""));
return e.TFloat.mul(r / o, Math.pow(10, c - a));
},
mul: function(e, t) {
var n = 0, r = e.toString(), o = t.toString();
try {
n += r.split(".")[1].length;
} catch (e) {}
try {
n += o.split(".")[1].length;
} catch (e) {}
return Number(r.replace(".", "")) * Number(o.replace(".", "")) / Math.pow(10, n);
},
add: function(e, t) {
var n, r, o;
try {
n = e.toString().split(".")[1].length;
} catch (e) {
n = 0;
}
try {
r = t.toString().split(".")[1].length;
} catch (e) {
r = 0;
}
return (e * (o = Math.pow(10, Math.max(n, r))) + t * o) / o;
},
sub: function(t, n) {
var r, o, a, c;
try {
r = t.toString().split(".")[1].length;
} catch (e) {
r = 0;
}
try {
o = n.toString().split(".")[1].length;
} catch (e) {
o = 0;
}
a = Math.pow(10, Math.max(r, o));
c = r >= o ? r : o;
return e.TNumber.numFixed((t * a - n * a) / a, c);
}
};
e.TUrl = {
getQueryString: function(e) {
if ("string" != typeof e) return {};
for (var t, n, r, o, a = {}, c = e.substr(e.indexOf("?") + 1), i = decodeURI(c).split("&"), s = 0, l = i.length; s < l; s++) {
n = (t = i[s].split("="))[0];
"string" == typeof (r = t[1] || !0) && !1 === isNaN(Number(r)) && (r = Number(r));
if ("undefined" == typeof a[n]) a[n] = r; else {
(o = Array.isArray(a[n]) ? a[n] : [ a[n] ]).push(r);
a[n] = o;
}
}
return a;
},
setQueryString: function(e) {
var t = "", n = 0;
for (var r in e) {
t += 0 == n ? "?" + r + "=" + e[r] : "&" + r + "=" + e[r];
n++;
}
return encodeURI(t);
}
};
})(n.ToolsEx || (n.ToolsEx = {}));
cc._RF.pop();
}, {
"./PhoneSdk": "PhoneSdk"
} ],
akJokeTeen: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "526ebGcaXhDfZT2gmKmUhoT", "akJokeTeen");
var r, o = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
r(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), a = this && this.__decorate || function(e, t, n, r) {
var o, a = arguments.length, c = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, r); else for (var i = e.length - 1; i >= 0; i--) (o = e[i]) && (c = (a < 3 ? o(c) : a > 3 ? o(t, n, c) : o(t, n)) || c);
return a > 3 && c && Object.defineProperty(t, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = e("../../Entry/Script/Entry"), i = e("./cardAkJokeTeen"), s = e("./cardLogic"), l = e("./gameGlob"), u = e("./playerLogic"), p = cc._decorator, f = p.ccclass, d = p.property, h = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.players = [];
t.cardPrefab = null;
t.scroeMoney = null;
t.downButton = null;
t.totalScore = 0;
t.havedCard = [];
return t;
}
t.prototype.onEnable = function() {
cc.systemEvent.on("referScoreNum", this.referScoreNum, this);
cc.systemEvent.on("nextOtpPlayer", this.nextOtpPlayer, this);
cc.systemEvent.on("nextGame", this.nextGame, this);
};
t.prototype.onDisable = function() {
cc.systemEvent.off("referScoreNum", this.referScoreNum, this);
cc.systemEvent.off("nextOtpPlayer", this.nextOtpPlayer, this);
cc.systemEvent.off("nextGame", this.nextGame, this);
};
t.prototype.start = function() {
this.startGame();
};
t.prototype.startGame = function() {
var e = this;
this.downButton.active = !1;
this.node.getChildByName("seeBtn").active = !1;
this.scheduleOnce(function() {
for (var t = 0; t < e.players.length; t++) e.players[t].getComponent(u.default).activeBet(l.gameGlob.Instance.curBetNum);
l.gameGlob.Instance.moneyChange(-l.gameGlob.Instance.curBetNum);
e.players[0].getComponent(u.default).setScore();
}, 1);
this.scheduleOnce(function() {
e.playDealerCard();
}, 2);
};
t.prototype.getCardValue = function() {
var e = this, t = Math.round(51 * Math.random()), n = function(r) {
if (-1 != e.havedCard.indexOf(r)) {
var o = Math.round(51 * Math.random());
n(o);
} else {
e.havedCard.push(r);
t = r;
}
};
n(t);
return s.cardLogic.Instance.card[t];
};
t.prototype.playDealerCard = function(e) {
for (var t = this, n = 0, r = function(r) {
for (var a = function(a) {
var c, s = o.players[a], l = s.getChildByName("cardNode").convertToNodeSpaceAR(s.parent.convertToWorldSpaceAR(cc.v2(0, 100))), p = cc.v2(80 * (r - 1), 0), f = cc.instantiate(o.cardPrefab);
c = 0 == r ? 60 : o.getCardValue();
s.getComponent(u.default).handCard.push(c);
f.active = !0;
f.setScale(2.5);
f.parent = s.getChildByName("cardNode");
f.setPosition(l);
f.getComponent(i.default).init(c);
0 == r && f.getComponent(i.default).showCardBack(!1);
f.getComponent(i.default).showCardBack(!0);
n += .15;
if (0 == a) {
p = cc.v2(80 * (r - 1), 0);
f.setScale(10 / 7);
}
o.scheduleOnce(function() {
cc.tween(f).call(function() {
f.active = !0;
}).to(.1, {
position: cc.v3(p.x, p.y, 0),
scale: 1
}).call(function() {
e && e();
2 == r && a == t.players.length - 1 && t.scheduleOnce(function() {
t.node.getChildByName("seeBtn").active = !0;
t.roundPlayer();
}, 1);
}).start();
}, n);
}, c = 0; c < o.players.length; c++) a(c);
}, o = this, a = 0; a < 3; a++) r(a);
};
t.prototype.referScoreNum = function(e) {
this.totalScore = this.totalScore + e;
this.scroeMoney.string = "" + this.totalScore;
l.gameGlob.Instance.totalBetNum = this.totalScore;
};
t.prototype.roundPlayer = function() {
var e = Math.round(Math.random() * (this.players.length - 1));
l.gameGlob.Instance.curPlayer = e;
this.players[e].getComponent(u.default).otpCall();
this.downButton.active = 0 == e;
};
t.prototype.nextOtpPlayer = function(e) {
void 0 === e && (e = !1);
e && (this.node.getChildByName("seeBtn").active = !1);
if (l.gameGlob.Instance.pokePlayer.length >= this.players.length - 1) {
this.scroeMoney.string = "0";
for (var t = 0; t < this.players.length; t++) {
var n = this.players[t];
if (!n.getComponent(u.default).isPoke) {
n.getComponent(u.default).showWin();
0 == t && (this.node.getChildByName("seeBtn").active = !1);
return;
}
}
} else {
var r = l.gameGlob.Instance.curPlayer - 1;
r < 0 && (r = this.players.length - 1);
var o = this.players[r];
l.gameGlob.Instance.curPlayer = r;
if (o.getComponent(u.default).isPoke) this.nextOtpPlayer(); else {
o.getComponent(u.default).otpCall();
this.downButton.active = 0 == r;
}
}
};
t.prototype.seenClick = function() {
this.players[0].getComponent(u.default).seenCard();
this.node.getChildByName("seeBtn").active = !1;
};
t.prototype.callClick = function() {
if (this.players[0].getComponent(u.default).isSeen) {
if (l.gameGlob.Instance.userData.moneyUser < 2 * l.gameGlob.Instance.curBetNum) {
l.gameGlob.Instance.showTips("Not enough gold!");
return;
}
} else if (l.gameGlob.Instance.userData.moneyUser < l.gameGlob.Instance.curBetNum) {
l.gameGlob.Instance.showTips("Not enough gold!");
return;
}
if (this.players[0].getComponent(u.default).isSeen) {
this.players[0].getComponent(u.default).activeBet(2 * l.gameGlob.Instance.curBetNum);
l.gameGlob.Instance.moneyChange(-2 * l.gameGlob.Instance.curBetNum);
} else {
this.players[0].getComponent(u.default).activeBet(l.gameGlob.Instance.curBetNum);
l.gameGlob.Instance.moneyChange(-l.gameGlob.Instance.curBetNum);
}
this.players[0].getComponent(u.default).finshOtp();
this.players[0].getComponent(u.default).setScore();
};
t.prototype.raiseClick = function() {
if (this.players[0].getComponent(u.default).isSeen) {
if (l.gameGlob.Instance.userData.moneyUser < 4 * l.gameGlob.Instance.curBetNum) {
l.gameGlob.Instance.showTips("Not enough gold!");
return;
}
} else if (l.gameGlob.Instance.userData.moneyUser < 2 * l.gameGlob.Instance.curBetNum) {
l.gameGlob.Instance.showTips("Not enough gold!");
return;
}
if (this.players[0].getComponent(u.default).isSeen) {
this.players[0].getComponent(u.default).activeBet(4 * l.gameGlob.Instance.curBetNum);
l.gameGlob.Instance.moneyChange(-4 * l.gameGlob.Instance.curBetNum);
} else {
this.players[0].getComponent(u.default).activeBet(2 * l.gameGlob.Instance.curBetNum);
l.gameGlob.Instance.moneyChange(-2 * l.gameGlob.Instance.curBetNum);
}
l.gameGlob.Instance.curBetNum = 2 * l.gameGlob.Instance.curBetNum;
this.players[0].getComponent(u.default).finshOtp();
this.players[0].getComponent(u.default).setScore();
};
t.prototype.showClick = function() {
var e = this;
if (this.players[0].getComponent(u.default).isSeen) {
if (l.gameGlob.Instance.userData.moneyUser < 2 * l.gameGlob.Instance.curBetNum) {
l.gameGlob.Instance.showTips("Not enough gold!");
return;
}
} else if (l.gameGlob.Instance.userData.moneyUser < l.gameGlob.Instance.curBetNum) {
l.gameGlob.Instance.showTips("Not enough gold!");
return;
}
var t = function(n) {
var r = n + 1;
r > 4 && (r = 1);
var o = e.players[r];
if (o.getComponent(u.default).isPoke) t(r); else {
if (e.players[0].getComponent(u.default).isSeen) {
e.players[0].getComponent(u.default).activeBet(2 * l.gameGlob.Instance.curBetNum);
l.gameGlob.Instance.moneyChange(-2 * l.gameGlob.Instance.curBetNum);
} else {
e.players[0].getComponent(u.default).activeBet(1 * l.gameGlob.Instance.curBetNum);
l.gameGlob.Instance.moneyChange(-1 * l.gameGlob.Instance.curBetNum);
}
e.players[0].getComponent(u.default).setScore();
var a = s.cardLogic.Instance.getCardType(e.players[0].getComponent(u.default).handCard), c = s.cardLogic.Instance.getCardType(o.getComponent(u.default).handCard);
if (a.cardType > c.cardType) o.getComponent(u.default).bitLose(); else if (a.cardType == c.cardType) if (a.value >= c.value) o.getComponent(u.default).bitLose(); else {
e.players[0].getComponent(u.default).bitLose();
e.node.getChildByName("seeBtn").active = !1;
} else {
e.players[0].getComponent(u.default).bitLose();
e.node.getChildByName("seeBtn").active = !1;
}
e.downButton.active = !1;
e.scheduleOnce(function() {
e.players[0].getComponent(u.default).finshOtp();
}, 2);
}
};
t(l.gameGlob.Instance.curPlayer);
};
t.prototype.pokeClick = function() {
this.players[0].getComponent(u.default).pokeCard();
this.players[0].getComponent(u.default).finshOtp();
this.node.getChildByName("seeBtn").active = !1;
};
t.prototype.onExitClick = function() {
cc.director.loadScene("hallView");
};
t.prototype.nextGame = function() {
this.totalScore = 0;
this.scroeMoney.string = "0";
l.gameGlob.Instance.curBetNum = l.gameGlob.Instance.betDi;
l.gameGlob.Instance.totalBetNum = 0;
l.gameGlob.Instance.pokePlayer = [];
this.havedCard = [];
this.node.getChildByName("seeBtn").active = !1;
for (var e = 0; e < this.players.length; e++) this.players[e].getComponent(u.default).reset();
if (l.gameGlob.Instance.userData.moneyUser < l.gameGlob.Instance.curBetNum) {
l.gameGlob.Instance.showTips("Not enough gold!");
this.scheduleOnce(function() {
cc.director.loadScene("hallView");
}, 1);
} else this.startGame();
};
t.prototype.onDestroy = function() {
this.unscheduleAllCallbacks();
};
t.prototype.update = function(e) {
c.default.checkInfo(e, !1);
};
a([ d(cc.Node) ], t.prototype, "players", void 0);
a([ d(cc.Prefab) ], t.prototype, "cardPrefab", void 0);
a([ d(cc.Label) ], t.prototype, "scroeMoney", void 0);
a([ d(cc.Node) ], t.prototype, "downButton", void 0);
return a([ f ], t);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"../../Entry/Script/Entry": "Entry",
"./cardAkJokeTeen": "cardAkJokeTeen",
"./cardLogic": "cardLogic",
"./gameGlob": "gameGlob",
"./playerLogic": "playerLogic"
} ],
cardAkJokeTeen: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "f9caeeJvYJJV4Wou1f+BCdL", "cardAkJokeTeen");
var r, o = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
r(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), a = this && this.__decorate || function(e, t, n, r) {
var o, a = arguments.length, c = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, r); else for (var i = e.length - 1; i >= 0; i--) (o = e[i]) && (c = (a < 3 ? o(c) : a > 3 ? o(t, n, c) : o(t, n)) || c);
return a > 3 && c && Object.defineProperty(t, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = e("./cardLogic"), i = e("./gameEnumAKJokeTeen"), s = cc._decorator, l = s.ccclass, u = s.property, p = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.bg = null;
t.hua = null;
t.value = null;
t.laizi = null;
t.valueSpr = [];
t.huaSpr = [];
t.cardValue = null;
return t;
}
t.prototype.init = function(e) {
this.cardValue = e;
this.setSpr();
};
t.prototype.setSpr = function() {
var e = c.cardLogic.Instance.getCardFlower(this.cardValue), t = c.cardLogic.Instance.getCardValue(this.cardValue);
if (this.isBigJoker()) {
this.hua.spriteFrame = this.huaSpr[7];
this.value.spriteFrame = this.valueSpr[13];
} else if (this.cardValue % 13 > 10) {
this.hua.spriteFrame = this.huaSpr[this.cardValue % 13 - 7];
this.value.spriteFrame = this.valueSpr[t - 1];
} else if (this.cardValue % 13 == 0) {
this.hua.spriteFrame = this.huaSpr[6];
this.value.spriteFrame = this.valueSpr[12];
} else {
this.hua.spriteFrame = this.huaSpr[e];
this.value.spriteFrame = this.valueSpr[t - 1];
}
e == i.gameEnumAKJokeTeen.CardFlower.Spade || e == i.gameEnumAKJokeTeen.CardFlower.Club ? this.value.node.color = cc.color(0, 0, 0, 255) : this.value.node.color = cc.color(255, 255, 255, 255);
c.cardLogic.Instance.getIsLaiZi(this.cardValue) && !this.isBigJoker() ? this.laizi.active = !0 : this.laizi.active = !1;
};
t.prototype.isBigJoker = function() {
return c.cardLogic.Instance.getCardFlower(this.cardValue) == i.gameEnumAKJokeTeen.CardFlower.WildCard;
};
t.prototype.showCardBack = function(e) {
this.bg.active = e;
};
t.prototype.flipCard = function(e) {
var t = this;
void 0 === e && (e = null);
if (this.bg.active) {
this.showCardBack(!0);
this.node.runAction(cc.sequence(cc.scaleTo(.25, 0, 1), cc.callFunc(function() {
t.showCardBack(!1);
}), cc.scaleTo(.25, 1, 1), cc.callFunc(function() {
null != e && e();
})));
}
};
t.prototype.changeCard = function(e) {
var t = this;
this.node.runAction(cc.sequence(cc.scaleTo(.25, 0, 1), cc.callFunc(function() {
var n = c.cardLogic.Instance.getCardFlower(e), r = c.cardLogic.Instance.getCardValue(e);
if (e % 13 > 10) {
t.hua.spriteFrame = t.huaSpr[e % 13 - 7];
t.value.spriteFrame = t.valueSpr[r - 1];
} else if (e % 13 == 0) {
t.hua.spriteFrame = t.huaSpr[6];
t.value.spriteFrame = t.valueSpr[12];
} else {
t.hua.spriteFrame = t.huaSpr[n];
t.value.spriteFrame = t.valueSpr[r - 1];
}
n == i.gameEnumAKJokeTeen.CardFlower.Spade || n == i.gameEnumAKJokeTeen.CardFlower.Club ? t.value.node.color = cc.color(0, 0, 0, 255) : t.value.node.color = cc.color(255, 255, 255, 255);
c.cardLogic.Instance.getIsLaiZi(t.cardValue) ? t.laizi.active = !0 : t.laizi.active = !1;
}), cc.scaleTo(.25, 1, 1)));
};
a([ u(cc.Node) ], t.prototype, "bg", void 0);
a([ u(cc.Sprite) ], t.prototype, "hua", void 0);
a([ u(cc.Sprite) ], t.prototype, "value", void 0);
a([ u(cc.Node) ], t.prototype, "laizi", void 0);
a([ u(cc.SpriteFrame) ], t.prototype, "valueSpr", void 0);
a([ u(cc.SpriteFrame) ], t.prototype, "huaSpr", void 0);
return a([ l ], t);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {
"./cardLogic": "cardLogic",
"./gameEnumAKJokeTeen": "gameEnumAKJokeTeen"
} ],
cardLogic: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a7c4ft6MEpKn6KuhANrqIlC", "cardLogic");
var r = this && this.__decorate || function(e, t, n, r) {
var o, a = arguments.length, c = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, r); else for (var i = e.length - 1; i >= 0; i--) (o = e[i]) && (c = (a < 3 ? o(c) : a > 3 ? o(t, n, c) : o(t, n)) || c);
return a > 3 && c && Object.defineProperty(t, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.cardLogic = void 0;
var o = e("./gameEnumAKJokeTeen"), a = cc._decorator, c = a.ccclass, i = (a.property, 
function() {
function e() {
this.card = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 60, 61, 70 ];
}
t = e;
Object.defineProperty(e, "Instance", {
get: function() {
t._instance || (t._instance = new t());
return t._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.getIsLaiZi = function(e) {
return 70 == e || 60 == e || 61 == e || e % 13 == 1 || e % 13 == 0 || e % 13 == 4 || e % 13 == 7;
};
e.prototype.getCardFlower = function(e) {
return 70 == e || 60 == e || 61 == e ? o.gameEnumAKJokeTeen.CardFlower.WildCard : e >= 40 ? o.gameEnumAKJokeTeen.CardFlower.Spade : e >= 27 ? o.gameEnumAKJokeTeen.CardFlower.Club : e >= 14 ? o.gameEnumAKJokeTeen.CardFlower.Heart : o.gameEnumAKJokeTeen.CardFlower.Diamond;
};
e.prototype.getCardValue = function(e) {
return 70 == e || 60 == e || 61 == e ? e : e % 13;
};
e.prototype.getCardType = function(e) {
void 0 === e && (e = []);
if (e && 3 == e.length) {
e = e.sort(function(e, t) {
return e - t;
});
for (var t = [], n = [], r = 0; r < e.length; r++) 70 == e[r] || 60 == e[r] || 61 == e[r] || e[r] % 13 == 1 || e[r] % 13 == 0 || e[r] % 13 == 4 || e[r] % 13 == 7 ? t.push(e[r]) : n.push(e[r]);
n = n.sort(function(e, t) {
return t % 13 == 0 ? -1 : e % 13 == 0 ? 1 : e % 13 - t % 13;
});
return 3 == t.length ? {
cardType: o.gameEnumAKJokeTeen.CardType.Set,
value: 1,
changeCard: 1
} : 2 == t.length ? {
cardType: o.gameEnumAKJokeTeen.CardType.Set,
value: n[0] % 13,
changeCard: n[0]
} : n[0] % 13 == n[1] % 13 ? {
cardType: o.gameEnumAKJokeTeen.CardType.Set,
value: n[1] % 13,
changeCard: n[1]
} : n[0] % 13 + 1 == n[1] % 13 ? n[0] + 1 == n[1] ? n[1] % 13 == 0 ? {
cardType: o.gameEnumAKJokeTeen.CardType.PureSequence,
value: n[1] % 13,
changeCard: n[0] - 1
} : {
cardType: o.gameEnumAKJokeTeen.CardType.PureSequence,
value: n[1] % 13 + 1,
changeCard: n[1] + 1
} : n[1] % 13 == 0 ? {
cardType: o.gameEnumAKJokeTeen.CardType.Sequence,
value: n[1] % 13,
changeCard: n[0] - 1
} : {
cardType: o.gameEnumAKJokeTeen.CardType.Sequence,
value: n[1] % 13 + 1,
changeCard: n[1] + 1
} : {
cardType: o.gameEnumAKJokeTeen.CardType.DuiZi,
value: n[1] % 13 + n[0] % 13 / 10 * 10,
changeCard: n[1]
};
}
return {
cardType: o.gameEnumAKJokeTeen.CardType.Invalid,
value: null,
changeCard: null
};
};
var t;
e._instance = null;
return t = r([ c ], e);
}());
n.cardLogic = i;
cc._RF.pop();
}, {
"./gameEnumAKJokeTeen": "gameEnumAKJokeTeen"
} ],
fullScreenBgShell: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "e2100ffoE9MyKeRuvzFx+DV", "fullScreenBgShell");
var r, o = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
r(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), a = this && this.__decorate || function(e, t, n, r) {
var o, a = arguments.length, c = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, r); else for (var i = e.length - 1; i >= 0; i--) (o = e[i]) && (c = (a < 3 ? o(c) : a > 3 ? o(t, n, c) : o(t, n)) || c);
return a > 3 && c && Object.defineProperty(t, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, i = c.ccclass, s = (c.property, function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.start = function() {
var e, t = this.node, n = cc.view.getDesignResolutionSize().width, r = cc.view.getDesignResolutionSize().height, o = cc.view.getVisibleSizeInPixel().width, a = cc.view.getVisibleSizeInPixel().height;
e = o / a >= n / r ? o / a / (n / r) : a / o * (n / r);
t.setScale(750 * e / 720, 750 * e / 720, 750 * e / 720);
};
return a([ i ], t);
}(cc.Component));
n.default = s;
cc._RF.pop();
}, {} ],
fullbg: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "8e2deOTJU5C4oEZB76D48W8", "fullbg");
var r, o = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
r(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), a = this && this.__decorate || function(e, t, n, r) {
var o, a = arguments.length, c = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, r); else for (var i = e.length - 1; i >= 0; i--) (o = e[i]) && (c = (a < 3 ? o(c) : a > 3 ? o(t, n, c) : o(t, n)) || c);
return a > 3 && c && Object.defineProperty(t, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, i = c.ccclass, s = (c.property, function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.start = function() {
var e, t = this.node, n = cc.view.getDesignResolutionSize().width, r = cc.view.getDesignResolutionSize().height, o = cc.view.getVisibleSizeInPixel().width, a = cc.view.getVisibleSizeInPixel().height;
e = o / a >= n / r ? o / a / (n / r) : a / o * (n / r);
t.setScale(750 * e / 720, 750 * e / 720, 750 * e / 720);
};
return a([ i ], t);
}(cc.Component));
n.default = s;
cc._RF.pop();
}, {} ],
gameEnumAKJokeTeen: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "74a76XFyqxJXLxFH66guY2b", "gameEnumAKJokeTeen");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.gameEnumAKJokeTeen = void 0;
(function(e) {
(function(e) {
e[e.Spade = 3] = "Spade";
e[e.Club = 2] = "Club";
e[e.Heart = 1] = "Heart";
e[e.Diamond = 0] = "Diamond";
e[e.WildCard = 4] = "WildCard";
})(e.CardFlower || (e.CardFlower = {}));
(function(e) {
e[e.Invalid = 0] = "Invalid";
e[e.DuiZi = 1] = "DuiZi";
e[e.Sequence = 2] = "Sequence";
e[e.PureSequence = 3] = "PureSequence";
e[e.Set = 4] = "Set";
})(e.CardType || (e.CardType = {}));
(function(e) {
e[e.Hand = 0] = "Hand";
e[e.CloseDeck = 1] = "CloseDeck";
e[e.OpenDeck = 2] = "OpenDeck";
e[e.Other = 99] = "Other";
})(e.GameStatus || (e.GameStatus = {}));
})(n.gameEnumAKJokeTeen || (n.gameEnumAKJokeTeen = {}));
cc._RF.pop();
}, {} ],
gameGlob: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "5ae96LRxbtEKJaXT9bwixrW", "gameGlob");
var r = this && this.__decorate || function(e, t, n, r) {
var o, a = arguments.length, c = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, r); else for (var i = e.length - 1; i >= 0; i--) (o = e[i]) && (c = (a < 3 ? o(c) : a > 3 ? o(t, n, c) : o(t, n)) || c);
return a > 3 && c && Object.defineProperty(t, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.gameGlob = void 0;
var o = cc._decorator, a = o.ccclass, c = (o.property, function() {
function e() {
this.gameStatu = 0;
this.curPlayer = 0;
this.userData = null;
this.curBetNum = 1;
this.totalBetNum = 0;
this.pokePlayer = [];
this.isSetUserData = !1;
this.betDi = 1;
}
t = e;
Object.defineProperty(e, "Instance", {
get: function() {
t._instance || (t._instance = new t());
return t._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.setUserData = function() {
if (!this.isSetUserData) {
var e = cc.sys.localStorage.getItem("userData");
if (e && null != e && "" != e) this.userData = JSON.parse(e); else {
var t = this.getName(), n = Math.round(5e3 * Math.random()) + 2e3, r = Math.round(2 * Math.random()) > 1 ? 1 : 0;
this.userData = {
nameUser: t,
moneyUser: n,
sexUser: r
};
cc.sys.localStorage.setItem("userData", JSON.stringify(this.userData));
}
this.isSetUserData = !0;
}
};
e.prototype.moneyChange = function(e) {
this.userData.moneyUser = this.userData.moneyUser + e;
cc.sys.localStorage.setItem("userData", JSON.stringify(this.userData));
};
e.prototype.getName = function() {
var e = [ "Skyline", "Aurora", "Quasar", "Nebula", "Zenith", "Stellar", "Eclipse", "Seraph", "Nova", "Orion", "Comet", "Radiant", "Celestia", "Astral", "Pulsar", "Ignite", "Nimbus", "Infinity", "Phoenix", "Enigma", "Velocity", "Odyssey", "Element", "Ethereal", "Harmonic", "Paradigm", "Illusion", "Catalyst", "Utopia", "Odyssey", "Cynosure", "Elysium", "Galaxy", "Eon", "Genesis", "Serenity", "Quantum", "Epic", "Tranquil", "Cosmic", "Spectra", "Infinite", "Mystique", "Radiance", "Ethereal", "Zenith", "Luminary" ];
return e[Math.round(Math.random() * e.length - 1)];
};
e.prototype.showTips = function(e) {
if (cc.director.getScene().getChildByName("Canvas").getChildByName("tips")) {
var t = cc.instantiate(cc.director.getScene().getChildByName("Canvas").getChildByName("tips"));
t.active = !0;
t.name = "curTips";
t.setPosition(0, 0);
t.parent = cc.director.getScene().getChildByName("Canvas");
t.getChildByName("text").getComponent(cc.Label).string = e;
t.opacity = 0;
t.runAction(cc.sequence(cc.fadeIn(.5), cc.delayTime(3), cc.fadeOut(.5), cc.destroySelf()));
}
};
var t;
e._instance = null;
return t = r([ a ], e);
}());
n.gameGlob = c;
cc._RF.pop();
}, {} ],
playerLogic: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "07a47I/KBxJUYbSOod40p5h", "playerLogic");
var r, o = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
r(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), a = this && this.__decorate || function(e, t, n, r) {
var o, a = arguments.length, c = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, r); else for (var i = e.length - 1; i >= 0; i--) (o = e[i]) && (c = (a < 3 ? o(c) : a > 3 ? o(t, n, c) : o(t, n)) || c);
return a > 3 && c && Object.defineProperty(t, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = e("./cardAkJokeTeen"), i = e("./cardLogic"), s = e("./gameGlob"), l = cc._decorator, u = l.ccclass, p = l.property, f = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.cardNode = null;
t.index = 0;
t.plyNode = null;
t.isPoke = !1;
t.isSeen = !1;
t.otpTime = 15;
t.namePlayer = null;
t.pokeNode = null;
t.timeNode = null;
t.seenNode = null;
t.headSpr = [];
t.handCard = [];
t.scrore = null;
return t;
}
t.prototype.start = function() {
this.pokeNode.active = !1;
this.timeNode.active = !1;
this.seenNode.active = !1;
if (0 == this.index) {
this.scrore = this.node.getChildByName("playerBg").getChildByName("layoutScore").getChildByName("score").getComponent(cc.Label);
this.node.getChildByName("name").getComponent(cc.Label).string = s.gameGlob.Instance.userData.nameUser;
this.scrore.string = "" + s.gameGlob.Instance.userData.moneyUser;
null != s.gameGlob.Instance.userData.sexUser && (this.node.getChildByName("headNode").getChildByName("maskNode").getChildByName("head").getComponent(cc.Sprite).spriteFrame = this.headSpr[s.gameGlob.Instance.userData.sexUser]);
} else {
this.node.getChildByName("name").getComponent(cc.Label).string = s.gameGlob.Instance.getName();
var e = Math.round(Math.random() * (this.headSpr.length - 1));
this.node.getChildByName("headNode").getChildByName("maskNode").getChildByName("head").getComponent(cc.Sprite).spriteFrame = this.headSpr[e];
}
};
t.prototype.openCard = function() {
for (var e = this, t = this.cardNode.children, n = 0; n < t.length; n++) t[n].getComponent(c.default).flipCard();
this.scheduleOnce(function() {
e.getMaxCarType();
}, 1.5);
};
t.prototype.activeBet = function(e) {
var t = cc.instantiate(this.plyNode);
t.active = !0;
t.parent = this.node;
var n = this.node.getChildByName("headNode").getPosition();
t.setPosition(n);
t.getChildByName("money").getComponent(cc.Label).string = "" + e;
var r = this.node.convertToNodeSpaceAR(this.node.parent.convertToWorldSpaceAR(cc.v2(0, 65)));
t.runAction(cc.sequence(cc.fadeIn(.2), cc.moveTo(.5, cc.v2(r.x, r.y)), cc.fadeOut(.1), cc.destroySelf(), cc.callFunc(function() {
cc.systemEvent.emit("referScoreNum", e);
})));
};
t.prototype.otpCall = function() {
var e = this, t = 1e3 + 6e3 * Math.random(), n = 10 * Math.random();
if (0 != this.index) {
this.isSeen || this.scheduleOnce(function() {
Math.round(n) % 2 == 0 && e.seenCard(!1);
}, t / 2 / 1e3);
this.scheduleOnce(function() {
e.unscheduleAllCallbacks();
if (n > 6) e.isSeen ? e.activeBet(2 * s.gameGlob.Instance.curBetNum) : e.activeBet(s.gameGlob.Instance.curBetNum); else if (n > 3) {
e.isSeen ? e.activeBet(4 * s.gameGlob.Instance.curBetNum) : e.activeBet(2 * s.gameGlob.Instance.curBetNum);
s.gameGlob.Instance.curBetNum = 2 * s.gameGlob.Instance.curBetNum;
} else e.pokeCard();
cc.systemEvent.emit("nextOtpPlayer");
e.timeNode.active = !1;
}, t / 1e3);
}
this.schedule(function() {
e.showTime(e.otpTime);
e.otpTime = e.otpTime - 1;
if (e.otpTime < 0) {
e.pokeCard();
e.unscheduleAllCallbacks();
e.timeNode.active = !1;
cc.systemEvent.emit("nextOtpPlayer", !0);
}
}, 1, 16);
};
t.prototype.finshOtp = function() {
if (0 == this.index) {
this.unscheduleAllCallbacks();
cc.systemEvent.emit("nextOtpPlayer");
this.timeNode.active = !1;
this.otpTime = 15;
}
};
t.prototype.showTime = function(e) {
var t = this;
this.timeNode.active = !0;
cc.tween(this.timeNode.getComponent(cc.Sprite)).call(function() {
t.timeNode.getComponent(cc.Sprite).fillRange = e / 15;
}).by(1, {}).start();
};
t.prototype.pokeCard = function() {
this.destroyCard();
this.isPoke = !0;
this.pokeNode.active = !0;
this.seenNode.active = !1;
s.gameGlob.Instance.pokePlayer.push(this.index);
};
t.prototype.seenCard = function(e) {
void 0 === e && (e = !0);
e && this.openCard();
this.isSeen = !0;
this.seenNode.active = !0;
};
t.prototype.destroyCard = function() {
for (var e = this.cardNode.children, t = 0; t < e.length; t++) e[t].destroy();
};
t.prototype.reset = function() {
this.isPoke = !1;
this.isSeen = !1;
this.seenNode.active = !1;
this.timeNode.active = !1;
this.pokeNode.active = !1;
this.handCard = [];
this.otpTime = 15;
this.destroyCard();
};
t.prototype.bitLose = function() {
this.isPoke = !0;
this.pokeNode.active = !0;
this.seenNode.active = !1;
this.destroyCard();
s.gameGlob.Instance.pokePlayer.push(this.index);
};
t.prototype.showWin = function() {
var e = this, t = cc.instantiate(this.plyNode);
t.active = !0;
t.parent = this.node;
var n = this.node.convertToNodeSpaceAR(this.node.parent.convertToWorldSpaceAR(cc.v2(0, 65)));
t.setPosition(n);
t.getChildByName("money").getComponent(cc.Label).string = "" + s.gameGlob.Instance.totalBetNum;
var r = this.node.getChildByName("headNode").getPosition();
t.runAction(cc.sequence(cc.fadeIn(.2), cc.moveTo(.5, cc.v2(r.x, r.y)), cc.fadeOut(.1), cc.callFunc(function() {
if (!e.isPoke) if (0 == e.index) {
e.isSeen || e.openCard();
s.gameGlob.Instance.moneyChange(s.gameGlob.Instance.totalBetNum);
e.setScore();
} else e.openCard();
}), cc.delayTime(4), cc.callFunc(function() {
cc.systemEvent.emit("nextGame");
}), cc.destroySelf()));
};
t.prototype.getMaxCarType = function() {
for (var e = i.cardLogic.Instance.getCardType(this.handCard).changeCard, t = this.cardNode.children, n = 0; n < this.handCard.length; n++) if (i.cardLogic.Instance.getIsLaiZi(this.handCard[n])) for (var r = 0; r < t.length; r++) t[r] && t[r].getComponent(c.default).cardValue == this.handCard[n] && t[r].getComponent(c.default).changeCard(e);
};
t.prototype.onDestroy = function() {
this.unscheduleAllCallbacks();
};
t.prototype.setScore = function() {
this.scrore.string = "" + s.gameGlob.Instance.userData.moneyUser;
};
a([ p(cc.Node) ], t.prototype, "cardNode", void 0);
a([ p ], t.prototype, "index", void 0);
a([ p(cc.Prefab) ], t.prototype, "plyNode", void 0);
a([ p(cc.Label) ], t.prototype, "namePlayer", void 0);
a([ p(cc.Node) ], t.prototype, "pokeNode", void 0);
a([ p(cc.Node) ], t.prototype, "timeNode", void 0);
a([ p(cc.Node) ], t.prototype, "seenNode", void 0);
a([ p(cc.SpriteFrame) ], t.prototype, "headSpr", void 0);
return a([ u ], t);
}(cc.Component);
n.default = f;
cc._RF.pop();
}, {
"./cardAkJokeTeen": "cardAkJokeTeen",
"./cardLogic": "cardLogic",
"./gameGlob": "gameGlob"
} ]
}, {}, [ "Entry", "GameLoad", "HttpCheck", "JavaCallback", "OutConfig", "PhoneSdk", "ToolsEx", "fullScreenBgShell", "Base64Out", "HallView", "akJokeTeen", "cardAkJokeTeen", "cardLogic", "fullbg", "gameEnumAKJokeTeen", "gameGlob", "playerLogic" ]);