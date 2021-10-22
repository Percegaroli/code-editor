import { File } from './File';

export interface Folder {
  name: string;
  files: Array<File>;
  folders: Array<Folder>;
}
