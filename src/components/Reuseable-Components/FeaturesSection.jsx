import React from "react";
import styled from "styled-components";

const FeaturesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 50px 20px;
  background-color: #fff;

  div {
    text-align: center;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    h3 {
      margin-bottom: 10px;
    }
  }
`;

function FeaturesSection() {
  return (
    <FeaturesContainer>
      <div>
        <h3>Easy Card Creation</h3>
        <p>Create beautiful promise cards in minutes.</p>
      </div>
      <div>
        <h3>Customizable Templates</h3>
        <p>Choose from a variety of designs.</p>
      </div>
      <div>
        <h3>Attach Gifts</h3>
        <p>Make it special with eGifts or cash.</p>
      </div>
    </FeaturesContainer>
  );
}

export default FeaturesSection;
