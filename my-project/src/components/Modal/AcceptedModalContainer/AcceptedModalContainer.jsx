import React from 'react';
import CheckingModals from '../CheckingModals/CheckingModals';
import ModalDetail from '../ModalDetail/ModalDetail';

import './AcceptedModalContainer.css';

function AcceptedModalContainer({ userInfo, userDataInfoArray, idx, setIsChanged }) {
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button type='button' className='btn btn-danger btn-sm' data-bs-toggle='modal' data-bs-target='#exampleModal'>
        withDraw
      </button>

      {/* <!-- Modal --> */}
      <div className='modal fade' id='exampleModal' tabIndex={-1} aria-labelledby='exampleModalLabel' aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Agreement to corresponding request
              </h5>
            </div>
            <div className='modal-body'>
              <ModalDetail userInfo={userInfo} />
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-danger' data-bs-toggle='modal' data-bs-target='#modalChoice'>
                동의 철회
              </button>
              <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
                닫기
              </button>
            </div>
          </div>
        </div>
      </div>
      <CheckingModals userDataInfoArray={userDataInfoArray} idx={idx} setIsChanged={setIsChanged} />
    </>
  );
}

export default AcceptedModalContainer;
