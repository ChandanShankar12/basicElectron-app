const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: 'Cursor AI App',
    width: 1000,
    height: 600
  });

  const startUrl = url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  });

  mainWindow.loadURL(startUrl);
}

app.whenReady().then(createMainWindow);

// Add quit logic and other necessary app lifecycle methods
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});