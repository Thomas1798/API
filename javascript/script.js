
document.getElementById("btn-baixar").disabled  =true ; // Desabilito o botão de baixar
const bar =   new Vue({     /// Component do Vue JS e Vuetify
  el: "#app",
  vuetify: new Vuetify(),
  data: () => ({
      rules: [
        value => !!value || 'Required.',
      ],
    }),
});

// Essa função é acionada assim que o usuario clica no botão de tirar print
function takeaShot(){
  let url = document.getElementById('url').value 
  let msg = document.getElementsByClassName('msg')[0]
  msg.innerHTML =  "Aguarde enquanto sua screenshot é renderizada.";
  //Executa a request a api, e passa a response(objeto json) para a funçao principal
  let create = fetch(`https://api.browshot.com/api/v1/screenshot/create?url=${url}/&instance_id=12&size=screen&cache=0&key=gLJJLX3gH99MSrL5kC6pmuYtufhDv`)
   .then((data) => data.json())
   .then((sucess) =>   checkScreenshot(sucess) );
}

//Essa  é a função principal da aplicação. 
function checkScreenshot (sucess) {
  let contador = document.getElementsByClassName('contador')[0];
 let cont = 1 
 let interval = setInterval(check,1000); // Cria um set interval para executar a cada 1 seg a                                         
function check(){                        // função check   
  let info = fetch(`https://api.browshot.com/api/v1/screenshot/info?id=${sucess.id}&key=gLJJLX3gH99MSrL5kC6pmuYtufhDv`)
  .then((data) => data.json())       // Essa função faz o seguinte: Faz uma nova request a api, só que
  .then((sucess) => {                // dessa vez é pra receber a informação de como está o status da nossa screenshot  
                                    // se o status dela já está "finished"
      if(sucess.status=='error'){
        contador.innerHTML = "A requisição falhou, verifique se a url está no formado correto. Exemplo : https://www.youtube.com"
        clearInterval(interval)
      }else if(sucess.status=="finished"){   /// Se tiver finalizado, a screenshot está pronta
        document.getElementsByClassName('msg').innerHTML = "";
          contador.innerHTML="A screenshot está pronta. Clique no botão baixar para dar inicio ao download";
          document.getElementById("btn-baixar").onclick  = function (){  // Entao habilitamos o botao de baixar 
          document.getElementById("btn-baixar").disabled  =false ;        ///  e linkamos o link de donwload a ele
          window.location.href = `https://browshot.com/screenshot/image/${sucess.id}?type=download&scale=1&shot=1`
        }
        clearInterval(interval) /// Por fim fechamos o interval
      }else{
        cont++;
        contador.innerHTML=cont-1;

      }
  });
    }

};





