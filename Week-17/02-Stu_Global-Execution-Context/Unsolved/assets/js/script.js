// 1) Where is carNoise stored?
//global execution context
const carNoise = 'Honk';
// 2) Where is goFast stored?
// global execution context
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // Speed is assigned in the creation phase.

  // 5) Where is makeNoise stored?
  // In the goFast function execution context
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // execute makenoise function with carNoise.
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// if confirmed, execute the goFast function.
if (confirm("Do you want to go fast?")) {
  goFast(80);
}
