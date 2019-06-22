const { app, BrowserWindow } = require('electron');

function createWindow() {
    window = new BrowserWindow({
        width: 1600,
        height: 768
    });
    window.loadFile(`${__dirname}/mario-game/index.html`);
    window.removeMenu();
}

app.on('ready', createWindow);
