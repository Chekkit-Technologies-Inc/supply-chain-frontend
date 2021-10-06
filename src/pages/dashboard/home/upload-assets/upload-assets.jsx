import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Heading from '../../../../components/fragments/heading';
import AssetUploadList from '../../../../components/fragments/asset-upload-list';
import DragDropZone from '../../../../components/fragments/drag-drop-zone';
import Text from '../../../../components/fragments/text';
import Button from '../../../../components/fragments/button';

const UploadAssets = ({ onSuccess }) => {
  const history = useHistory();
  const [file, setFile] = useState(null);
  const [csvArr, setCsvArr] = useState(null);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const text = e.target.result;
        console.log(text);
        processCSV(text);
      };

      reader.readAsText(file);
    }
  }, [file]);

  useEffect(() => {
    if (csvArr) {
      console.table(csvArr);
    }
  }, [csvArr]);

  const processCSV = (str, delim = ',') => {
    const hds = str.slice(0, str.indexOf('\n')).split(delim);

    const headers = hds.map(h => h.split(' ').join('_').toLowerCase());

    const rows = str.slice(str.indexOf('\n') + 1).split('\n');

    const newArray = rows.map(row => {
      const values = row.split(delim);
      const eachObject = headers.reduce((obj, header, i) => {
        obj[header] = values[i];
        return obj;
      }, {});
      return eachObject;
    });

    setCsvArr(newArray);
  };

  const onProceed = () => {
    // Validate CSV
    if (!csvArr) {
      console.error('Invalid CSV');
      return;
    }
    let keys = Object.keys(csvArr[0]);
    console.log('Keys', keys);
    if (!keys.includes('asset_name') && !keys.includes('asset_price') && !keys.includes('batch_number')) {
      console.error('Invalid CSV, upload csv with at least Asset Name, Asset Price and Batch Number Field');
      return;
    }

    onSuccess(csvArr);
    history.push('/dashboard/uploaded-assets');
  };

  return (
    <div className={` px-4 sm:px-6 bg-white h-full`}>
      <div className={`py-8 sm:py-16 bg-white space-y-6`}>
        <Heading className={`font-medium text-brand_blue`} title={`Select type of asset you want to onboard`} size={2} />
        <div className={`space-y-12 bg-white`}>
          <AssetUploadList />
          <div className={`flex justify-center`}>
            <DragDropZone onChange={setFile}>
              <Text className={`text-lg font-medium text-brand_blue underline`} value={file && file.name ? file.name : `Select CSV file`} />
              <Text className={`text-sm text-gray-400`} value={`or drop your file here`} />
              <Text className={`text-sm text-gray-400`} value={`(.csv file)`} />
            </DragDropZone>
          </div>
          <div className={`flex space-x-4 md:space-x-12 justify-center`}>
            <Button text={`Back`} type={`secondary`} onClick={() => history.goBack()} />
            <Button text={`Continue`} onClick={onProceed} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadAssets;
