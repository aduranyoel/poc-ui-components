import styled from '@emotion/styled';
import React, { PropsWithChildren } from 'react';

const StyledNav = styled.nav`
  border-right: 1px dashed rgb(255, 246, 230);
  padding: 30px 20px;
`;

export const NavComponent = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <StyledNav>
      <ul>
        {children}
      </ul>
    </StyledNav>
  );
};
