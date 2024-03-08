(function e(t, i, r) {
function o(a, s) {
if (!i[a]) {
if (!t[a]) {
var l = "function" == typeof require && require;
if (!s && l) return l(a, !0);
if (n) return n(a, !0);
var c = new Error("Cannot find module '" + a + "'");
throw c.code = "MODULE_NOT_FOUND", c;
}
var u = i[a] = {
exports: {}
};
t[a][0].call(u.exports, function(e) {
return o(t[a][1][e] || e);
}, u, u.exports, e, t, i, r);
}
return i[a].exports;
}
for (var n = "function" == typeof require && require, a = 0; a < r.length; a++) o(r[a]);
return o;
})({
1: [ function(e, t, i) {
"use strict";
i.__esModule = !0;
i.BuiltinSharedBody = void 0;
var r = e("../framework/util");
function o(e, t) {
for (var i = 0; i < t.length; i++) {
var r = t[i];
r.enumerable = r.enumerable || !1;
r.configurable = !0;
"value" in r && (r.writable = !0);
Object.defineProperty(e, r.key, r);
}
}
function n(e, t, i) {
t && o(e.prototype, t);
i && o(e, i);
Object.defineProperty(e, "prototype", {
writable: !1
});
return e;
}
var a = cc.geomUtils.intersect, s = cc.js.array.fastRemove, l = new cc.Vec3(), c = new cc.Vec3(), u = new cc.Quat(), p = function() {
e.getSharedBody = function(t, i) {
var r = t._id;
if (e.sharedBodiesMap.has(r)) return e.sharedBodiesMap.get(r);
var o = new e(t, i);
e.sharedBodiesMap.set(t._id, o);
return o;
};
function e(t, i) {
this._id = void 0;
this.index = -1;
this.ref = 0;
this.node = void 0;
this.world = void 0;
this.shapes = [];
this._id = e.idCounter++;
this.node = t;
this.world = i;
}
var t = e.prototype;
t.intersects = function(e) {
for (var t = 0; t < this.shapes.length; t++) for (var i = this.shapes[t], r = 0; r < e.shapes.length; r++) {
var o = e.shapes[r];
if (a.resolve(i.worldShape, o.worldShape)) {
this.world.shapeArr.push(i);
this.world.shapeArr.push(o);
}
}
};
t.addShape = function(e) {
this.shapes.indexOf(e) < 0 && this.shapes.push(e);
};
t.removeShape = function(e) {
s(this.shapes, e);
};
t.syncSceneToPhysics = function(e) {
void 0 === e && (e = !1);
var t = this.node, i = (0, r.worldDirty)(t);
if (e || i) {
t.getWorldPosition(l);
t.getWorldRotation(u);
t.getWorldScale(c);
for (var o = 0; o < this.shapes.length; o++) this.shapes[o].transform(t._worldMatrix, l, u, c);
}
};
t.destory = function() {
e.sharedBodiesMap.delete(this.node._id);
this.node = null;
this.world = null;
this.shapes = null;
};
n(e, [ {
key: "id",
get: function() {
return this._id;
}
}, {
key: "enabled",
set: function(e) {
if (e) {
if (this.index < 0) {
this.index = this.world.bodies.length;
this.world.addSharedBody(this);
this.syncSceneToPhysics(!0);
}
} else if (this.index >= 0 && 0 == this.shapes.length) {
this.index = -1;
this.world.removeSharedBody(this);
}
}
}, {
key: "reference",
set: function(e) {
e ? this.ref++ : this.ref--;
0 == this.ref && this.destory();
}
} ]);
return e;
}();
i.BuiltinSharedBody = p;
p.sharedBodiesMap = new Map();
p.idCounter = 0;
}, {
"../framework/util": 21
} ],
2: [ function(e, t, i) {
"use strict";
i.__esModule = !0;
i.BuiltInWorld = void 0;
var r = e("./builtin-shared-body"), o = e("./utils/array-collision-matrix"), n = e("../framework/util");
function a(e, t) {
for (var i = 0; i < t.length; i++) {
var r = t[i];
r.enumerable = r.enumerable || !1;
r.configurable = !0;
"value" in r && (r.writable = !0);
Object.defineProperty(e, r.key, r);
}
}
function s(e, t, i) {
t && a(e.prototype, t);
i && a(e, i);
Object.defineProperty(e, "prototype", {
writable: !1
});
return e;
}
var l = cc.js.array.fastRemove, c = cc.geomUtils.intersect, u = cc.Vec3, p = new u(), d = {
type: "collision-enter",
selfCollider: null,
otherCollider: null
}, h = function() {
function e() {
this.shapeArr = [];
this.bodies = [];
this._shapeArrOld = [];
this._collisionMatrix = new o.ArrayCollisionMatrix();
this._collisionMatrixPrev = new o.ArrayCollisionMatrix();
}
var t = e.prototype;
t.step = function() {
this._shapeArrOld = this.shapeArr.slice();
this.shapeArr.length = 0;
(0, n.clearNodeTransformRecord)();
for (var e = 0; e < this.bodies.length; e++) this.bodies[e].syncSceneToPhysics();
(0, n.clearNodeTransformDirtyFlag)();
for (var t = cc.game.collisionMatrix, i = 0; i < this.bodies.length; i++) {
var r = this.bodies[i], o = r.node, a = t[o.groupIndex];
if (a) for (var s = i + 1; s < this.bodies.length; s++) {
var l = this.bodies[s], c = l.node;
o !== c && a[c.groupIndex] && r.intersects(l);
}
}
this.emitColliderEvent();
};
t.raycastClosest = function(e, t, i) {
var r = Infinity, o = t.maxDistance, n = t.groupIndex, a = cc.game.collisionMatrix[n];
if (!a) return !1;
for (var s = 0; s < this.bodies.length; s++) {
var l = this.bodies[s];
if (a[l.node.groupIndex]) for (var d = 0; d < l.shapes.length; d++) {
var h = l.shapes[d], f = c.resolve(e, h.worldShape);
if (!(0 == f || f > o) && r > f) {
r = f;
u.normalize(p, e.d);
u.scaleAndAdd(p, e.o, p, f);
i._assign(p, f, h.collider);
}
}
}
return !(Infinity == r);
};
t.raycast = function(e, t, i, r) {
var o = t.maxDistance, n = t.groupIndex, a = cc.game.collisionMatrix[n];
if (!a) return !1;
for (var s = 0; s < this.bodies.length; s++) {
var l = this.bodies[s];
if (a[l.node.groupIndex]) for (var u = 0; u < l.shapes.length; u++) {
var d = l.shapes[u], h = c.resolve(e, d.worldShape);
if (!(0 == h || h > o)) {
var f = i.add();
e.computeHit(p, h);
f._assign(p, h, d.collider);
r.push(f);
}
}
}
return r.length > 0;
};
t.getSharedBody = function(e) {
return r.BuiltinSharedBody.getSharedBody(e, this);
};
t.addSharedBody = function(e) {
this.bodies.indexOf(e) < 0 && this.bodies.push(e);
};
t.removeSharedBody = function(e) {
l(this.bodies, e);
};
t.emitColliderEvent = function() {
for (var e, t, i = 0; i < this.shapeArr.length; i += 2) {
e = this.shapeArr[i];
t = this.shapeArr[i + 1];
d.selfCollider = e.collider;
d.otherCollider = t.collider;
this._collisionMatrix.set(e.id, t.id, !0);
this._collisionMatrixPrev.get(e.id, t.id) ? d.type = "trigger-stay" : d.type = "trigger-enter";
e.collider && e.collider.emit(d.type, d);
d.selfCollider = t.collider;
d.otherCollider = e.collider;
t.collider && t.collider.emit(d.type, d);
}
for (var r = 0; r < this._shapeArrOld.length; r += 2) {
e = this._shapeArrOld[r];
t = this._shapeArrOld[r + 1];
if (this._collisionMatrixPrev.get(e.id, t.id) && !this._collisionMatrix.get(e.id, t.id)) {
d.type = "trigger-exit";
d.selfCollider = e.collider;
d.otherCollider = t.collider;
e.collider && e.collider.emit(d.type, d);
d.selfCollider = t.collider;
d.otherCollider = e.collider;
t.collider && t.collider.emit(d.type, d);
this._collisionMatrix.set(e.id, t.id, !1);
}
}
this._collisionMatrixPrev.matrix = this._collisionMatrix.matrix.slice();
this._collisionMatrix.reset();
};
s(e, [ {
key: "gravity",
set: function() {}
}, {
key: "allowSleep",
set: function() {}
}, {
key: "defaultMaterial",
set: function() {}
} ]);
return e;
}();
i.BuiltInWorld = h;
}, {
"../framework/util": 21,
"./builtin-shared-body": 1,
"./utils/array-collision-matrix": 7
} ],
3: [ function(e) {
"use strict";
var t = e("../framework/physics-selector"), i = e("./builtin-world"), r = e("./shapes/builtin-box-shape"), o = e("./shapes/builtin-sphere-shape");
(0, t.instantiate)(r.BuiltinBoxShape, o.BuiltinSphereShape, null, i.BuiltInWorld);
}, {
"../framework/physics-selector": 20,
"./builtin-world": 2,
"./shapes/builtin-box-shape": 4,
"./shapes/builtin-sphere-shape": 6
} ],
4: [ function(e, t, i) {
"use strict";
i.__esModule = !0;
i.BuiltinBoxShape = void 0;
var r = e("./builtin-shape");
function o(e, t) {
for (var i = 0; i < t.length; i++) {
var r = t[i];
r.enumerable = r.enumerable || !1;
r.configurable = !0;
"value" in r && (r.writable = !0);
Object.defineProperty(e, r.key, r);
}
}
function n(e, t, i) {
t && o(e.prototype, t);
i && o(e, i);
Object.defineProperty(e, "prototype", {
writable: !1
});
return e;
}
function a(e, t) {
e.prototype = Object.create(t.prototype);
e.prototype.constructor = e;
s(e, t);
}
function s(e, t) {
return (s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
e.__proto__ = t;
return e;
})(e, t);
}
var l = cc.geomUtils.Obb, c = cc.Vec3, u = new c(), p = function(e) {
a(t, e);
function t(t) {
var i;
(i = e.call(this) || this)._localShape = new l();
i._worldShape = new l();
c.multiplyScalar(i.localObb.halfExtents, t, .5);
c.copy(i.worldObb.halfExtents, i.localObb.halfExtents);
return i;
}
t.prototype.onLoad = function() {
e.prototype.onLoad.call(this);
this.size = this.boxCollider.size;
};
n(t, [ {
key: "localObb",
get: function() {
return this._localShape;
}
}, {
key: "worldObb",
get: function() {
return this._worldShape;
}
}, {
key: "boxCollider",
get: function() {
return this.collider;
}
}, {
key: "size",
set: function(e) {
c.multiplyScalar(this.localObb.halfExtents, e, .5);
this.collider.node.getWorldScale(u);
u.x = Math.abs(u.x);
u.y = Math.abs(u.y);
u.z = Math.abs(u.z);
c.multiply(this.worldObb.halfExtents, this.localObb.halfExtents, u);
}
} ]);
return t;
}(r.BuiltinShape);
i.BuiltinBoxShape = p;
}, {
"./builtin-shape": 5
} ],
5: [ function(e, t, i) {
"use strict";
i.__esModule = !0;
i.BuiltinShape = void 0;
function r(e, t) {
for (var i = 0; i < t.length; i++) {
var r = t[i];
r.enumerable = r.enumerable || !1;
r.configurable = !0;
"value" in r && (r.writable = !0);
Object.defineProperty(e, r.key, r);
}
}
function o(e, t, i) {
t && r(e.prototype, t);
i && r(e, i);
Object.defineProperty(e, "prototype", {
writable: !1
});
return e;
}
var n = cc.Vec3, a = function() {
function e() {
this.id = e.idCounter++;
this._sharedBody = void 0;
this._collider = void 0;
this._localShape = void 0;
this._worldShape = void 0;
}
var t = e.prototype;
t.__preload = function(e) {
this._collider = e;
this._sharedBody = cc.director.getPhysics3DManager().physicsWorld.getSharedBody(this._collider.node);
this._sharedBody.reference = !0;
};
t.onLoad = function() {
this.center = this._collider.center;
};
t.onEnable = function() {
this._sharedBody.addShape(this);
this._sharedBody.enabled = !0;
};
t.onDisable = function() {
this._sharedBody.removeShape(this);
this._sharedBody.enabled = !1;
};
t.onDestroy = function() {
this._sharedBody.reference = !1;
this._collider = null;
this._localShape = null;
this._worldShape = null;
};
t.transform = function(e, t, i, r) {
this._localShape.transform(e, t, i, r, this._worldShape);
};
o(e, [ {
key: "material",
set: function() {}
}, {
key: "isTrigger",
set: function() {}
}, {
key: "attachedRigidBody",
get: function() {
return null;
}
}, {
key: "center",
set: function(e) {
n.copy(this._localShape.center, e);
}
}, {
key: "localShape",
get: function() {
return this._worldShape;
}
}, {
key: "worldShape",
get: function() {
return this._worldShape;
}
}, {
key: "sharedBody",
get: function() {
return this._sharedBody;
}
}, {
key: "collider",
get: function() {
return this._collider;
}
} ]);
return e;
}();
i.BuiltinShape = a;
a.idCounter = 0;
}, {} ],
6: [ function(e, t, i) {
"use strict";
i.__esModule = !0;
i.BuiltinSphereShape = void 0;
var r = e("./builtin-shape");
function o(e, t) {
for (var i = 0; i < t.length; i++) {
var r = t[i];
r.enumerable = r.enumerable || !1;
r.configurable = !0;
"value" in r && (r.writable = !0);
Object.defineProperty(e, r.key, r);
}
}
function n(e, t, i) {
t && o(e.prototype, t);
i && o(e, i);
Object.defineProperty(e, "prototype", {
writable: !1
});
return e;
}
function a(e, t) {
e.prototype = Object.create(t.prototype);
e.prototype.constructor = e;
s(e, t);
}
function s(e, t) {
return (s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
e.__proto__ = t;
return e;
})(e, t);
}
var l = cc.geomUtils.Sphere, c = new cc.Vec3(), u = function(e) {
a(t, e);
function t(t) {
var i;
(i = e.call(this) || this)._localShape = new l(0, 0, 0, t);
i._worldShape = new l(0, 0, 0, t);
return i;
}
t.prototype.onLoad = function() {
e.prototype.onLoad.call(this);
this.radius = this.sphereCollider.radius;
};
n(t, [ {
key: "radius",
set: function(e) {
this.localSphere.radius = e;
this.collider.node.getWorldScale(c);
var t = c.maxAxis();
this.worldSphere.radius = this.localSphere.radius * t;
}
}, {
key: "localSphere",
get: function() {
return this._localShape;
}
}, {
key: "worldSphere",
get: function() {
return this._worldShape;
}
}, {
key: "sphereCollider",
get: function() {
return this.collider;
}
} ]);
return t;
}(r.BuiltinShape);
i.BuiltinSphereShape = u;
}, {
"./builtin-shape": 5
} ],
7: [ function(e, t, i) {
"use strict";
i.__esModule = !0;
i.ArrayCollisionMatrix = void 0;
var r = function() {
function e() {
this.matrix = [];
}
var t = e.prototype;
t.get = function(e, t) {
if (t > e) {
var i = t;
t = e;
e = i;
}
return this.matrix[(e * (e + 1) >> 1) + t - 1];
};
t.set = function(e, t, i) {
if (t > e) {
var r = t;
t = e;
e = r;
}
this.matrix[(e * (e + 1) >> 1) + t - 1] = i ? 1 : 0;
};
t.reset = function() {
for (var e = 0, t = this.matrix.length; e !== t; e++) this.matrix[e] = 0;
};
t.setNumObjects = function(e) {
this.matrix.length = e * (e - 1) >> 1;
};
return e;
}();
i.ArrayCollisionMatrix = r;
}, {} ],
8: [ function(e) {
"use strict";
e("../cocos/instantiate");
}, {
"../cocos/instantiate": 3
} ],
9: [ function(e, t, i) {
"use strict";
i.__esModule = !0;
var r = e("../framework");
Object.keys(r).forEach(function(e) {
"default" !== e && "__esModule" !== e && (e in i && i[e] === r[e] || (i[e] = r[e]));
});
}, {
"../framework": 16
} ],
10: [ function(e, t, i) {
"use strict";
i.__esModule = !0;
i.PhysicsMaterial = void 0;
var r, o, n, a, s;
function l(e, t, i, r) {
i && Object.defineProperty(e, t, {
enumerable: i.enumerable,
configurable: i.configurable,
writable: i.writable,
value: i.initializer ? i.initializer.call(r) : void 0
});
}
function c(e, t) {
for (var i = 0; i < t.length; i++) {
var r = t[i];
r.enumerable = r.enumerable || !1;
r.configurable = !0;
"value" in r && (r.writable = !0);
Object.defineProperty(e, r.key, r);
}
}
function u(e, t, i) {
t && c(e.prototype, t);
i && c(e, i);
Object.defineProperty(e, "prototype", {
writable: !1
});
return e;
}
function p(e) {
if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return e;
}
function d(e, t) {
e.prototype = Object.create(t.prototype);
e.prototype.constructor = e;
h(e, t);
}
function h(e, t) {
return (h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
e.__proto__ = t;
return e;
})(e, t);
}
function f(e, t, i, r, o) {
var n = {};
Object.keys(r).forEach(function(e) {
n[e] = r[e];
});
n.enumerable = !!n.enumerable;
n.configurable = !!n.configurable;
("value" in n || n.initializer) && (n.writable = !0);
n = i.slice().reverse().reduce(function(i, r) {
return r(e, t, i) || i;
}, n);
if (o && void 0 !== n.initializer) {
n.value = n.initializer ? n.initializer.call(o) : void 0;
n.initializer = void 0;
}
if (void 0 === n.initializer) {
Object.defineProperty(e, t, n);
n = null;
}
return n;
}
var y = cc._decorator, b = y.ccclass, _ = y.property, g = cc.js.array.fastRemove, m = cc.math.equals, v = b("cc.PhysicsMaterial")(r = (o = ((s = function(e) {
d(t, e);
function t() {
var i;
l(i = e.call(this) || this, "_friction", n, p(i));
l(i, "_restitution", a, p(i));
cc.EventTarget.call(p(i));
t.allMaterials.push(p(i));
"" == i._uuid && (i._uuid = "pm_" + t._idCounter++);
return i;
}
var i = t.prototype;
i.clone = function() {
var e = new t();
e._friction = this._friction;
e._restitution = this._restitution;
return e;
};
i.destroy = function() {
if (e.prototype.destroy.call(this)) {
g(t.allMaterials, this);
return !0;
}
return !1;
};
u(t, [ {
key: "friction",
get: function() {
return this._friction;
},
set: function(e) {
if (!m(this._friction, e)) {
this._friction = e;
this.emit("physics_material_update");
}
}
}, {
key: "restitution",
get: function() {
return this._restitution;
},
set: function(e) {
if (!m(this._restitution, e)) {
this._restitution = e;
this.emit("physics_material_update");
}
}
} ]);
return t;
}(cc.Asset)).allMaterials = [], s._idCounter = 0, s), n = f(o.prototype, "_friction", [ _ ], {
configurable: !0,
enumerable: !0,
writable: !0,
initializer: function() {
return .1;
}
}), a = f(o.prototype, "_restitution", [ _ ], {
configurable: !0,
enumerable: !0,
writable: !0,
initializer: function() {
return .1;
}
}), f(o.prototype, "friction", [ _ ], Object.getOwnPropertyDescriptor(o.prototype, "friction"), o.prototype), 
f(o.prototype, "restitution", [ _ ], Object.getOwnPropertyDescriptor(o.prototype, "restitution"), o.prototype), 
o)) || r;
i.PhysicsMaterial = v;
cc.js.mixin(v.prototype, cc.EventTarget.prototype);
cc.PhysicsMaterial = v;
}, {} ],
11: [ function(e, t, i) {
"use strict";
i.__esModule = !0;
i.BoxCollider3D = void 0;
var r, o, n, a, s, l, c, u, p = e("../../instance"), d = e("./collider-component");
function h(e, t, i, r) {
i && Object.defineProperty(e, t, {
enumerable: i.enumerable,
configurable: i.configurable,
writable: i.writable,
value: i.initializer ? i.initializer.call(r) : void 0
});
}
function f(e, t) {
for (var i = 0; i < t.length; i++) {
var r = t[i];
r.enumerable = r.enumerable || !1;
r.configurable = !0;
"value" in r && (r.writable = !0);
Object.defineProperty(e, r.key, r);
}
}
function y(e, t, i) {
t && f(e.prototype, t);
i && f(e, i);
Object.defineProperty(e, "prototype", {
writable: !1
});
return e;
}
function b(e) {
if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return e;
}
function _(e, t) {
e.prototype = Object.create(t.prototype);
e.prototype.constructor = e;
g(e, t);
}
function g(e, t) {
return (g = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
e.__proto__ = t;
return e;
})(e, t);
}
function m(e, t, i, r, o) {
var n = {};
Object.keys(r).forEach(function(e) {
n[e] = r[e];
});
n.enumerable = !!n.enumerable;
n.configurable = !!n.configurable;
("value" in n || n.initializer) && (n.writable = !0);
n = i.slice().reverse().reduce(function(i, r) {
return r(e, t, i) || i;
}, n);
if (o && void 0 !== n.initializer) {
n.value = n.initializer ? n.initializer.call(o) : void 0;
n.initializer = void 0;
}
if (void 0 === n.initializer) {
Object.defineProperty(e, t, n);
n = null;
}
return n;
}
var v = cc._decorator, w = v.ccclass, O = v.executeInEditMode, x = v.executionOrder, P = v.menu, S = v.property, M = v.help, D = cc.Vec3, k = (r = w("cc.BoxCollider3D"), 
o = x(98), n = P("i18n:MAIN_MENU.component.physics/Collider/Box 3D"), a = M("i18n:COMPONENT.help_url.physics-collider"), 
s = S({
type: cc.Vec3
}), r(l = o(l = n(l = O(l = a(l = (m((c = function(e) {
_(t, e);
function t() {
var t;
h(t = e.call(this) || this, "_size", u, b(t));
t._shape = (0, p.createBoxShape)(t._size);
return t;
}
y(t, [ {
key: "size",
get: function() {
return this._size;
},
set: function(e) {
D.copy(this._size, e);
this.boxShape.size = this._size;
}
}, {
key: "boxShape",
get: function() {
return this._shape;
}
} ]);
return t;
}(d.Collider3D)).prototype, "size", [ s ], Object.getOwnPropertyDescriptor(c.prototype, "size"), c.prototype), 
u = m(c.prototype, "_size", [ S ], {
configurable: !0,
enumerable: !0,
writable: !0,
initializer: function() {
return new D(1, 1, 1);
}
}), c)) || l) || l) || l) || l) || l);
i.BoxCollider3D = k;
}, {
"../../instance": 17,
"./collider-component": 12
} ],
12: [ function(e, t, i) {
"use strict";
i.__esModule = !0;
i.Collider3D = void 0;
var r, o, n, a, s, l, c, u, p, d, h = e("../../assets/physics-material");
function f(e, t, i, r) {
i && Object.defineProperty(e, t, {
enumerable: i.enumerable,
configurable: i.configurable,
writable: i.writable,
value: i.initializer ? i.initializer.call(r) : void 0
});
}
function y(e, t) {
for (var i = 0; i < t.length; i++) {
var r = t[i];
r.enumerable = r.enumerable || !1;
r.configurable = !0;
"value" in r && (r.writable = !0);
Object.defineProperty(e, r.key, r);
}
}
function b(e, t, i) {
t && y(e.prototype, t);
i && y(e, i);
Object.defineProperty(e, "prototype", {
writable: !1
});
return e;
}
function _(e) {
if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return e;
}
function g(e, t) {
e.prototype = Object.create(t.prototype);
e.prototype.constructor = e;
m(e, t);
}
function m(e, t) {
return (m = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
e.__proto__ = t;
return e;
})(e, t);
}
function v(e, t, i, r, o) {
var n = {};
Object.keys(r).forEach(function(e) {
n[e] = r[e];
});
n.enumerable = !!n.enumerable;
n.configurable = !!n.configurable;
("value" in n || n.initializer) && (n.writable = !0);
n = i.slice().reverse().reduce(function(i, r) {
return r(e, t, i) || i;
}, n);
if (o && void 0 !== n.initializer) {
n.value = n.initializer ? n.initializer.call(o) : void 0;
n.initializer = void 0;
}
if (void 0 === n.initializer) {
Object.defineProperty(e, t, n);
n = null;
}
return n;
}
var w = cc._decorator, O = w.ccclass, x = w.property, P = cc.Vec3, S = (r = O("cc.Collider3D"), 
o = x({
type: h.PhysicsMaterial,
displayName: "Material",
displayOrder: -1
}), n = x({
displayOrder: 0
}), a = x({
type: cc.Vec3,
displayOrder: 1
}), s = x({
type: h.PhysicsMaterial
}), r(l = (v((c = function(e) {
g(t, e);
function t() {
var t;
(t = e.call(this) || this)._shape = void 0;
t._isSharedMaterial = !0;
f(t, "_material", u, _(t));
f(t, "_isTrigger", p, _(t));
f(t, "_center", d, _(t));
cc.EventTarget.call(_(t));
return t;
}
var i = t.prototype;
i.on = function() {};
i.off = function() {};
i.once = function() {};
i.emit = function() {};
i.__preload = function() {
this._shape.__preload(this);
};
i.onLoad = function() {
this._shape.onLoad();
};
i.onEnable = function() {
this._shape.onEnable();
};
i.onDisable = function() {
this._shape.onDisable();
};
i.onDestroy = function() {
this._material && this._material.off("physics_material_update", this._updateMaterial, this);
this._shape.onDestroy();
};
i._updateMaterial = function() {
this._shape.material = this._material;
};
b(t, [ {
key: "sharedMaterial",
get: function() {
return this._material;
},
set: function(e) {
this.material = e;
}
}, {
key: "material",
get: function() {
return this._material;
},
set: function(e) {
this._material = e;
}
}, {
key: "isTrigger",
get: function() {
return this._isTrigger;
},
set: function(e) {
this._isTrigger = e;
this._shape.isTrigger = this._isTrigger;
}
}, {
key: "center",
get: function() {
return this._center;
},
set: function(e) {
P.copy(this._center, e);
this._shape.center = this._center;
}
}, {
key: "attachedRigidbody",
get: function() {
return this.shape.attachedRigidBody;
}
}, {
key: "shape",
get: function() {
return this._shape;
}
}, {
key: "_assertOnload",
get: function() {
var e = 0 == this._isOnLoadCalled;
e && cc.error("Physics Error: Please make sure that the node has been added to the scene");
return !e;
}
} ]);
return t;
}(cc.Component)).prototype, "sharedMaterial", [ o ], Object.getOwnPropertyDescriptor(c.prototype, "sharedMaterial"), c.prototype), 
v(c.prototype, "isTrigger", [ n ], Object.getOwnPropertyDescriptor(c.prototype, "isTrigger"), c.prototype), 
v(c.prototype, "center", [ a ], Object.getOwnPropertyDescriptor(c.prototype, "center"), c.prototype), 
u = v(c.prototype, "_material", [ s ], {
configurable: !0,
enumerable: !0,
writable: !0,
initializer: function() {
return null;
}
}), p = v(c.prototype, "_isTrigger", [ x ], {
configurable: !0,
enumerable: !0,
writable: !0,
initializer: function() {
return !1;
}
}), d = v(c.prototype, "_center", [ x ], {
configurable: !0,
enumerable: !0,
writable: !0,
initializer: function() {
return new P();
}
}), c)) || l);
i.Collider3D = S;
cc.js.mixin(S.prototype, cc.EventTarget.prototype);
}, {
"../../assets/physics-material": 10
} ],
13: [ function(e, t, i) {
"use strict";
i.__esModule = !0;
i.SphereCollider3D = void 0;
var r, o, n, a = e("../../instance"), s = e("./collider-component");
function l(e, t, i, r) {
i && Object.defineProperty(e, t, {
enumerable: i.enumerable,
configurable: i.configurable,
writable: i.writable,
value: i.initializer ? i.initializer.call(r) : void 0
});
}
function c(e, t) {
for (var i = 0; i < t.length; i++) {
var r = t[i];
r.enumerable = r.enumerable || !1;
r.configurable = !0;
"value" in r && (r.writable = !0);
Object.defineProperty(e, r.key, r);
}
}
function u(e, t, i) {
t && c(e.prototype, t);
i && c(e, i);
Object.defineProperty(e, "prototype", {
writable: !1
});
return e;
}
function p(e) {
if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return e;
}
function d(e, t) {
e.prototype = Object.create(t.prototype);
e.prototype.constructor = e;
h(e, t);
}
function h(e, t) {
return (h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
e.__proto__ = t;
return e;
})(e, t);
}
function f(e, t, i, r, o) {
var n = {};
Object.keys(r).forEach(function(e) {
n[e] = r[e];
});
n.enumerable = !!n.enumerable;
n.configurable = !!n.configurable;
("value" in n || n.initializer) && (n.writable = !0);
n = i.slice().reverse().reduce(function(i, r) {
return r(e, t, i) || i;
}, n);
if (o && void 0 !== n.initializer) {
n.value = n.initializer ? n.initializer.call(o) : void 0;
n.initializer = void 0;
}
if (void 0 === n.initializer) {
Object.defineProperty(e, t, n);
n = null;
}
return n;
}
var y = cc._decorator, b = y.ccclass, _ = y.executeInEditMode, g = y.executionOrder, m = y.menu, v = y.property, w = y.help, O = b("cc.SphereCollider3D")(r = g(98)(r = m("i18n:MAIN_MENU.component.physics/Collider/Sphere 3D")(r = w("i18n:COMPONENT.help_url.physics-collider")(r = _(r = (f((o = function(e) {
d(t, e);
function t() {
var t;
l(t = e.call(this) || this, "_radius", n, p(t));
t._shape = (0, a.createSphereShape)(t._radius);
return t;
}
u(t, [ {
key: "radius",
get: function() {
return this._radius;
},
set: function(e) {
this._radius = e;
this.sphereShape.radius = this._radius;
}
}, {
key: "sphereShape",
get: function() {
return this._shape;
}
} ]);
return t;
}(s.Collider3D)).prototype, "radius", [ v ], Object.getOwnPropertyDescriptor(o.prototype, "radius"), o.prototype), 
n = f(o.prototype, "_radius", [ v ], {
configurable: !0,
enumerable: !0,
writable: !0,
initializer: function() {
return .5;
}
}), o)) || r) || r) || r) || r) || r;
i.SphereCollider3D = O;
}, {
"../../instance": 17,
"./collider-component": 12
} ],
14: [ function(e, t, i) {
"use strict";
i.__esModule = !0;
i.ConstantForce = void 0;
var r, o, n, a, s, l, c, u, p, d, h, f, y, b, _, g = e("./rigid-body-component");
function m(e, t, i, r) {
i && Object.defineProperty(e, t, {
enumerable: i.enumerable,
configurable: i.configurable,
writable: i.writable,
value: i.initializer ? i.initializer.call(r) : void 0
});
}
function v(e, t) {
for (var i = 0; i < t.length; i++) {
var r = t[i];
r.enumerable = r.enumerable || !1;
r.configurable = !0;
"value" in r && (r.writable = !0);
Object.defineProperty(e, r.key, r);
}
}
function w(e, t, i) {
t && v(e.prototype, t);
i && v(e, i);
Object.defineProperty(e, "prototype", {
writable: !1
});
return e;
}
function O(e) {
if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return e;
}
function x(e, t) {
e.prototype = Object.create(t.prototype);
e.prototype.constructor = e;
P(e, t);
}
function P(e, t) {
return (P = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
e.__proto__ = t;
return e;
})(e, t);
}
function S(e, t, i, r, o) {
var n = {};
Object.keys(r).forEach(function(e) {
n[e] = r[e];
});
n.enumerable = !!n.enumerable;
n.configurable = !!n.configurable;
("value" in n || n.initializer) && (n.writable = !0);
n = i.slice().reverse().reduce(function(i, r) {
return r(e, t, i) || i;
}, n);
if (o && void 0 !== n.initializer) {
n.value = n.initializer ? n.initializer.call(o) : void 0;
n.initializer = void 0;
}
if (void 0 === n.initializer) {
Object.defineProperty(e, t, n);
n = null;
}
return n;
}
var M = cc._decorator, D = M.ccclass, k = M.executeInEditMode, z = M.executionOrder, j = M.menu, B = M.property, C = M.requireComponent, R = M.disallowMultiple, T = M.help, E = cc.Vec3, F = (r = D("cc.ConstantForce"), 
o = z(98), n = C(g.RigidBody3D), a = j("i18n:MAIN_MENU.component.physics/Constant Force 3D"), 
s = T("i18n:COMPONENT.help_url.constantforce"), l = B({
displayOrder: 0
}), c = B({
displayOrder: 1
}), u = B({
displayOrder: 2
}), p = B({
displayOrder: 3
}), r(d = o(d = n(d = a(d = s(d = R(d = k(d = (h = function(e) {
x(t, e);
function t() {
for (var t, i = arguments.length, r = new Array(i), o = 0; o < i; o++) r[o] = arguments[o];
(t = e.call.apply(e, [ this ].concat(r)) || this)._rigidbody = null;
m(t, "_force", f, O(t));
m(t, "_localForce", y, O(t));
m(t, "_torque", b, O(t));
m(t, "_localTorque", _, O(t));
t._mask = 0;
return t;
}
var i = t.prototype;
i.onLoad = function() {};
i.lateUpdate = function() {};
i._maskUpdate = function(e, t) {
E.strictEquals(e, E.ZERO) ? this._mask &= ~t : this._mask |= t;
};
w(t, [ {
key: "force",
get: function() {
return this._force;
},
set: function(e) {
E.copy(this._force, e);
this._maskUpdate(this._force, 1);
}
}, {
key: "localForce",
get: function() {
return this._localForce;
},
set: function(e) {
E.copy(this._localForce, e);
this._maskUpdate(this.localForce, 2);
}
}, {
key: "torque",
get: function() {
return this._torque;
},
set: function(e) {
E.copy(this._torque, e);
this._maskUpdate(this._torque, 4);
}
}, {
key: "localTorque",
get: function() {
return this._localTorque;
},
set: function(e) {
E.copy(this._localTorque, e);
this._maskUpdate(this._localTorque, 8);
}
} ]);
return t;
}(cc.Component), f = S(h.prototype, "_force", [ B ], {
configurable: !0,
enumerable: !0,
writable: !0,
initializer: function() {
return new E();
}
}), y = S(h.prototype, "_localForce", [ B ], {
configurable: !0,
enumerable: !0,
writable: !0,
initializer: function() {
return new E();
}
}), b = S(h.prototype, "_torque", [ B ], {
configurable: !0,
enumerable: !0,
writable: !0,
initializer: function() {
return new E();
}
}), _ = S(h.prototype, "_localTorque", [ B ], {
configurable: !0,
enumerable: !0,
writable: !0,
initializer: function() {
return new E();
}
}), S(h.prototype, "force", [ l ], Object.getOwnPropertyDescriptor(h.prototype, "force"), h.prototype), 
S(h.prototype, "localForce", [ c ], Object.getOwnPropertyDescriptor(h.prototype, "localForce"), h.prototype), 
S(h.prototype, "torque", [ u ], Object.getOwnPropertyDescriptor(h.prototype, "torque"), h.prototype), 
S(h.prototype, "localTorque", [ p ], Object.getOwnPropertyDescriptor(h.prototype, "localTorque"), h.prototype), 
h)) || d) || d) || d) || d) || d) || d) || d);
i.ConstantForce = F;
}, {
"./rigid-body-component": 15
} ],
15: [ function(e, t, i) {
"use strict";
i.__esModule = !0;
i.RigidBody3D = void 0;
var r, o, n, a, s, l, c, u, p, d, h, f, y, b, _, g, m, v, w, O, x, P;
e("../instance");
function S(e, t, i, r) {
i && Object.defineProperty(e, t, {
enumerable: i.enumerable,
configurable: i.configurable,
writable: i.writable,
value: i.initializer ? i.initializer.call(r) : void 0
});
}
function M(e, t) {
for (var i = 0; i < t.length; i++) {
var r = t[i];
r.enumerable = r.enumerable || !1;
r.configurable = !0;
"value" in r && (r.writable = !0);
Object.defineProperty(e, r.key, r);
}
}
function D(e, t, i) {
t && M(e.prototype, t);
i && M(e, i);
Object.defineProperty(e, "prototype", {
writable: !1
});
return e;
}
function k(e) {
if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return e;
}
function z(e, t) {
e.prototype = Object.create(t.prototype);
e.prototype.constructor = e;
j(e, t);
}
function j(e, t) {
return (j = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
e.__proto__ = t;
return e;
})(e, t);
}
function B(e, t, i, r, o) {
var n = {};
Object.keys(r).forEach(function(e) {
n[e] = r[e];
});
n.enumerable = !!n.enumerable;
n.configurable = !!n.configurable;
("value" in n || n.initializer) && (n.writable = !0);
n = i.slice().reverse().reduce(function(i, r) {
return r(e, t, i) || i;
}, n);
if (o && void 0 !== n.initializer) {
n.value = n.initializer ? n.initializer.call(o) : void 0;
n.initializer = void 0;
}
if (void 0 === n.initializer) {
Object.defineProperty(e, t, n);
n = null;
}
return n;
}
var C = cc._decorator, R = C.ccclass, T = C.disallowMultiple, E = C.executeInEditMode, F = C.executionOrder, A = C.menu, I = C.property, q = C.help, N = cc.Vec3, W = (r = R("cc.RigidBody3D"), 
o = F(99), n = A("i18n:MAIN_MENU.component.physics/Rigid Body 3D"), a = q("i18n:COMPONENT.help_url.physics-rigidbody"), 
s = I({
displayOrder: 0
}), l = I({
displayOrder: 1
}), c = I({
displayOrder: 2
}), u = I({
displayOrder: 3
}), p = I({
displayOrder: 4
}), d = I({
displayOrder: 5
}), h = I({
displayOrder: 6
}), f = I({
displayOrder: 7
}), r(y = o(y = n(y = a(y = E(y = T(y = (B((b = function(e) {
z(t, e);
function t() {
var t;
(t = e.call(this) || this)._body = void 0;
t._allowSleep = !0;
S(t, "_mass", _, k(t));
S(t, "_linearDamping", g, k(t));
S(t, "_angularDamping", m, k(t));
S(t, "_fixedRotation", v, k(t));
S(t, "_isKinematic", w, k(t));
S(t, "_useGravity", O, k(t));
S(t, "_linearFactor", x, k(t));
S(t, "_angularFactor", P, k(t));
return t;
}
var i = t.prototype;
i.__preload = function() {};
i.onEnable = function() {};
i.onDisable = function() {};
i.onDestroy = function() {};
i.applyForce = function() {
this._assertOnload;
};
i.applyLocalForce = function() {
this._assertOnload;
};
i.applyImpulse = function() {
this._assertOnload;
};
i.applyLocalImpulse = function() {
this._assertOnload;
};
i.applyTorque = function() {
this._assertOnload;
};
i.applyLocalTorque = function() {
this._assertOnload;
};
i.wakeUp = function() {
this._assertOnload;
};
i.sleep = function() {
this._assertOnload;
};
i.getLinearVelocity = function() {
this._assertOnload;
};
i.setLinearVelocity = function() {
this._assertOnload;
};
i.getAngularVelocity = function() {
this._assertOnload;
};
i.setAngularVelocity = function() {
this._assertOnload;
};
D(t, [ {
key: "allowSleep",
get: function() {
return this._allowSleep;
},
set: function(e) {
this._allowSleep = e;
}
}, {
key: "mass",
get: function() {
return this._mass;
},
set: function(e) {
this._mass = e;
}
}, {
key: "linearDamping",
get: function() {
return this._linearDamping;
},
set: function(e) {
this._linearDamping = e;
}
}, {
key: "angularDamping",
get: function() {
return this._angularDamping;
},
set: function(e) {
this._angularDamping = e;
}
}, {
key: "isKinematic",
get: function() {
return this._isKinematic;
},
set: function(e) {
this._isKinematic = e;
}
}, {
key: "useGravity",
get: function() {
return this._useGravity;
},
set: function(e) {
this._useGravity = e;
}
}, {
key: "fixedRotation",
get: function() {
return this._fixedRotation;
},
set: function(e) {
this._fixedRotation = e;
}
}, {
key: "linearFactor",
get: function() {
return this._linearFactor;
},
set: function(e) {
N.copy(this._linearFactor, e);
}
}, {
key: "angularFactor",
get: function() {
return this._angularFactor;
},
set: function(e) {
N.copy(this._angularFactor, e);
}
}, {
key: "isAwake",
get: function() {
this._assertOnload;
return !1;
}
}, {
key: "isSleepy",
get: function() {
this._assertOnload;
return !1;
}
}, {
key: "isSleeping",
get: function() {
this._assertOnload;
return !1;
}
}, {
key: "rigidBody",
get: function() {
return this._body;
}
}, {
key: "_assertOnload",
get: function() {
var e = 0 == this._isOnLoadCalled;
e && cc.error("Physics Error: Please make sure that the node has been added to the scene");
return !e;
}
} ]);
return t;
}(cc.Component)).prototype, "mass", [ s ], Object.getOwnPropertyDescriptor(b.prototype, "mass"), b.prototype), 
B(b.prototype, "linearDamping", [ l ], Object.getOwnPropertyDescriptor(b.prototype, "linearDamping"), b.prototype), 
B(b.prototype, "angularDamping", [ c ], Object.getOwnPropertyDescriptor(b.prototype, "angularDamping"), b.prototype), 
B(b.prototype, "isKinematic", [ u ], Object.getOwnPropertyDescriptor(b.prototype, "isKinematic"), b.prototype), 
B(b.prototype, "useGravity", [ p ], Object.getOwnPropertyDescriptor(b.prototype, "useGravity"), b.prototype), 
B(b.prototype, "fixedRotation", [ d ], Object.getOwnPropertyDescriptor(b.prototype, "fixedRotation"), b.prototype), 
B(b.prototype, "linearFactor", [ h ], Object.getOwnPropertyDescriptor(b.prototype, "linearFactor"), b.prototype), 
B(b.prototype, "angularFactor", [ f ], Object.getOwnPropertyDescriptor(b.prototype, "angularFactor"), b.prototype), 
_ = B(b.prototype, "_mass", [ I ], {
configurable: !0,
enumerable: !0,
writable: !0,
initializer: function() {
return 10;
}
}), g = B(b.prototype, "_linearDamping", [ I ], {
configurable: !0,
enumerable: !0,
writable: !0,
initializer: function() {
return .1;
}
}), m = B(b.prototype, "_angularDamping", [ I ], {
configurable: !0,
enumerable: !0,
writable: !0,
initializer: function() {
return .1;
}
}), v = B(b.prototype, "_fixedRotation", [ I ], {
configurable: !0,
enumerable: !0,
writable: !0,
initializer: function() {
return !1;
}
}), w = B(b.prototype, "_isKinematic", [ I ], {
configurable: !0,
enumerable: !0,
writable: !0,
initializer: function() {
return !1;
}
}), O = B(b.prototype, "_useGravity", [ I ], {
configurable: !0,
enumerable: !0,
writable: !0,
initializer: function() {
return !0;
}
}), x = B(b.prototype, "_linearFactor", [ I ], {
configurable: !0,
enumerable: !0,
writable: !0,
initializer: function() {
return new N(1, 1, 1);
}
}), P = B(b.prototype, "_angularFactor", [ I ], {
configurable: !0,
enumerable: !0,
writable: !0,
initializer: function() {
return new N(1, 1, 1);
}
}), b)) || y) || y) || y) || y) || y) || y);
i.RigidBody3D = W;
}, {
"../instance": 17
} ],
16: [ function(e, t, i) {
"use strict";
i.__esModule = !0;
var r = e("./physics-manager");
i.Physics3DManager = r.Physics3DManager;
var o = e("./physics-ray-result");
i.PhysicsRayResult = o.PhysicsRayResult;
var n = e("./components/collider/box-collider-component");
i.BoxCollider3D = n.BoxCollider3D;
var a = e("./components/collider/collider-component");
i.Collider3D = a.Collider3D;
var s = e("./components/collider/sphere-collider-component");
i.SphereCollider3D = s.SphereCollider3D;
var l = e("./components/rigid-body-component");
i.RigidBody3D = l.RigidBody3D;
var c = e("./components/constant-force"), u = e("./assets/physics-material");
i.PhysicsMaterial = u.PhysicsMaterial;
cc.Physics3DManager = r.Physics3DManager;
cc.Collider3D = a.Collider3D;
cc.BoxCollider3D = n.BoxCollider3D;
cc.SphereCollider3D = s.SphereCollider3D;
cc.RigidBody3D = l.RigidBody3D;
cc.PhysicsRayResult = o.PhysicsRayResult;
cc.ConstantForce = c.ConstantForce;
}, {
"./assets/physics-material": 10,
"./components/collider/box-collider-component": 11,
"./components/collider/collider-component": 12,
"./components/collider/sphere-collider-component": 13,
"./components/constant-force": 14,
"./components/rigid-body-component": 15,
"./physics-manager": 18,
"./physics-ray-result": 19
} ],
17: [ function(e, t, i) {
"use strict";
i.__esModule = !0;
i.createBoxShape = function(e) {
return new r.BoxShape(e);
};
i.createPhysicsWorld = function() {
return new r.PhysicsWorld();
};
i.createRigidBody = function() {
return new r.RigidBody();
};
i.createSphereShape = function(e) {
return new r.SphereShape(e);
};
var r = e("./physics-selector");
}, {
"./physics-selector": 20
} ],
18: [ function(e, t, i) {
"use strict";
i.__esModule = !0;
i.Physics3DManager = void 0;
var r, o, n, a, s, l, c, u, p = e("./instance"), d = (e("./assets/physics-material"), 
e("./physics-ray-result"));
function h(e, t, i, r) {
i && Object.defineProperty(e, t, {
enumerable: i.enumerable,
configurable: i.configurable,
writable: i.writable,
value: i.initializer ? i.initializer.call(r) : void 0
});
}
function f(e, t) {
for (var i = 0; i < t.length; i++) {
var r = t[i];
r.enumerable = r.enumerable || !1;
r.configurable = !0;
"value" in r && (r.writable = !0);
Object.defineProperty(e, r.key, r);
}
}
function y(e, t, i) {
t && f(e.prototype, t);
i && f(e, i);
Object.defineProperty(e, "prototype", {
writable: !1
});
return e;
}
function b(e, t, i, r, o) {
var n = {};
Object.keys(r).forEach(function(e) {
n[e] = r[e];
});
n.enumerable = !!n.enumerable;
n.configurable = !!n.configurable;
("value" in n || n.initializer) && (n.writable = !0);
n = i.slice().reverse().reduce(function(i, r) {
return r(e, t, i) || i;
}, n);
if (o && void 0 !== n.initializer) {
n.value = n.initializer ? n.initializer.call(o) : void 0;
n.initializer = void 0;
}
if (void 0 === n.initializer) {
Object.defineProperty(e, t, n);
n = null;
}
return n;
}
var _ = cc._decorator, g = _.property, m = (0, _.ccclass)("cc.Physics3DManager")(r = (n = b((o = function() {
function e() {
this.physicsWorld = void 0;
this.raycastClosestResult = new d.PhysicsRayResult();
this.raycastResults = [];
h(this, "_enabled", n, this);
h(this, "_allowSleep", a, this);
h(this, "_gravity", s, this);
h(this, "_maxSubStep", l, this);
h(this, "_fixedTime", c, this);
h(this, "_useFixedTime", u, this);
this.useAccumulator = !1;
this._accumulator = 0;
this.useFixedDigit = !1;
this.useInternalTime = !1;
this.fixDigits = {
position: 5,
rotation: 12,
timeNow: 3
};
this._deltaTime = 0;
this._lastTime = 0;
this._material = null;
this.raycastOptions = {
groupIndex: -1,
queryTrigger: !0,
maxDistance: Infinity
};
this.raycastResultPool = new cc.RecyclePool(function() {
return new d.PhysicsRayResult();
}, 1);
cc.director._scheduler && cc.director._scheduler.enableForTarget(this);
this.physicsWorld = (0, p.createPhysicsWorld)();
this._lastTime = performance.now();
}
var t = e.prototype;
t.update = function(e) {
if (this._enabled) {
if (this.useInternalTime) {
var t = parseFloat(performance.now().toFixed(this.fixDigits.timeNow));
this._deltaTime = t > this._lastTime ? (t - this._lastTime) / 1e3 : 0;
this._lastTime = t;
} else this._deltaTime = e;
cc.director.emit(cc.Director.EVENT_BEFORE_PHYSICS);
this.physicsWorld.step(this._fixedTime);
cc.director.emit(cc.Director.EVENT_AFTER_PHYSICS);
}
};
t.raycast = function(e, t, i, r) {
void 0 === t && (t = 0);
void 0 === i && (i = Infinity);
void 0 === r && (r = !0);
this.raycastResultPool.reset();
this.raycastResults.length = 0;
if ("string" == typeof t) {
var o = cc.game.groupList.indexOf(t);
-1 == o && (o = 0);
this.raycastOptions.groupIndex = o;
} else this.raycastOptions.groupIndex = t;
this.raycastOptions.maxDistance = i;
this.raycastOptions.queryTrigger = r;
return this.physicsWorld.raycast(e, this.raycastOptions, this.raycastResultPool, this.raycastResults) ? this.raycastResults : null;
};
t.raycastClosest = function(e, t, i, r) {
void 0 === t && (t = 0);
void 0 === i && (i = Infinity);
void 0 === r && (r = !0);
if ("string" == typeof t) {
var o = cc.game.groupList.indexOf(t);
-1 == o && (o = 0);
this.raycastOptions.groupIndex = o;
} else this.raycastOptions.groupIndex = t;
this.raycastOptions.maxDistance = i;
this.raycastOptions.queryTrigger = r;
return this.physicsWorld.raycastClosest(e, this.raycastOptions, this.raycastClosestResult) ? this.raycastClosestResult : null;
};
t._updateMaterial = function() {};
y(e, [ {
key: "enabled",
get: function() {
return this._enabled;
},
set: function(e) {
this._enabled = e;
}
}, {
key: "allowSleep",
get: function() {
return this._allowSleep;
},
set: function(e) {
this._allowSleep = e;
}
}, {
key: "maxSubStep",
get: function() {
return this._maxSubStep;
},
set: function(e) {
this._maxSubStep = e;
}
}, {
key: "deltaTime",
get: function() {
return this._fixedTime;
},
set: function(e) {
this._fixedTime = e;
}
}, {
key: "useFixedTime",
get: function() {
return this._useFixedTime;
},
set: function(e) {
this._useFixedTime = e;
}
}, {
key: "gravity",
get: function() {
return this._gravity;
},
set: function(e) {
this._gravity.set(e);
}
}, {
key: "defaultMaterial",
get: function() {
return this._material;
}
} ]);
return e;
}()).prototype, "_enabled", [ g ], {
configurable: !0,
enumerable: !0,
writable: !0,
initializer: function() {
return !1;
}
}), a = b(o.prototype, "_allowSleep", [ g ], {
configurable: !0,
enumerable: !0,
writable: !0,
initializer: function() {
return !0;
}
}), s = b(o.prototype, "_gravity", [ g ], {
configurable: !0,
enumerable: !0,
writable: !0,
initializer: function() {
return new cc.Vec3(0, -10, 0);
}
}), l = b(o.prototype, "_maxSubStep", [ g ], {
configurable: !0,
enumerable: !0,
writable: !0,
initializer: function() {
return 1;
}
}), c = b(o.prototype, "_fixedTime", [ g ], {
configurable: !0,
enumerable: !0,
writable: !0,
initializer: function() {
return 1 / 60;
}
}), u = b(o.prototype, "_useFixedTime", [ g ], {
configurable: !0,
enumerable: !0,
writable: !0,
initializer: function() {
return !0;
}
}), o)) || r;
i.Physics3DManager = m;
}, {
"./assets/physics-material": 10,
"./instance": 17,
"./physics-ray-result": 19
} ],
19: [ function(e, t, i) {
"use strict";
i.__esModule = !0;
i.PhysicsRayResult = void 0;
function r(e, t) {
for (var i = 0; i < t.length; i++) {
var r = t[i];
r.enumerable = r.enumerable || !1;
r.configurable = !0;
"value" in r && (r.writable = !0);
Object.defineProperty(e, r.key, r);
}
}
function o(e, t, i) {
t && r(e.prototype, t);
i && r(e, i);
Object.defineProperty(e, "prototype", {
writable: !1
});
return e;
}
var n = cc.Vec3, a = function() {
function e() {
this._hitPoint = new n();
this._distance = 0;
this._collidier = null;
}
var t = e.prototype;
t._assign = function(e, t, i) {
n.copy(this._hitPoint, e);
this._distance = t;
this._collidier = i;
};
t.clone = function() {
var t = new e();
n.copy(t._hitPoint, this._hitPoint);
t._distance = this._distance;
t._collidier = this._collidier;
return t;
};
o(e, [ {
key: "hitPoint",
get: function() {
return this._hitPoint;
}
}, {
key: "distance",
get: function() {
return this._distance;
}
}, {
key: "collider",
get: function() {
return this._collidier;
}
} ]);
return e;
}();
i.PhysicsRayResult = a;
}, {} ],
20: [ function(e, t, i) {
"use strict";
i.__esModule = !0;
i.SphereShape = i.RigidBody = i.PhysicsWorld = i.BoxShape = void 0;
i.instantiate = function(e, t, s, l) {
i.BoxShape = r = e;
i.SphereShape = o = t;
i.RigidBody = n = s;
i.PhysicsWorld = a = l;
};
var r, o, n, a;
i.BoxShape = r;
i.SphereShape = o;
i.RigidBody = n;
i.PhysicsWorld = a;
}, {} ],
21: [ function(e, t, i) {
"use strict";
i.__esModule = !0;
i.clearNodeTransformDirtyFlag = function() {
for (var e in m) {
var t = m[e];
t._localMatDirty &= ~n;
t._localMatDirty & a || (t._worldMatDirty = !1);
}
m = {};
d.length = 0;
};
i.clearNodeTransformRecord = function() {
m = {};
d.length = 0;
};
i.getWrap = function(e) {
return e.__cc_wrapper__;
};
i.setWrap = function(e, t) {
e.__cc_wrapper__ = t;
};
i.stringfyQuat = function(e) {
return "(x: " + e.x + ", y: " + e.y + ", z: " + e.z + ", w: " + e.w + ")";
};
i.stringfyVec3 = function(e) {
return "(x: " + e.x + ", y: " + e.y + ", z: " + e.z + ")";
};
i.updateWorldRT = function(e, t, i) {
var r = e.parent;
if (r) {
v(r, !0);
c.transformMat4(h, t, l.invert(g, r._worldMatrix));
u.multiply(_, u.conjugate(_, r.__wrot), i);
e.setPosition(h);
e.setRotation(_);
} else {
e.setPosition(t);
e.setRotation(i);
}
};
i.updateWorldTransform = v;
i.worldDirty = function(e) {
for (var t = e; t; ) {
if (t._worldMatDirty) return !0;
t = t._parent;
}
return !1;
};
var r = cc.Node._LocalDirtyFlag, o = r.PHYSICS_TRS, n = r.ALL_TRS, a = r.SKEW, s = (cc.RenderFlow.FLAG_TRANSFORM, 
cc.Mat3), l = cc.Mat4, c = cc.Vec3, u = cc.Quat, p = cc.Trs, d = [], h = cc.v3(), f = cc.quat(), y = new s(), b = y.m, _ = cc.quat(), g = cc.mat4(), m = {};
function v(e, t) {
void 0 === t && (t = !1);
for (var i, r, n, a, g, v, w, O, x = e, P = 0, S = !1, M = 0; x; ) {
if (!t && m[x._id]) {
M |= x._localMatDirty & o;
S = S || !!M;
break;
}
d[P++] = x;
x._localMatDirty & o && (S = !0);
x = x._parent;
}
if (!S) return !1;
d.length = P;
for (;P; ) {
i = d[--P];
!t && (m[i._id] = i);
r = i._worldMatrix;
g = i._matrix;
a = i._trs;
v = i.__wpos = i.__wpos || cc.v3();
w = i.__wrot = i.__wrot || cc.quat();
O = i.__wscale = i.__wscale || cc.v3();
i._localMatDirty & o && p.toMat4(g, a);
i._localMatDirty |= M;
if ((M |= i._localMatDirty & o) & o) {
if (x) {
n = x._worldMatrix;
p.toPosition(h, a);
c.transformMat4(v, h, n);
l.multiply(r, n, g);
p.toRotation(f, a);
u.multiply(w, x.__wrot, f);
s.fromQuat(y, u.conjugate(_, w));
s.multiplyMat4(y, y, r);
O.x = b[0];
O.y = b[4];
O.z = b[8];
} else {
p.toPosition(v, a);
p.toRotation(w, a);
p.toScale(O, a);
l.copy(r, g);
}
x = i;
} else x = i;
}
return !0;
}
}, {} ]
}, {}, [ 9, 8 ]);