








const numeroSorteado = document.querySelector('div.box h1');
const botaoSortear = document.querySelector('div.box button');
 
 const roleta = []; 
  
  console.log('numero adicionado',roleta)

  for (indice = 0; indice<= 50; indice++){
    roleta.push(indice);
  }

  botaoSortear.addEventListener('click',function(){
       numeroSorteado.innerHTML = 'o numero sorteado foi de'+roleta[Math.floor(Math.random()*roleta.length)]
  });


