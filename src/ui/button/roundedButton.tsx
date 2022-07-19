import styled from '@emotion/styled';
import React from 'react';

const StyledButton = styled.button`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface RoundedButtonProps extends React.PropsWithChildren {
  size?: 1 | 2 | 3 | 4;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const RoundedButton = ({ children, size, onClick }: RoundedButtonProps): JSX.Element => {
  const totalSize = `${size}.5rem`;
  return (
    <StyledButton style={{ width: totalSize, height: totalSize }} onClick={onClick}>{children}</StyledButton>
  );
};

RoundedButton.defaultProps = {
  size: 1,
  onClick: () => undefined,
}
