import styled from 'styled-components'
import { Canvas } from 'react-three-fiber'

const DivCanvas = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`;

const StyledCanvas = ({ camera, children }) => {
  return (
    <DivCanvas>
      <Canvas camera={camera}>
        {children}
      </Canvas>
    </DivCanvas>
  )
}

export default StyledCanvas
