import React from "react";
import styled from "styled-components";
import HeroBackground from "../../assets/Hero-bg.png"

const HeroContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 100px 20px;
  /* background: #092262; */
  background-image: url(${HeroBackground});
  
  color: white;
`;

const Content = styled.div`
  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }

  button {
    background-color: #000;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
      background-color: #333;
    }
  }
`;

function HeroSection() {
  return (
    <HeroContainer>
      <Content>
        <h1>Create Personalized Promise Cards</h1>
        <p>Customize, share, and make gifting special.</p>
        <button>Get Started</button>
      </Content>
    </HeroContainer>
  );
}

export default HeroSection;
