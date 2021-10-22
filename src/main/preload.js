const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('files', {
  loadDirectory: () => ipcRenderer.invoke('LOAD_DIRECTORY'),
  openFile: (path) => ipcRenderer.invoke('OPEN_FILE', path),
  saveFile: (file) => ipcRenderer.invoke('SAVE_FILE', file),
});

contextBridge.exposeInMainWorld('app', {
  closeApp: () => ipcRenderer.send('CLOSE_APP'),
  hideApp: () => ipcRenderer.send('TOGGLE_HIDE'),
  maximizeApp: () => ipcRenderer.send('TOGGLE_MAXIMIZE'),
})
