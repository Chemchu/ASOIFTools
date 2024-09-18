console.log(`#### Building... ####`);

console.log(`#### Compiling TailwindCSS... ####`);
// TODO: Compile TailwindCSS

// Create promise and wait 5 seconds
// This is just to simulate a build process
const build = new Promise((resolve) => {
  setTimeout(() => {
    console.log(`#### Build Complete ####`);
    resolve(true);
  }, 1000);
});
