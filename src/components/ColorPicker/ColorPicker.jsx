import React from 'react';

const ColorPicker = ({ value, setValue, label }) => {
  return (
    <div className="mb-4">
      <label htmlFor={`${label}-colorPicker`} className="mb-2 font-bold block">
        {label}
      </label>
      <input
        type="color"
        id={`${label}-colorPicker`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full bg-gray-200 rounded-lg cursor-pointer px-2 py-1 mb-2"
      />
      <p className="mt-2">
        Selected color: <span style={{ color: '#333', textTransform: 'uppercase' }}>{value}</span>
      </p>
    </div>
  );
};

export default ColorPicker;
