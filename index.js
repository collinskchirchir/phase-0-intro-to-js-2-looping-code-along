const names = ['Collins', 'Evans', 'Tony', 'Dennis', 'Clifford'];

function writeCards(arry, eventName){
   const msgArry = []
   for(let name = 0; name < arry.length; name++)
   {  
      let greeting = (`Thank you, ${arry[name]}, for the wonderful ${eventName} gift!`);
      msgArry.push(greeting);
   }
   return msgArry;
}

function countDown(numb)
{
   let intial = numb;
   while(numb >= 0)
   {
      console.log(numb);
      numb--;
   }
}
countDown(10)