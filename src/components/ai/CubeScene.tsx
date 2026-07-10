import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshTransmissionMaterial } from '@react-three/drei'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import * as THREE from 'three'

const NODE_COUNT = 46 // capped for performance
const BRAND = new THREE.Color('#34d399')

/** Generate brain-ish node positions + short connecting segments once. */
function useBrain() {
  return useMemo(() => {
    const nodes: THREE.Vector3[] = []
    const golden = Math.PI * (3 - Math.sqrt(5))
    for (let i = 0; i < NODE_COUNT; i++) {
      const y = 1 - (i / (NODE_COUNT - 1)) * 2
      const r = Math.sqrt(1 - y * y)
      const theta = golden * i
      const jitter = 0.85 + Math.random() * 0.25
      // squash into a rounded, brain-like ellipsoid
      nodes.push(
        new THREE.Vector3(
          Math.cos(theta) * r * 1.15 * jitter,
          y * 0.95 * jitter,
          Math.sin(theta) * r * 1.25 * jitter,
        ),
      )
    }

    // connect each node to its two nearest neighbours
    const segs: number[] = []
    for (let i = 0; i < nodes.length; i++) {
      const dists = nodes
        .map((n, j) => ({ j, d: nodes[i].distanceTo(n) }))
        .filter((o) => o.j !== i)
        .sort((a, b) => a.d - b.d)
        .slice(0, 2)
      for (const { j } of dists) {
        segs.push(nodes[i].x, nodes[i].y, nodes[i].z, nodes[j].x, nodes[j].y, nodes[j].z)
      }
    }

    const points = new Float32Array(nodes.length * 3)
    nodes.forEach((n, i) => n.toArray(points, i * 3))
    return { points, segments: new Float32Array(segs) }
  }, [])
}

function Brain() {
  const { points, segments } = useBrain()
  const ref = useRef<THREE.Group>(null)
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y -= delta * 0.15
  })
  return (
    <group ref={ref}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[points, 3]} />
        </bufferGeometry>
        <pointsMaterial color={BRAND} size={0.08} sizeAttenuation transparent opacity={0.95} />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[segments, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color={BRAND} transparent opacity={0.35} />
      </lineSegments>
    </group>
  )
}

function Cube() {
  const ref = useRef<THREE.Group>(null)
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.25
  })
  return (
    <group ref={ref}>
      <mesh>
        <boxGeometry args={[2.6, 2.6, 2.6]} />
        <MeshTransmissionMaterial
          samples={4}
          resolution={256}
          thickness={0.8}
          roughness={0.15}
          ior={1.25}
          chromaticAberration={0.04}
          transmission={1}
          color="#c9f7e4"
        />
      </mesh>
      {/* glowing edges */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(2.6, 2.6, 2.6)]} />
        <lineBasicMaterial color="#34d399" transparent opacity={0.6} />
      </lineSegments>
    </group>
  )
}

function Pedestal() {
  return (
    <group position={[0, -2.1, 0]}>
      <mesh>
        <cylinderGeometry args={[1.5, 1.7, 0.35, 48]} />
        <meshStandardMaterial color="#0D1B16" metalness={0.6} roughness={0.4} />
      </mesh>
      <mesh position={[0, 0.2, 0]}>
        <torusGeometry args={[1.5, 0.04, 16, 64]} />
        <meshBasicMaterial color="#34d399" />
      </mesh>
    </group>
  )
}

export default function CubeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.4, 7], fov: 42 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={40} color="#34d399" />
      <pointLight position={[-5, -2, -3]} intensity={25} color="#10b981" />

      <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.6}>
        <Cube />
        <Brain />
      </Float>
      <Pedestal />

      <EffectComposer>
        <Bloom intensity={0.9} luminanceThreshold={0.2} luminanceSmoothing={0.9} mipmapBlur />
      </EffectComposer>
    </Canvas>
  )
}
