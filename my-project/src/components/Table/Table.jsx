import React, { useState, useEffect } from 'react';
import dataJson from '../../jsons/ModalDataSample.json';
import Paging from 'components/Paging/Paging';
import './Table.css';
import RequstedBtnBox from 'components/RequstedBtnBox/RequstedBtnBox';
import AcceptedModalContainer from 'components/Modal/AcceptedModalContainer/AcceptedModalContainer';

function Table() {
  const [dataArray, setDataArray] = useState([]); //전체 json이 들어있는 데이터 배열
  const [count, setCount] = useState(0); //데이터 총 개수
  const [currentpage, setCurrentpage] = useState(1); //현재페이지 번호
  const [postPerPage] = useState(5); //페이지당 보여줄 데이터 개수

  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0); //현재 페이지에서 보여줄 첫번째 객체 데이터 인덱스
  const [indexOfLastPost, setIndexOfLastPost] = useState(0); //현재 페이지에서 보여줄 마지막 객체 데이터 인덱스
  const [currentPosts, setCurrentPosts] = useState([]); //현재 페이지에서 보여줄 객체 데이터 배열

  const [isChangeState, setIsChangeState] = useState(false);

  useEffect(() => {
    let reqAndAccs = [];
    //지금은 dataJson이 더미데이터로 폴더 안에 있지만,
    //이후에는 서버와의 통신을 통해 렌더링마다 새 json파일을 받아옴

    //요청과 요청 승인된 데이터만 거름
    for (let x of Object.values(dataJson)) {
      if (x.ConsentState === 'REQUESTED' || x.ConsentState === 'Accepted') {
        reqAndAccs.push(x);
      }
    }

    setDataArray(Object.values(reqAndAccs)); //2차원 객체라서 key가 인덱스로 들어가 있음
    setIsChangeState(false); //변화 반영했으므로 다시 바꿔 줌
  }, [isChangeState]);

  useEffect(() => {
    setCount(dataArray.length);
    setIndexOfLastPost(currentpage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setCurrentPosts(dataArray.slice(indexOfFirstPost, indexOfLastPost));
  }, [dataArray, currentpage, postPerPage, indexOfLastPost, indexOfFirstPost]);

  const setPage = (e) => {
    //e에 페지지네이션에서 클릭한 숫자가 넘어감
    setCurrentpage(e);
  };

  console.log(isChangeState);

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
                    <RequstedBtnBox setIsChangeState={setIsChangeState} />
                  ) : (
                    <AcceptedModalContainer setIsChangeState={setIsChangeState} />
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
