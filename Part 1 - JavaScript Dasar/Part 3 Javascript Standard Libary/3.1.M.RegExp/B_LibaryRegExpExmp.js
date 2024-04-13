const name= "Darmatius Aldo Gunawan \n aldo Gunawan \n Darmatius Gunawan";
const regex1=/aldo/g;
const regex2=/gunawan/ig;


let result ;

while(result=regex1.exec(name)!== null)
{
  console.info(result);
}
while(result=regex2.exec(name)!== null)
{
  console.info(result);
}