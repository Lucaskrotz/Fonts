
window.onload = () => {
    const origem = document.querySelector('[name=texto_origem]');
    const formatado = document.querySelector('[name=texto_destino]');

    origem.addEventListener('input', () => {
        formatado.value = origem.value
    })
}