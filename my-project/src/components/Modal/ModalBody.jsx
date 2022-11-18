import React from 'react';
import './ModalBody.css';

function ModalBody() {
  return (
    <>
      <div className='modal-container'>
        <div>
          <span>문서제목: </span>
          <span className='modal-text'>{'인체자원활용동의서'}</span>
        </div>
        <div>
          <span>요청기관: </span>
          <span className='modal-text'>{'한국인체자원은행'}</span>
        </div>
        <div className='box'>
          <div className='left'>
            <div className='box2'>
              <span className='left2'>부서관리자: </span>
              <span className='right2 modal-text'>{'어드민'}</span>
            </div>
            <div className='box2'>
              <span className='left2'>문서상태: </span>
              <span className='right2 modal-text'>{'동의'}</span>
            </div>
            <div className='box2'>
              <span className='left2'>용도: </span>
              <span className='right2 modal-text'>{'연구목적'}</span>
            </div>
          </div>
          <div className='right'>
            <div className='box2'>
              <span className='left2'>요청일자: </span>
              <span className='right2 modal-text'>{'2022-10-10'}</span>
            </div>
            <div className='box2'>
              <span className='left2'>효력말소일: </span>
              <span className='right2 modal-text'>{'2029-10-10'}</span>
            </div>
            <div className='box2'>
              <span className='left2'>법적대리인: </span>
              <span className='right2 modal-text'>{'대리인'}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalBody;
