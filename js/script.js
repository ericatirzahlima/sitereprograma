var botaoMenuHamburguer = document.querySelector(".botao.menuHamburguer");

function abrirMenu(){
	//declarar uma variavel, pegar navegacao primaria
	var menu = document.querySelector("#navegacaoPrimaria")

	// se tiver com o classname "menuHorizontal visivel" fecha o dropdown
	if (menu.className == "menuHorizontal visivel") {
		//fechar o menuHorizontal
		menu.className = "menuHorizontal";
	}
	else{
		//abrir o menuHorizontal
		//tornar a navegacaiPrimaria visivel, adicionar a classe visivel
		menu.className = "menuHorizontal visivel";
	}
}

botaoMenuHamburguer.onclick = abrirMenu;



// var botaoAmei = document.querySelector(".botao.amei");

// function botaoAmeiVermelho(){
// 	this.className = "botao amei vermelho";
// }

// botaoAmei.onclick = botaoAmeiVermelho;


var botoesAmei = document.querySelectorAll(".botao.amei");

function botaoAmeiVermelho(){
	if (this.className == "botao amei vermelho") {
		this.className = "botao amei";
	}else{
	this.className = "botao amei vermelho";
	}
};

botoesAmei[0].onclick = botaoAmeiVermelho;
botoesAmei[1].onclick = botaoAmeiVermelho;
botoesAmei[2].onclick = botaoAmeiVermelho;

//SLIDER
function criarUmBullet(numeroDoSlide){
	// Pegando o ul que vai inserir o li
	var bulletUl = document.querySelector(".bullets ul");
	// Criando um novo li
	var li = document.createElement("li");
	// Criando um button para inserir no li
	var button = document.createElement("button");
	button.className="bullet";
	// PARAM1 = Nome da propriedade
	// PARAM2 = Valor da propriedade
	button.setAttribute("data-slide",numeroDoSlide);

	// Inserindo o button no li
	li.appendChild(button);
	// Inserindo o li no ul dos bullets
	bulletUl.appendChild(li);
};

function criarBulletsNoSlider(){
	// pegando todos os slides que estão dentro da #slider
	var slides = document.querySelectorAll("#slider .slide");
	var quantidadeSlides = slides.length;

	// Criar os bullets
	for(var i=0; i < quantidadeSlides; i++){
		// Criar um bullet
		criarUmBullet(i);
	}

};

//funções para os botoes

var slideIndexAtivo = 0;

function voltarSlide(){

	if(slideIndexAtivo > 0){

	// Qual slide que é o seguinte?
	var anteriorSlideIndex = slideIndexAtivo -1;
	
	var anteriorSlideOrdem = anteriorSlideIndex +1;


	// Desaparecer com o slide que estava ativo
	var slideAtual = document.querySelector("#slider .slide.ativo");
	slideAtual.classList.remove("ativo");


	// mostrar slide

	var proximoSlide = document.querySelector("#slider .slide:nth-child("+anteriorSlideOrdem+")");
	proximoSlide.classList.add("ativo");

	

	// atualizar o slideIndexAtivo
	slideIndexAtivo = anteriorSlideIndex;
	}
};



// Botão da seta direita
function avancarSlide(){
	var slides = document.querySelectorAll("#slider .slide");
	if(slideIndexAtivo < slides.length-1){
	// Qual slide que é o seguinte?
	var proximoSlideIndex = slideIndexAtivo +1;
	
	var proximoSlideOrdem = proximoSlideIndex +1;


	// Desaparecer com o slide que estava ativo
	var slideAtual = document.querySelector(".slide.ativo");
	slideAtual.classList.remove("ativo");


	// mostrar slide

	var proximoSlide = document.querySelector("#slider .slide:nth-child("+proximoSlideOrdem+")");
	proximoSlide.classList.add("ativo");

	

	// atualizar o slideIndexAtivo
	slideIndexAtivo = proximoSlideIndex;
	}
};


function irParaOSlideCorrespondente(){
	// Pegar o slide com a classe ativo
 	var slideAtivo = document.querySelector(".slide.ativo");
 	// Desaparece o slide ativo
 	slideAtivo.classList.remove("ativo");
 	// Aparece o slide correspondente
 	var slideIndex = parseInt(this.getAttribute("data-slide"));
 	var numeroSlide = slideIndex+1;
  	var slideCorrespondente = document.querySelector("#slider .slideBox .slide:nth-child("+numeroSlide+")");
 	slideCorrespondente.classList.add("ativo");
 	slideIndexAtivo = slideIndex;

};

function adicionarOnClickNosBotoes(){
	//Adicionando nas setas
	var botaoVoltar = document.querySelector(".seta.esquerda");
	botaoVoltar.onclick = voltarSlide;
	var botaoAvancar = document.querySelector(".seta.direita");
	botaoAvancar.onclick = avancarSlide;

	//Adicionando nos bullets
	var bullets = document.querySelectorAll("#slider .bullet");
	for (var i = 0; i < bullets.length; i++) {
		bullets[i].onclick = irParaOSlideCorrespondente;
	}
};

function alternarSlidesAutomaticamente(){
}



//Se o slide existe
//Se o slider é igual a null ele não existe
//Se o slider é diferente de numm ele existe!

var slider = document.querySelector("#slider");

if (slider != null) {
	criarBulletsNoSlider();
	adicionarOnClickNosBotoes();
	alternarSlidesAutomaticamente();
};


var fonte = document.querySelector('[data-contador-fonte]');
var destino = document.querySelector('[data-contador-destino]');

fonte.addEventListener('keyup', function() {
  var digitado = fonte.value.length;
  var restante = 100 - digitado;
  destino.textContent = restante;
});

// var formulario = document.querySelector("form");

// formulario.addEventListener("submit", function(evento) {
//   alert('Minha mensagem é: ' + fonte.value);
//   evento.preventDefault(); 
// });


// CODIGO PARA O FOMULÁRIO
// pegar o campo
var nome = document.querySelector("#inputNome")
// criar validação
function validarNome(){
	// pegar o valor dele
	var valorNome = nome.value;

	// verificar se o valor é vazio
	if(valorNome == ""){
	// se for vazio deixa o campo vermelho
	// // adiciona uma classe no campo nome
	nome.parentNode.classList.add("errado");
	}else{
	nome.parentNode.classList.remove("errado");
	}

}
// executar a validação ao sair do foco do campo
nome.onblur = validarNome;

var sobrenome = document.querySelector("#inputSobrenome")
// criar validação
function validarSobrenome(){
	// pegar o valor dele
	var valorSobrenome = sobrenome.value;

	// verificar se o valor é vazio
	if(valorSobrenome == ""){
	// se for vazio deixa o campo vermelho
	// // adiciona uma classe no campo nome
	sobrenome.parentNode.classList.add("errado");
	}else{
	sobrenome.parentNode.classList.remove("errado");
	}

}
// executar a validação ao sair do foco do campo
sobrenome.onblur = validarSobrenome;




var nome = document.querySelector("#inputNome");
var sobrenome = document.querySelector("#inputSobrenome");

function nomeCompleto(){
	var nomeCompleto = nome + sobrenome;
	console.log( "Olá" + ''+ nomeCompleto + '' + "tudo bom?");
	
};
sobrenome.onblur = nomeCompleto;



var idade = document.querySelector("#inputidade")

function validarIdade(){

	var valorIdade = idade.value;

	if(valorIdade < 18){
		alert("A idade temk ser maior que 18!");
		idade.parentNode.classList.add("errado");
	}else{
		idade.parentNode.classList.remove("errado");
	}
}
 
idade.onblur = validarIdade;

// selecionar o formulario
var formulario = document.querySelector("#formSugestoes");
// criar a função que vai ser executada ao submeter o formulario
// função criar Balão

// function adicionarBalao(){

// 	// criar um balao que é um elemento
// 	var div = document.createElement("div");
// 	div.classList.add("balao");

// 	var p = createElement("p");
// 	balao.appendChild(p);

// 	var sugestao = document.querySelector("#inputSugestao");
// 	var sugestaoValor = sugestao.value;

// // colocando a sugestaoValor dentro do <p></p>
// 	p.innerText = sugestaoValor;

// 	// depois inserir dentro da tag "#baloes"
// 	var baloes = document.querySelector("#baloes");
// 	baloes.appendChild(balao);
// 	return false;

// }
// // atrelar a função a um evento do formulario: onsubmit
// formulario.onsubmit = adicionarBalao;


function adicionarBalao(){
	// Criando uma div com classe balao
	var div = document.createElement("div");
	div.classList.add("balao");

	var nome = document.querySelector("#inputNome");
	var sobrenome= document.querySelector("#inputSobrenome");
	var idade = document.querySelector("#inputidade");

	// Essa parte é responsável por pegar o valor do inputSugestão APENAS
	var sugestao = document.querySelector("#inputSugestao");
	// FIM
	// INSERINDO O VALOR na div que criei
	div.innerHTML= "<h3>"+nome.value +" "+ sobrenome.value+ ","+" "+ idade.value+ "</h3>" + "<p>"+sugestao.value+"</p>";

	// Inserindo a div que criei no documento.
	var baloes = document.querySelector("#baloes");
	baloes.appendChild(div);
	return false;

}

formulario.onsubmit = adicionarBalao;