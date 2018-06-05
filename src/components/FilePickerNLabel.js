import React from 'react';
import { FilePicker } from 'react-file-picker'
import { Button ,Alert} from 'react-bootstrap'

const FilePickerNLabel = ({parse=f=>f,me,...props}) =>
  <div>
      <FilePicker
      extensions={['xlsx']}
      onChange={FileObject => parse(FileObject,me)}
      onError={(errMsg) => <Alert><h1>TIPO ERRADO</h1></Alert>}
        >
          <Button bsStyle="primary">
              Escoger excel
          </Button>
        </FilePicker>
  </div>

export default FilePickerNLabel
