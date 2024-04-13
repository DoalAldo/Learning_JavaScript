const name="Darmatius Aldo Gunawan";


const regex=/aldo/i;

let result=regex.exec(name);
console.info(result);

let test= regex.test(name);
console.info(test);

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const email="Aldodoal19@gmail.com";

if (emailRegex.test(email)) {
  console.log("Valid email address");
} else {
  console.log("Invalid email address");
}