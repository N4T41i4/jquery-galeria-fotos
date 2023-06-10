$(document).ready(function(){
    /*console.log(document.querySelector('header button'));
    console.log($('header button'));

    document.querySelector('header button').addEventListener('click',function(){  })*/
    $('header button').click(function(){
        $('form').slideDown();
    })
    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on ('submit',function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display:none"></li>');
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
               <a href='${enderecoDaNovaImagem}" title="Ver iamgem em tamanho real" target="blank">
                    Ver imagem em tamanho real
               </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(5000);
        $('#endereco-imagem-nova').val('')
    })
})