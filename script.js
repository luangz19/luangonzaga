// Interações suaves + Simulação de envio de formulário + botões redirecionando para contato/whatsapp
document.getElementById('ctaHeroBtn').addEventListener('click', function(){
    document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('scrollPlanosBtn').addEventListener('click', function(){
    document.getElementById('planos').scrollIntoView({ behavior: 'smooth' });
});
// Todos os botões de plano redirecionam para o formulário de contato e preenchem mensagem de interesse
const planBtns = document.querySelectorAll('.planBtn');
planBtns.forEach(btn => {
    btn.addEventListener('click', function(e){
        const plano = this.getAttribute('data-plano');
        const selectInteresse = document.getElementById('interesse');
        if(selectInteresse) {
            selectInteresse.value = `Quero saber mais sobre o plano ${plano}`;
        }
        document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
        // Pequeno destaque visual no formulário
        const formDiv = document.querySelector('.contact-form');
        formDiv.style.transition = '0.2s';
        formDiv.style.boxShadow = '0 0 0 2px #2b7a62';
        setTimeout(()=> formDiv.style.boxShadow = 'none', 800);
    });
});

// Navegação suave para links internos
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        const href = this.getAttribute('href');
        if(href && href.startsWith('#')){
            e.preventDefault();
            const target = document.querySelector(href);
            if(target) target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
// pequeno ajuste: link do footer também suave
const footerLinks = document.querySelectorAll('footer a');
footerLinks.forEach(link => {
    link.addEventListener('click', function(e){
        const href = link.getAttribute('href');
        if(href && href.startsWith('#')){
            e.preventDefault();
            const target = document.querySelector(href);
            if(target) target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Faz o botão "Agendar conversa comigo" rolar até o formulário de contato
document.getElementById('ctaTeacherBtn')?.addEventListener('click', function() {
    const contatoSection = document.getElementById('contato');
    if(contatoSection) {
        contatoSection.scrollIntoView({ behavior: 'smooth' });
        // Opcional: pré-selecionar um campo ou dar um destaque
        const selectField = document.getElementById('interesse');
        if(selectField && selectField.value === "") {
            selectField.value = "Aula experimental gratuita";
        }
    }
});