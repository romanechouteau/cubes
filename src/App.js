import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { add_cube, shuffle, change_odd, stop_odd, reset, easter_egg } from './actions/actions-types'

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
      <ul>
        {cubes.map((cube) => (
            <div key={cube.id}>cube : {cube.id} | specialAnim: {cube.specialAnim.toString()} | easterEgg: {cube.easterEgg.toString()}</div>
          ))}
      </ul>
      <div>
        <button onClick={() => dispatch(add_cube())}>Add cube</button>
        <button onClick={() => dispatch(shuffle())}>Shuffle</button>
        <button onClick={() => dispatch(change_odd())}>Change odd</button>
        <button onClick={() => dispatch(stop_odd())}>Stop odd</button>
        {cubes.length > 0 && <button onClick={() => dispatch(reset())}>Reset</button>}
      </div>
    </div>
  );
}

export default App;
