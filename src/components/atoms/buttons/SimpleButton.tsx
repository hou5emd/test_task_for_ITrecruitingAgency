import React, { FC } from 'react';

const Button: FC<IButton> = ({
    submit,
    children,
    className,
    onClick,
}) => (
  <button type={submit ? 'submit' : 'button'} onClick={onClick} className={className}>{children}</button>
);

interface IButton {
    submit?: boolean,
    children: React.ReactNode,
    className?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

Button.defaultProps = {
    submit: false,
    className: '',
    onClick: () => null,
};

export default Button;
