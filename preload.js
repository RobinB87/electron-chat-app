const { ipcRenderer, contextBridge } = require('electron');

// context bridge to bridge the world of the browser window and electron (preload.js)
contextBridge.exposeInMainWorld('electron', {
    notificationApi: {
        sendNotification(message) {
            ipcRenderer.send('notify', message);
        }
    },
    fileApi: {
        // do st..
    }
});