document.getElementById('cadastro-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão
    
    const formData = new FormData(this); // Obtém os dados do formulário
    
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
        //console.log(data);
    });
    
    try {
        const response = await fetch('http://localhost:12166/estudantes/cadastro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // Converte os dados para JSON e envia no corpo da requisição
        });
        
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }
        
        alert('Cadastro realizado com sucesso!');
        // Limpe os campos do formulário após o envio bem sucedido
        this.reset();
    } catch (error) {
        console.error('Erro ao cadastrar:', error);
        alert('Erro ao cadastrar. Por favor, tente novamente.');
    }
});