import styled from '@emotion/styled';
import React from 'react';

const StyledForm = styled.form`
  display: flex;
  gap: 4px;

  & > *:first-child:not(style) {
    border-radius: 1rem 0 0 1rem;
  }

  & > *:last-child:not(style) {
    border-radius: 0 1rem 1rem 0;
  }
`;

interface FormProps extends React.PropsWithChildren {
  onSubmit: React.FormEventHandler,
}

export const RoundedForm = ({ children, onSubmit }: FormProps): JSX.Element => {
  return (
    <StyledForm onSubmit={onSubmit}>{children}</StyledForm>
  );
};
