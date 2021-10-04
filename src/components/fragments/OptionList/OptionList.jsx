import React, {useState, useEffect} from 'react';
import { MdDelete } from 'react-icons/md';

import { ReactComponent as DragIcon } from '../../../assets/drag-item.svg';
import { ReactComponent as Checked } from '../../../assets/radio-checked.svg';
import { ReactComponent as Unchecked } from '../../../assets/radio-unchecked.svg';

import InputBox from '../InputBox/InputBox';

const OptionList = ({data}) => {
  const [options, setOptions] = useState([])

  useEffect(() => {
    if (data) {
      setOptions(data);
    }
  }, [data]);

  const addOption = () => {
    if (options.length > 3) return;
    setOptions([...options, {value: '', selected: false}])
  }

  const deleteOption = (idx) => {
    const optionsList = options.filter((d, i) => {
      return i !== idx
    })
    setOptions(optionsList)
  }

  return (
    <div className={`w-full max-w-md flex flex-col items-center space-y-6`}>
      <div className={`w-full text-gray-500`}>Options</div>
      <ul className={`w-full space-y-6`}>
        {options.length > 0 && options.map((option, idx) => {
          return (
            <Item key={idx} item={option} idx={idx} onDelete={deleteOption} />
          )
        })}
      </ul>
      <div className={`flex items-center justify-end w-full`}>
        <div aria-disabled={options.length > 3} onClick={addOption} className={`text-brand_blue font-medium text-sm ${options.length > 3 ? `bg-gray-200 cursor-default` : `bg-blue-200 cursor-pointer`} rounded-md p-2`}>+ Add Option</div>
      </div>
    </div>
  );
};

const Item = ({item, idx, onDelete}) => {
  const [option, setOption] = useState();

  useEffect(() => {
    if (item) {
      setOption(item);
    }
  }, [item]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setOption({ ...option, [name]: value });
  };

  const toggleSelect = () => {
    setOption({ ...option, selected: !option.selected });
  };

  return (
    <li className={`flex items-center space-x-4`}>
      <DragIcon className={`cursor-move`} />
      <div onClick={toggleSelect} className={`cursor-pointer`}>{option?.selected ? <Checked /> : <Unchecked />}</div>
      <InputBox placeholder={`Type answer here...`} variant={3} value={option?.value} name={`value`} onValueChange={handleInputChange} />
      <MdDelete onClick={() => onDelete(idx)} className={`text-gray-300 hover:text-gray-600 cursor-pointer`} size={24} />
    </li>
  )
}

export default OptionList;
