import React from 'react';
import CheckingModals from '../CheckingModals/CheckingModals';
import ModalConfirm from '../ModalConfirm/ModalConfirm';

import './AcceptedModalContainer.css';

function AcceptedModalContainer({ userDataInfoArray, idx, setIsChanged }) {
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button type='button' className='btn btn-danger btn-sm' data-bs-toggle='modal' data-bs-target='#exampleModal'>
        동의 철회
      </button>

      {/* <!-- Modal --> */}
      <div className='modal fade' id='exampleModal' tabIndex={-1} aria-labelledby='exampleModalLabel' aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                해당 요청에 대한 동의 철회
              </h5>
            </div>
            <div className='modal-body'>
              <ModalConfirm />
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-danger' data-bs-toggle='modal' data-bs-target='#modalChoice'>
                원치 않음
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
