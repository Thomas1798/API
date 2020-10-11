let fun = function (sucess) {
    
    
    let contagem =0;

    setInterval(aguardarStatus,1000);
     function  aguardarStatus(){
      let info   =  fetch(
        `https://api.browshot.com/api/v1/screenshot/info?id=${sucess.id}&key=DW0ZLoI5v4ksqdQM8GP8jnsq2iX `)
        .then((data) => data.json())
        .then((res) => render(res));
  
        function render(res){
          if(res.status == 'finished'){
            document.getElementById('counter').innerHTML = "";  
            Vue.component("imagem", {
              props: ["img"],
              template: `<img src="https://browshot.com/screenshot/image/${res.id}" id="img" />`,
            });
            let img = new Vue({
                el: "#imga",
      
              });
        }else{
            contagem++;
            document.getElementById('counter').innerHTML = contagem;
            
          }
        }
    }    
  };
  function takeaShot(){
   let url = document.getElementById('url1').value 
   console.log(url)
   
   let create = fetch(`https://api.browshot.com/api/v1/screenshot/create?url=${url}/&instance_id=12&size=screen&cache=0&key=DW0ZLoI5v4ksqdQM8GP8jnsq2iX`)
    .then((data) => data.json())
    .then((sucess) => fun(sucess));

}


