import React from 'react';
import { useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';
import ImageFadeIn from 'react-image-fade-in';

import thumb from '../../../../assets/thumb.png';
import Button from '../../../../components/fragments/button';
import Heading from '../../../../components/fragments/heading';
import Text from '../../../../components/fragments/text';

const StickerPrintSuccess = () => {
  const history = useHistory();
  return (
    <FadeIn className={`p-6 pb-16 pt-12 w-full min-h-screen flex flex-col justify-center items-center space-y-12 bg-white bg`}>
      <div className={`w-96 h-96 p-6`}>
        <ImageFadeIn className={`w-96`} src={thumb} alt='activation steps' opacityTransition={1} />
      </div>
      <div className={`space-y-2`}>
        <Heading className={`font-semibold text-center mt-6`} title={`Successfully!`} />
        <Text className={`text-center text-brand_blue`} value={`Sticker ID Print Successful`} />
      </div>
      <Button className={`w-60`} text={`Homepage`} onClick={() => history.push('/dashboard')} />
    </FadeIn>
  );
};

export default StickerPrintSuccess;
