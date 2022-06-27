"use strict";
exports.__esModule = true;
var drei_1 = require("@react-three/drei");
var cannon_1 = require("@react-three/cannon");
var fiber_1 = require("@react-three/fiber");
var Dice = function (props) {
    var position = props.position, roll = props.roll;
    function deg2rad(deg) {
        return deg * (Math.PI / 180);
    }
    var textures = drei_1.useTexture([
        'textures/dice/dice1.jpeg',
        'textures/dice/dice2.jpeg',
        'textures/dice/dice3.jpeg',
        'textures/dice/dice4.jpeg',
        'textures/dice/dice5.jpeg',
        'textures/dice/dice6.jpeg',
    ]);
    var _a = cannon_1.useBox(function () { return ({
        mass: 0.1,
        position: position,
        rotation: [deg2rad(30), deg2rad(30), deg2rad(0)],
        args: [0.1, 0.1, 0.1]
    }); }), ref = _a[0], api = _a[1];
    fiber_1.useFrame(function () {
        if (roll) {
            api.position.set(0.5, 5, 5);
        }
    });
    return (React.createElement(React.Fragment, null,
        React.createElement("mesh", { ref: ref, position: position, rotation: [deg2rad(30), deg2rad(30), deg2rad(0)], castShadow: true, receiveShadow: true },
            React.createElement("boxGeometry", { args: [0.1, 0.1, 0.1] }),
            textures.map(function (texture, idx) {
                return React.createElement("meshBasicMaterial", { key: texture.id, attach: "material-" + idx, map: texture });
            }))));
};
exports["default"] = Dice;
