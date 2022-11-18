import React, { useState, useEffect } from 'react';
import ModalContainer from 'components/Modal/ModalContainer';
import dataJson from '../../jsons/dataComplex.json';
import Paging from 'components/Paging/Paging';
import './Table.css';

function Table() {
  const [dataArray, setDataArray] = useState([]); //전체 json이 들어있는 데이터 배열
  const [count, setCount] = useState(0); //데이터 총 개수
  const [currentpage, setCurrentpage] = useState(1); //현재페이지 번호
  const [postPerPage] = useState(5); //페이지당 보여줄 데이터 개수

  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0); //현재 페이지에서 보여줄 첫번째 객체 데이터 인덱스
  const [indexOfLastPost, setIndexOfLastPost] = useState(0); //현재 페이지에서 보여줄 마지막 객체 데이터 인덱스
  const [currentPosts, setCurrentPosts] = useState([]); //현재 페이지에서 보여줄 객체 데이터 배열

  useEffect(() => {
    console.count();
    setDataArray(Object.values(dataJson)); //2차원 객체라서 key가 인덱스로 들어가 있음
    setCount(dataArray.length);
    setIndexOfLastPost(currentpage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setCurrentPosts(dataArray.slice(indexOfFirstPost, indexOfLastPost));
    console.log(dataArray);
  }, [currentpage, indexOfFirstPost, indexOfLastPost, postPerPage]);

  const setPage = (e) => {
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
              <th scope='col'>자세히 보기</th>
            </tr>
          </thead>
          {currentPosts.map((item, index) => (
            <tbody key={index}>
              <tr className='table-light table-white'>
                <td>{item.요청기관}</td>
                <td>{item.용도}</td>
                <td>{item.요청일자}</td>
                <td>{item.효력말소일}</td>
                <td>
                  <ModalContainer />
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
