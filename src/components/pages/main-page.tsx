import React, { FC } from 'react';
import DeleteButton from '../atoms/buttons/DeleteButton';
import Counter from '../molecules/counter/Counter';

const MainPage: FC = () => (
  <>
    <h1 className="ml-5-vw">Hello world !</h1>
    <div>
      <DeleteButton>Remove items</DeleteButton>
    </div>
    <div>
      <Counter />
    </div>
  </>
);

export default MainPage;
