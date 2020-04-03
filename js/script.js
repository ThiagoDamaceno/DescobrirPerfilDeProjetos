const perguntas = {
    perguntasDaVez: 0,

    enunciados: [
        {
            primeiro: "Pergunta 01 - Perfil 1",
            segundo:  "Pergunta 01 - Perfil 2",
            terceiro: "Pergunta 01 - Perfil 3"
        },
        {
            primeiro: "Pergunta 02 - Perfil 1",
            segundo:  "Pergunta 02 - Perfil 2",
            terceiro: "Pergunta 02 - Perfil 3"
        },
        {
            primeiro: "Pergunta 03 - Perfil 1",
            segundo:  "Pergunta 03 - Perfil 2",
            terceiro: "Pergunta 03 - Perfil 3"
        },
        {
            primeiro: "Pergunta 04 - Perfil 1",
            segundo:  "Pergunta 04 - Perfil 2",
            terceiro: "Pergunta 04 - Perfil 3"
        },
        {
            primeiro: "Pergunta 05 - Perfil 1",
            segundo:  "Pergunta 05 - Perfil 2",
            terceiro: "Pergunta 05 - Perfil 3"
        }
    ]
}

const divPerguntas = document.getElementById("perguntas");
const radios = document.querySelectorAll(".radios");

let pontos = {
    primeiroPerfil: 0,
    segundoPerfil: 0,
    terceiroPerfil: 0
}

function comecar() {
    const divComecar = document.getElementById("comecar");

    divComecar.classList.add("d-none");

    divPerguntas.classList.remove("d-none");
    atualizarPerguntas();
}

function finalizar() {
    divPerguntas.classList.add("d-none");

    const divFinalizado = document.getElementById("finalizado");
    
    divFinalizado.classList.remove("d-none");
    const resultados =  document.querySelectorAll("#finalizado h3");

   resultados[0].firstElementChild.innerText = pontos.primeiroPerfil;
   resultados[1].firstElementChild.innerText = pontos.segundoPerfil;
   resultados[2].firstElementChild.innerText = pontos.terceiroPerfil;
}


function teste() {
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {

            switch (i) {
                case 0:
                    pontos.primeiroPerfil++;
                    break;
                
                case 1:
                    pontos.segundoPerfil++;
                    break;

                case 2:
                    pontos.terceiroPerfil++
                    break;
            }

        }
    }
    atualizarPerguntas();
}

function atualizarPerguntas() {
    labelsDePerguntas = document.querySelectorAll(".container");

    //Finalizar questionario
    if (perguntas.perguntasDaVez >= perguntas.enunciados.length) {
        finalizar();
        return;
    }

    const perguntasDaVez = perguntas.perguntasDaVez++;
    
    labelsDePerguntas[0].firstElementChild.innerText = perguntas.enunciados[perguntasDaVez].primeiro;
    labelsDePerguntas[1].firstElementChild.innerText = perguntas.enunciados[perguntasDaVez].segundo;
    labelsDePerguntas[2].firstElementChild.innerText = perguntas.enunciados[perguntasDaVez].terceiro;
}



