"use strict";
exports.__esModule = true;
var drei_1 = require("@react-three/drei");
var Button = function (props) {
    var position = props.position, handleRoll = props.handleRoll;
    function deg2rad(deg) {
        return deg * (Math.PI / 180);
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("mesh", { castShadow: true, receiveShadow: true, onClick: handleRoll, position: position },
            React.createElement("boxGeometry", { args: [1.3, 0.1, 0.45] }),
            React.createElement("meshStandardMaterial", { color: '#999999' }),
            React.createElement(drei_1.Html, { wrapperClass: 'html', occlude: true, center: true, position: [0, 0.05, 0], rotation: [deg2rad(90), deg2rad(180), 0], transform: true },
                React.createElement("div", { className: 'button' }, "Roll Dice")))));
};
exports["default"] = Button;
