window.devicePixelRatio;

var scale = 1 / window.devicePixelRatio;
document.write(`
    <meta name="viewport" content="initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}, user-scalable=no">
`);

var unit = window.innerWidth / 750;

document.write(`
    <style>
        html {
            font-size: ${100 * unit}px;
        }
    </style>
`);
