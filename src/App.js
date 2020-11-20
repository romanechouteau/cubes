import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { add_cube, shuffle, sort, change_odd, stop_odd, reset, easter_egg } from './actions/actions-types'
import StyledCanvas from './Styles/StyledCanvas'
import Buttons from './Styles/Buttons'
import Button from './Styles/Button'
import Cube from './components/Cube'

const easterEggId = 17
const cubesLine = 7

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
        {cubes.map((cube, index) => {
          const y = Math.floor(index / cubesLine)
          const x = index - (cubesLine * y)
          return <Cube position={[ -3 + x, 3 - y, 0]} key={cube.id} specialAnim={cube.specialAnim} index={cube.id} color={cube.color} easterEgg={cube.easterEgg}/>
        })}
      </StyledCanvas>
      <Buttons>
        <Button onClick={() => dispatch(add_cube())} text='Add cube'></Button>
        <Button onClick={() => dispatch(shuffle())} text='Shuffle'></Button>
        <Button onClick={() => dispatch(sort())} text='Sort'></Button>
        <Button onClick={() => dispatch(change_odd())} text='Change odd'></Button>
        <Button onClick={() => dispatch(stop_odd())} text='Stop odd'></Button>
        {cubes.length > 0 && <Button onClick={() => dispatch(reset())} text='Reset'></Button>}
      </Buttons>
    </div>
  );
}

export default App;
