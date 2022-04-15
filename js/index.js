// Iteration 1: Names and Input
let hacker1 = "Alphinau";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Alisaie";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
};


// Iteration 3: Loops
let driverUpperCase = "";
for (let i = 0; i < hacker1.length -1; i++){
   driverUpperCase += hacker1[i].toUpperCase() + " ";
};
console.log (driverUpperCase + hacker1[hacker1.length -1].toUpperCase());

let navigatorReverse = "";
for (let i = hacker2.length - 1; i >= 0; i--){
  navigatorReverse += hacker2[i];
};
console.log(navigatorReverse);


if (hacker1 === hacker2){
  console.log("What?! You both have the same name?");
}else if (hacker1[0] < hacker2[0]){
  console.log("The driver's name goes first.");
} else if (hacker1[0] > hacker2[0]){
  console.log("Yo, the navigator goes first definitely.");
} else {
  for (i = 0; i < hacker1.length; i++){
    if (hacker1[i] === hacker2[i]){
      continue;
    } else if (hacker1[i] > hacker2[i]){
      console.log("Yo, the navigator goes first definitely.");
      break;
    } else if (hacker1[i] < hacker2[i]){
      console.log("The driver's name goes first.");
      break;
    }
  }
};



let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in molestie lacus, eu luctus quam. Vestibulum ante ipsum primis in faucibus orci luctus ultrices posuere cubilia curae; Ut hendrerit dolor vitae mattis condimentum. Fusce eleifend blandit purus ut sollicitudin. Morbi varius dui vel scelerisque fermentum. Phasellus congue justo nibh. Pellentesque vitae tristique massa. Fusce ac iaculis magna. Donec faucibus arcu a eleifend tristique. Ut vestibulum nec felis eget rutrum. Praesent sit amet leo id velit condimentum molestie eu ut nulla. Curabitur diam nibh, fringilla eu tellus eu, luctus consequat augue. Vivamus porttitor ligula vel lectus sollicitudin, vel efficitur lorem ultricies. Integer ultrices, metus sit amet luctus porta, enim augue feugiat libero, id tincidunt neque erat at orci. Etiam tellus diam, bibendum id eleifend non, ornare tincidunt nunc. Nulla convallis enim ipsum, vel porttitor neque porta sed. Quisque pulvinar eu nunc sed pretium. Sed cursus odio non nulla suscipit, vel molestie mi tincidunt. Integer posuere tellus ac ex laoreet, a posuere ligula vestibulum. Donec a risus ac purus viverra posuere pretium quis lectus. Nunc placerat libero lobortis quam hendrerit tempor. Aliquam tristique eleifend porta. Aenean mauris diam, iaculis sed efficitur et, rutrum id diam. Morbi sodales ultricies lectus, nec pretium dui. Aenean ac nulla mi. Cras varius fringilla enim non tempus. Vestibulum ornare convallis enim, eu pellentesque ligula commodo quis. Vestibulum vel rhoncus ligula, ac porttitor lorem. Maecenas lobortis molestie blandit. Maecenas sit amet imperdiet est, eu gravida nisl. Mauris a felis semper, pellentesque eros nec, porttitor justo. Sed vehicula consequat elit ut sodales. Quisque rutrum turpis quam, vel pharetra eros dapibus convallis. Donec ante quam, egestas eget feugiat eu, fringilla ut turpis. Curabitur scelerisque dui nec ligula faucibus, sit amet finibus magna congue. Fusce lectus elit, porta ut diam at, maximus lacinia nisi. Praesent non pharetra leo. Phasellus ultrices magna sed lacus gravida eleifend. Donec sodales et mi at scelerisque. Donec volutpat faucibus consequat. Nullam vulputate nisi a porttitor porta. Quisque vestibulum, arcu ut condimentum semper, nisi eros finibus urna, vel gravida quam sem non ipsum. Ut ullamcorper arcu et ultrices tristique. Maecenas massa massa, semper eget lobortis in, euismod in tellus."

let words = 0;
for (i = 0; i < loremIpsum.length; i++){
  if (loremIpsum[i] === " "){
    words++;
  }
};
console.log(words + 1);

let etWord = 0;
for (i =0; i < loremIpsum.length; i++){
  if (loremIpsum[i] === " " && loremIpsum[i + 1] === "e" && loremIpsum[i + 2] === "t" && (loremIpsum[i + 3] === " " || loremIpsum[i + 3] === "." || loremIpsum[i + 3] === ",")){
    etWord++;
  }
};
console.log(etWord);


// let phraseToCheck = "Martes";

// for (i = 0; i < phraseToCheck.length; i++){
//   if (phraseToCheck[i] !== phraseToCheck[phraseToCheck.length - (1 + i)]){
//     continue;
//   } else if (phraseToCheck[i] {
//     console.log("")
//   }
// }