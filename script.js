function toggleMode() {
    const html = document.documentElement
    
    html.classList.toggle('light')
    
    // pegar imagem
    const img = document.querySelector('#profile img')
    const alt = document.querySelector('img')

    // substituir imagem
    if(html.classList.contains('light')){
        // se tiver loght mode, adiciona imagem light
        img.setAttribute('src', './assets/LogoTaxB.png')
        alt.setAttribute('alt', 'Foto de Perfil do Czar, uma garota usando óculos fazendo bico')
    } else {
        // se não tiver loght mode, adiciona imagem dark
        img.setAttribute('src', './assets/LogoTaxC.png')
        alt.setAttribute('alt', 'Foto de Perfil do Czar, uma garota usando óculos bebendo frappuccino do starbucks')
    }
}

const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("myModal");
const closeBtn = document.querySelector(".close");
const signupForm = document.getElementById("signupForm");

openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Coletar os dados do formulário
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const company = document.getElementById("company").value;

    // Aqui você pode enviar esses dados para o servidor para enviar o e-mail
    console.log("Nome:", name);
    console.log("E-mail:", email);
    console.log("Telefone:", phone);
    console.log("Empresa:", company);

    // Feche o modal após enviar os dados (você pode adicionar lógica de validação aqui)
    modal.style.display = "none";
});

// Seleciona todos os inputs obrigatórios
const requiredInputs = document.querySelectorAll('input[required]');

// Adiciona um ouvinte de evento para cada input
requiredInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.value.trim() === '') {
            input.classList.add('error'); // Adiciona a classe 'error' se estiver vazio
        } else {
            input.classList.remove('error'); // Remove a classe 'error' se preenchido
        }
    });
});