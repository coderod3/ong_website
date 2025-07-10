document.addEventListener("DOMContentLoaded", function() {
    // Encontra o local onde o header deve ser inserido
    const headerPlaceholder = document.getElementById('header-placeholder');
    // Encontra o local onde o footer deve ser inserido
    const footerPlaceholder = document.getElementById('footer-placeholder');

    // Carrega o arquivo _header.html e o insere no local encontrado
    if (headerPlaceholder) {
        fetch('/html/_header.html')
            .then(response => response.text())
            .then(data => {
                headerPlaceholder.innerHTML = data;
            });
    }

    // Carrega o arquivo _footer.html e o insere no local encontrado
    if (footerPlaceholder) {
        fetch('/html/_footer.html')
            .then(response => response.text())
            .then(data => {
                footerPlaceholder.innerHTML = data;
            });
    }
});