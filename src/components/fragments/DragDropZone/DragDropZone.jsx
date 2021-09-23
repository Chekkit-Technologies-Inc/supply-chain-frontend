import React from "react";

const DragDropZone = ({className, children}) => {
  return (
  <div className={`w-full max-w-md`}>
    <input id="file" type="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" hidden />
    <label htmlFor="file">
    <div style={{borderBox: 'content'}} className={`${className} flex flex-col justify-center items-center p-4 rounded-lg bg-gray-100 border-2 border-dashed border-gray-300 w-full h-60 cursor-pointer`}>
      {children}
    </div>
    </label>
  </div>
  );
};

export default DragDropZone;
