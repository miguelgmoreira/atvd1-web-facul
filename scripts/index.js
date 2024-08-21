addEventListener('submit', (e) => {
    e.preventDefault();

    const valorVenda = parseFloat(document.getElementById('valor').value);

    const quantidadeParcelas = document.getElementById('parcelas').value;

    let juros = 0.1;

    if(quantidadeParcelas == 1) {
        juros = 0;
    }

    const valorParcela = ((valorVenda * (1 + juros)) / quantidadeParcelas).toFixed(2);

    const parcelasArea = document.getElementById('parcelas-area'); 

    parcelasArea.innerHTML = '';

    if(quantidadeParcelas > 0) {
        parcelasArea.style.marginBottom = '1rem'
    } else {
        parcelasArea.style.marginBottom = '0'
    }

    for(let i = 0; i < quantidadeParcelas; i++) {
        const parcelaDiv = document.createElement('div');

        parcelaDiv.classList.add('parcela-item');
        parcelaDiv.textContent = `Parcela ${i + 1}: R$${valorParcela}`

        parcelasArea.appendChild(parcelaDiv)
    }
  
    document.getElementById('result').textContent = `O valor da parcela com juros: R$${valorParcela}`
})