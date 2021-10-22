import styled from 'styled-components';

export const Container = styled.div`
  width: 365px;
  padding-left: 56px;
  background-color: ${(props) => props.theme.color.purple[700]};
  box-shadow: 1px 2px 4px black;
  border-radius: 8px 0 0;
`;

export default {};
