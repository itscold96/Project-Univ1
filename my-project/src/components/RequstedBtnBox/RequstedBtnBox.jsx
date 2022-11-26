import axios from 'axios';
import './RequstedBtnBox.css';

function RequstedBtnBox({ userDataInfoArray, idx, setIsChanged}) {
  const onClickAccept = async (e) => {
    // post로 서버에 해당 요청이 수락되었다고 보내고 다시 수정된 정보를 받음
    try {
      const response = await axios.post('http://localhost:9090/Accept', {
        index: idx,
        userDataInfoArray
      });
      console.log('Confirm accepted new data', response);
      window.alert('You have accepted the given request. If you would like to withdraw your decision click on the "detail" button in the table');
      setIsChanged(true);
    } catch (e) {
      console.log('something went wrong!', e);
    }
  };

  const onClickreject = async (e) => {
    // post로 서버에 해당 요청이 거절절되었다고 보내고 다시 수정된 정보를 받음
    try {
      const response = await axios.post('http://localhost:9090/Reject', {
        index: idx,
        userDataInfoArray
      });
      console.log('Rejected offered request', response);
      window.alert('You have rejected the given request. This action cannot be withdrawn due to service limitation.');
      setIsChanged(true);
    } catch (e) {
      console.log('something went wrong!', e);
    }
  };

  return (
    <div className='RequstedBtnBox'>
      <button className='btn btn-primary btn-sm' onClick={onClickAccept}>
        요청 수락
      </button>
      <button className='btn btn-danger btn-sm' onClick={onClickreject}>
        요청 거절
      </button>
    </div>
  );
}

export default RequstedBtnBox;
