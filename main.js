const { app, BrowserWindow, Notification } = require("electron");

function createWindow() {
  const window = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: true,
    },
  });

  window.loadFile("index.html");
  window.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();
  const notification = new Notification({ title: "Hello World", body: "My test message" });
  notification.show();
});

app.on("window-all-closed", () => {
  // darwin is mac
  // process.platform !== "win32"
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
