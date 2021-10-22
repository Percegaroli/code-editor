/* eslint-disable class-methods-use-this */
import { readdir, readFile, writeFile, open } from 'fs/promises';
import path from 'path';
import { SavingFileData } from 'shared/Model/SavingFileData';
import { Folder } from 'shared/Model/Folder';
import DialogService from '../DialogService';

class FilesService {
  private dialogService = new DialogService();

  async loadDirectory() {
    const folderPath = await this.dialogService.selectFolder();
    if (folderPath) {
      return this.loadDirectoryContent(folderPath);
    }
    return Promise.reject();
  }

  openFile(filePath: string) {
    return readFile(filePath, {
      encoding: 'utf-8',
    });
  }

  async saveFile({ content, path: filePath }: SavingFileData) {
    try {
      const file = await this.openFileToWrite(filePath);
      return await writeFile(file, content);
    } catch (err) {
      return Promise.reject();
    }
  }

  private openFileToWrite(filePath: string) {
    return open(filePath, 'w');
  }

  private async loadDirectoryContent(filePath: string) {
    const dirContent = await readdir(filePath, { withFileTypes: true });
    const folderContent: Folder = {
      name: this.getDirName(filePath),
      files: [],
      folders: [],
    };
    const foldersPath: Array<string> = [];
    const separator = path.sep;
    dirContent.forEach(async (content) => {
      if (content.isFile()) {
        folderContent.files.push({
          extension: path.extname(content.name),
          name: content.name,
          path: `${filePath}${separator}${content.name}`,
        });
      } else if (content.isDirectory()) {
        foldersPath.push(path.join(filePath, content.name));
      }
    });
    folderContent.folders = await Promise.all(
      foldersPath.map((folder) => this.loadDirectoryContent(folder))
    );
    return folderContent;
  }

  private getDirName(filePath: string) {
    const formattedPath = filePath.replace('\\', '/');
    const dirs = formattedPath.split('/');
    return dirs[dirs.length - 1];
  }
}

export default FilesService;
