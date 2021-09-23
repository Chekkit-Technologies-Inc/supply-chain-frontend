import React, { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom'

import Heading from '../../../../components/fragments/Heading'
import AssetUploadList from '../../../../components/fragments/AssetUploadList'
import DragDropZone from '../../../../components/fragments/DragDropZone'
import Text from '../../../../components/fragments/Text'
import Button from '../../../../components/fragments/Button'


const UploadAssets = () => {
  const history = useHistory()
  const [file, setFile] = useState(null)
  const [csvArr, setCsvArr] = useState(null)

  useEffect(() => {
    if (file) {
      const reader = new FileReader();

      reader.onload = function(e) {
          const text = e.target.result;
          console.log(text);
          processCSV(text)
      }

      reader.readAsText(file);
    }
  }, [file])

  useEffect(() => {
    if (csvArr) {
      console.table(csvArr);
    }
  }, [csvArr])

  const processCSV = (str, delim=',') => {
    const headers = str.slice(0,str.indexOf('\n')).split(delim);
    const rows = str.slice(str.indexOf('\n')+1).split('\n');

    const newArray = rows.map( row => {
        const values = row.split(delim);
        const eachObject = headers.reduce((obj, header, i) => {
            obj[header] = values[i];
            return obj;
        }, {})
        return eachObject;
    })

    setCsvArr(newArray)
}

  return <div className={`space-y-6 py-16 px-4 sm:px-6 bg-white `}>
    <Heading className={`font-medium text-brand_blue`} title={`Select type of asset you want to onboard`} size={2} />
    <div className={`space-y-12`}>
      <AssetUploadList />
      <div className={`flex justify-center`} >
        <DragDropZone onChange={setFile}>
          <Text className={`text-lg font-medium text-brand_blue underline`} value={file && file.name ? file.name : `Select CSV file`} />
          <Text className={`text-sm text-gray-400`} value={`or drop your file here`} />
          <Text className={`text-sm text-gray-400`} value={`(.csv file)`} />
        </DragDropZone>
      </div>
      <div className={`flex space-x-4 md:space-x-12 justify-center`}>
          <Button text={`Back`} type={`secondary`} onClick={() => history.goBack()} />
          <Button text={`Continue`} />
      </div>
    </div>
  </div>;
};

export default UploadAssets;
