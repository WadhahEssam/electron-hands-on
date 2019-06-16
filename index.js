const electron = require('electron');
const { app, BrowserWindow } = electron;

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    title: 'Video Info Extractor',
    titleBarStyle: 'hidden',
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`)
});