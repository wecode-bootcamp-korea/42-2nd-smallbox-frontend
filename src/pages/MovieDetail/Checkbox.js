import React, { useContext } from 'react';
import CheckBoxContext from './CheckBoxContext';
import styled from 'styled-components';

const Checkbox = ({ children, disabled, value, checked, onChange }) => {
  const context = useContext(CheckBoxContext);

  if (!context) {
    return (
      <label>
        <input
          type="checkbox"
          disabled={disabled}
          checked={checked}
          onChange={({ target: { checked } }) => onChange(checked)}
        />
        {children}
      </label>
    );
  }

  const { isDisabled, isChecked, toggleValue } = context;
  return (
    <CheckBoxSelectBox>
      <input
        type="checkbox"
        disabled={isDisabled(disabled)}
        checked={isChecked(value)}
        onChange={({ target: { checked } }) => toggleValue({ checked, value })}
      />
      {children}
    </CheckBoxSelectBox>
  );
};

const CheckBoxSelectBox = styled.div`
  margin: 10px 0 5px 20px;
  display: inline-block;
`;
export default Checkbox;
