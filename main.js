const {app, BrowserWindow} = require('electron');

function createWindow() {
    window = new BrowserWindow({ width: 1600, height: 900 });
    window.loadFile('index.html');
    window.removeMenu()
}

app.on('ready', createWindow);
