import React, { useState } from 'react';

const ColorPicker = (value, setValue, label) => {
  return (
    <div className="flex flex-col items-center p-4">
      <label htmlFor="colorPicker" className="mb-2 font-bold">
        {label}
      </label>
      <input
        type="color"
        id={`${value}colorPicker`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="cursor-pointer"
      />
      <p className="mt-2">
        Selected color: <span style={{ value }}>{value}</span>
      </p>
    </div>
  );
};

export default ColorPicker;