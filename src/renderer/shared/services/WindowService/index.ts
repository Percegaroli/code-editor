class WindowService {
  close(){
    window.app.closeApp();
  }
  hide(){
    window.app.hideApp();
  }
  maximize(){
    window.app.maximizeApp();
  }
}

export default new WindowService();
