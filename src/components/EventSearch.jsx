import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EventSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [showTypeFilter, setShowTypeFilter] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleTypeFilter = (type) => {
    setSelectedType(type);
    setShowTypeFilter(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex align-center bg-blue rounded-sm justify-between">
      <div className="flex items-center search-box">
        <input
          type="text"
          placeholder="Search for an event"
          value={searchQuery}
          onChange={handleSearchChange}
          className='bg-transparent border-b-2 p-[1px]'
        />
      </div>
      <div className="filters flex gap-3 w-1/2">
        <select name="" id="select" className='flex gap-3 w-1/2 p-2 rounded-lg'>
        <option value="" disabled selected>Type</option>
         <option value="">Conference</option>
         <option value="">Soutenance</option>
        <option value="">Hackathon</option>
        </select>
        <div className="filter w-1/2">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            placeholderText="Select Date"
            className='flex gap-3 w-full p-2 rounded-lg'
          />
        </div>
      </div>
    </div>
  );
};

export default EventSearch;