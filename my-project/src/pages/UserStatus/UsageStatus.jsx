import Table from 'components/Table/Table';
import React from 'react';

import './UsageStatus.css';
function UsageStatus() {
  return (
    <main className='usage-status'>
      <div className='usage-status__title'>
        <h4>마이 데이터 사용 현황</h4>
      </div>
      <section className='entire-table'>
        <Table />
      </section>
    </main>
  );
}

export default UsageStatus;
