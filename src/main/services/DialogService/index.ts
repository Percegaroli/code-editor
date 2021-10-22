/* eslint-disable class-methods-use-this */
import { dialog } from 'electron';

class DialogService {
  async selectFolder() {
    const { canceled, filePaths } = await dialog.showOpenDialog({
      properties: ['openDirectory', 'createDirectory'],
    });
    return canceled ? '' : filePaths[0];
  }
}

export default DialogService;
