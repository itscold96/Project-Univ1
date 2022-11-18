import React from 'react';
import ContentsCheck from 'components/ContentsCheck/ContentsCheck';

function Accordion({ title, contents, tag, expanded, show }) {
  return (
    <div className='accordion-item'>
      <h2 className='accordion-header' id={`heading${tag}`}>
        <button
          className='accordion-button'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target={`#collapse${tag}`}
          aria-expanded={expanded}
          aria-controls={`collapse${tag}`}
        >
          {title}
        </button>
      </h2>
      <div
        id={`collapse${tag}`}
        className={`accordion-collapse collapse ${show}`}
        aria-labelledby={`heading${tag}`}
        data-bs-parent='#accordionExample'
      >
        <div className='accordion-body'>
          {contents}
          <ContentsCheck title={title} />
        </div>
      </div>
    </div>
  );
}

export default Accordion;
