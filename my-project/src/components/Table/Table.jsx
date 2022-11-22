import React, { useState, useEffect } from 'react';
import Paging from 'components/Paging/Paging';
import RequstedBtnBox from 'components/RequstedBtnBox/RequstedBtnBox';
import AcceptedModalContainer from 'components/Modal/AcceptedModalContainer/AcceptedModalContainer';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './Table.css';

function Table() {
  const userObj = JSON.parse(useLocation().state);
  const [userDataInfoArray, setUserDataInfoArray] = useState([]); //전체 유저 정보 json이 들어있는 배열

  const [changedUserDataInfo, setChangedUserDataInfo] = useState([]); //상태가 변경되어 새로 받아온 json 배열

  const [count, setCount] = useState(0); //데이터 총 개수
  const [currentpage, setCurrentpage] = useState(1); //현재페이지 번호
  const [postPerPage] = useState(5); //페이지당 보여줄 데이터 개수

  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0); //현재 페이지에서 보여줄 첫번째 객체 데이터 인덱스
  const [indexOfLastPost, setIndexOfLastPost] = useState(0); //현재 페이지에서 보여줄 마지막 객체 데이터 인덱스
  const [currentPosts, setCurrentPosts] = useState([]); //현재 페이지에서 보여줄 객체 데이터 배열

  useEffect(() => {
    //유저 uid로 해당 유저에 대한 요청기관 정보 받아오기
    const getNewData = async () => {
      try {
        const reqAndAccs = [];
        const response = await axios.post('http://localhost:3002/해당유저에대한요청기관정보받아오기', { uid: userObj.uid });
        console.log('데이터 보내고 받아옴', response);
        //요청과 요청 승인된 데이터만 거름
        //response가 배열 내부에 object가 있는 2차원 객체라서 각 object의 인덱스가 해당 object의 key로 들어가 있음
        for (let x of Object.values(response)) {
          if (x.ConsentState === 'Request' || x.ConsentState === 'Accepted') {
            reqAndAccs.push(x);
          }
        }
        setUserDataInfoArray(Object.values(reqAndAccs));
      } catch (e) {
        console.log('something went wrong!', e);
      }
    };

    getNewData();
  }, [userObj]);

  useEffect(() => {
    const changedReqAndAccs = [];
    //유저 uid로 해당 유저에 대한 수정된 요청기관 정보 받아오기
    const getChangedData = async () => {
      if (changedUserDataInfo.length !== 0) {
        for (let x of Object.values(changedUserDataInfo)) {
          if (x.ConsentState === 'Request' || x.ConsentState === 'Accepted') {
            changedReqAndAccs.push(x);
          }
        }
        setUserDataInfoArray(Object.values(changedReqAndAccs));
      }
    };

    getChangedData();
  }, [changedUserDataInfo]);

  useEffect(() => {
    setCount(userDataInfoArray.length);
    setIndexOfLastPost(currentpage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setCurrentPosts(userDataInfoArray.slice(indexOfFirstPost, indexOfLastPost));
  }, [userDataInfoArray, currentpage, postPerPage, indexOfLastPost, indexOfFirstPost]);

  const setPage = (e) => {
    //e에 페지지네이션에서 클릭한 숫자가 넘어감
    setCurrentpage(e);
  };

  return (
    <>
      <div className='table-part'>
        <table className='table table-hover table-primary'>
          <thead>
            <tr>
              <th scope='col'>요청 기관</th>
              <th scope='col'>용도</th>
              <th scope='col'>요청 일자</th>
              <th scope='col'>효력 말소일</th>
              <th scope='col'>상태</th>
            </tr>
          </thead>
          {currentPosts.map((item, index) => (
            <tbody key={index}>
              <tr className='table-light table-white'>
                <td>{item.Institute}</td>
                <td>{item.Usage}</td>
                <td>{item.RequestDate.slice(0, 10)}</td>
                <td>{item.MaturityDate.slice(0, 10)}</td>
                <td>
                  {item.ConsentState === 'REQUESTED' ? (
                    <RequstedBtnBox idx={item.idx} setChangedUserDataInfo={setChangedUserDataInfo} />
                  ) : (
                    <AcceptedModalContainer userInfo={item} idx={item.idx} setChangedUserDataInfo={setChangedUserDataInfo} />
                  )}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className='paging-part'>
        <Paging page={currentpage} count={count} setPage={setPage} />
      </div>
    </>
  );
}

export default Table;
