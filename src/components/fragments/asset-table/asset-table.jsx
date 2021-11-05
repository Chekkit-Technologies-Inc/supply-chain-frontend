import React, { useState, useEffect } from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useHistory } from 'react-router-dom';

import { ReactComponent as Checked } from '../../../assets/radio-checked.svg';
import { ReactComponent as Unchecked } from '../../../assets/radio-unchecked.svg';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';

import Button from '../button';
import InputBox from '../input-box';
import SelectBox from '../select-box';

const AssetTable = ({ data, variant, nameLink }) => {
  const [assets, setAssets] = useState();
  const [allSelected, setAllSelected] = useState(false);

  useEffect(() => {
    if (data) {
      let allAssets = data
        .filter(asset => {
          return asset.asset_name || asset.day;
        })
        .map((asset, idx) => {
          asset.selected = false;
          asset.sn = idx + 1;
          asset.unit = 1000;
          asset.total_price = 500000;
          if (variant) {
            asset.sticker_id = '01-01011012';
          }
          return asset;
        });
      setAssets(allAssets);
    } // eslint-disable-next-line
  }, [data]);

  const selectAll = () => {
    if (allSelected) {
      let selected = assets.map(asset => {
        asset.selected = false;
        return asset;
      });
      setAllSelected(false);
      setAssets(selected);
    } else {
      let selected = assets.map(asset => {
        asset.selected = true;
        return asset;
      });
      setAllSelected(true);
      setAssets(selected);
    }
  };

  const selectAsset = index => {
    setAllSelected(false);
    let items = assets.map((item, idx) => {
      if (index === idx) {
        item.selected = !item.selected;
      }
      return item;
    });
    setAssets(items);
  };

  const onItemSave = (asset, index) => {
    let items = assets.map((item, idx) => {
      if (index === idx) {
        asset.selected = false;
        return asset;
      }
      return item;
    });
    setAssets(items);
  };

  return (
    <>
      {!variant && (
        <div className={`overflow-auto min-w-full py-6`}>
          <div className={`min-w-max px-6`}>
            <div className={`min-w-max flex flex-shrink-0 items-center justify-start space-x-6 py-6 font-medium border-b border-gray-200`}>
              <div onClick={selectAll} className={`w-6 cursor-pointer`}>
                {allSelected ? <Checked /> : <Unchecked />}
              </div>
              <div className={`w-16 flex-shrink-0`}>S/N</div>
              <div className={`w-72 flex-shrink-0 flex-1`}>Asset Name</div>
              <div className={`w-40 flex-shrink-0`}>Asset Price</div>
              <div className={`w-40 flex-shrink-0`}>Batch Number</div>
              <div className={`w-40 flex-shrink-0`}>Category</div>
              <div className={`w-40 flex-shrink-0`}>Date Installed</div>
              <div className={`w-10 flex-shrink-0 invisible text-center`}></div>
              <div className={`w-10 flex-shrink-0 invisible text-center`}></div>
            </div>
          </div>
          <FadeIn className={`min-w-max flex-shrink-0 space-y-6 pt-6`}>
            {assets &&
              assets.map((item, idx) => {
                return <Item key={idx} asset={item} idx={idx} selectAsset={selectAsset} onSave={onItemSave} nameLink={nameLink} />;
              })}
          </FadeIn>
        </div>
      )}
      {variant === 1 && (
        <div className={`overflow-auto min-w-full py-6`}>
          <div className={`min-w-max px-6`}>
            <div className={`min-w-max flex flex-shrink-0 items-center justify-start space-x-6 py-6 font-medium border-b border-gray-200`}>
              <div onClick={selectAll} className={`w-6 cursor-pointer`}>
                {allSelected ? <Checked /> : <Unchecked />}
              </div>
              <div className={`w-16 flex-shrink-0`}>S/N</div>
              <div className={`w-64 flex-shrink-0 flex-1`}>Asset Name</div>
              <div className={`w-40 flex-shrink-0`}>Asset Price</div>
              <div className={`w-40 flex-shrink-0`}>Unit</div>
              <div className={`w-40 flex-shrink-0`}>Total Price</div>
              <div className={`w-40 flex-shrink-0`}>Date Installed</div>
              <div style={{ width: '110px' }} className={`flex-shrink-0 text-center text-white flex item-center text-sm cursor-pointer`}>
                <div style={{ marginTop: '2px', paddingTop: '0.9px' }} className={`w-4 h-4 bg-brand_blue rounded-full flex justify-center items-center`}>
                  +
                </div>
                <div className={`text-brand_blue font-semibold ml-1`}>Add Column</div>
              </div>
            </div>
          </div>
          <FadeIn className={`min-w-max flex-shrink-0 space-y-6 pt-6`}>
            {assets &&
              assets.map((item, idx) => {
                return <Item5 key={idx} asset={item} idx={idx} selectAsset={selectAsset} onSave={onItemSave} nameLink={nameLink} />;
              })}
          </FadeIn>
        </div>
      )}
      {variant === 2 && (
        <div className={`overflow-auto min-w-full py-6`}>
          <div className={`min-w-max px-6`}>
            <div className={`min-w-max flex flex-shrink-0 items-center justify-start space-x-6 py-6 font-medium border-b border-gray-200`}>
              <div className={`w-72 flex-shrink-0 flex-1`}>Asset Name</div>
              <div className={`w-56 flex-shrink-0`}>Asset Price</div>
              <div className={`w-56 flex-shrink-0`}>Batch Number</div>
              <div className={`w-56 flex-shrink-0`}>Date Installed</div>
              <div className={`w-56 flex-shrink-0`}>Sticker ID</div>
            </div>
          </div>
          <FadeIn className={`min-w-max flex-shrink-0 space-y-6 pt-6`}>
            {assets &&
              assets.map((item, idx) => {
                return <Item2 key={idx} asset={item} />;
              })}
          </FadeIn>
        </div>
      )}
      {variant === 3 && (
        <div className={`overflow-auto min-w-full py-6`}>
          <div className={`min-w-max px-6`}>
            <div className={`min-w-max flex flex-shrink-0 items-center justify-start space-x-6 py-6 font-medium border-b border-gray-200`}>
              <div onClick={selectAll} className={`w-6 cursor-pointer`}>
                {allSelected ? <Checked /> : <Unchecked />}
              </div>
              <div className={`w-16 flex-shrink-0`}>S/N</div>
              <div className={`w-60 flex-shrink-0 flex-1`}>Asset Name</div>
              <div className={`w-40 flex-shrink-0`}>Asset Price</div>
              <div className={`w-40 flex-shrink-0`}>Batch Number</div>
              <div className={`w-40 flex-shrink-0`}>Category</div>
              <div className={`w-40 flex-shrink-0`}>Date Installed</div>
              <div className={`w-40 flex-shrink-0`}>Sticker ID</div>
            </div>
          </div>
          <FadeIn className={`min-w-max flex-shrink-0 space-y-6 pt-6`}>
            {assets &&
              assets.map((item, idx) => {
                return <Item3 key={idx} asset={item} idx={idx} selectAsset={selectAsset} />;
              })}
          </FadeIn>
        </div>
      )}
      {variant === 4 && (
        <div className={`overflow-auto min-w-full py-6`}>
          <div className={`min-w-max px-6`}>
            <div className={`min-w-max flex flex-shrink-0 items-center justify-start space-x-6 py-6 font-medium border-b border-gray-200`}>
              <div className={`w-16 flex-shrink-0`}>Day</div>
              <div className={`w-16 flex-shrink-0`}>Time</div>
              <div className={`w-16 flex-shrink-0`}>Initial K</div>
              <div className={`w-16 flex-shrink-0`}>Final K</div>
              <div className={`w-24 flex-shrink-0 flex-1`}>Date</div>
              <div className={`w-10 flex-shrink-0 invisible text-center`}></div>
              <div className={`w-10 flex-shrink-0 invisible text-center`}></div>
            </div>
          </div>
          <FadeIn className={`min-w-max flex-shrink-0 space-y-6 pt-6`}>
            {assets &&
              assets.map((item, idx) => {
                return <Item4 key={idx} asset={item} idx={idx} selectAsset={selectAsset} />;
              })}
          </FadeIn>
        </div>
      )}
    </>
  );
};

const Item = ({ asset, idx, selectAsset, onSave, nameLink }) => {
  const [item, setItem] = useState();
  const history = useHistory();

  useEffect(() => {
    if (asset) {
      setItem(asset);
    }
  }, [asset]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setItem({ ...item, [name]: value });
  };

  const handleNameClick = () => {
    if (nameLink) {
      history.push(`/assets/${idx}`);
    } else {
      selectAsset(idx);
    }
  };

  return (
    <div className={`min-w-max flex-shrink-0 px-6 rounded-2xl ${item?.selected ? `bg-white border border-brand_blue` : `bg-gray-100`}`}>
      <div className={`w-full flex flex-shrink-0 items-center justify-start space-x-6 py-6 font-medium`}>
        <div onClick={() => selectAsset(idx)} className={`w-6 cursor-pointer`}>
          {item?.selected ? <Checked /> : <Unchecked />}
        </div>
        <div className={`w-16 flex-shrink-0`}>{item?.sn}</div>
        <div className={`text-brand_blue text-lg w-72 flex-shrink-0 flex-1`}>
          <span className={`cursor-pointer`} onClick={handleNameClick}>
            {item?.asset_name}
          </span>
        </div>
        <div className={`w-40 flex-shrink-0`}>{item?.asset_price}</div>
        <div className={`w-40 flex-shrink-0`}>{item?.batch_number}</div>
        <div className={`w-40 flex-shrink-0`}>{item?.category}</div>
        <div className={`w-40 flex-shrink-0`}>{item?.date_installed}</div>
        <div className={`w-10 flex-shrink-0 flex justify-center items-center cursor-pointer`}>
          <BsThreeDotsVertical size={20} />
        </div>
        <div onClick={() => selectAsset(idx)} className={`w-10 flex-shrink-0 flex justify-center items-center cursor-pointer`}>
          {item?.selected ? <MdKeyboardArrowUp size={24} /> : <MdKeyboardArrowDown size={24} />}
        </div>
      </div>
      {item?.selected && (
        <div className={`w-full flex flex-shrink-0 items-end border-t border-gray-300 space-x-6 py-6`}>
          <div className={`w-6 invisible`}></div>
          <div className={`w-16 invisible`}></div>
          <div className={`flex items-center space-x-6 w-full flex-1 text-sm`}>
            <div className={`w-64 text-gray-400 font-medium flex-1`}>
              <InputBox
                className={`max-w-sm`}
                variant={2}
                placeholder={item?.asset_name}
                name={`asset_name`}
                value={item?.asset_name}
                onValueChange={handleInputChange}
                label={`Asset Name`}
              />
            </div>
            <div className={`w-40 text-gray-400 font-medium`}>
              <InputBox
                variant={2}
                placeholder={item?.asset_price}
                name={`asset_price`}
                type={`number`}
                value={item?.asset_price}
                onValueChange={handleInputChange}
                label={`Asset Price`}
              />
            </div>
            <div className={`w-40 text-gray-400 font-medium`}>
              <InputBox
                variant={2}
                placeholder={item?.batch_number}
                name={`batch_number`}
                value={item?.batch_number}
                onValueChange={handleInputChange}
                label={`Batch Number`}
              />
            </div>
            <div className={`w-40 text-gray-400 font-medium`}>
              <SelectBox
                variant={2}
                placeholder={item?.category}
                name={`category`}
                value={item?.category}
                onValueChange={handleInputChange}
                label={`Category`}
                options={['Cat01', 'Cat02']}
              />
            </div>
            <div className={`w-40 text-gray-400 font-medium`}>
              <InputBox
                variant={2}
                placeholder={item?.date_installed}
                name={`date_installed`}
                type={`date`}
                value={item?.date_installed}
                onValueChange={handleInputChange}
                label={`Date Installed`}
              />
            </div>
            <Button className={`mt-8`} text={`Save`} size={2} onClick={() => onSave(item, idx)} />
          </div>
        </div>
      )}
    </div>
  );
};

const Item2 = ({ asset }) => {
  const [item, setItem] = useState();

  useEffect(() => {
    if (asset) {
      setItem(asset);
    }
  }, [asset]);

  return (
    <div className={`min-w-max flex-shrink-0 px-6 rounded-2xl bg-gray-100`}>
      <div className={`w-full flex flex-shrink-0 items-center justify-start space-x-6 py-6 font-medium`}>
        <div className={`text-brand_blue text-lg w-72 flex-shrink-0 flex-1`}>
          <span className={`cursor-pointer`}>{item?.asset_name}</span>
        </div>
        <div className={`w-56 flex-shrink-0`}>{item?.asset_price}</div>
        <div className={`w-56 flex-shrink-0`}>{item?.batch_number}</div>
        <div className={`w-56 flex-shrink-0`}>{item?.date_installed}</div>
        <div className={`w-56 flex-shrink-0`}>{item?.sticker_id}</div>
      </div>
    </div>
  );
};

const Item3 = ({ asset, idx, selectAsset }) => {
  const [item, setItem] = useState();

  useEffect(() => {
    if (asset) {
      setItem(asset);
    }
  }, [asset]);

  return (
    <div className={`min-w-max flex-shrink-0 px-6 rounded-2xl ${item?.selected ? `bg-white border border-brand_blue` : `bg-gray-100`}`}>
      <div className={`w-full flex flex-shrink-0 items-center justify-start space-x-6 py-6 font-medium`}>
        <div onClick={() => selectAsset(idx)} className={`w-6 cursor-pointer`}>
          {item?.selected ? <Checked /> : <Unchecked />}
        </div>
        <div className={`w-16 flex-shrink-0`}>{item?.sn}</div>
        <div className={`text-brand_blue text-lg w-60 flex-shrink-0 flex-1`}>
          <span className={`cursor-pointer`} onClick={() => selectAsset(idx)}>
            {item?.asset_name}
          </span>
        </div>
        <div className={`w-40 flex-shrink-0`}>{item?.asset_price}</div>
        <div className={`w-40 flex-shrink-0`}>{item?.batch_number}</div>
        <div className={`w-40 flex-shrink-0`}>{item?.category}</div>
        <div className={`w-40 flex-shrink-0`}>{item?.date_installed}</div>
        <div className={`w-40 flex-shrink-0`}>{item?.sticker_id}</div>
      </div>
    </div>
  );
};

const Item4 = ({ asset, idx, selectAsset }) => {
  const [item, setItem] = useState();

  useEffect(() => {
    if (asset) {
      setItem(asset);
    }
  }, [asset]);

  return (
    <div className={`min-w-max flex-shrink-0 px-6 rounded-2xl ${item?.selected ? `bg-white border border-brand_blue` : `bg-gray-100 text-sm`}`}>
      <div className={`w-full flex flex-shrink-0 items-center justify-start space-x-6 py-6 font-medium`}>
        <div className={`text-brand_blue w-16 font-semibold`}>
          <span className={``}>{item?.day}</span>
        </div>
        <div className={`w-16 flex-shrink-0`}>{item?.time}</div>
        <div className={`w-16 flex-shrink-0`}>{item?.initial_temp}</div>
        <div className={`w-16 flex-shrink-0`}>{item?.final_temp}</div>
        <div className={`w-24 flex-shrink-0 flex-1`}>{item?.date}</div>
        <div className={`w-10 flex-shrink-0 flex justify-center items-center cursor-pointer`}>
          <BsThreeDotsVertical size={16} />
        </div>
        <div onClick={() => selectAsset(idx)} className={`w-10 flex-shrink-0 flex justify-center items-center cursor-pointer`}>
          {item?.selected ? <MdKeyboardArrowUp size={24} /> : <MdKeyboardArrowDown size={18} />}
        </div>
      </div>
    </div>
  );
};

const Item5 = ({ asset, idx, selectAsset, onSave, nameLink }) => {
  const [item, setItem] = useState();
  const history = useHistory();

  useEffect(() => {
    if (asset) {
      setItem(asset);
    }
  }, [asset]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setItem({ ...item, [name]: value });
  };

  const handleNameClick = () => {
    if (nameLink) {
      history.push(`/assets/${idx}`);
    } else {
      selectAsset(idx);
    }
  };

  return (
    <div className={`min-w-max flex-shrink-0 px-6 rounded-2xl ${item?.selected ? `bg-white border border-brand_blue` : `bg-gray-100`}`}>
      <div className={`w-full flex flex-shrink-0 items-center justify-start space-x-6 py-6 font-medium`}>
        <div onClick={() => selectAsset(idx)} className={`w-6 cursor-pointer`}>
          {item?.selected ? <Checked /> : <Unchecked />}
        </div>
        <div className={`w-16 flex-shrink-0`}>{item?.sn}</div>
        <div className={`text-brand_blue text-lg w-64 flex-shrink-0 flex-1`}>
          <span className={`cursor-pointer`} onClick={handleNameClick}>
            {item?.asset_name}
          </span>
        </div>
        <div className={`w-40 flex-shrink-0`}>{item?.asset_price}</div>
        <div className={`w-40 flex-shrink-0`}>{item?.unit}</div>
        <div className={`w-40 flex-shrink-0`}>{item?.total_price}</div>
        <div className={`w-40 flex-shrink-0`}>{item?.date_installed}</div>
        <div className={`w-10 flex-shrink-0 flex justify-center items-center cursor-pointer`}>
          <BsThreeDotsVertical size={20} />
        </div>
        <div onClick={() => selectAsset(idx)} className={`w-10 flex-shrink-0 flex justify-center items-center cursor-pointer`}>
          {item?.selected ? <MdKeyboardArrowUp size={24} /> : <MdKeyboardArrowDown size={24} />}
        </div>
      </div>
      {item?.selected && (
        <div className={`w-full flex flex-shrink-0 items-end border-t border-gray-300 space-x-6 py-6`}>
          <div className={`w-6 invisible`}></div>
          <div className={`w-16 invisible`}></div>
          <div className={`flex items-center space-x-6 w-full flex-1 text-sm`}>
            <div className={`w-64 text-gray-400 font-medium flex-1`}>
              <InputBox
                className={`max-w-sm`}
                variant={2}
                placeholder={item?.asset_name}
                name={`asset_name`}
                value={item?.asset_name}
                onValueChange={handleInputChange}
                label={`Asset Name`}
              />
            </div>
            <div className={`w-40 text-gray-400 font-medium`}>
              <InputBox
                variant={2}
                placeholder={item?.asset_price}
                name={`asset_price`}
                type={`number`}
                value={item?.asset_price}
                onValueChange={handleInputChange}
                label={`Asset Price`}
              />
            </div>
            <div className={`w-40 text-gray-400 font-medium`}>
              <InputBox variant={2} placeholder={item?.unit} name={`unit`} value={item?.unit} onValueChange={handleInputChange} label={`Unit`} />
            </div>
            <div className={`w-40 text-gray-400 font-medium`}>
              <InputBox
                variant={2}
                placeholder={item?.total_price}
                name={`total_price`}
                value={item?.total_price}
                onValueChange={handleInputChange}
                label={`Total Price`}
              />
            </div>
            <div className={`w-40 text-gray-400 font-medium`}>
              <InputBox
                variant={2}
                placeholder={item?.date_installed}
                name={`date_installed`}
                type={`date`}
                value={item?.date_installed}
                onValueChange={handleInputChange}
                label={`Date Installed`}
              />
            </div>
            <Button className={`mt-8`} text={`Save`} size={2} onClick={() => onSave(item, idx)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AssetTable;
