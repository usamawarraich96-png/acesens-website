import { useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Lightformer } from '@react-three/drei'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import * as THREE from 'three'

const BLUE = new THREE.Color('#1A9DFF')
const CYAN = new THREE.Color('#47D8FF')

/** Faint dotted "digital globe" points on a sphere shell. */
function GlobeDots() {
  const points = useMemo(() => {
    const N = 340
    const arr = new Float32Array(N * 3)
    const golden = Math.PI * (3 - Math.sqrt(5))
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2
      const r = Math.sqrt(1 - y * y)
      const t = golden * i
      arr[i * 3] = Math.cos(t) * r * 1.72
      arr[i * 3 + 1] = y * 1.72
      arr[i * 3 + 2] = Math.sin(t) * r * 1.72
    }
    return arr
  }, [])
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[points, 3]} />
      </bufferGeometry>
      <pointsMaterial color={CYAN} size={0.028} sizeAttenuation transparent opacity={0.75} />
    </points>
  )
}

/** Subtle translucent digital globe: faint glass shell, latitude wireframe,
 *  dotted surface and a soft inner glow — kept quiet so the chrome logo
 *  reads clearly in front of it (matching the reference). */
function EnergyCore() {
  const group = useRef<THREE.Group>(null)
  const wire = useRef<THREE.LineSegments>(null)
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.1
    if (wire.current) wire.current.rotation.y -= delta * 0.06
  })
  return (
    <group ref={group}>
      {/* very faint volume shell (additive, transparent) */}
      <mesh>
        <sphereGeometry args={[1.95, 48, 48]} />
        <meshBasicMaterial
          color="#0f3f78"
          transparent
          opacity={0.16}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>
      {/* wireframe globe */}
      <lineSegments ref={wire}>
        <edgesGeometry args={[new THREE.IcosahedronGeometry(1.9, 1)]} />
        <lineBasicMaterial color={BLUE} transparent opacity={0.2} depthWrite={false} />
      </lineSegments>
      {/* soft inner glow */}
      <mesh>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshBasicMaterial
          color={CYAN}
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      <GlobeDots />
    </group>
  )
}

/** Glowing circular podium the logo/sphere sits on. */
function Podium() {
  const ring = useRef<THREE.Mesh>(null)
  useFrame((_, delta) => {
    if (ring.current) ring.current.rotation.z += delta * 0.25
  })
  return (
    <group position={[0, -2.7, 0]} rotation={[Math.PI / 2.05, 0, 0]}>
      <mesh>
        <ringGeometry args={[2.1, 2.7, 64]} />
        <meshBasicMaterial color={BLUE} transparent opacity={0.28} side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={ring}>
        <ringGeometry args={[1.5, 1.62, 64]} />
        <meshBasicMaterial color={CYAN} transparent opacity={0.7} side={THREE.DoubleSide} />
      </mesh>
      <mesh>
        <circleGeometry args={[1.4, 48]} />
        <meshBasicMaterial color={BLUE} transparent opacity={0.12} side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}

function CameraRig() {
  const { camera, pointer } = useThree()
  useFrame(() => {
    camera.position.x += (pointer.x * 0.6 - camera.position.x) * 0.04
    camera.position.y += (pointer.y * 0.4 - camera.position.y) * 0.04
    camera.lookAt(0, 0, 0)
  })
  return null
}

export default function EnergyScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 42 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 3, 5]} intensity={45} color="#1A9DFF" />
      <pointLight position={[-5, -2, 2]} intensity={22} color="#FF7A1A" />
      <pointLight position={[0, 4, -4]} intensity={18} color="#47D8FF" />

      <EnergyCore />
      <Podium />

      {/* Procedural studio environment (no external HDR fetch) for chrome
          reflections + glass refraction. */}
      <Environment resolution={256} frames={1}>
        <Lightformer intensity={2.2} color="#cfe6ff" position={[0, 4, 2]} scale={[8, 3, 1]} />
        <Lightformer intensity={1.4} color="#1A9DFF" position={[-4, 1, 2]} scale={[3, 6, 1]} />
        <Lightformer intensity={1.1} color="#FF7A1A" position={[5, -1, 1]} scale={[3, 5, 1]} />
        <Lightformer intensity={1.6} color="#ffffff" position={[0, -3, 3]} scale={[6, 2, 1]} />
      </Environment>
      <CameraRig />

      <EffectComposer>
        <Bloom intensity={0.55} luminanceThreshold={0.4} luminanceSmoothing={0.9} mipmapBlur />
      </EffectComposer>
    </Canvas>
  )
}
