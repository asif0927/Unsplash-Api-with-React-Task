import React, { useState } from 'react';
import styled from './index.module.css';

const Searchbar = ({ search, setImages }) => {
  const [value, setValue] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const images = search(value);
    setImages(images);
    setValue('');
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div style={{marginBottom:"10px"}}>
      <form className={styled.formDiv} onSubmit={handleFormSubmit}>
        <label>Nə şəkli axtarırsınız?</label>
        <input
          type="text"
          value={value}
          placeholder="Search image"
          className={styled.inputform}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Searchbar; 