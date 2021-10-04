import React, {useState, useEffect} from 'react';
import { MdDelete } from 'react-icons/md';

import { ReactComponent as DragIcon } from '../../../assets/drag-item.svg';

import InputBox from '../InputBox/InputBox';
import SelectBox from '../SelectBox';
import OptionList from '../OptionList';

const questionData = [
  {
    question: '',
    options: [
      {
        value: '',
        selected: false
      },
      {
        value: '',
        selected: false
      }
    ]
  }
]

const QuestionList = () => {
  const [questions, setQuestions] = useState(questionData)

  const addQuestion = () => {
    setQuestions([...questions, ...questionData])
  }

  const deleteQuestion = (idx) => {
    const questionsList = questions.filter((d, i) => {
      return i !== idx
    })
    setQuestions(questionsList)
  }

  return (
    <div className={`w-full flex flex-col justify-center items-center `}>
      <ul className={`w-full space-y-6`}>
        {questions.length > 0 && questions.map((question, idx) => {
          return (
            <Item key={idx} item={question} idx={idx} onDelete={deleteQuestion} />
          )
        })}
      </ul>
      <SelectBox className={`max-w-md mb-6 mt-10`} placeholder={`Select Asset Batch`} options={['Cat01', 'Cat02']} variant={3} />
      <div className={`w-full max-w-md`}>
        <div onClick={addQuestion} className={`inline-flex items-center space-x-2 cursor-pointer`}>
          <span style={{ paddingTop: '2px' }} className={`w-4 h-4 text-white bg-brand_blue flex justify-center items-center rounded-full`}>
            +
          </span>
          <span className={`text-brand_blue font-semibold text-sm`}>Add Question</span>
        </div>
      </div>
    </div>
  );
};

const Item = ({item, idx, onDelete}) => {
  const [question, setQuestion] = useState();

  useEffect(() => {
    if (item) {
      setQuestion(item);
    }
  }, [item]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setQuestion({ ...question, [name]: value });
  };

  return (
    <li className={`flex flex-col justify-center items-center border-b border-gray-200 pb-8`}>
      <DragIcon className={`transform rotate-90 mb-6 cursor-move`} />
      <div className={`max-w-md w-full mb-12 relative`}>
        <InputBox label={`Question ${idx + 1}`} name={`question`} value={item?.question} onValueChange={handleInputChange} labelColor={`text-gray-500`} placeholder={`Type question here...`} variant={3} />
        {idx > 0 && <MdDelete onClick={() => onDelete(idx)} className={`text-gray-300 hover:text-gray-600 cursor-pointer absolute top-0 right-0`} size={20} />}
      </div>
      <OptionList data={item.options} />
    </li>
  )
}

export default QuestionList;
