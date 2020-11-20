import styled from 'styled-components'

const DivButtons = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const Buttons = ({ children }) => {
  return (
    <DivButtons>
      {children}
    </DivButtons>
  )
}

export default Buttons
