"use strict";
exports.__esModule = true;
var cannon_1 = require("@react-three/cannon");
var CollisionBox = function () {
    var opacity = 0;
    function deg2rad(deg) {
        return deg * (Math.PI / 180);
    }
    var bottomProps = {
        args: [4, 3],
        position: [0, 1.82, 0],
        rotation: [deg2rad(274), 0, 0]
    };
    var refBottom = cannon_1.usePlane(function () { return ({
        mass: 100,
        type: "Static",
        position: bottomProps.position,
        rotation: bottomProps.rotation,
        args: bottomProps.args
    }); })[0];
    var frontProps = {
        args: [4, 3],
        position: [0, 3.4, -1.45],
        rotation: [deg2rad(0), 0, 0]
    };
    var refFront = cannon_1.usePlane(function () { return ({
        mass: 100,
        type: "Static",
        position: frontProps.position,
        rotation: frontProps.rotation,
        args: frontProps.args
    }); })[0];
    var backProps = {
        args: [4, 3],
        position: [0, 3.2, 1.45],
        rotation: [deg2rad(180), 0, 0]
    };
    var refBack = cannon_1.usePlane(function () { return ({
        mass: 100,
        type: "Static",
        position: backProps.position,
        rotation: backProps.rotation,
        args: backProps.args
    }); })[0];
    var leftProps = {
        args: [4, 3],
        position: [1.6, 3.2, 0],
        rotation: [deg2rad(180), deg2rad(270), deg2rad(0)]
    };
    var refLeft = cannon_1.usePlane(function () { return ({
        mass: 100,
        type: "Static",
        position: leftProps.position,
        rotation: leftProps.rotation,
        args: leftProps.args
    }); })[0];
    var rightProps = {
        args: [4, 3],
        position: [-1.6, 3.2, 0],
        rotation: [deg2rad(180), deg2rad(90), deg2rad(0)]
    };
    var refRight = cannon_1.usePlane(function () { return ({
        mass: 100,
        type: "Static",
        position: rightProps.position,
        rotation: rightProps.rotation,
        args: rightProps.args
    }); })[0];
    return (React.createElement(React.Fragment, null,
        React.createElement("mesh", { ref: refBottom, position: bottomProps.position, rotation: bottomProps.rotation },
            React.createElement("planeGeometry", { args: bottomProps.args }),
            React.createElement("meshStandardMaterial", { color: '#C4A484', opacity: opacity, transparent: true })),
        React.createElement("mesh", { ref: refFront, position: frontProps.position, rotation: frontProps.rotation },
            React.createElement("planeGeometry", { args: frontProps.args }),
            React.createElement("meshStandardMaterial", { color: '#C4A484', opacity: opacity, transparent: true })),
        React.createElement("mesh", { ref: refBack, position: backProps.position, rotation: backProps.rotation },
            React.createElement("planeGeometry", { args: backProps.args }),
            React.createElement("meshStandardMaterial", { color: '#C4A484', opacity: opacity, transparent: true })),
        React.createElement("mesh", { ref: refLeft, position: leftProps.position, rotation: leftProps.rotation },
            React.createElement("planeGeometry", { args: leftProps.args }),
            React.createElement("meshStandardMaterial", { color: '#C4A484', opacity: opacity, transparent: true })),
        React.createElement("mesh", { ref: refRight, position: leftProps.position, rotation: leftProps.rotation },
            React.createElement("planeGeometry", { args: leftProps.args }),
            React.createElement("meshStandardMaterial", { color: '#C4A484', opacity: opacity, transparent: true }))));
};
exports["default"] = CollisionBox;
