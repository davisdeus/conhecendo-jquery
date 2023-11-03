$(document).ready(function () {

    $('header button').click(function () {
        $('form').slideDown();
    })

    $("#btn-cancelar").click(function () {
        $('form').slideUp();
    })

    $('form').on('Submit', function (e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-igm-nova').val();
        const novoItem = $('<li></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-img-link">
                <a href="${enderecoDaNovaImagem}" title="Ver imagem em tamanho real" target="_blank">
                    Ver imagem em tamanho em real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
    })
})