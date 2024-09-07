function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    

    // Variaveis
    let resultados = "";
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    let nome = "";
    let acompanhamentos = "";

    // Tranforma os dados do campoPesquisa em minusculas
    campoPesquisa = campoPesquisa.toLowerCase();

    // Caso não digite nada na barra de pesquisa retorna essa mensagem
    if (!campoPesquisa) {
        section.innerHTML = "<p>Não foi encontrado. </p>"
        return
    }


    // Itera sobre cada dado da lista de dados
    for (let vinho of vinhos) {
        // Tranforma os dados em minusculas
        nome = vinho.nome.toLowerCase()
        acompanhamentos = vinho.acompanhamentos.toLowerCase()

        if (nome.includes(campoPesquisa) || acompanhamentos.includes(campoPesquisa))        {

        
        // Cria um novo elemento HTML para cada resultado
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a>${vinho.nome}</a>
                </h2>
                <p><strong>Tipo:</strong> ${vinho.tipo}</p>
                <p><strong>Uvas:</strong> ${vinho.uva}</p>
                <p><strong>História:</strong> ${vinho.historia}</p>
                <p><strong>Acompanhamentos:</strong> ${vinho.acompanhamentos}</p>
                <p><strong>Região:</strong> ${vinho.regiao}</p>
                <p><strong>Degustação:</strong> ${vinho.melhorManeiraDegustar}</p>
                <p><strong>Notas:</strong> ${vinho.notasDeDegustacao}</p>
                <p><strong>Ano:</strong> ${vinho.ano}</p>
                <p><strong>Média de Preço:</strong> ${vinho.precoMedio}</p>
               
            </div>
        `;
        }
    }
    // Caso passe por todo e não encontre resultado exibe a mensagem
    if (!resultados) {
        resultados = "<p> Nada foi encontrado</p>"
    }
    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}