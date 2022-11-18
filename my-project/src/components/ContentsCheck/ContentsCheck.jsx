import react from 'react';
import './ContentsCheck.css';

function ContentsCheck({ title }) {
  return (
    <div className='col-12'>
      <div className='form-check'>
        <input className='form-check-input' type='checkbox' value='' id={`Check${title}`} required />
        <label className='form-check-label' htmlFor={`Check${title}`}>
          해당 내용을 모두 읽어보았으며 이를 이해하였습니까?
        </label>
      </div>
    </div>
  );
}

export default ContentsCheck;
