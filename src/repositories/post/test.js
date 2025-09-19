function rand(min, max){
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (min - max) + min)
}

function esperaAi(msg, tempo){
  return new Promise((resolve, reject)=> {
    if(typeof msg !== 'string') reject(false);

    setTimeout(() =>{
      resolve(msg);
    },tempo)
  });
}

const promisses = [
  esperaAi('Teste',  rand(1000)),
  esperaAi('teste2',  rand(5000)),
  esperaAi('Teste3',  3000),
  'Outro teste',
];

Promise.all(promisses)
.then(function(valor){
  console.log(valor);
})
.catch(function(error){
  console.log(error);
})
