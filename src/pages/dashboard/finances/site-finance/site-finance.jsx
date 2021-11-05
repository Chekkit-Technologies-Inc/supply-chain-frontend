import React, { useState, useEffect } from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import SelectBox from '../../../../components/fragments/select-box';
import InputBox from '../../../../components/fragments/input-box';
import Heading from '../../../../components/fragments/heading';
import AssetTable from '../../../../components/fragments/asset-table';

const SiteFinance = () => {
  const history = useHistory();
  const { site_id } = useParams();
  const sites = useSelector(state => state.sites);

  // TODO: Display only assets in particular site
  const assets = useSelector(state => state.assets);

  const [site, setSite] = useState();
  const [phrase, setPhrase] = useState('');

  const handleInputChange = event => {
    const { value } = event.target;
    setPhrase(value);
  };

  useEffect(() => {
    if (site_id && sites) {
      sites.forEach((site, idx) => {
        if (String(idx) === site_id) {
          setSite(site);
        }
      });
    } // eslint-disable-next-line
  }, [site_id]);

  return (
    <FadeIn
      className={`flex flex-col justify-start
     space-y-6 p-6 py-16 min-h-screen w-full mx-auto bg-white`}
    >
      <div className={`flex flex-col space-y-4 xl:space-y-0 xl:flex-row items-center justify-between space-x-4`}>
        <Heading className={`font-medium`} title={`Finances`} />
        <div className={`flex items-center space-x-6`}>
          <SelectBox options={['All Sites']} variant={3} value={`All Sites`} />
        </div>
      </div>
      <div onClick={() => history.goBack()} className={`flex items-center space-x-2 cursor-pointer text-brand_blue font-semibold`}>
        <span>&larr;</span>
        <span>Back</span>
      </div>
      <div className={`flex flex-col sm:flex-row space-y-4 sm:space-x-4 justify-between items-center`}>
        <Heading className={`text-brand_blue font-semibold`} title={`Asset in ${site?.state}, ${site?.country}`} size={2} />
        <div className={`w-72`}>
          <InputBox value={phrase} onValueChange={handleInputChange} name={`phrase`} placeholder={`Search...`} variant={4} className={``} type={`search`} />
        </div>
      </div>
      <AssetTable data={assets} variant={1} />
    </FadeIn>
  );
};

export default SiteFinance;
