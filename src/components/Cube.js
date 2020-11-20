import { useRef } from 'react'
import { useFrame } from 'react-three-fiber'

const scale = 0.5

const Cube = (props) => {
  const mesh = useRef()
  let time = 0

  useFrame((state, delta) => {
    time += delta
    if (mesh.current) {
      if (props.specialAnim === false) {
        mesh.current.scale.x = scale
        mesh.current.scale.y = scale
        mesh.current.scale.z = scale
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
      } else {
        mesh.current.scale.x = Math.sin(time) * scale
        mesh.current.scale.y = Math.sin(time) * scale
        mesh.current.scale.z = Math.sin(time) * scale
      }
    }
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[scale, scale, scale]}>
      {props.easterEgg ? <sphereGeometry args={[0.8, 16, 16]} /> : <boxGeometry args={[1, 1, 1]} />}
      <meshStandardMaterial color={`hsl(${props.index * 8 - (Math.floor(props.index / 255) * 255)}, 70%, 55%)`} />
    </mesh>
  )
}

export default Cube
