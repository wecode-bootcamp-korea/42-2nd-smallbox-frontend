import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import OPTION_LIST from './ SubsidiaryData';

function FooterInfo() {
  const [siteUrl, setSiteUrl] = useState();
  const navigate = useNavigate();
  const handleChange = e => {
    setSiteUrl(e.target.value);
  };
  const goSite = () => {
    navigate(`/${siteUrl}`);
  };

  return (
    <div>
      <Select onChange={handleChange} value={siteUrl}>
        {OPTION_LIST.map(info => (
          <optgroup label={info.group} key={info.group}>
            {info.list.map(el => (
              <option value={el.value} key={el.id}>
                {el.title}
              </option>
            ))}
          </optgroup>
        ))}
      </Select>
      <GoBtn href={siteUrl} onClick={goSite} target="_blank" rel="noreferror">
        GO
      </GoBtn>
    </div>
  );
}

const Select = styled.select`
  position: relative;
  height: 34px;
  font-size: 12px;
  color: #666;
  line-height: 34px;
  border: none;
  background-color: transparent;
  border: 1px solid #d8d8d8;
`;

const GoBtn = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 34px;
  margin-left: 3px;
  font-size: 14px;
  color: #fff;
  line-height: 1.429em;
  background-color: #9e9e9e;
  vertical-align: top;
  text-decoration: none;
`;

export default FooterInfo;
