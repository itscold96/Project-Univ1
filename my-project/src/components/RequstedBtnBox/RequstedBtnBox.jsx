import axios from 'axios';
import './RequstedBtnBox.css';

function RequstedBtnBox({ idx, setChangedUserDataInfo }) {
  const onClickAccept = async (e) => {
    // post로 서버에 해당 요청이 수락되었다고 보내고 다시 수정된 정보를 받음
    try {
      const response = await axios.post('http://localhost:3002/상태수정요청보내고새데이터받아오기', {
        index: idx,
        status: 'Accepted',
      });
      console.log('상태 수정 요청 보내고 새 데이터 받아옴', response);
      setChangedUserDataInfo(response);
    } catch (e) {
      console.log('something went wrong!', e);
    }
  };

  const onClickreject = async (e) => {
    // post로 서버에 해당 요청이 거절절되었다고 보내고 다시 수정된 정보를 받음
    try {
      const response = await axios.post('http://localhost:3002/상태수정요청보내고새데이터받아오기', {
        index: idx,
        status: 'Rejected',
      });
      console.log('상태 수정 요청 보내고 새 데이터 받아옴', response);

      setChangedUserDataInfo(response);
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
