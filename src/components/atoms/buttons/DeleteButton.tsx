import React, { FC } from 'react';
import { ReactComponent as RemoveIcon } from './Buttonicons/RemoveIcon.svg';
import styled from './style.module.scss';

const RemoveButton: FC<IRemoveButton> = ({
                                           className,
                                           children,
  }) => (
    <button type="button" className={`${className} ${styled.button_remove}`}>
      <span><RemoveIcon /></span>
      {children}
    </button>
);

interface IRemoveButton {
  className?: string,
  children: React.ReactNode
}

RemoveButton.defaultProps = {
  className: '',
};

export default RemoveButton;
