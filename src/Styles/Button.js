import styled from 'styled-components'

const StyledButton = styled.button`
  color: white;
  background-color: #222222;
  font-size: 1em;
  margin: 24px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
`;

const Button = ({ onClick, text }) => {
  return (
    <StyledButton onClick={onClick}>
      {text}
    </StyledButton>
  );
}

export default Button;
