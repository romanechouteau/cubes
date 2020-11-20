import { useDispatch, useSelector } from 'react-redux'

import { add_cube, shuffle, change_odd, stop_odd, reset } from './actions/actions-types'

const App = () => {
  const cubes = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <div>
      <ul>
        {cubes.map((cube) => (
            <div key={cube.id} >cube : {cube.id}</div>
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
