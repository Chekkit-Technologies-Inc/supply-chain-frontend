import React, { useState } from "react";

import Heading from '../../../../components/fragments/Heading'
import AssetUploadList from '../../../../components/fragments/AssetUploadList'
import DragDropZone from '../../../../components/fragments/DragDropZone'
import Text from '../../../../components/fragments/Text'
import Button from '../../../../components/fragments/Button'


const UploadAssets = () => {
  const [file, setFile] = useState(null)

  return <div className={`space-y-6 py-16 px-4 bg-white `}>
    <Heading className={`font-medium text-brand_blue`} title={`Select type of asset you want to onboard`} size={2} />
    <div className={`space-y-12`}>
      <AssetUploadList />
      <div className={`flex justify-center`} >
        <DragDropZone onChange={setFile}>
          <Text className={`text-lg font-medium text-brand_blue underline`} value={file && file.name ? file.name : `Select CSV file`} />
          <Text className={`text-sm text-gray-400`} value={`or drop your file here`} />
          <Text className={`text-sm text-gray-400`} value={`(.csv, .xls, .xlsx)`} />
        </DragDropZone>
      </div>
      <div className={`flex space-x-4 md:space-x-12 justify-center`}>
          <Button text={`Back`} type={`secondary`} />
          <Button text={`Continue`} />
      </div>
    </div>
  </div>;
};

export default UploadAssets;
