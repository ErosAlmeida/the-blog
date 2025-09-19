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

    resolve(msg.toUpperCase() + '- passei na promisse');
    return;
  }, tempo);
}

esperaAi("Fase 1", rand(0,3))
.then((valor) => console.log(valor))


