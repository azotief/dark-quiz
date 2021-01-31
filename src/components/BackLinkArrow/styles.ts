import styled from 'styled-components';
import Link from '../Link';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  transition: 0.3s;
  &:hover {
    opacity: 0.5;
  }
  text-decoration: none;
  color: #fff;
  display: flex !important;
  align-items: center;
`;

export const SVG = styled.svg`
  vertical-align: middle;
`;
