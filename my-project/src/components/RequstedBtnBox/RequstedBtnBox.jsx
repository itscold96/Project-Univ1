import axios from 'axios';
import './RequstedBtnBox.css';

function RequstedBtnBox({ setIsChangeState }) {
  const onClickAccept = (e) => {
    // post로 서버에 해당 요청이 수락되었다고 보내고 다시 수정된 정보를 받음
    setIsChangeState(true);
  };

  const onClickreject = async (e) => {
    // post로 서버에 해당 요청이 거절절되었다고 보내고 다시 수정된 정보를 받음
    try {
      const response = await axios.post('http://localhost:3002/getExample', { name: 'www', status: 'happy?' });
      console.log(response);
      console.log('데이터 보내짐');
    } catch (e) {
      console.log('something went wrong!', e);
    }
    setIsChangeState(true);
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
