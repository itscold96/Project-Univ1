import ModalBasic from 'components/Modal/ModalBasic';
import { authService } from 'fbase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import './Header.css';

function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    //로그인 상태에 변화가 생겼다면
    onAuthStateChanged(authService, (user) => {
      if (user) {
        //여기서 user에 유저 정보가 담기고 user.uid로 유저를 특정할 수가 있음
        setIsLoggedIn(true);
        setUserObj(user);
      }
    });
  }, []);

  const onClickLogout = async () => {
    try {
      await signOut(authService);
      setIsLoggedIn(false);
      setUserObj(null);
      window.alert('정상적으로 로그아웃 되었습니다.');
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  const showModal = () => {
    setModalOpen(true);
  };

  const onClickLogo = (e) => {
    navigate('/');
  };

  // 로그인 유무 확인용 log
  console.log('로그인? ', isLoggedIn, '유저 정보: ', userObj);

  return (
    <div>
      <header id='header' className='fixed-top'>
        <div className='container d-flex align-items-center'>
          <h1 className='logo me-auto'>
            <a href='# ' onClick={onClickLogo}>
              대학원04팀
            </a>
          </h1>
          {/* <!-- .navbar --> */}
          <nav id='navbar' className='navbar order-last order-lg-0'>
            <ul>
              <li>
                <a className='nav-link scrollto active' href='/'>
                  홈으로
                </a>
              </li>
              <li className='dropdown'>
                <a href='# '>
                  <span>포탈 소개</span> <i className='bi bi-chevron-down'></i>
                </a>
                <ul>
                  <li>
                    <a href='# '>사이트 소개</a>
                  </li>
                  <li>
                    <a href='# '>공지사항</a>
                  </li>
                  <li>
                    <a href='#faq'>자주 하는 질문</a>
                  </li>
                  <li>
                    <a href='# '>QnA</a>
                  </li>
                </ul>
              </li>
              <li className='dropdown'>
                <a href='# '>
                  <span>이용 안내</span> <i className='bi bi-chevron-down'></i>
                </a>
                <ul>
                  <li>
                    <a href='# '>이용 정책</a>
                  </li>
                  <li>
                    <a href='# '>이용 가이드</a>
                  </li>
                </ul>
              </li>
              <li className='dropdown'>
                <a href='# '>
                  <span>마이 페이지</span> <i className='bi bi-chevron-down'></i>
                </a>
                <ul>
                  <li>
                    <a href='# '>개인 정보 조회</a>
                  </li>
                  <li className='dropdown'>
                    <a href='# '>
                      <span>계약 관리</span> <i className='bi bi-chevron-right'></i>
                    </a>
                    <ul>
                      <li>
                        <a href='/UsageStatus'>마이 데이터 사용 현황</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <i className='bi bi-list mobile-nav-toggle'></i>
          </nav>
          {isLoggedIn === false ? (
            <button className='appointment-btn btn--none' onClick={showModal}>
              로그인
            </button>
          ) : (
            <>
              <a href='#appointment' className='appointment-btn scrollto'>
                <span className='d-none d-md-inline'>동의서 작성하기</span>
              </a>

              <button className='appointment-btn none-color__btn' onClick={onClickLogout}>
                로그아웃
              </button>
            </>
          )}
        </div>
      </header>
      {modalOpen === true ? <ModalBasic setModalOpen={setModalOpen} /> : null}
    </div>
  );
}

export default Header;
