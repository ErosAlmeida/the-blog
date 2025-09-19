const promessa = new Promise((resolve, reject) => {
  const sucesso =  true;

  setTimeout(() => {
    if(sucesso){
      resolve(" Operação realizda com sucesso");
    }else{
      reject("ERROO")
    }
  }, 2000);

  async function executar(){
    try{
      const resultado = await promessa;
      console.log(resultado)
    }catch(erro){
      console.erro(erro);
    }finally{
      console.log("Operaçao fianlll")
    }

  }
executar();
})

