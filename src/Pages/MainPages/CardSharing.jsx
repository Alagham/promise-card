import React from "react";
import styled from "styled-components";

const ShareContainer = styled.div`
  text-align: center;
  padding: 50px 20px;
`;

const CardPreview = styled.div`
  margin-bottom: 20px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
`;

const ShareButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function CardSharing() {
  return (
    <ShareContainer>
      <CardPreview>
        <h2>Your Card</h2>
        <p>Here’s a preview of your card message and title.</p>
      </CardPreview>
      <ShareButton>Copy Link</ShareButton>
      <ShareButton>Share on Social Media</ShareButton>
    </ShareContainer>
  );
}

export default CardSharing;
