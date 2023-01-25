import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/astroplayer.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions?.running?.play();
    console.log(animations);
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Sketchfab_model"
          position={[0, 3.83, -0.16]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <group
            name="0c4dabeadce84541b9e25eb4d0c58fc5fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="RootNode">
              <group name="SpaceGuy" />
            </group>
          </group>
        </group>
        <group
          name="Sketchfab_model001"
          position={[0, 3.83, -0.16]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <group
            name="0c4dabeadce84541b9e25eb4d0c58fc5fbx001"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="RootNode1">
              <group name="SpaceGuy001" />
            </group>
          </group>
        </group>
        <group name="Armature">
          <primitive object={nodes.mixamorigHips} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Left} />
          <primitive object={nodes.Ctrl_Hand_IK_Left} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Right} />
          <primitive object={nodes.Ctrl_Hand_IK_Right} />
          <primitive object={nodes.Ctrl_Foot_IK_Left} />
          <primitive object={nodes.Ctrl_LegPole_IK_Left} />
          <primitive object={nodes.Ctrl_Foot_IK_Right} />
          <primitive object={nodes.Ctrl_LegPole_IK_Right} />
          <primitive object={nodes.Ctrl_Master} />
          <skinnedMesh
            name="SpaceGuy_SpaceGuy_0"
            geometry={nodes.SpaceGuy_SpaceGuy_0.geometry}
            material={materials["SpaceGuy.001"]}
            skeleton={nodes.SpaceGuy_SpaceGuy_0.skeleton}
          />
        </group>
        <group name="cs_grp">
          <group name="cs_arm_fk" position={[1.5, 8.5, 0]} scale={0.82} />
          <group name="cs_calf_fk" position={[0.5, 8.5, 0]} scale={0.82} />
          <group name="cs_circle" position={[0.5, 4.5, 0]} scale={0.21} />
          <group name="cs_circle001" position={[0.5, 4.5, 0]} scale={0.21} />
          <group name="cs_circle_025" position={[2.5, 4.5, 0]} scale={0.21} />
          <group
            name="cs_foot"
            position={[0.5, 10.5, 0]}
            rotation={[-Math.PI, 0, 0]}
            scale={0.31}
          />
          <group
            name="cs_foot001"
            position={[0.5, 10.5, 0]}
            rotation={[-Math.PI, 0, 0]}
            scale={0.31}
          />
          <group
            name="cs_foot002"
            position={[0.5, 10.5, 0]}
            rotation={[-Math.PI, 0, 0]}
            scale={0.31}
          />
          <group
            name="cs_foot_01"
            position={[0.5, 18.5, 0]}
            rotation={[0, Math.PI / 2, 0]}
            scale={2.19}
          />
          <group name="cs_foot_roll" position={[0.5, 12.5, 0]} scale={0.59} />
          <group name="cs_forearm_fk" position={[2.5, 8.5, 0]} scale={0.82} />
          <group
            name="cs_hand"
            position={[0.5, 19.5, 0]}
            rotation={[-Math.PI, 0, 0]}
            scale={0.31}
          />
          <group name="cs_head" position={[0.5, 13.5, 0]} scale={0.21} />
          <group name="cs_hips" position={[0.5, 11.5, 0]} scale={0.21} />
          <group name="cs_master" position={[0.5, 17.5, 0]} scale={0.1} />
          <group name="cs_neck" position={[0.5, 14.5, 0]} scale={0.21} />
          <group
            name="cs_shoulder_left"
            position={[0.5, 15.5, 0]}
            rotation={[-Math.PI, -Math.PI / 2, 0]}
            scale={1.04}
          />
          <group
            name="cs_shoulder_right"
            position={[0.5, 16.5, 0]}
            rotation={[-Math.PI, -Math.PI / 2, 0]}
            scale={1.04}
          />
          <group name="cs_sphere" position={[0.5, 2.5, 0]} scale={0.21} />
          <group name="cs_sphere_012" position={[3.5, 2.5, 0]} scale={0.21} />
          <group
            name="cs_square"
            position={[1.5, 1.5, 0]}
            rotation={[-Math.PI, 0, 0]}
            scale={0.15}
          />
          <group
            name="cs_square_2"
            position={[0.5, 1.5, 0]}
            rotation={[-Math.PI, 0, 0]}
            scale={0.15}
          />
          <group name="cs_thigh_fk" position={[0.5, 7.5, 0]} scale={0.82} />
          <group name="cs_toe" position={[0.5, 9.5, 0]} scale={0.43} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/astroplayer.glb");
