/*
  Three.js Solar System
  Víctor Rendón Suárez | A01022462
  10/09/2018
*/
var renderer = null,
  scene = null,
  camera = null,
  orbitControls = null,
  root = null,
  sunGroup = null,
  planetGroup = new THREE.Object3D,
  mercuryGroup = new THREE.Object3D,
  venusGroup = new THREE.Object3D,
  earthGroup = new THREE.Object3D,
  marsGroup = new THREE.Object3D,
  jupiterGroup = new THREE.Object3D,
  saturnGroup = new THREE.Object3D,
  uranusGroup = new THREE.Object3D,
  neptuneGroup = new THREE.Object3D,
  plutoGroup = new THREE.Object3D,
  asteroids1 = new THREE.Object3D,
  asteroids2 = new THREE.Object3D,
  asteroids3 = new THREE.Object3D,
  asteroids4 = new THREE.Object3D,
  asteroids5 = new THREE.Object3D,
  asteroids6 = new THREE.Object3D,
  asteroids7 = new THREE.Object3D,
  asteroids8 = new THREE.Object3D,
  asteroids9 = new THREE.Object3D,
  asteroids10 = new THREE.Object3D,
  asteroids11 = new THREE.Object3D,
  asteroids12 = new THREE.Object3D,
  asteroids13 = new THREE.Object3D,
  asteroids14 = new THREE.Object3D,
  asteroids15 = new THREE.Object3D,
  asteroids16 = new THREE.Object3D,
  asteroids17 = new THREE.Object3D,
  asteroids18 = new THREE.Object3D,
  asteroids19 = new THREE.Object3D,
  asteroids20 = new THREE.Object3D,
  asteroids21 = new THREE.Object3D,
  asteroids22 = new THREE.Object3D,
  asteroids23 = new THREE.Object3D,
  asteroids24 = new THREE.Object3D,
  asteroids25 = new THREE.Object3D,
  asteroids26 = new THREE.Object3D,
  asteroids27 = new THREE.Object3D,
  asteroids28 = new THREE.Object3D,
  asteroids29 = new THREE.Object3D,
  asteroids30 = new THREE.Object3D;

var phobosGroup = new THREE.Object3D,
  deimosGroup = new THREE.Object3D,
  ganymedeGroup = new THREE.Object3D,
  calistoGroup = new THREE.Object3D,
  ioGroup = new THREE.Object3D,
  europaGroup = new THREE.Object3D,
  amaltheaGroup = new THREE.Object3D,
  thebeGroup = new THREE.Object3D,
  titanGroup = new THREE.Object3D,
  rheaGroup = new THREE.Object3D,
  iapetusGroup = new THREE.Object3D,
  dioneGroup = new THREE.Object3D,
  titaniaGroup = new THREE.Object3D,
  oberonGroup = new THREE.Object3D,
  umbrielGroup = new THREE.Object3D,
  tritonGroup = new THREE.Object3D,
  proteusGroup = new THREE.Object3D;

var sun = null,
  mercury = null,
  venus = null,
  earth = null,
  mars = null,
  jupiter = null,
  saturn = null,
  saturnRing = null,
  uranusRing = null,
  neptune = null,
  pluto = null,
  moon = null,
  phobos = null,
  deimos = null,
  ganymede = null,
  calisto = null,
  io = null,
  europa = null,
  amalthea = null,
  thebe = null,
  titan = null,
  rhea = null,
  iapetus = null,
  dione = null,
  titania = null,
  oberon = null,
  umbriel = null,
  triton = null,
  proteus = null;

var sunUrl = "../images/sun.jpg",
  mercuryUrl = "../images/mercury.jpg",
  venusUrl = "../images/venus.jpg",
  earthUrl = "../images/earth.jpg",
  marsUrl = "../images/mars.jpg",
  jupiterUrl = "../images/jupiter.jpg",
  saturnUrl = "../images/saturn.jpg",
  uranusUrl = "../images/uranus.jpg",
  neptuneUrl = "../images/neptune.jpg",
  plutoUrl = "../images/pluto.jpeg",
  earthMoonUrl = "../images/moon_1024.jpg",
  ast1Url = '../images/ast1.jpeg',
  ast2Url = '../images/ast2.png',
  ast3Url = '../images/ast3.jpg',
  backgroundURL = '../images/starfield.png';

var duration = 20000; // ms
var currentTime = Date.now();

var texture = null;
var pointLight = null;

var position = null,
  scale = null;

function createTexture(url) {
  var texture = new THREE.TextureLoader().load(url);
  return new THREE.MeshBasicMaterial({ map: texture });
}

function createPlanet(geometry, texture, pos, scale) {
  planet = new THREE.Mesh(geometry, texture);
  planet.position.set(pos, 0, 0);
  planet.scale.set(scale, scale, scale);
  planet.visible = true;
  orbit = addOrbit(pos);
  sunGroup.add(orbit);
  return planet;
}

function createAsteroid(texture) {
  var geometry = new THREE.SphereGeometry(Math.sqrt(2), 90, 90);
  planet = new THREE.Mesh(geometry, texture);
  planet.position.set(105, 0, 0);
  planet.scale.set(0.5, 0.5, 0.5);
  planet.visible = true;
  return planet;
}

function addOrbit(length) {
  var lineGeometry = new THREE.CircleGeometry(length, 128);
  var lineMaterial = new THREE.LineBasicMaterial({color: 0xA9A9A9});
  lineGeometry.vertices.shift();
  orbit = new THREE.LineLoop(lineGeometry, lineMaterial);
  orbit.rotation.x = Math.PI / 2;
  return orbit;
}

function addRing(length, width, rot, color) {
  var geometry = new THREE.TorusGeometry(length, width, 2, 100);
  var material = new THREE.MeshBasicMaterial( { color: color } );
  var ring = new THREE.Mesh(geometry, material);
  ring.rotation.set(rot,0,0);
  return ring;
}

function asteroidBelt() {
  texture1 = createTexture(ast1Url);
  texture2 = createTexture(ast2Url);
  texture3 = createTexture(ast3Url);
  asteroid1 = createAsteroid(texture1);
  asteroid2 = createAsteroid(texture2);
  asteroid3 = createAsteroid(texture3);
  asteroid4 = createAsteroid(texture1);
  asteroid5 = createAsteroid(texture2);
  asteroid6 = createAsteroid(texture3);
  asteroid7 = createAsteroid(texture1);
  asteroid8 = createAsteroid(texture2);
  asteroid9 = createAsteroid(texture3);
  asteroid10 = createAsteroid(texture1);
  asteroid11 = createAsteroid(texture2);
  asteroid12 = createAsteroid(texture3);
  asteroid13 = createAsteroid(texture1);
  asteroid14 = createAsteroid(texture2);
  asteroid15 = createAsteroid(texture3);
  asteroid16 = createAsteroid(texture1);
  asteroid17 = createAsteroid(texture2);
  asteroid18 = createAsteroid(texture3);
  asteroid19 = createAsteroid(texture1);
  asteroid20 = createAsteroid(texture2);
  asteroid21 = createAsteroid(texture3);
  asteroid22 = createAsteroid(texture1);
  asteroid23 = createAsteroid(texture2);
  asteroid24 = createAsteroid(texture3);
  asteroid25 = createAsteroid(texture1);
  asteroid26 = createAsteroid(texture2);
  asteroid27 = createAsteroid(texture3);
  asteroid28 = createAsteroid(texture1);
  asteroid29 = createAsteroid(texture2);
  asteroid30 = createAsteroid(texture3);
  asteroids1.add(asteroid1);
  asteroids2.add(asteroid2);
  asteroids3.add(asteroid3);
  asteroids4.add(asteroid4);
  asteroids5.add(asteroid5);
  asteroids6.add(asteroid6);
  asteroids7.add(asteroid7);
  asteroids8.add(asteroid8);
  asteroids9.add(asteroid9);
  asteroids10.add(asteroid10);
  asteroids11.add(asteroid11);
  asteroids12.add(asteroid12);
  asteroids13.add(asteroid13);
  asteroids14.add(asteroid14);
  asteroids15.add(asteroid15);
  asteroids16.add(asteroid16);
  asteroids17.add(asteroid17);
  asteroids18.add(asteroid18);
  asteroids19.add(asteroid19);
  asteroids20.add(asteroid20);
  asteroids21.add(asteroid21);
  asteroids22.add(asteroid22);
  asteroids23.add(asteroid23);
  asteroids24.add(asteroid24);
  asteroids25.add(asteroid25);
  asteroids26.add(asteroid26);
  asteroids27.add(asteroid27);
  asteroids28.add(asteroid28);
  asteroids29.add(asteroid29);
  asteroids30.add(asteroid30);
  planetGroup.add(asteroids1, asteroids2, asteroids3, asteroids4, asteroids5,
    asteroids6, asteroids7, asteroids8, asteroids9, asteroids10,
    asteroids11, asteroids12, asteroids13, asteroids14, asteroids15,
    asteroids16, asteroids17, asteroids18, asteroids19, asteroids20,
    asteroids21, asteroids22, asteroids23, asteroids24, asteroids25,
    asteroids26, asteroids27, asteroids28, asteroids29, asteroids30);
}

function animate() {
  var now = Date.now();
  var deltat = now - currentTime;
  currentTime = now;
  var fract = deltat / duration;

  // Planet rotation speeds
  sun.rotation.y += addRotation(0.6, fract);
  mercury.rotation.y += addRotation(1.6, fract);
  venus.rotation.y += addRotation(-1.1, fract);
  earth.rotation.y += addRotation(2.4, fract);
  mars.rotation.y += addRotation(2, fract);
  jupiter.rotation.y += addRotation(4, fract);
  saturn.rotation.y += addRotation(3.2, fract);
  uranus.rotation.y += addRotation(-3.1, fract);
  neptune.rotation.y += addRotation(2.6, fract);
  pluto.rotation.y += addRotation(1.8, fract);
  // Planet orbit speeds
  mercuryGroup.rotation.y += addRotation(4.78, fract);
  venusGroup.rotation.y += addRotation(3.5, fract);
  earthGroup.rotation.y += addRotation(2.97, fract);
  marsGroup.rotation.y += addRotation(2.4, fract);
  jupiterGroup.rotation.y += addRotation(1.31, fract);
  saturnGroup.rotation.y += addRotation(1, fract);
  uranusGroup.rotation.y += addRotation(0.68, fract);
  neptuneGroup.rotation.y += addRotation(0.54, fract);
  plutoGroup.rotation.y += addRotation(0.53, fract);
  // asteroidGroup.rotation.y += addRotation(2, fract);
  // Moon rotation speeds
  phobos.rotation.y += addRotation(2.2, fract);
  deimos.rotation.y += addRotation(1.5, fract);
  ganymede.rotation.y += addRotation(2, fract);
  calisto.rotation.y += addRotation(1.8, fract);
  io.rotation.y += addRotation(1.1, fract);
  europa.rotation.y += addRotation(1.6, fract);
  amalthea.rotation.y += addRotation(1.3, fract);
  thebe.rotation.y += addRotation(0.6, fract);
  titan.rotation.y += addRotation(2, fract);
  rhea.rotation.y += addRotation(1.6, fract);
  iapetus.rotation.y += addRotation(1, fract);
  dione.rotation.y += addRotation(0.7, fract);
  titania.rotation.y += addRotation(2.2, fract);
  oberon.rotation.y += addRotation(1.5, fract);
  umbriel.rotation.y += addRotation(1, fract);
  triton.rotation.y += addRotation(2.4, fract);
  proteus.rotation.y += addRotation(1.9, fract);
  // // Moon orbit speeds
  phobosGroup.rotation.y += addRotation(2.2, fract);
  deimosGroup.rotation.y += addRotation(1.5, fract);
  ganymedeGroup.rotation.y += addRotation(2, fract);
  calistoGroup.rotation.y += addRotation(1.8, fract);
  ioGroup.rotation.y += addRotation(1.1, fract);
  europaGroup.rotation.y += addRotation(1.6, fract);
  amaltheaGroup.rotation.y += addRotation(1.3, fract);
  thebeGroup.rotation.y += addRotation(0.6, fract);
  titanGroup.rotation.y += addRotation(2, fract);
  rheaGroup.rotation.y += addRotation(1.6, fract);
  iapetusGroup.rotation.y += addRotation(1, fract);
  dioneGroup.rotation.y += addRotation(0.7, fract);
  titaniaGroup.rotation.y += addRotation(2.2, fract);
  oberonGroup.rotation.y += addRotation(1.5, fract);
  umbrielGroup.rotation.y += addRotation(1, fract);
  tritonGroup.rotation.y += addRotation(2.4, fract);
  proteusGroup.rotation.y += addRotation(1.9, fract);
  // Asteroid Field
  asteroids1.rotation.y += addRotation(0.25, fract);
  asteroids2.rotation.y += addRotation(0.5, fract);
  asteroids3.rotation.y += addRotation(0.75, fract);
  asteroids4.rotation.y += addRotation(1, fract);
  asteroids5.rotation.y += addRotation(1.25, fract);
  asteroids6.rotation.y += addRotation(1.5, fract);
  asteroids7.rotation.y += addRotation(1.75, fract);
  asteroids8.rotation.y += addRotation(2, fract);
  asteroids9.rotation.y += addRotation(2.25, fract);
  asteroids10.rotation.y += addRotation(2.5, fract);
  asteroids11.rotation.y += addRotation(2.75, fract);
  asteroids12.rotation.y += addRotation(3, fract);
  asteroids13.rotation.y += addRotation(3.25, fract);
  asteroids14.rotation.y += addRotation(-0.25, fract);
  asteroids15.rotation.y += addRotation(-0.5, fract);
  asteroids16.rotation.y += addRotation(-0.75, fract);
  asteroids17.rotation.y += addRotation(-1, fract);
  asteroids18.rotation.y += addRotation(-1.25, fract);
  asteroids19.rotation.y += addRotation(-1.5, fract);
  asteroids20.rotation.y += addRotation(-1.75, fract);
  asteroids21.rotation.y += addRotation(-2, fract);
  asteroids22.rotation.y += addRotation(-2.25, fract);
  asteroids23.rotation.y += addRotation(-2.5, fract);
  asteroids24.rotation.y += addRotation(-2.75, fract);
  asteroids25.rotation.y += addRotation(-3, fract);
  asteroids26.rotation.y += addRotation(1.6, fract);
  asteroids27.rotation.y += addRotation(2.4, fract);
  asteroids28.rotation.y += addRotation(-1.6, fract);
  asteroids29.rotation.y += addRotation(-2.4, fract);
  asteroids30.rotation.y += addRotation(2.8, fract);
}

function addRotation(n, fract) {
  return Math.PI * n * fract;
}

function run() {
  requestAnimationFrame(function() { run(); });
  // Render the scene
  renderer.render( scene, camera );
  // Update the camera controller
  orbitControls.update();
  animate();
}

function createScene(canvas) {
  // Create the Three.js renderer and attach it to our canvas
  renderer = new THREE.WebGLRenderer( { canvas: canvas, antialias: true } );
  // Set the viewport size
  renderer.setSize(canvas.width, canvas.height);
  // Create a new Three.js scene
  scene = new THREE.Scene();

  // Add  a camera so we can view the scene
  camera = new THREE.PerspectiveCamera( 45, canvas.width / canvas.height, 1, 4000 );
  // camera.position.set(22, 6, 12);
  camera.position.set(381, 149, 91);
  scene.add(camera);

  // Background image
  var backgroundImg = new THREE.TextureLoader().load(backgroundURL);
  backgroundImg.wrapS = backgroundImg.wrapT = THREE.RepeatWrapping;
  backgroundImg.repeat.set(1,1);
  scene.background = backgroundImg;

  // Create a group to hold all the objects
  root = new THREE.Object3D;
  // Create a Sun group to hold the planets
  sunGroup = new THREE.Object3D;
  root.add(sunGroup);

  // Create the sphere geometry
  var geometry = new THREE.SphereGeometry(Math.sqrt(2), 120, 120);
  // Sun
  texture = createTexture(sunUrl);
  // Function receives (geometry, texture, posX, scale)
  sun = createPlanet(geometry, texture, 0, 15);
  sunGroup.add(sun);

  pointLight = new THREE.PointLight (0x0000ff, 0.6, 200);
  pointLight.position.set(0, 0, 0);
  sunGroup.add(pointLight);

  // Create Planet group
  sunGroup.add(planetGroup);

  // Mercury
  texture = createTexture(mercuryUrl);
  mercury = createPlanet(geometry, texture, 35, 2.5);
  mercuryGroup.add(mercury);
  planetGroup.add(mercuryGroup);

  // Venus
  texture = createTexture(venusUrl);
  venus = createPlanet(geometry, texture, 50, 3);
  venusGroup.add(venus);
  planetGroup.add(venusGroup);

  moonTexture = createTexture(ast1Url);
  moonTexture2 = createTexture(ast2Url);
  moonTexture3 = createTexture(ast3Url);

  // Earth
  texture = createTexture(earthUrl);
  earth = createPlanet(geometry, texture, 66, 3.4);
  earthGroup.add(earth);
  planetGroup.add(earthGroup);
    // Moon
  texture = createTexture(earthMoonUrl);
  moon = createPlanet(geometry, texture, 2.4, 0.21);
  earth.add(moon, addOrbit(2.4));

  // Mars
  texture = createTexture(marsUrl);
  mars = createPlanet(geometry, texture, -85, 2.8);
  marsGroup.add(mars);
  planetGroup.add(marsGroup);
    // Moons
  phobos = createPlanet(geometry, moonTexture, 2.2, 0.16);
  phobosGroup.add(phobos);
  mars.add(phobosGroup, addOrbit(2.2));
  deimos = createPlanet(geometry, moonTexture2, 2.9, 0.16);
  deimosGroup.add(deimos);
  mars.add(deimosGroup, addOrbit(2.9));

  asteroidBelt();

  // Jupiter
  texture = createTexture(jupiterUrl);
  jupiter = createPlanet(geometry, texture, 135, 5.3);
  jupiterGroup.add(jupiter);
  planetGroup.add(jupiterGroup);
    // Moons
  ganymede = createPlanet(geometry, moonTexture, 1.8, 0.16);
  ganymedeGroup.add(ganymede);
  jupiter.add(ganymedeGroup, addOrbit(1.8));
  calisto = createPlanet(geometry, moonTexture2, 2.4, 0.1);
  calistoGroup.add(calisto);
  jupiter.add(calistoGroup, addOrbit(2.4));
  io = createPlanet(geometry, moonTexture3, 2.9, 0.1);
  ioGroup.add(io);
  jupiter.add(ioGroup, addOrbit(2.9));
  europa = createPlanet(geometry, moonTexture, 3.4, 0.1);
  europaGroup.add(europa);
  jupiter.add(europaGroup, addOrbit(3.4));
  amalthea = createPlanet(geometry, moonTexture2, 3.9, 0.1);
  amaltheaGroup.add(amalthea);
  jupiter.add(amaltheaGroup, addOrbit(3.9));
  thebe = createPlanet(geometry, moonTexture3, 4.3, 0.1);
  thebeGroup.add(thebe);
  jupiter.add(thebeGroup, addOrbit(4.3));

  // Saturn
  texture = createTexture(saturnUrl);
  saturn = createPlanet(geometry, texture, -180, 4.4);
  saturnGroup.add(saturn);
  planetGroup.add(saturnGroup);
    // Moons
  titan = createPlanet(geometry, moonTexture2, 2.7, 0.13);
  titanGroup.add(titan);
  saturn.add(titanGroup, addOrbit(2.7));
  rhea = createPlanet(geometry, moonTexture3, 3.3, 0.13);
  rheaGroup.add(rhea);
  saturn.add(rheaGroup, addOrbit(3.3));
  iapetus = createPlanet(geometry, moonTexture, 3.8, 0.13);
  iapetusGroup.add(iapetus);
  saturn.add(iapetusGroup, addOrbit(3.8));
  dione = createPlanet(geometry, moonTexture2, 4.3, 0.13);
  dioneGroup.add(dione);
  saturn.add(dioneGroup, addOrbit(4.3));
    // Rings
    // Function receives (ring radius, width, rotation, color)
  saturn.add(addRing(2, 0.1, 80, 0xd7bd89), addRing(2.25, 0.1, 80, 0xd7bd5c));

  // Uranus
  texture = createTexture(uranusUrl);
  uranus = createPlanet(geometry, texture, 212, 3.8);
  uranusGroup.add(uranus);
  planetGroup.add(uranusGroup);
    // Moons
  titania = createPlanet(geometry, moonTexture3, 2, 0.13);
  titaniaGroup.add(titania);
  uranus.add(titaniaGroup, addOrbit(2));
  oberon = createPlanet(geometry, moonTexture2, 2.6, 0.13);
  oberonGroup.add(oberon);
  uranus.add(oberonGroup, addOrbit(2.6));
  umbriel = createPlanet(geometry, moonTexture, 3.1, 0.13);
  umbrielGroup.add(umbriel);
  uranus.add(umbrielGroup, addOrbit(3.1));
    // Ring
  uranus.add(addRing(1.6, 0.05, 90, 0x98e2fa));

  // Neptune
  texture = createTexture(neptuneUrl);
  neptune = createPlanet(geometry, texture, -233, 3.6);
  neptuneGroup.add(neptune);
  planetGroup.add(neptuneGroup);
    // Moons
  triton = createPlanet(geometry, moonTexture3, 1.95, 0.13);
  tritonGroup.add(triton);
  neptune.add(tritonGroup, addOrbit(1.95));
  proteus = createPlanet(geometry, moonTexture2, 2.65, 0.13);
  proteusGroup.add(proteus);
  neptune.add(proteusGroup, addOrbit(2.65));
    // Ring
  neptune.add(addRing(1.5, 0.03, 45, 0x99ccff));

  // Pluto
  texture = createTexture(plutoUrl);
  pluto = createPlanet(geometry, texture, 256, 1.5);
  plutoGroup.add(pluto);
  planetGroup.add(plutoGroup);

  scene.add(root);
}
