// Countdown Timer
let duration = 15 * 60; // 15 minutos
const timerEl = document.getElementById('timer');
if (timerEl) {
    setInterval(() => {
        const minutes = String(Math.floor(duration / 60)).padStart(2, '0');
        const seconds = String(duration % 60).padStart(2, '0');
        timerEl.textContent = `${minutes}:${seconds}`;
        if (duration > 0) duration--;
    }, 1000);
}


// Simulação de pessoas online
const viewersEl = document.getElementById('viewers');
if (viewersEl) {
    function updateViewers() {
        const min = 15;
        const max = 120;
        const viewersCount = Math.floor(Math.random() * (max - min + 1)) + min;
        viewersEl.textContent = viewersCount;
    }
    updateViewers();
    setInterval(updateViewers, 10000);
}


// Frases absurdas com nomes famosos da cultura pop brasileira e internacional
const absurdNotifications = [
    "Fulano de tal acabou de contratar a Silveirinha Tech para caçar um dinossauro",
    "Seu Jorge está compondo uma nova música inspirada nas maravilhas da Silveirinha Tech",
    "Sabrina Sato contratou a Silveirinha Tech para dar um up no site e no carisma digital",
    "Carlos recebeu uma mensagem cósmica para fechar negócio com a Silveirinha Tech",
    "Bruna acordou com o horóscopo dizendo: 'Contrate Silveirinha Tech agora!'",
    "Roberto enviou um pombo correio para fechar contrato com a Silveirinha Tech",
    "Sofia está treinando dinossauros digitais com a Silveirinha Tech",
    "Marcos descobriu que gremlins adoram as landing pages da Silveirinha Tech",
    "Beatriz está preparando o café enquanto fecha contrato com a Silveirinha Tech",
    "Ricardo quer um site tão bom que até o gato dele aprovou, graças à Silveirinha Tech",
    "Patrícia encontrou um meteoro e usou pra impulsionar seu site com a Silveirinha Tech",
    "Neymar mandou um vídeo dizendo que só fecha com a Silveirinha Tech",
    "Anitta está planejando um clipe para promover a Silveirinha Tech",
    "Pelé reapareceu só pra dar depoimento sobre a Silveirinha Tech",
    "Faustão anunciou a Silveirinha Tech como seu novo parceiro digital"
];

const absurdEl = document.getElementById('absurd-notifications');
let absurdIndex = 0;

if (absurdEl) {
    function showAbsurdNotification() {
        absurdEl.style.opacity = 0;
        setTimeout(() => {
            absurdIndex = (absurdIndex + 1) % absurdNotifications.length;
            absurdEl.textContent = absurdNotifications[absurdIndex];
            absurdEl.style.opacity = 1;
        }, 600);
    }
    showAbsurdNotification();
    setInterval(showAbsurdNotification, 5500);
}


// Botões aleatórios coloridos no fundo (spam divertido)
const ctas = ['COMPRA AGORA!', 'FECHA O CONTRATO!', 'NÃO PERCA!', 'ÚLTIMA CHANCE!', 'VEM COLABORAR!'];
const bgAreas = document.querySelectorAll('.btn-bg');

setInterval(() => {
    bgAreas.forEach(area => {
        // Limpa botões antigos após 30 para evitar excesso de elementos
        if (area.children.length > 30) {
            area.removeChild(area.children[0]);
        }
        const btn = document.createElement('button');
        btn.textContent = ctas[Math.floor(Math.random() * ctas.length)];
        const hue = Math.floor(Math.random() * 360);
        const sat = 60 + Math.random() * 30;
        const light = 40 + Math.random() * 30;
        btn.style.background = `hsl(${hue},${sat}%,${light}%)`;
        btn.className = 'random-btn';
        const x = Math.random() * (area.clientWidth - 200);
        const y = Math.random() * (area.clientHeight - 60);
        btn.style.left = x + 'px';
        btn.style.top = y + 'px';
        area.appendChild(btn);
    });
}, 400);

// Cta box click animation (alerta divertido)
const ctaBox = document.getElementById('cta-box');
if (ctaBox) {
    ctaBox.addEventListener('click', () => {
        alert('Parabéns! Você acabou de fechar um contrato épico com a Silveirinha Tech! 🚀');
    });
}