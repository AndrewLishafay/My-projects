"use strict";
exports.__esModule = true;
var OBJLoader_1 = require("three/examples/jsm/loaders/OBJLoader");
var fiber_1 = require("@react-three/fiber");
var drei_1 = require("@react-three/drei");
var THREE = require("three");
var Tree = function () {
    var treeObj = fiber_1.useLoader(OBJLoader_1.OBJLoader, '/models/tree/Palm_trees_0003.obj');
    var texturePalm = drei_1.useTexture({
        map: 'models/tree/Palm_trees_0003/Palm_trees_0003_baseColor.png'
    });
    var material = new THREE.MeshBasicMaterial({ color: "#FF0000" });
    return (React.createElement("group", null,
        React.createElement("primitive", { object: treeObj, material: material, scale: 1 })));
};
exports["default"] = Tree;
