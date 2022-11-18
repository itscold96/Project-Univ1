import Table from 'components/Table/Table';
import React from 'react';

import './UsageStatus.css';
function UsageStatus() {
  return (
    <>
      {/* <!-- start main --> */}
      <main className='usage-status-main'>
        <section className='breadcrumbs'>
          <div className='container'>
            <div className='d-flex justify-content-between align-items-center'>
              <h2>마이 데이터 사용 현황</h2>
            </div>
          </div>
        </section>
        <section className='entire-table'>
          <Table />
        </section>
      </main>

      {/* <!-- End main --> */}
    </>
  );
}

export default UsageStatus;
