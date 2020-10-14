
document.getElementById("btn-baixar").disabled  =true ;
const bar =   new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data: () => ({
      rules: [
        value => !!value || 'Required.',
      ],
    }),
});


  function fun (sucess) {
 let cont = 1 
 let interval = setInterval(check,1000);
 console.log(interval)
    function check(){
  let info = fetch(`https://api.browshot.com/api/v1/screenshot/info?id=${sucess.id}&key=gLJJLX3gH99MSrL5kC6pmuYtufhDv`)
  .then((data) => data.json())
  .then((sucess) => {
  
      if(sucess.status=='error'){
        console.log("Falhou")
      }else if(sucess.status=="finished"){
        console.log("deu certo")
        document.getElementById("btn-baixar").onclick  = function (){
          document.getElementById("btn-baixar").disabled  =false ;
          window.location.href = `https://browshot.com/screenshot/image/${sucess.id}?type=download&scale=1&shot=1`
        }
        clearInterval(interval)
      }else{
        console.log(cont)
        cont++;
      }
  });
    }

};

  function takeaShot(){
   let url = document.getElementById('url').value 
   console.log(url)
   let create = fetch(`https://api.browshot.com/api/v1/screenshot/create?url=${url}/&instance_id=12&size=screen&cache=0&key=gLJJLX3gH99MSrL5kC6pmuYtufhDv`)
    .then((data) => data.json())
    .then((sucess) =>   fun(sucess) );
}



