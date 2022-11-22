import React from 'react';
import './ModalDetail.css';

function ModalDetail({ userInfo }) {
  return (
    <>
      <div className='modal-container'>
        <div>
          <span>요청기관: </span>
          <span className='modal-text'>{userInfo.Institute}</span>
        </div>
        <div className='box'>
          <div className='left'>
            <div className='box2'>
              <span className='left2'>부서관리자: </span>
              <span className='right2 modal-text'>{userInfo.Issuer}</span>
            </div>
            <div className='box2'>
              <span className='left2'>용도: </span>
              <span className='right2 modal-text'>{userInfo.Usage}</span>
            </div>
          </div>
          <div className='right'>
            <div className='box2'>
              <span className='left2'>요청일자: </span>
              <span className='right2 modal-text'>{userInfo.RequestDate}</span>
            </div>
            <div className='box2'>
              <span className='left2'>효력말소일: </span>
              <span className='right2 modal-text'>{userInfo.MaturityDate}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalDetail;
