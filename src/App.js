import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Cube from './components/Cube'
import Button from './Styles/Button'
import Buttons from './Styles/Buttons'
import StyledCanvas from './Styles/StyledCanvas'
import { add_cube, shuffle, sort, change_odd, stop_odd, reset, easter_egg } from './actions/actions-types'

const cubesLine = 7
const easterEggId = 17

const App = () => {
  const cubes = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    if (cubes.length === easterEggId + 1 && cubes[easterEggId].easterEgg === false) {
      dispatch(easter_egg())
    }
  }, [cubes, dispatch])

  return (
    <div>
      <StyledCanvas camera={ { position: [0, 0, 5] } }>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {cubes.map((cube, i) =>
          {
            const y = Math.floor(i / cubesLine)
            const x = i - (cubesLine * y)

            return (
              <Cube
                key={cube.id}
                position={[ -3 + x, 3 - y, 0]}
                index={cube.id}
                color={cube.color}
                specialAnim={cube.specialAnim}
                easterEgg={cube.easterEgg}
              />
            )
          }
        )}
      </StyledCanvas>

      <Buttons>
        <Button onClick={() => dispatch(add_cube())} text='Add cube' />
        <Button onClick={() => dispatch(shuffle())} text='Shuffle' />
        <Button onClick={() => dispatch(sort())} text='Sort' />
        <Button onClick={() => dispatch(change_odd())} text='Change odd' />
        <Button onClick={() => dispatch(stop_odd())} text='Stop odd' />
        {cubes.length > 0 && <Button onClick={() => dispatch(reset())} text='Reset' />}
      </Buttons>
    </div>
  );
}

export default App;
