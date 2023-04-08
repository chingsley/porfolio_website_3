import React, { useState } from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import styled from 'styled-components';

const ViewTypeSwitcher = () => {
  const [viewType, setViewType] = useState('Grid');
  const dClass = 'hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer';
  return (
    <Wrapper>
      <button
        onClick={() => console.log('Grid view active')}
        className={`${viewType === 'Grid' ? 'active' + dClass : dClass}`}
      >
        <BsFillGridFill className="text-ternary-dark dark:text-ternary-light w-5 h-5" />
      </button>
      <button
        onClick={() => console.log('List view active')}
        className={`${viewType === 'List' ? 'active' + dClass : dClass}`}
      >
        <BsList className="text-ternary-dark dark:text-ternary-light w-5 h-5" />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    
    // .active {
    //   // background: var(--clr-black);
    //   // color: var(--clr-white);
    // }
`;


export default ViewTypeSwitcher;