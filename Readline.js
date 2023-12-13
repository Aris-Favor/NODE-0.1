const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  readline.question(`What's your name?`, name => {
    console.log(`Hi ${name}! My name is Aris. Nice to meet you.`);
    readline.close();
  });