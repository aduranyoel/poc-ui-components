import React from 'react';
import styled from '@emotion/styled';

const StyledLi = styled.li`
  color: rgb(71, 207, 237);
  list-style: none;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  &:hover {
    transform: translate(4px);
  }
`;

interface NavMenuItemProps {
  action: () => void;
  label: string;
}

export const NavMenuItem = ({ action, label }: NavMenuItemProps): JSX.Element => {
  return (
    <StyledLi onClick={action}>{label}</StyledLi>
  );
}

NavMenuItem.defaultProps = {
  action: () => undefined,
  label: '',
}
