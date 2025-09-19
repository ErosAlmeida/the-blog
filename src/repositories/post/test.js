const promessa = new Promise ((resulte, reject) => {
  const sucesso = true;

  setTimeout(() => {
    if (sucesso) {

      resulte("SUCESSO");
    }else{
      reject("eroooo");
    }
  }, 2000);

  async function executar(){
    try{
      const resultado = await promessa;
      console.log(resultado);
    }catch(erro){
      console.error(erro);
    }finally{
      console.log(finalizado);
    }
  }
executar();

})
