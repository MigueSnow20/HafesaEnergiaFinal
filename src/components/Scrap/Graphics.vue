<template>
    <div class="full-width">
        <div class="blocks">
            <h1 class="left"><strong>GASOIL</strong></h1>
            <h1 class="right"><strong>GASOLINA</strong></h1>
        </div>

        <div class="blocks iframes-block">
            <div class="iframe-container">
                <iframe src="https://ssltvc.forexprostools.com/?pair_ID=8861&height=450&width=100%&interval=300&plotStyle=candles&domain_ID=4&lang_ID=4&timezone_ID=12"></iframe>
            </div>
            <div class="vertical-line"></div> <!-- Div para la línea vertical -->
            <div class="iframe-container">
                <iframe src="https://ssltvc.forexprostools.com/?pair_ID=954867&height=450&width=100%&interval=300&plotStyle=candles&domain_ID=4&lang_ID=4&timezone_ID=12"></iframe>
            </div>
        </div>
    </div>
</template>

<style scoped>
.full-width {
    margin-top: 5rem;
}

.blocks {
    display: flex;
    justify-content: space-around; /* Centra horizontalmente los bloques */
    position: relative;
}

.blocks h1 {
    text-align: center;
    line-height: 100px; /* Centra el texto verticalmente */
    color: #5b4d6e;
    font-weight: 900;
    font-family: "Times New Roman", Times, serif;
    font-size: 35px;
}

.left {
    padding-right: 10rem;
    padding-left: 6rem;
}

.right {
    padding-right: 6rem;
    padding-left: 10rem;
}

.vertical-line {
    width: 1px; /* Grosor de la línea */
    height: 100%; /* Altura de la línea igual al contenedor */
    background-color: #5b4d6e; /* Color de la línea */
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%; /* Posición central */
    transform: translateX(-50%); /* Alineación central */
}

.iframe-container {
    width: 48%; /* Establece el ancho máximo de los contenedores */
    margin-bottom: 20px; /* Agrega espacio entre los contenedores */
    padding-left: 3rem;
    position: relative;
}

.iframe-container:not(:last-child) {
    border-right: 2px solid #5b4d6e; /* Línea vertical */
    padding-right: 10rem;
    padding-left: 6rem;
}

.iframe-container:first-child {
    border-right: none; /* Elimina la línea vertical del primer iframe */
}

.iframe-container:last-child {
    border-right: 2px solid #ffffff; /* Línea horizontal al final del div que contiene los iframes */
    padding-right: 6rem; /* Ajusta el espacio a la derecha de la línea */
    padding-left: 10rem; /* Ajusta el espacio a la izquierda de la línea */
}

iframe {
    width: 100%;
    height: 350px; /* Ajusta la altura según tus necesidades */
}

/* Estilos adicionales para hacerlo responsive */
@media (max-width: 768px) {
    .iframe-container {
        width: 100%; /* En pantallas pequeñas, ocupa todo el ancho disponible */
        border-right: none; /* Elimina la línea vertical en pantallas pequeñas */
        padding-right: 0;
        padding-left: 0;
    }
    
    .iframe-container:last-child {
        border-bottom: none; /* Elimina la línea horizontal en pantallas pequeñas */
        padding-bottom: 0;
    }

    .vertical-line {
        display: none; /* Oculta la línea vertical en pantallas pequeñas */
    }
}
</style>