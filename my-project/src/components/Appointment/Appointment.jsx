import axios from 'axios';
import AccordionContainer from 'components/Accordion/AccordionContainer';
import { authService } from 'fbase';
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';

function Appointment() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [sex, setSex] = useState('');
  const [birth, setBirth] = useState('');
  const [address, setAdress] = useState('');
  const [LRName, setLRName] = useState('');
  const [relation, setRelation] = useState('');
  const [LRPhone, setLRPhone] = useState('');
  const [agencyName, setAgencyName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) setIsLoggedIn(true);
      else setIsLoggedIn(false);
    });
  }, [name, phone, sex, birth, address, LRName, relation, LRPhone, agencyName]);

  function onChangeName(e) {
    if (isLoggedIn === false) {
      window.alert('동의서를 작성하려면 로그인이 필요합니다.');
      setName('');
    } else setName(e.target.value);
  }
  function onChangePhone(e) {
    if (isLoggedIn === false) {
      window.alert('동의서를 작성하려면 로그인이 필요합니다.');
      setPhone('');
    } else setPhone(e.target.value);
  }
  function onChangeSex(e) {
    if (isLoggedIn === false) {
      window.alert('동의서를 작성하려면 로그인이 필요합니다.');
      setSex('');
    } else setSex(e.target.value);
  }
  function onChangeBirth(e) {
    if (isLoggedIn === false) {
      window.alert('동의서를 작성하려면 로그인이 필요합니다.');
      setBirth('');
    } else setBirth(e.target.value);
  }
  function onChangeAdress(e) {
    if (isLoggedIn === false) {
      window.alert('동의서를 작성하려면 로그인이 필요합니다.');
      setAdress('');
    } else setAdress(e.target.value);
  }
  function onChangeLRName(e) {
    if (isLoggedIn === false) {
      window.alert('동의서를 작성하려면 로그인이 필요합니다.');
      setLRName('');
    } else setLRName(e.target.value);
  }
  function onChangeRelation(e) {
    if (isLoggedIn === false) {
      window.alert('동의서를 작성하려면 로그인이 필요합니다.');
      setRelation('');
    } else setRelation(e.target.value);
  }
  function onChangeLRPhone(e) {
    if (isLoggedIn === false) {
      window.alert('동의서를 작성하려면 로그인이 필요합니다.');
      setLRPhone('');
    } else setLRPhone(e.target.value);
  }
  function onChangeAgencyName(e) {
    if (isLoggedIn === false) {
      window.alert('동의서를 작성하려면 로그인이 필요합니다.');
      setAgencyName('');
    } else setAgencyName(e.target.value);
  }

  const onSubmitToServer = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3002/dataAdd', {
        name,
        phone,
        sex,
        birth,
        address,
        LRName,
        relation,
        LRPhone,
        agencyName,
      });
      console.log(response);
      console.log('데이터 보내짐');
    } catch (e) {
      console.log('something went wrong!', e);
    }
  };

  // console.log(name, phone, sex, birth, address, LRName, relation, LRPhone, agencyName);

  return (
    <section id='appointment' className='appointment section-bg'>
      <div className='container'>
        <div className='section-title'>
          <h2>동의서 작성하기</h2>
          <p>
            인체자원기증에 대한 동의서를 작성합니다. 해당 작업은 로그인이 필요한 작업입니다. <br />
            로그인 없이 작성 시 로그인 창이 나타나며 로그인 또는 회원가입 시 다시 작성이 가능합니다.
          </p>
        </div>
        <form action='post' method='post' className='row g-4' onSubmit={onSubmitToServer}>
          <div className='col-md-2'>
            <label htmlFor='validationDefault01' className='form-label'>
              성명
            </label>
            <input
              type='text'
              className='form-control'
              id='validationDefault01'
              placeholder='성명'
              minLength={2}
              value={name}
              onChange={onChangeName}
              required
            />
          </div>
          <div className='col-md-2'>
            <label htmlFor='validationTel1' className='form-label'>
              연락처
            </label>
            <input
              type='tel'
              className='form-control'
              id='validationTel1'
              placeholder='00*-000*-0000'
              pattern='[0-9]{2,3}-[0-9]{3,4}-[0-9]{3,4}'
              maxLength={13}
              value={phone}
              onChange={onChangePhone}
              required
            />
          </div>
          <div className='col-md-2'>
            <label htmlFor='validationDefault02' className='form-label'>
              성별
            </label>
            <select className='form-select' id='validationDefault02' value={sex} onChange={onChangeSex} required>
              <option value='default'>선택해주세요</option>
              <option value='sexM'>남</option>
              <option value='sexF'>여</option>
            </select>
          </div>
          <div className='col-md-2'>
            <label htmlFor='validationDefault03' className='form-label'>
              생년월일
            </label>
            <input
              type='date'
              className='form-control'
              id='validationDefault03'
              value={birth}
              onChange={onChangeBirth}
              required
            />
          </div>
          <div className='col-md-4'>
            <label htmlFor='validationDefault04' className='form-label'>
              주소
            </label>
            <input
              type='text'
              className='form-control'
              id='validationDefault04'
              placeholder='대구광역시 북구 대학로 80 경북대학교'
              value={address}
              onChange={onChangeAdress}
              required
            />
          </div>
          <div className='col-md-2'>
            <label htmlFor='validationDefault05' className='form-label'>
              법정 대리인 성명
            </label>
            <input
              type='text'
              className='form-control'
              id='validationDefault05'
              placeholder='성명'
              minLength={2}
              value={LRName}
              onChange={onChangeLRName}
              required
            />
          </div>
          <div className='col-md-2'>
            <label htmlFor='validationTel2' className='form-label'>
              법정대리인 연락처
            </label>
            <input
              type='tel'
              className='form-control'
              id='validationTel2'
              placeholder='00*-000*-0000'
              pattern='[0-9]{2,3}-[0-9]{3,4}-[0-9]{3,4}'
              maxLength={13}
              value={LRPhone}
              onChange={onChangeLRPhone}
              required
            />
          </div>
          <div className='col-md-4'>
            <label htmlFor='validationDefault06' className='form-label'>
              기증자와 법정대리인과의 관계
            </label>
            <select className='form-select' id='validationDefault06' value={relation} onChange={onChangeRelation} required>
              <option value='default'>선택해주세요</option>
              <option value='father'>부</option>
              <option value='mother'>모</option>
              <option value='spouse'>배우자</option>
            </select>
          </div>
          <div className='col-md-4'>
            <label htmlFor='validationDefault07' className='form-label'>
              기관 명칭
            </label>
            <input
              type='text'
              className='form-control'
              id='validationDefault07'
              placeholder='한국인체자원은행'
              value={agencyName}
              onChange={onChangeAgencyName}
              required
            />
          </div>

          {/* 아코디언 시작 */}
          <AccordionContainer />
          {/* 아코디언 끝 */}

          <div className='col-12'>
            <div className='form-check'>
              <input className='form-check-input' type='checkbox' value='' id='invalidCheck2' required />
              <label className='form-check-label' htmlFor='invalidCheck2'>
                동의서 내용을 모두 읽어보았으며 이에 동의합니다.
              </label>
            </div>
          </div>
          <div className='submit-btn'>
            <button className='btn btn-primary' type='submit'>
              제출하기
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Appointment;
