"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var drei_1 = require("@react-three/drei");
var THREE = require("three");
var Board = function (props) {
    var position = props.position, rotation = props.rotation;
    function deg2rad(deg) {
        return deg * (Math.PI / 180);
    }
    var textureBoard = drei_1.useTexture({
        map: 'textures/board.jpg'
    });
    var textureWood = drei_1.useTexture({
        map: 'textures/wood/Wood066_1K_Color.png',
        displacementMap: 'textures/wood/Wood066_1K_Displacement.png',
        normalMap: 'textures/wood/Wood066_1K_NormalGL.png',
        roughnessMap: 'textures/wood/Wood066_1K_Roughness.png'
    });
    textureBoard.map.repeat.set(1, 1);
    textureBoard.map.wrapS = THREE.RepeatWrapping;
    textureBoard.map.wrapT = THREE.RepeatWrapping;
    var displacement = 0.001;
    var roughness = 0.1;
    for (var texture in textureWood) {
        textureWood[texture].repeat.set(8, 2);
        textureWood[texture].wrapS = THREE.RepeatWrapping;
        textureWood[texture].wrapT = THREE.RepeatWrapping;
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("group", { position: position, rotation: rotation },
            React.createElement("mesh", { castShadow: true, receiveShadow: true, position: [0, 0, 0], rotation: [deg2rad(0), deg2rad(0), deg2rad(0)] },
                React.createElement("planeBufferGeometry", { args: [4, 3] }),
                React.createElement("meshStandardMaterial", __assign({ color: '#C4A484' }, textureBoard))),
            React.createElement("mesh", { castShadow: true, receiveShadow: true, position: [0, 0, 0.05] },
                React.createElement("boxGeometry", { args: [0.1, 2.9, 0.1] }),
                React.createElement("meshStandardMaterial", __assign({}, textureWood, { roughness: roughness, displacementScale: displacement }))),
            React.createElement("mesh", { castShadow: true, receiveShadow: true, position: [1.65, 0, 0.05] },
                React.createElement("boxGeometry", { args: [0.04, 2.9, 0.1] }),
                React.createElement("meshStandardMaterial", __assign({}, textureWood, { displacementScale: displacement }))),
            React.createElement("mesh", { castShadow: true, receiveShadow: true, position: [-1.65, 0, 0.05] },
                React.createElement("boxGeometry", { args: [0.04, 2.9, 0.1] }),
                React.createElement("meshStandardMaterial", __assign({}, textureWood, { displacementScale: displacement }))),
            React.createElement("mesh", { castShadow: true, receiveShadow: true, position: [2, 0, 0.05] },
                React.createElement("boxGeometry", { args: [0.1, 2.9, 0.1] }),
                React.createElement("meshStandardMaterial", __assign({}, textureWood, { displacementScale: displacement }))),
            React.createElement("mesh", { castShadow: true, receiveShadow: true, position: [-2, 0, 0.05] },
                React.createElement("boxGeometry", { args: [0.1, 2.9, 0.1] }),
                React.createElement("meshStandardMaterial", __assign({}, textureWood, { displacementScale: displacement }))),
            React.createElement("mesh", { castShadow: true, receiveShadow: true, position: [0, 1.5, 0.05] },
                React.createElement("boxGeometry", { args: [4.1, 0.1, 0.1] }),
                React.createElement("meshStandardMaterial", __assign({}, textureWood, { displacementScale: displacement }))),
            React.createElement("mesh", { castShadow: true, receiveShadow: true, position: [0, -1.5, 0.05] },
                React.createElement("boxGeometry", { args: [4.1, 0.1, 0.1] }),
                React.createElement("meshStandardMaterial", __assign({}, textureWood, { displacementScale: displacement }))))));
};
exports["default"] = Board;
