"use strict";
exports.__esModule = true;
var drei_1 = require("@react-three/drei");
var fiber_1 = require("@react-three/fiber");
var THREE = require("three");
var Menu = function (props) {
    var position = props.position, size = props.size, handleForm = props.handleForm, joinRoom = props.joinRoom, status = props.status, gameRooms = props.gameRooms;
    function deg2rad(deg) {
        return deg * (Math.PI / 180);
    }
    var threeState = fiber_1.useThree();
    fiber_1.useFrame(function (state) {
        if (status === 'joined' || status === 'host') {
            var cameraPositionVector = new THREE.Vector3();
            var cameraQuaternion1 = new THREE.Quaternion().copy(threeState.camera.quaternion);
            threeState.camera.lookAt(0, -0.5, 2);
            var cameraQuaternion2 = new THREE.Quaternion().copy(threeState.camera.quaternion);
            // THREE.Quaternion.slerp(cameraQuaternion1, cameraQuaternion2, threeState.camera.quaternion, 0.05); //deprecated code, still works but generates warnings new method bellow
            state.camera.quaternion.slerpQuaternions(cameraQuaternion1, cameraQuaternion2, 0.05);
            state.camera.position.lerp(cameraPositionVector.set(0, 5.5, -3.5), 0.05);
            // state.camera.updateProjectionMatrix();
            // return null
        }
    });
    return (React.createElement("mesh", { position: position, rotation: [deg2rad(10), deg2rad(180), deg2rad(0)] },
        React.createElement("boxGeometry", { args: size }),
        React.createElement("meshStandardMaterial", { color: "#AAAAAA" }),
        React.createElement(drei_1.Html, { wrapperClass: 'html', occlude: true, center: true, position: [0, 0, 0.1], transform: true },
            React.createElement("div", { className: 'menu' },
                status === '' &&
                    React.createElement(React.Fragment, null,
                        React.createElement("h3", null, "Welcome to 3D Backgammon"),
                        React.createElement("form", { onSubmit: handleForm },
                            React.createElement("label", { htmlFor: "name" }, "Enter your name"),
                            React.createElement("input", { type: "text", id: 'name' }),
                            React.createElement("div", null,
                                React.createElement("input", { type: "radio", id: 'create', name: 'option' }),
                                React.createElement("label", { htmlFor: "create" }, "Create game")),
                            React.createElement("div", null,
                                React.createElement("input", { type: "radio", id: 'join', name: 'option' }),
                                React.createElement("label", { htmlFor: "join" }, "Join game")),
                            React.createElement("input", { type: "submit" }))),
                status === 'join' &&
                    React.createElement(React.Fragment, null,
                        React.createElement("h3", null, "Room List"),
                        gameRooms.map(function (room, i) { return (React.createElement("div", { className: 'room', key: i },
                            React.createElement("h4", null, room.name),
                            React.createElement("button", { onClick: function () { return joinRoom(room.id); } }, "Join"))); }))))));
};
exports["default"] = Menu;
