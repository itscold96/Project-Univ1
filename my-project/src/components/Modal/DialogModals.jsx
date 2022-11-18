import React from 'react';

function DialogModals() {
  return (
    <>
      {/* dialog modal */}
      <div className='modal fade' tabIndex={-1} aria-labelledby='exampleModalLabel' aria-hidden='true' id='modalChoice'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content rounded-4 shadow'>
            <div className='modal-body p-4 text-center'>
              <h5 className='mb-0'>동의를 철회하시겠습니까?</h5>
              <p className='mb-0'>동의가 철회되면 요청 기관에서 더 이상 귀하의 정보를 사용할 수 없습니다.</p>
            </div>
            <div className='modal-footer flex-nowrap p-0'>
              <button
                type='button'
                className='btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0 border-right'
                data-bs-toggle='modal'
                data-bs-target='#modalCheck'
              >
                <strong>예, 철회하겠습니다</strong>
              </button>
              <button
                type='button'
                className='btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0'
                data-bs-dismiss='modal'
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 확인용 모달 */}
      <div className='modal fade' tabIndex={-1} aria-labelledby='exampleModalLabel' aria-hidden='true' id='modalCheck'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content rounded-4 shadow'>
            <div className='modal-body p-4 text-center'>
              <h5 className='mb-0'>동의가 철회되었습니다.</h5>
              <p className='mb-0'>해당 기관에서는 더 이상 귀하의 정보를 사용할 수 없습니다.</p>
            </div>
            <div className='flex-nowrap p-0'>
              <button
                type='button'
                className='btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0'
                data-bs-dismiss='modal'
              >
                확인
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DialogModals;
