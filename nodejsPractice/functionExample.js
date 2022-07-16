  function add1(a,b){
    return a+b;
  }
  
  function subtract1(a,b){
    return a-b;
  }

  function divide1(a,b){
    return a/b;
  }

  let multiply1 = (a,b) =>{
    return a*b;
  }

  let x = add1(1,2);
  let y = subtract1 (3,7);
  let z = multiply1 (3,3);
  let z1 = divide1 (5,3);
  
  console.log(x);
  console.log(y);
  console.log(z);
  console.log(z1);
  console.log("");
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`What's your name?`, name => {
    console.log(`Hi ${name}!`);
    readline.close();
  });