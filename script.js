let anuncio = document.getElementById("anuncio");
let cliente = document.getElementById("cliente");
let dataInicio = document.getElementById("dataInicio");
let dataTermino = document.getElementById("dataTermino");
let investimentoDia = document.getElementById("investimentoDia");

function tempoTotal() {
    let start = dataInicio.value;
    let end = dataTermino.value;

    start = new Date(start);
    end = new Date(end); 

    let qntTempo = Math.abs(end - start);
    let tempoUmDia = 1000 * 60 * 60 * 24;
    let qntDias = qntTempo / tempoUmDia;

    return qntDias;
}

function cadastroAnuncio() {
    if (anuncio.value == '' || cliente.value == '' || dataInicio.value == '' || dataTermino.value == '' || investimentoDia.value == '') {
        alert('Por favor, complete o formulário!');
    } else {
        let dados = JSON.parse(localStorage.getItem("dadosAnuncio"));

        if(dados == null) {
            localStorage.setItem("dadosAnuncio", "[]");
            dados = [];
        }

        let tempoAnuncio = tempoTotal();
        let vTotalInvestido = investimentoDia.value * tempoAnuncio;
        let maxVisual = investimentoDia.value * 86.41;
        let maxClique = maxVisual * 0.12;
        let maxComp = maxVisual * 0.018;


        var salvarDados = {
            nome: anuncio.value,
            cliente: cliente.value,
            investimentoDia: investimentoDia.value,
            valorTotal: vTotalInvestido.toFixed(2),
            VisuMax: maxVisual.toFixed(2),
            cliqueMax: maxClique.toFixed(2),
            compMax: maxComp.toFixed(2)
        }

        dados.push(salvarDados);
        localStorage.setItem("dadosAnuncio", JSON.stringify(dados));
        alert("Registo incluído com sucesso!");

        anuncio.value = "";
        cliente.value = "";
        dataInicio = "";
        dataTermino = "";
        investimentoDia = "";
        vTotalInvestido = "";
        maxVisual = "";
        maxClique = "";
        maxComp = "";
    }
}