import { BrowserWindow } from 'electron';
import FilesController from './FilesController';
import WindowController from './WindowController';

const initializeControllers = (window: BrowserWindow) => {
  return {
    filesController: new FilesController(),
    windowController: new WindowController(window),
  }
}

export default initializeControllers;
