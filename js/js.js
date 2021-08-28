let questoes = [
    {

        pergunta: 'O que é o que é que vai até a porta mas não entra?',
        alternativas: ['Tapete', 'Calçada', 'Sapato'],
        alternativaCerta: 1
    },
    {

        pergunta: 'O que é o que é que entra na água mas não molha?',
        alternativas: ['Sombra', 'Folha', 'Papel'],
        alternativaCerta: 0

    },
    {

        pergunta: 'Sou uma ave extinsão uma coisa linda de se ver, leia meu nome de trás para frente e o mesmo nome irá ver?',
        alternativas: ['Pato', 'Ema', 'Arara'],
        alternativaCerta: 2

    },
    {

        pergunta: 'O que é o que é, é bonita e não tem cor é gostosa e não tem sabor?',
        alternativas: ['Água', 'Gelatina', 'Suspiro'],
        alternativaCerta: 0

    },
    {

        pergunta: 'Estou pronto pra prender a quem me vier pegar, sou torto por natureza e não posso me endireitar?',
        alternativas: ['Anzol', 'Arame', 'Anel'],
        alternativaCerta: 0

    }
];

let numeroQ = 0;
let alternativaC = 0;
let acerto = 0;
let totalQ = questoes.length;

function iniciar() {
    $('.section_apresentacao, #btnsair').hide();
    $('.section_questoes').show();
    $('input[name=alternativas]').prop('checked', false);
    let q = $('<p></p>');
    $('#perguntas').append(q);
    q.text(numeroQ + 1 + ' ) ' + questoes[numeroQ].pergunta);

    for (let a in questoes[numeroQ].alternativas) {
        let alt = $('<input id="' + a + '" type="radio" name="alternativas" value="' + a + '"/>');
        let label = $('<label for="' + a + '"> ' + questoes[numeroQ].alternativas[a] + ' </label> ')
        $('#alternativas').append(alt);
        $('#alternativas').append(label);
        alt.text(a);
        alternativaC = (questoes[numeroQ].alternativaCerta);
    }
    $('#btniniciar, #alunos').hide();
    $('#btnconfirmar').show();
}

function confirmar() {
    let alternativaS = $('input[name="alternativas"]:checked').val();
    let resposta = $('<label id="resposta"></label>');
    if (alternativaS) {
        if (alternativaS == alternativaC) {
            $('#alternativas').append(resposta);
            $('#resposta').text('Resposta certa!');
            $('#resposta').css('color', 'blue');
            acerto++;
        } else {
            $('#alternativas').append(resposta);
            resposta.text('Resposta errada!');
            $('#resposta').css('color', 'red');
        }
        $('#btnconfirmar').hide();
        $('#btnavancar, #btnreiniciar, #resposta').show();
        $('input').prop("disabled", true);
    } else {
        alert('Por favor, Selecionar uma alternativa!')
    }
}

function avancar() {
    let erro = 0;
    let aproveitamento = 0;
    $('#btnavancar, p, label, input').hide();
    numeroQ++;
    if (numeroQ < totalQ) {
        iniciar();
    } else {
        alert('Todas as questões foram respondidas!');
        $('#btnreiniciar').hide();
        $('#btnnovo, #btnsair').show();
        erro = totalQ - acerto;
        aproveitamento = (acerto / totalQ) * 100;
        let resultado = $('<p></p>');
        $('#perguntas').append(resultado);
        resultado.html('Acertos: ' + acerto + '<br>' + ' Erros: ' + erro + '<br>' + ' Aproveitamento: ' + aproveitamento + '<label>%</label>');
    }
    $('#resposta').remove();
}

function reiniciar() {
    $('#btnreiniciar, #btnavancar, #btnnovo').hide();
    $('p, input, label').remove();
    numeroQ = 0;
    selecionada = 0;
    erro = 0;
    aproveitamento = 0;
    acerto = 0;
    iniciar();
}

$(document).ready(function () {
    $('#btniniciar').show();
    $('.section_questoes').hide();

    $('#btnsair').click(function () {
        location.reload();
    });
});