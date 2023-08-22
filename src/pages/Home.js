import React from 'react';
import {styled} from "styled-components";
//import ProductList from '../components/ProductList';

const Home = () => {

  return (
    <Wrapper className="test">Home</Wrapper>
  );
};
const Wrapper = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export default Home;
