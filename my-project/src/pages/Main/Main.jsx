import React from 'react';
import './Main.css';
import Appointment from 'components/Appointment/Appointment';

function Main() {
  return (
    <>
      {/* <!-- ======= Hero Section ======= --> */}
      <section id='hero' className='d-flex align-items-center'>
        <div className='container'>
          <h1>Welcome to Our Project</h1>
          <h2>
            We are team of 'Development of Dynamic Consent System
            <br />
            Using Blockchain Technology.'
          </h2>
        </div>
      </section>
      {/* <!-- End Hero --> */}

      <main id='main'>
        {/* <!-- ======= Why Us Section ======= --> */}
        <section id='why-us' className='why-us'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 d-flex align-items-stretch'>
                <div className='content'>
                  <h3>Explanation of terms</h3>
                  <p className='p-font'>
                    - 역동적 동의체계
                    <br />
                    - 퍼미션드 블록체인
                    <br />- 무결성
                  </p>
                </div>
              </div>
              <div className='col-lg-8 d-flex align-items-stretch'>
                <div className='icon-boxes d-flex flex-column justify-content-center'>
                  <div className='row'>
                    <div className='col-xl-4 d-flex align-items-stretch'>
                      <div className='icon-box mt-4 mt-xl-0'>
                        <i className='bx bx-receipt'></i>
                        <h4>역동적 동의체계</h4>
                        <p>
                          자신이 동의한 데이터가 어디에서 어떻게 사용되고 있는지를 추적하고 언제든 해당 계약을 철회할 수 있는 기능
                        </p>
                      </div>
                    </div>
                    <div className='col-xl-4 d-flex align-items-stretch'>
                      <div className='icon-box mt-4 mt-xl-0'>
                        <i className='bx bx-cube-alt'></i>
                        <h4>퍼미션드 블록체인</h4>
                        <p>허가된 개인 또는 기관만 네트워크에 참여할 수 있도록 하는 블록체인</p>
                      </div>
                    </div>
                    <div className='col-xl-4 d-flex align-items-stretch'>
                      <div className='icon-box mt-4 mt-xl-0'>
                        <i className='bx bx-images'></i>
                        <h4>무결성</h4>
                        <p>데이터나 시스템 등이 손상되지 않고 완전성, 정확성, 일관성을 유지함을 보장하는 특성</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End .content--> */}
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Why Us Section --> */}

        {/* <!-- ======= Appointment Section ======= --> */}
        <Appointment />
        {/* <!-- End Appointment Section --> */}

        {/* <!-- ======= Frequently Asked Questions Section ======= --> */}
        <section id='faq' className='faq section-bg'>
          <div className='container'>
            <div className='section-title'>
              <h2>자주 하는 질문</h2>
            </div>

            <div className='faq-list'>
              <ul>
                <li data-aos='fade-up'>
                  <i className='bx bx-help-circle icon-help'></i>{' '}
                  <a data-bs-toggle='collapse' className='collapse' data-bs-target='#faq-list-1'>
                    역동적 동의체계가 필요한 이유는? <i className='bx bx-chevron-down icon-show'></i>
                    <i className='bx bx-chevron-up icon-close'></i>
                  </a>
                  <div id='faq-list-1' className='collapse show' data-bs-parent='.faq-list'>
                    <p>
                      기존 동의 방식의 문제점을 해결하기 위해 역동적 동 의체계를 도입하게 되었습니다. 역동적 동의체계는 개인이
                      주도적으로 자신의 정보를 관리할 수 있도록 자기결정권을 보장해줌으로써 기관이 자신의 정보를 활용하는 과정에
                      있어 투명성을 제공해 줄 수 있을 것입니다.
                    </p>
                  </div>
                </li>

                <li data-aos='fade-up' data-aos-delay='100'>
                  <i className='bx bx-help-circle icon-help'></i>{' '}
                  <a data-bs-toggle='collapse' data-bs-target='#faq-list-2' className='collapsed'>
                    퍼미션드 블록체인을 선택한 이유는? <i className='bx bx-chevron-down icon-show'></i>
                    <i className='bx bx-chevron-up icon-close'></i>
                  </a>
                  <div id='faq-list-2' className='collapse' data-bs-parent='.faq-list'>
                    <p>
                      특정 정보에 대한 기밀성을 보장하여주고, 프라이빗 블록체인과 달리 다수가 권한을 가져 중앙통제를 억제함으로써
                      기증자의 데이터 주권을 보장할 수 있습니다.
                    </p>
                  </div>
                </li>

                <li data-aos='fade-up' data-aos-delay='200'>
                  <i className='bx bx-help-circle icon-help'></i>{' '}
                  <a data-bs-toggle='collapse' data-bs-target='#faq-list-3' className='collapsed'>
                    무결성이 보안성을 보장해주는가? <i className='bx bx-chevron-down icon-show'></i>
                    <i className='bx bx-chevron-up icon-close'></i>
                  </a>
                  <div id='faq-list-3' className='collapse' data-bs-parent='.faq-list'>
                    <p>
                      무결성은 데이터가 손상되지 않고 정확한 정보를 담고 있는지에 대한 특성에 불과하며, 블록체인 자체가
                      해킹으로부터 방어기제를 가지고 있지 않으므로 악성코드 감염이나 개인키가 유출되는 경우 무결성이 보안성을
                      보장해줄 수 없습니다.
                    </p>
                  </div>
                </li>

                <li data-aos='fade-up' data-aos-delay='300'>
                  <i className='bx bx-help-circle icon-help'></i>{' '}
                  <a data-bs-toggle='collapse' data-bs-target='#faq-list-4' className='collapsed'>
                    그럼에도 블록체인을 사용하는 이유는? <i className='bx bx-chevron-down icon-show'></i>
                    <i className='bx bx-chevron-up icon-close'></i>
                  </a>
                  <div id='faq-list-4' className='collapse' data-bs-parent='.faq-list'>
                    <p>
                      기존의 저장방식인 중앙서버를 통해 한곳에 저장하는 방법은 데이터 변조가 발생하여도 확인하기 어려운 무결성
                      문제가 발생하게 됩니다. 특히나 민감한 건강정보를 다루는 경우, 데이터 관리는 더욱더 중요하게 기능합니다.
                      그리하여 무결성과 투명성으로 잘 알려진 블록체인을 기술을 적용하고자 합니다. 블록체인은 거래 정보를 한 곳에
                      저장하지 않고 네트워크에 참여한 참가자들이 공동으로 정보를 가지고 있게 함으로써 데이터에 대한 위변조를
                      방지하고자 하고 있습니다.
                    </p>
                  </div>
                </li>

                <li data-aos='fade-up' data-aos-delay='400'>
                  <i className='bx bx-help-circle icon-help'></i>{' '}
                  <a data-bs-toggle='collapse' data-bs-target='#faq-list-5' className='collapsed'>
                    해당 프로젝트의 한계점과 확장성은 어떠한가? <i className='bx bx-chevron-down icon-show'></i>
                    <i className='bx bx-chevron-up icon-close'></i>
                  </a>
                  <div id='faq-list-5' className='collapse' data-bs-parent='.faq-list'>
                    <p>
                      데이터베이스를 Firebase DB로 구축하였는데, 병원의 중앙 DB를 사용하지 않으므로 데이터베이스에 대한 보안성이
                      떨어진다는 한계점이 존재합니다. 하지만 병원에서 실제로 구현할 때에는 병원용 클라우드 DB를 사용하여 보안성을
                      보완할 것이고, 현 시스템에서 병원용 DB와 연결되는 것을 고려한 확장성을 제공할 것입니다.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* <!-- End Frequently Asked Questions Section --> */}

        {/* <!-- ======= Team Section ======= --> */}
        <section id='doctors' className='doctors'>
          <div className='container'>
            <div className='section-title'>
              <h2>Our Team</h2>
            </div>

            <div className='row'>
              <div className='col-lg-6'>
                <div className='member d-flex align-items-start'>
                  <div className='member-info'>
                    <h4>김민찬</h4>
                    <span>팀장, Front-End 개발자</span>
                    <p>React, Firebase 이용 웹 사이트 구현 및 팀원 총괄 관리</p>
                  </div>
                </div>
              </div>

              <div className='col-lg-6 mt-4 mt-lg-0'>
                <div className='member d-flex align-items-start'>
                  <div className='member-info'>
                    <h4>임정훈</h4>
                    <span>Back-End 개발자</span>
                    <p>Hyperledger Fabric 이용 퍼미션드 블록체인 구현 및 Server 보조</p>
                  </div>
                </div>
              </div>

              <div className='col-lg-6 mt-4'>
                <div className='member d-flex align-items-start'>
                  <div className='member-info'>
                    <h4>신형석</h4>
                    <span>Server 개발자</span>
                    <p>Node.js 서버 구현 및 React, Firebase, Hyperledger Fabric 연동</p>
                  </div>
                </div>
              </div>

              <div className='col-lg-6 mt-4'>
                <div className='member d-flex align-items-start'>
                  <div className='member-info'>
                    <h4>이원빈</h4>
                    <span>Back-End 개발자</span>
                    <p>논문, PPT 총괄 작성 및 전체적인 개발 보조</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Team Section --> */}

        {/* <!-- ======= Gallery Section ======= --> */}
        <section id='gallery' className='gallery'>
          <div className='container'>
            <div className='section-title'>
              <h2>Gallery</h2>
            </div>
          </div>

          <div className='container-fluid'>
            <div className='row g-0'>
              <div className='col-lg-3 col-md-4'>
                <div className='gallery-item'>
                  <a href='assets/img/gallery/gallery-1.jpg' className='galelry-lightbox'>
                    <img src='assets/img/gallery/gallery-1.jpg' alt='' className='img-fluid' />
                  </a>
                </div>
              </div>

              <div className='col-lg-3 col-md-4'>
                <div className='gallery-item'>
                  <a href='assets/img/gallery/gallery-2.jpg' className='galelry-lightbox'>
                    <img src='assets/img/gallery/gallery-2.jpg' alt='' className='img-fluid' />
                  </a>
                </div>
              </div>

              <div className='col-lg-3 col-md-4'>
                <div className='gallery-item'>
                  <a href='assets/img/gallery/gallery-3.jpg' className='galelry-lightbox'>
                    <img src='assets/img/gallery/gallery-3.jpg' alt='' className='img-fluid' />
                  </a>
                </div>
              </div>

              <div className='col-lg-3 col-md-4'>
                <div className='gallery-item'>
                  <a href='assets/img/gallery/gallery-4.jpg' className='galelry-lightbox'>
                    <img src='assets/img/gallery/gallery-4.jpg' alt='' className='img-fluid' />
                  </a>
                </div>
              </div>

              <div className='col-lg-3 col-md-4'>
                <div className='gallery-item'>
                  <a href='assets/img/gallery/gallery-5.jpg' className='galelry-lightbox'>
                    <img src='assets/img/gallery/gallery-5.jpg' alt='' className='img-fluid' />
                  </a>
                </div>
              </div>

              <div className='col-lg-3 col-md-4'>
                <div className='gallery-item'>
                  <a href='assets/img/gallery/gallery-6.jpg' className='galelry-lightbox'>
                    <img src='assets/img/gallery/gallery-6.jpg' alt='' className='img-fluid' />
                  </a>
                </div>
              </div>

              <div className='col-lg-3 col-md-4'>
                <div className='gallery-item'>
                  <a href='assets/img/gallery/gallery-7.jpg' className='galelry-lightbox'>
                    <img src='assets/img/gallery/gallery-7.jpg' alt='' className='img-fluid' />
                  </a>
                </div>
              </div>

              <div className='col-lg-3 col-md-4'>
                <div className='gallery-item'>
                  <a href='assets/img/gallery/gallery-8.jpg' className='galelry-lightbox'>
                    <img src='assets/img/gallery/gallery-8.jpg' alt='' className='img-fluid' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Gallery Section --> */}
      </main>
      {/* <!-- End #main --> */}
    </>
  );
}

export default Main;
