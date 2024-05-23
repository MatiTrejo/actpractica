const header = `
    <nav>
        <ul>
            <li><a href="pagina.html">Inicio</a></li>
            <li><a href="acercade.html">Acerca</a></li>
            <li><a href="contacto.html">Contacto</a></li>
        </ul>
    </nav>
`;

const footer = `
    <p>&copy; ${new Date().getFullYear()} Sitio web MT.</p>
`;

function setHeaderAndFooterContent() {
    
    const headerElement = document.getElementById("header");
    const footerElement = document.getElementById("footer");

    headerElement.innerHTML = header;
    footerElement.innerHTML = footer;
}

setHeaderAndFooterContent();
