"use client";
import React, { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { OBJLoader } from "three-stdlib";
import * as THREE from "three";

function RawObj({ path, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0],
  autoRotate = false,
  rotateAxis = "y",
  rotateSpeed = 0.3,
  linearX = 0,
  linearSpeed = 0,
  pointerTilt = false,
  tiltIntensity = 0.15,
  parallax = 0.08,
  damping = 6,
}: {
  path: string;
  scale?: number | [number, number, number];
  position?: [number, number, number];
  rotation?: [number, number, number];
  autoRotate?: boolean;
  rotateAxis?: "x" | "y" | "z";
  rotateSpeed?: number; // radians per second
  linearX?: number; // amplitude in world units
  linearSpeed?: number; // cycles per second
  pointerTilt?: boolean; // enable mouse-based subtle tilt
  tiltIntensity?: number; // radians max for x/y tilt
  parallax?: number; // world units offset for x/y
  damping?: number; // lerp factor
}) {
  const obj = useLoader(OBJLoader, path);
  const s = Array.isArray(scale) ? scale : [scale, scale, scale];
  const group = useRef<THREE.Group>(null);
  const basePos = useMemo(() => new THREE.Vector3(position[0], position[1], position[2]), [position]);
  const baseRot = useMemo(() => new THREE.Euler(rotation[0], rotation[1], rotation[2]), [rotation]);
  obj.traverse((child: any) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      if (!Array.isArray(mesh.material)) {
        (mesh.material as THREE.MeshStandardMaterial).metalness = 0.2;
        (mesh.material as THREE.MeshStandardMaterial).roughness = 0.8;
        (mesh.material as THREE.MeshStandardMaterial).color = new THREE.Color("#dddddd");
      }
    }
  });

  useFrame((state, delta) => {
    if (!group.current) return;
    const g = group.current;

    // target base values
    let targetRotX = baseRot.x;
    let targetRotY = baseRot.y;
    let targetPosX = basePos.x;
    let targetPosY = basePos.y;

    // pointer-driven subtle tilt/parallax
    if (pointerTilt) {
      const px = state.pointer.x; // -1..1
      const py = state.pointer.y; // -1..1
      targetRotX += THREE.MathUtils.clamp(-py * tiltIntensity, -tiltIntensity, tiltIntensity);
      targetRotY += THREE.MathUtils.clamp(px * tiltIntensity, -tiltIntensity, tiltIntensity);
      targetPosX += THREE.MathUtils.clamp(px * parallax, -parallax, parallax);
      targetPosY += THREE.MathUtils.clamp(-py * parallax, -parallax, parallax);
    }

    // optional linear motion on X
    if (linearX && linearSpeed) {
      const t = state.clock.getElapsedTime();
      targetPosX = basePos.x + Math.sin(t * Math.PI * 2 * linearSpeed) * linearX;
    }

    // damped interpolation toward targets only when needed
    if (pointerTilt || (linearX && linearSpeed)) {
      const k = 1 - Math.exp(-damping * delta);
      g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, targetRotX, k);
      g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, targetRotY, k);
      g.position.x = THREE.MathUtils.lerp(g.position.x, targetPosX, k);
      g.position.y = THREE.MathUtils.lerp(g.position.y, targetPosY, k);
    }

    // continuous autorotation on specified axis (additive)
    if (autoRotate) {
      const axis = rotateAxis || "y";
      (g.rotation as any)[axis] += rotateSpeed * delta;
    }
  });
  return (
    <group ref={group} position={position} rotation={rotation}>
      <primitive object={obj} scale={s as any} />
    </group>
  );
}

export default function ObjModel({
  src,
  height = 420,
  scale = 1,
  position = [0, -0.5, 0] as [number, number, number],
  rotation = [0, 0, 0] as [number, number, number],
  controls = false,
  autoRotate = false,
  rotateAxis = "y",
  rotateSpeed = 0.3,
  linearX = 0,
  linearSpeed = 0,
  pointerTilt = false,
  tiltIntensity = 0.15,
  parallax = 0.08,
  damping = 6,
  pointerEvents = "auto",
}: {
  src: string;
  height?: number;
  scale?: number | [number, number, number];
  position?: [number, number, number];
  rotation?: [number, number, number];
  controls?: boolean;
  autoRotate?: boolean;
  rotateAxis?: "x" | "y" | "z";
  rotateSpeed?: number;
  linearX?: number;
  linearSpeed?: number;
  pointerTilt?: boolean;
  tiltIntensity?: number;
  parallax?: number;
  damping?: number;
  pointerEvents?: "auto" | "none";
}) {
  return (
    <div style={{ height, pointerEvents }} className="w-full">
      <Canvas
        camera={{ position: [0, 0, 2.4], fov: 45 }}
        shadows
        style={{ touchAction: 'pan-y' }}
        dpr={[1, 1.5]}
        gl={{ 
          antialias: false, 
          powerPreference: 'high-performance',
          preserveDrawingBuffer: false 
        }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 2, 2]} intensity={0.9} castShadow />
        <Suspense fallback={null}>
          <RawObj path={src} scale={scale} position={position} rotation={rotation}
            autoRotate={autoRotate} rotateAxis={rotateAxis} rotateSpeed={rotateSpeed}
            linearX={linearX} linearSpeed={linearSpeed}
            pointerTilt={pointerTilt} tiltIntensity={tiltIntensity} parallax={parallax} damping={damping}
          />
          <Environment preset="city" />
        </Suspense>
        {controls ? (
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableDamping
            dampingFactor={0.08}
            rotateSpeed={0.6}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        ) : null}
      </Canvas>
    </div>
  );
}
