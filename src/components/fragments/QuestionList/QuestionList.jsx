import React, { useState, useEffect } from 'react';
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
        selected: false,
      },
      {
        value: '',
        selected: false,
      },
    ],
  },
];

const initialDnDState = {
  draggedFrom: null,
  draggedTo: null,
  isDragging: false,
  originalOrder: [],
  updatedOrder: [],
};

const QuestionList = () => {
  const [questions, setQuestions] = useState(questionData);
  const [dragAndDrop, setDragAndDrop] = useState(initialDnDState);

  const addQuestion = () => {
    setQuestions([...questions, ...questionData]);
  };

  const deleteQuestion = idx => {
    const questionsList = questions.filter((d, i) => {
      return i !== idx;
    });
    setQuestions(questionsList);
  };

  const onQuestionChange = (item, index) => {
    const questionsList = questions.map((question, idx) => {
      if (index === idx) {
        return item;
      }
      return question;
    });
    setQuestions(questionsList);
  };

  const onDragStart = event => {
    const initialPosition = Number(event.currentTarget.dataset.position);

    setDragAndDrop({
      ...dragAndDrop,

      draggedFrom: initialPosition,
      isDragging: true,
      originalOrder: questions,
    });

    event.dataTransfer.setData('text/html', '');
  };

  const onDragOver = event => {
    event.preventDefault();

    let newList = dragAndDrop.originalOrder;

    const draggedFrom = dragAndDrop.draggedFrom;

    const draggedTo = Number(event.currentTarget.dataset.position);

    const itemDragged = newList[draggedFrom];

    const remainingItems = newList.filter((item, index) => index !== draggedFrom);

    newList = [...remainingItems.slice(0, draggedTo), itemDragged, ...remainingItems.slice(draggedTo)];

    if (draggedTo !== dragAndDrop.draggedTo) {
      setDragAndDrop({
        ...dragAndDrop,

        updatedOrder: newList,
        draggedTo: draggedTo,
      });
    }
  };

  const onDrop = () => {
    setQuestions(dragAndDrop.updatedOrder);

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false,
    });
  };

  return (
    <div className={`w-full flex flex-col justify-center items-center `}>
      <ul className={`w-full space-y-6`}>
        {questions.length > 0 &&
          questions.map((question, idx) => {
            return (
              <Item
                key={idx}
                item={question}
                idx={idx}
                onDelete={deleteQuestion}
                onDragStart={onDragStart}
                onDrop={onDrop}
                onDragOver={onDragOver}
                dragAndDrop={dragAndDrop}
                onQuestionChange={onQuestionChange}
              />
            );
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

const Item = ({ item, idx, onDelete, onDragStart, onDrop, onDragOver, dragAndDrop, onQuestionChange }) => {
  const [question, setQuestion] = useState();

  useEffect(() => {
    if (item) {
      setQuestion(item);
    }
  }, [item]);

  useEffect(() => {
    if (question) {
      onQuestionChange(question, idx);
    } // eslint-disable-next-line
  }, [question]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setQuestion({ ...question, [name]: value });
  };

  const onOptionsChange = data => {
    setQuestion({ ...question, options: data });
  };

  return (
    <li
      className={`${
        dragAndDrop && dragAndDrop.isDragging && dragAndDrop.draggedTo === Number(idx) ? `border-2 border-dashed border-gray-300 ` : ``
      } flex flex-col justify-center items-center border-b-2 border-gray-200 pb-8 pt-2 px-2`}
      draggable={true}
      data-position={idx}
      onDragStart={onDragStart}
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      <DragIcon className={`transform rotate-90 mb-6 cursor-move`} />
      <div className={`max-w-md w-full mb-12 relative`}>
        <InputBox
          label={`Question ${idx + 1}`}
          name={`question`}
          value={item?.question}
          onValueChange={handleInputChange}
          labelColor={`text-gray-500`}
          placeholder={`Type question here...`}
          variant={3}
        />
        {idx > 0 && <MdDelete onClick={() => onDelete(idx)} className={`text-gray-300 hover:text-gray-600 cursor-pointer absolute top-0 right-0`} size={20} />}
      </div>
      <OptionList data={item.options} onDataChange={onOptionsChange} />
    </li>
  );
};

export default QuestionList;
