const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true
    }
  });

  win.loadURL('https://www.chatbase.co/chatbot-iframe/uDZF2kjdPDEcdNrF2z_Y1');
}

app.whenReady().then(createWindow);