import React, { useState, useEffect } from 'react';
import { MdDelete } from 'react-icons/md';
import FadeIn from 'react-fade-in/lib/FadeIn';

import { ReactComponent as DragIcon } from '../../../assets/drag-item.svg';
import { ReactComponent as Checked } from '../../../assets/radio-checked.svg';
import { ReactComponent as Unchecked } from '../../../assets/radio-unchecked.svg';

import InputBox from '../input-box/input-box';

const initialDnDState = {
  draggedFrom: null,
  draggedTo: null,
  isDragging: false,
  originalOrder: [],
  updatedOrder: [],
};

const OptionList = ({ data, onDataChange }) => {
  const [options, setOptions] = useState([]);
  const [dragAndDrop, setDragAndDrop] = useState(initialDnDState);

  useEffect(() => {
    if (data) {
      setOptions(data);
    }
  }, [data]);

  useEffect(() => {
    if (options) {
      onDataChange(options);
    } // eslint-disable-next-line
  }, [options]);

  const onOptionChange = (item, index) => {
    const optionsList = options.map((option, idx) => {
      if (index === idx) {
        return item;
      }
      return option;
    });
    setOptions(optionsList);
  };

  const addOption = () => {
    if (options.length > 3) return;
    setOptions([...options, { value: '', selected: false }]);
  };

  const deleteOption = idx => {
    const optionsList = options.filter((d, i) => {
      return i !== idx;
    });
    setOptions(optionsList);
  };

  const onDragStart = event => {
    const initialPosition = Number(event.currentTarget.dataset.position);

    setDragAndDrop({
      ...dragAndDrop,

      draggedFrom: initialPosition,
      isDragging: true,
      originalOrder: options,
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
    setOptions(dragAndDrop.updatedOrder);

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false,
    });
  };

  return (
    <div className={`w-full max-w-md flex flex-col items-center space-y-6`}>
      <div className={`w-full text-gray-500`}>Options</div>
      <FadeIn className={`w-full space-y-6`}>
        {options.length > 0 &&
          options.map((option, idx) => {
            return (
              <Item
                key={idx}
                item={option}
                idx={idx}
                onOptionChange={onOptionChange}
                onDelete={deleteOption}
                onDragStart={onDragStart}
                onDrop={onDrop}
                onDragOver={onDragOver}
                dragAndDrop={dragAndDrop}
              />
            );
          })}
      </FadeIn>
      <div className={`flex items-center justify-end w-full`}>
        <div
          aria-disabled={options.length > 3}
          onClick={addOption}
          className={`text-brand_blue font-medium text-sm ${
            options.length > 3 ? `bg-gray-200 cursor-default` : `bg-blue-200 hover:bg-blue-300 cursor-pointer`
          } rounded-md p-2`}
        >
          + Add Option
        </div>
      </div>
    </div>
  );
};

const Item = ({ item, idx, onOptionChange, onDelete, onDragStart, onDrop, onDragOver, dragAndDrop }) => {
  const [option, setOption] = useState();

  useEffect(() => {
    if (item) {
      setOption(item);
    }
  }, [item]);

  useEffect(() => {
    if (option) {
      onOptionChange(option, idx);
    } // eslint-disable-next-line
  }, [option]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setOption({ ...option, [name]: value });
  };

  const toggleSelect = () => {
    setOption({ ...option, selected: !option.selected });
  };

  return (
    <div
      className={`${
        dragAndDrop && dragAndDrop.isDragging && dragAndDrop.draggedTo === Number(idx) ? `border-2 border-dashed border-gray-300 ` : ``
      } flex items-center space-x-4 p-2`}
      draggable={true}
      onDragStart={onDragStart}
      onDrop={onDrop}
      onDragOver={onDragOver}
      data-position={idx}
    >
      <DragIcon className={`cursor-move`} />
      <div onClick={toggleSelect} className={`cursor-pointer`}>
        {option?.selected ? <Checked /> : <Unchecked />}
      </div>
      <InputBox placeholder={`Type answer here...`} variant={3} value={option?.value} name={`value`} onValueChange={handleInputChange} />
      <MdDelete onClick={() => onDelete(idx)} className={`text-gray-300 hover:text-gray-600 cursor-pointer`} size={24} />
    </div>
  );
};

export default OptionList;
