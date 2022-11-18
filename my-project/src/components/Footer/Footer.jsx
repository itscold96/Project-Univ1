import React from 'react';
import './Footer.css';

function Footer() {
  return (
    /* <!-- ======= Footer ======= --> */
    <footer id='footer'>
      <div className='footer-top'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6 footer-contact'>
              <h3>대학원 04팀</h3>
              <a href='#' className='to-top-btn scrollto'>
                <span className='d-none d-md-inline'>맨 위로</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='container d-md-flex py-4'>
        <div className='me-md-auto text-center text-md-start'>
          <div className='copyright'>
            &copy; Copyright{' '}
            <strong>
              <span>Medilab</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className='credits'>
            {/* <!-- All the links in the footer should remain intact. --> */}
            {/* <!-- You can delete the links only if you purchased the pro version. --> */}
            {/* <!-- Licensing information: https://bootstrapmade.com/license/ --> */}
            {/* <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/medilab-free-medical-bootstrap-theme/ --> */}
            Designed by <a href='https://bootstrapmade.com/'>BootstrapMade</a>
          </div>
        </div>
      </div>
    </footer>
    /* <!-- End Footer --> */
  );
}

export default Footer;
