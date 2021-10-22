/* eslint-disable class-methods-use-this */
import { convertToRaw, EditorState } from 'draft-js';

class CodeEditorService {
  formatStateToString(state: EditorState) {
    const { blocks } = convertToRaw(state.getCurrentContent());
    let content = '';
    const lastIndex = blocks.length - 1;
    blocks.forEach((block, index) => {
      content += block.text;
      if (index !== lastIndex) {
        content += '\n';
      }
    });
    return content;
  }
}

export default new CodeEditorService();
