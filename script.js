// Lidar com o envio do formulário de contato
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Pegando os valores dos campos do formulário
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Exibir uma mensagem de sucesso
    alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);

    // Limpar os campos após o envio
    document.getElementById("contactForm").reset();
});
