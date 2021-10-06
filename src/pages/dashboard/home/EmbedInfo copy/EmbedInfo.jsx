import React, { useRef, useState } from 'react';

import { ReactComponent as UploadIcon } from '../../../../assets/upload.svg';
import Button from '../../../../components/fragments/button';
import Heading from '../../../../components/fragments/heading';

const EmbedInfo = () => {
  const fileRef = useRef();
  const [file, setFile] = useState();
  const handleFileChange = e => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  return (
    <div className='w-full h-full py-12 md:py-32 px-4 sm:px-6 md:px-8 flex flex-col items-center justify-start bg-dots'>
      <div className={`flex flex-col justify-center items-center p-4 w-full max-w-3xl space-y-10`}>
        <div className={`space-y-4 text-center`}>
          <div className={`text-center`}>
            <Heading className={`font-medium inline`} title={`Step 2 of sticker setup: `} />
            <Heading className={`font-bold text-green-400 inline`} title={`Embed Information`} />
          </div>
          <div>What other information will you like the sticker to carry:</div>
        </div>

        <div className={`p-10 rounded-xl bg-brand_blue max-w-lg w-full space-y-6 text-gray-100`}>
          <div className={`rounded-xl bg-white bg-opacity-10 h-48`}>
            <textarea
              className={`w-full h-full p-4 bg-transparent focus:outline-none resize-none font-bold text-2x`}
              placeholder={`Enter Your Text`}
              spellCheck={false}
              type='text'
            />
          </div>
          <div
            onClick={() => fileRef.current.click()}
            className={`rounded-xl bg-white bg-opacity-10 h-24 border-2 border-dashed cursor-pointer p-6 flex items-center justify-center text-sm`}
          >
            <input ref={fileRef} type='file' onChange={handleFileChange} hidden />
            <div className={`font-bold mr-2 bg-white w-10 h-10 rounded-lg p-3`}>
              <UploadIcon className={`w-full h-full`} />
            </div>
            {!file && (
              <>
                <div className={`font-bold`}>Upload Any File</div>
                <div className={`font-medium text-gray-400`}>(.Jpg, .Pdf, .Mp3, .Docx, .Pptx)</div>
              </>
            )}
            {file && (
              <>
                <div className={`font-bold`}>{file.name}</div>
              </>
            )}
          </div>
        </div>

        <div className={`flex space-x-4 md:space-x-8 justify-center`}>
          <Button className={`w-60`} text={`Back`} type={`secondary`} />
          <Button className={``} text={`Save And Continue`} />
        </div>
      </div>
    </div>
  );
};

export default EmbedInfo;
