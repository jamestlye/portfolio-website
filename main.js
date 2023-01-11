import './style.css'

import * as THREE from 'three'
import { OrbitControls } from '@three-ts/orbit-controls';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import Typed from 'typed.js';
var typed = new Typed('.typing', {
  strings: ["Mechatronics Engineer","Software Developer","One Piece Enjoyer", "CAD Designer","Hardware Developer"],
  typeSpeed: 65,
  backSpeed: 50,
  loop: true
});


const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(80,1, 1, 1000)//change aspect ratio
camera.position.set(0,5,3)
camera.lookAt(0,3,0)
scene.add(camera)

var controls

var ship

const loader = new GLTFLoader()
loader.load('one_piece_-going_merry.glb', function (gltf){
  ship = gltf.scene
  scene.add(ship)
  // ship.position(2,-1,-1)
})




// const geometry = new THREE.TorusKnotGeometry(0.5, 0.2, 100, 22)
// const material = new THREE.MeshStandardMaterial({ color: 'blue'})
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)

const pointLight = new THREE.PointLight(0xffffff, 2.7)
pointLight.position.set(5,5)

const ambientLight = new THREE.AmbientLight('white')
scene.add(pointLight, ambientLight)


const renderer = new THREE.WebGLRenderer({ canvas: render, alpha: true}) //will create an empty one
renderer.setSize(600,600) //adjust size
// document.body.append(renderer.domElement) //adding renderer to body
//this canvas can be styled however to whatever position

controls = new OrbitControls(camera, renderer.domElement)
camera.lookAt(0,2.5,0)
controls.enablePan = false
controls.enableDamping = true
controls.dampingFactor = 0.01
controls.rotateSpeed = 0.005
controls.enableZoom = false
controls.maxPolarAngle = Math.PI/2.6
controls.minPolarAngle = Math.PI/3.4

const cursor = {x:0, y:0 }

window.addEventListener('mousemove', (_event)=>
{
  cursor.x = _event.clientX / window.innerWidth -0.5
  cursor.y = _event.clientY /window.innerHeight -0.5
})

window.addEventListener('resize', () => {
  // renderer.setSize(window.innerWidth, window.innerHeight)
  // camera.aspect = window.innerWidth/ window.innerHeight

  camera.updateProjectionMatrix()
})


const tick = () =>
{
    controls.update()
    camera.lookAt(0,2.5,0)
    const cameraX = cursor.x
    const cameraY = -cursor.y
    // camera.position.x += (cameraX - camera.position.x)/50
    // camera.position.y += (cameraY - camera.position.y)/50


    renderer.render(scene, camera)


    window.requestAnimationFrame(tick)
    ship.rotation.y += -cameraX/100
    ship.rotation.x += (cameraY/5 - ship.rotation.x)/50


    // mesh.rotation.y += (cameraX - mesh.rotation.y)/50
    // mesh.rotation.x += (cameraY - mesh.rotation.x)/50



}
tick()