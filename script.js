const greetings = "hello world!";

for (let r = 1; r <= 10; r++) {
  let n = r.toString().padStart(3, '0');
  console.log(`regel ${n} ${greetings}`);
}