"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var fiber_1 = require("@react-three/fiber");
var drei_1 = require("@react-three/drei");
var socket_io_client_1 = require("socket.io-client");
var cannon_1 = require("@react-three/cannon");
require("./App.css");
var Ocean_1 = require("./view/components/Ocean");
var Beach_1 = require("./view/components/Beach");
var Board_1 = require("./view/components/Board");
var CheckerLayout_1 = require("./view/components/CheckerLayout");
var Menu_1 = require("./view/components/Menu");
var Dice_1 = require("./view/components/Dice");
var Button_1 = require("./view/components/Button");
var CollisionBox_1 = require("./view/components/CollisionBox");
function App() {
    function deg2rad(deg) {
        return deg * (Math.PI / 180);
    }
    var _a = react_1.useState([]), layout = _a[0], setLayout = _a[1];
    var _b = react_1.useState(1.5), button = _b[0], setButton = _b[1];
    var _c = react_1.useState([0, 0, 0]), cameraPos = _c[0], setCameraPos = _c[1];
    var _d = react_1.useState(''), gameState = _d[0], setGameState = _d[1];
    // const [rooms, setRooms] = useState<any>([])
    var _e = react_1.useState([]), gameRooms = _e[0], setGameRooms = _e[1];
    var _f = react_1.useState(''), status = _f[0], setStatus = _f[1];
    var _g = react_1.useState(false), roll = _g[0], setRoll = _g[1];
    react_1.useEffect(function () {
        var array = [];
        array[27] = { count: 0, color: '#EEEEEE' };
        array[26] = { count: 0, color: '#FF0000' };
        array[25] = { count: 0, color: '#EEEEEE' };
        array[24] = { count: 0, color: '#FF0000' };
        array.fill({ count: 0 }, 0, 27);
        array[0] = { count: 2, color: '#EEEEEE' };
        array[5] = { count: 5, color: '#FF0000' };
        array[7] = { count: 3, color: '#FF0000' };
        array[11] = { count: 5, color: '#EEEEEE' };
        array[12] = { count: 5, color: '#FF0000' };
        array[16] = { count: 3, color: '#EEEEEE' };
        array[18] = { count: 5, color: '#EEEEEE' };
        array[23] = { count: 2, color: '#FF0000' };
        setLayout(__spreadArrays(array));
        // setCamera([-3, 14, -20])
        setCameraPos([-3, 14, -20]);
        // console.table(array)
    }, []);
    function onRoll() {
        if (gameState === 'init') {
        }
    }
    function handleRoll() {
        console.log('click');
        if (gameState === 'init') {
            setRoll(!roll);
        }
    }
    function joinRoom(id) {
        var socket = socket_io_client_1.io();
        socket.emit("join-room", id);
        setGameState('init');
        setButton(2);
        setStatus('joined');
    }
    function handleForm(ev) {
        ev.preventDefault();
        var create = ev.target.create.checked;
        var join = ev.target.join.checked;
        var name = ev.target.name.value;
        if (name === '')
            return;
        if (create) {
            var socket = socket_io_client_1.io();
            socket.emit("create-room", name);
            setStatus('host');
            socket.on('game-init', function () {
                setGameState('init');
                setButton(2);
            });
        }
        if (join) {
            var socket = socket_io_client_1.io();
            socket.emit('get-rooms');
            socket.on('rooms', function (rooms) {
                setGameRooms(rooms);
                console.log(rooms);
            });
            setStatus('join');
        }
        else
            return;
    }
    return (React.createElement("div", { className: 'canvas' },
        React.createElement(fiber_1.Canvas, { shadows: true, camera: { position: cameraPos, fov: 45, rotation: [deg2rad(20), deg2rad(180), deg2rad(0)] } },
            React.createElement(drei_1.Sky, { turbidity: 2, azimuth: 0.75, inclination: 0.52 }),
            React.createElement("ambientLight", { intensity: 0.2, color: '#FFFFFF' }),
            React.createElement("directionalLight", { intensity: 0.3, position: [3, -5, 30] }),
            React.createElement("pointLight", { intensity: 0.6, position: [3, 5, -3], castShadow: true, "shadow-mapSize-height": 512, "shadow-mapSize-width": 512 }),
            React.createElement(cannon_1.Physics, null,
                React.createElement(Dice_1["default"], { position: [1, 8, 1], roll: roll }),
                React.createElement(Dice_1["default"], { position: [1, 8, 1], roll: roll }),
                React.createElement(CollisionBox_1["default"], null)),
            React.createElement(Board_1["default"], { position: [0, 1.82, 0], rotation: [deg2rad(-86), 0, 0] }),
            React.createElement(Menu_1["default"], { position: [-2, 10, -6], size: [8, 4.8, 0.1], handleForm: handleForm, joinRoom: joinRoom, status: status, gameRooms: gameRooms }),
            React.createElement(Button_1["default"], { position: [0, button, -2], handleRoll: handleRoll }),
            React.createElement(Ocean_1["default"], null),
            React.createElement(CheckerLayout_1["default"], { layout: layout, position: [-1.45, 1.93, -1.29], rotation: [deg2rad(4), 0, 0] }),
            React.createElement(Beach_1["default"], { position: [0, 1.75, 0], size: [200, 50], rotation: [deg2rad(-86), 0, 0] }),
            React.createElement(drei_1.OrbitControls, null))));
}
exports["default"] = App;
