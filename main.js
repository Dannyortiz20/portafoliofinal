let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Estuduante de la carrera de Administracón.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
