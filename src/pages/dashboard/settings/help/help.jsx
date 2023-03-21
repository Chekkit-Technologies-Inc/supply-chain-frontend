import React, { useState } from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useHistory } from 'react-router-dom';

const fqobj = [
  {
    question: 'Completely aggregate e-business',
    answer:
      'Completely aggregate e-business systems whereas optimal mindshare. Globally revolutionize tactical resources without highly efficient networks. Competently formulate B2B niche markets rather than competitive solutions. Distinctively.',
    showAnswer: false,
  },
  {
    question: 'Completely aggregate e-business',
    answer:
      'Completely aggregate e-business systems whereas optimal mindshare. Globally revolutionize tactical resources without highly efficient networks. Competently formulate B2B niche markets rather than competitive solutions. Distinctively.',
    showAnswer: false,
  },
  {
    question: 'Completely aggregate e-business',
    answer:
      'Completely aggregate e-business systems whereas optimal mindshare. Globally revolutionize tactical resources without highly efficient networks. Competently formulate B2B niche markets rather than competitive solutions. Distinctively.',
    showAnswer: false,
  },
  {
    question: 'Completely aggregate e-business',
    answer:
      'Completely aggregate e-business systems whereas optimal mindshare. Globally revolutionize tactical resources without highly efficient networks. Competently formulate B2B niche markets rather than competitive solutions. Distinctively.',
    showAnswer: false,
  },
  {
    question: 'Completely aggregate e-business',
    answer:
      'Completely aggregate e-business systems whereas optimal mindshare. Globally revolutionize tactical resources without highly efficient networks. Competently formulate B2B niche markets rather than competitive solutions. Distinctively.',
    showAnswer: false,
  },
];

const HelpBase = () => {
  const history = useHistory();
  const [faq, setFaq] = useState(fqobj);

  const showHideAnswer = index => {
    let occrs = [...faq];
    occrs = occrs.map((d, idx) => {
      if (idx === index) {
        d.showAnswer = !d.showAnswer;
      } else {
        d.showAnswer = false;
      }
      return d;
    });
    setFaq(occrs);
  };

  return (
    <FadeIn className='bg p-4 md:px-12 py-16 min-h-screen w-full'>
      <div className='text-sm text-brand_blue mb-6 -mt-6'>
        <span onClick={() => history.push('/home')} className='text-brand_blue_light cursor-pointer'>
          Main menu{' '}
        </span>
        <span className='text-brand_blue_light'>| </span>
        <span onClick={() => history.push('/settings')} className='text-brand_blue_light cursor-pointer'>
          Settings
        </span>
        <span className='text-brand_blue_light'> | </span>
        <span onClick={() => history.push('/settings/help')} className='text-blue-500 cursor-pointer'>
          Help
        </span>
      </div>
      <div className='text-2xl text-brand_blue mb-12'>Help</div>
      <FadeIn className='flex-1 w-full space-y-6 max-w-4xl mx-auto'>
        <div className='font-extrabold text-2xl text-brand_blue'>FAQ's</div>
        {faq.map((d, idx) => {
          return (
            <>
              <div
                onClick={() => showHideAnswer(idx)}
                className='p-6 bg-white shadow-md text-brand_blue font-medium cursor-pointer flex items-center justify-between space-x-4'
                key={idx}
              >
                <div className='flex items-center space-x-4'>
                  <span className='bg-brand_blue text-white inline-flex w-6 h-6 justify-center items-center rounded-md p-2 text-xs'>{idx + 1}</span>{' '}
                  <span>{d.question}</span>
                </div>
                <div className='font-semibold text-lg'>{d.showAnswer ? <span>-</span> : <span>+</span>}</div>
              </div>
              {d.showAnswer && <div className='p-6 bg-gray-200 text-sm text-gray-800 shadow-inner'>{d.answer}</div>}
            </>
          );
        })}
      </FadeIn>
    </FadeIn>
  );
};

export default HelpBase;
