//declarando variavel que vai receber os itens
var itens = [];

//interligando o botao de cadastro com o evento
document.querySelector('input[type=submit]')
.addEventListener('click', ()=>{

    //recebendo os inputs
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var precoProduto = document.querySelector('input[name=valor_produto]');

    //adicionando os valores ao objeto itens
    itens.push({
        nome: nomeProduto.value,
        valor: precoProduto.value
    });

    /*so para saber como devo adicionar
        <div class="lista-produto-single">
            <h3>RedBull</h3>
            <h3 class="price-produto"><span>R$ 20,00</span></h3>
        </div>
    */

    //Pegando a classe da lista, para adicionar novos itens no html
    let listaProdutos = document.querySelector('.lista-produtos');

    //Para que nao haja duplicação na lista
    listaProdutos.innerHTML="";

    //para fazer a soma
    let soma = 0;

    itens.map((val)=>{
        
        //para sempre pegar os novos valores e somar
        soma+=parseFloat(val.valor);

        //Para imprimir os novos produtos
        listaProdutos.innerHTML+=`
            <div class="lista-produto-single">
            <h3>`+val.nome+`</h3>
            <h3 class="price-produto"><span>R$`+val.valor+`</span></h3>
            </div>
        `;
    });

    //para manter somente duas casas depois da virgula
    soma = soma.toFixed(2);

    //para resetar os valores apos enviar, para que nao haja conflitos
    nomeProduto.value="";
    precoProduto.value="";

    let elementoSoma = document.querySelector('.soma-produto h1');
    elementoSoma.innerHTML = "TOTAL: R$" + soma;
});

document.querySelector('button[name=limpar]')
.addEventListener('click', ()=>{
    itens = [];

    document.querySelector('.lista-produtos').innerHTML = "";
    document.querySelector('.soma-produto h1').innerHTML = "TOTAL: R$ 0,00";
})