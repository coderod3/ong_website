// js/calculadora_script.js

const modalData = {
    agua: {
        title: "Como Reciclar Economiza Água?",
        text: "A produção de materiais a partir de matéria-prima virgem, como fazer plástico novo, consome enormes quantidades de água. Ao reciclar, usamos materiais que já existem, reduzindo drasticamente a necessidade de água no processo de fabricação de novos produtos."
    },
    energia: {
        title: "Como Reciclar Economiza Energia?",
        text: "Fabricar um produto do zero, como uma latinha de alumínio a partir do minério (bauxita), exige uma quantidade gigantesca de energia. Reciclar a mesma latinha usa cerca de 95% menos energia, pois o material só precisa ser derretido e remodelado."
    },
    co2: {
        title: "Como Reciclar Reduz Emissões de CO²?",
        text: "Menos energia consumida significa menos queima de combustíveis fósseis. Além disso, ao reciclar papel, evitamos o corte de árvores, que são essenciais para absorver o CO² da atmosfera. Menos lixo em aterros sanitários também significa menos emissão de gás metano, um potente causador do efeito estufa."
    }
};

const modal = document.getElementById('info-modal');
function showModal(type) {
    document.getElementById('modal-title').innerText = modalData[type].title;
    document.getElementById('modal-text').innerText = modalData[type].text;
    modal.classList.add('visible');
}
function closeModal() {
    modal.classList.remove('visible');
}

const petSlider = document.getElementById('pet');
const aluminioSlider = document.getElementById('aluminio');
const papelSlider = document.getElementById('papel');

const fatores = {
    //pet: { agua: 20, energia: 1.5, co2: 0.05 },
    //aluminio: { agua: 10, energia: 0.4, co2: 0.1 },
    //papel: { agua: 10000, energia: 2500, co2: 0.9 }
    pet: { agua: 0.7, energia: 1, co2: 0.150 },
    aluminio: { agua: 1.35, energia: 0.25, co2: 0.105 },
    papel: { agua: 49, energia: 1.25, co2: 1.25 }

};

function updateAll() {
    document.getElementById('pet-value').textContent = `${petSlider.value} un.`;
    document.getElementById('aluminio-value').textContent = `${aluminioSlider.value} un.`;
    document.getElementById('papel-value').textContent = `${parseFloat(papelSlider.value).toFixed(1)} kg`;

    const pet = parseFloat(petSlider.value);
    const aluminio = parseFloat(aluminioSlider.value);
    const papel = parseFloat(papelSlider.value);

    const aguaAnual = ((pet * fatores.pet.agua) + (aluminio * fatores.aluminio.agua) + (papel * fatores.papel.agua)) * 52;
    const energiaAnual = ((pet * fatores.pet.energia) + (aluminio * fatores.aluminio.energia) + (papel * fatores.papel.energia)) * 52;
    const co2Anual = ((pet * fatores.pet.co2) + (aluminio * fatores.aluminio.co2) + (papel * fatores.papel.co2)) * 52;

    document.getElementById('agua-result').textContent = aguaAnual.toLocaleString('pt-BR', { maximumFractionDigits: 0 });
    document.getElementById('energia-result').textContent = energiaAnual.toLocaleString('pt-BR', { maximumFractionDigits: 0 });
    document.getElementById('co2-result').textContent = co2Anual.toLocaleString('pt-BR', { maximumFractionDigits: 2 });
}

document.addEventListener('DOMContentLoaded', updateAll);

// widget

const contactWidget = document.getElementById('contactWidget');
let hasInteracted = false;
let popupTimeout;

// Função para expandir ou minimizar o widget
function toggleWidget(expand) {
    if (expand) {
        contactWidget.classList.add('expanded');
    } else {
        contactWidget.classList.remove('expanded');
    }
}

// Função que será chamada na primeira interação com os sliders
function handleFirstInteraction() {
    if (!hasInteracted) {
        hasInteracted = true;
        // Define um timer de 5 segundos para expandir o widget
        popupTimeout = setTimeout(() => toggleWidget(true), 5000);

        // Remove os 'escutadores' para que isso só aconteça uma vez
        const sliders = [petSlider, aluminioSlider, papelSlider];
        sliders.forEach(slider => slider.removeEventListener('input', handleFirstInteraction));
    }
}

// Adiciona os 'escutadores' que chamam a função acima
petSlider.addEventListener('input', handleFirstInteraction);
aluminioSlider.addEventListener('input', handleFirstInteraction);
papelSlider.addEventListener('input', handleFirstInteraction);