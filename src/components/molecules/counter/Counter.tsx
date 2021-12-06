import React, { FC, useState } from 'react';
import Button from '../../atoms/buttons/SimpleButton';
import styled from './style.module.scss';
import { ReactComponent as IncrementIcon } from './icons/IncrementIcon.svg';
import { ReactComponent as DecrementIcon } from './icons/DecrementIcon.svg';

const Counter: FC = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className={`${styled.counter}`}>
      <Button className={`${styled.counter__button}`} onClick={decrement}>
        <DecrementIcon />
      </Button>
      <span>
        { count }
      </span>
      <Button className={`${styled.counter__button}`} onClick={increment}>
        <IncrementIcon />
      </Button>
    </div>
  );
};

export default Counter;
