import React from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa';

const CustomInput = ({ value, onClick }) => (
  <div>
    <input
      style={{ border: '1px solid #DB4ECF', textAlign: 'start', borderRadius: '5px', width: '120px', height: '50px', padding:'8px' }}
      className="custom-input"
      onClick={onClick}
      value={value}
    />
     <FaRegCalendarAlt className='iconCalendar' style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)',fontSize:'24px', color:'#DB4ECF'}} />
  </div>
  );

export default CustomInput