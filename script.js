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

// Simulação de envio do formulário
const form = document.getElementById('leadForm');
const feedback = document.getElementById('formFeedback');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    if(!nome || !email || !telefone){
        feedback.innerHTML = '⚠️ Por favor, preencha nome, e-mail e telefone.';
        feedback.style.color = '#c0392b';
        setTimeout(()=>{feedback.innerHTML = '';}, 3000);
        return;
    }
    // Simula envio bem sucedido
    feedback.innerHTML = '✅ Mensagem enviada! Entrarei em contato em até 24h pelo WhatsApp.';
    feedback.style.color = '#2b7a62';
    form.reset();
    setTimeout(()=>{
        feedback.innerHTML = '';
    }, 5000);
    // Opcional: abrir link do WhatsApp (simulação de redirecionamento amigável)
    // Aqui apenas demonstração: se quiser integrar com número real, descomente:
    // window.open('https://wa.me/5511987654321?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20de%20matemática', '_blank');
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