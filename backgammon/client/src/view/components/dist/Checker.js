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
var Checker = function (props) {
    var position = props.position, color = props.color;
    var textureMarble = drei_1.useTexture({
        map: 'textures/marble/Marble020_1K_Color.png',
        displacementMap: 'textures/marble/Marble020_1K_Displacement.png',
        normalMap: 'textures/marble/Marble020_1K_NormalGL.png',
        roughnessMap: 'textures/marble/Marble020_1K_Roughness.png'
    });
    return (React.createElement(React.Fragment, null,
        React.createElement("mesh", { castShadow: true, receiveShadow: true, position: position },
            React.createElement("cylinderGeometry", { args: [0.1, 0.1, 0.05, 32] }),
            React.createElement("meshStandardMaterial", __assign({ color: color }, textureMarble, { roughness: 0.1, metalness: 0.1, displacementScale: 0.0001 })))));
};
exports["default"] = Checker;
