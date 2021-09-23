import React, {useRef} from "react";
import { FileDrop } from 'react-file-drop'

const DragDropZone = ({className, children, onChange}) => {
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    if (!(e instanceof FileList)) {
      if (!validate(e.target.files[0])) return
      onChange(e.target.files[0])
    } else {
      if (!validate(e[0])) return
      onChange(e[0])
    }
  }

  const validate = (file) => {
    if (!(file.type === 'text/csv' || file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || file.type === 'application/vnd.ms-excel')) {
      return false
    }
    return true
  }

  const onTargetClick = () => {
    fileInputRef.current.click()
  }

  return (
  <div className={`w-full max-w-md`}>
    <input ref={fileInputRef} onChange={handleChange} id="file" type="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" hidden />
    <FileDrop
          // onFrameDragEnter={(event) => console.log('onFrameDragEnter', event)}
          // onFrameDragLeave={(event) => console.log('onFrameDragLeave', event)}
          // onFrameDrop={(event) => console.log('onFrameDrop', event)}
          // onDragOver={(event) => console.log('onDragOver', event)}
          // onDragLeave={(event) => console.log('onDragLeave', event)}
          onTargetClick={onTargetClick}
          onDrop={(files) => handleChange(files)}
        >
    <div className={`${className} flex flex-col justify-center items-center p-4 rounded-lg bg-gray-100 hover:bg-gray-200 border-2 border-dashed border-gray-300 w-full h-60 cursor-pointer`}>
      {children}
    </div>
    </FileDrop>
  </div>
  );
};

export default DragDropZone;
