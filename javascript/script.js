let fun = function (sucess) {
  let contagem =0;
  let status = sucess.status;
  console.log(sucess.id)

  };
  function takeaShot(){
   let url = document.getElementById('url1').value 
   console.log(url)
   
   let create = fetch(`https://api.browshot.com/api/v1/screenshot/create?url=${url}/&instance_id=12&size=screen&cache=0&key=whlNhy7e2TaXPjYhEYucXgHXR2OSW`)
    .then((data) => data.json())
    .then((sucess) => fun(sucess));

}

function renderizar(sucess){
  Vue.component("imagem", {
    props: ["img"],
    template: `<img src="https://browshot.com/screenshot/image/${sucess.id}" id="img" />`,
  });
  let img = new Vue({
      el: "#imga",

    });
}

const bar =   new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data: () => ({
      rules: [
        value => !!value || 'Required.',
      ],
    }),
});

const car = new Vue({
   el: "#car",
   vuetify : new Vuetify(),
}); 

