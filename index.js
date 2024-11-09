// URL da API
const url = 'http://localhost:12166/estudantes/listagem';

// Função para buscar e exibir os dados
async function fetchData() {
    try {
        // Faz a requisição para a URL
        const response = await fetch(url);
        
        // Verifica se a resposta é bem sucedida
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }

        // Converte a resposta para JSON
        const data = await response.json();

        // Chama uma função para processar os dados recebidos
        displayData(data);
    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
    }
}

// Função para exibir os dados na tabela
function displayData(data) {
    // Encontra o tbody da tabela onde os dados serão exibidos
    const tableBody = document.querySelector('#mentorias-table tbody');
    
    // Limpa qualquer conteúdo anterior
    tableBody.innerHTML = '';

    // Itera sobre os dados e cria linhas da tabela para exibi-los
    data.forEach(item => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${item.nome}</td>
            <td>${item.dataHoraMentoria}</td>
            <td>${item.local}</td>
            <td>${item.contato}</td>
            <td>${item.materia}</td>
        `;
        
        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
    });
}

// Chama a função fetchData quando a página carrega
window.onload = fetchData;