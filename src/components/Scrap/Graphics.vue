<script>
</script>
<template>
    <div class="full-width">

        <div class="blocks">
            <h1><strong> GASOIL</strong></h1>
            <h1><strong>GASOLINA</strong></h1>
        </div>

        
    <div class="blocks">
        <div class="iframe-container">
            <iframe src="https://ssltvc.forexprostools.com/?pair_ID=8861&height=450&width=100%&interval=300&plotStyle=candles&domain_ID=4&lang_ID=4&timezone_ID=12"></iframe>
        </div>
        <div class="iframe-container">
            <iframe src="https://ssltvc.forexprostools.com/?pair_ID=954867&height=450&width=100%&interval=300&plotStyle=candles&domain_ID=4&lang_ID=4&timezone_ID=12"></iframe>
        </div>
    </div>


    </div>
</template>

<style scoped>

.full-width {
    max-width: 100%;
    padding: 20px;
    background-color: white;
    box-sizing: border-box;
    margin-top: 5rem;
}

.blocks{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.blocks h1 {
    text-align: center;
    margin: auto; /* Centra el texto horizontalmente */
    line-height: 100px; /* Centra el texto verticalmente */
    color: #5b4d6e;
    font-weight: 900;
    font-family: "Times New Roman", Times, serif;
    font-size: 35px;
}
.iframe-container {
    width: 48%; /* Establece el ancho máximo de los contenedores */
    margin-bottom: 20px; /* Agrega espacio entre los contenedores */
    padding-left:3rem;
}

iframe {
    width: 100%;
    height: 350px; /* Ajusta la altura según tus necesidades */
}

/* Estilos adicionales para hacerlo responsive */
@media (max-width: 768px) {
    .iframe-container {
        width: 100%; /* En pantallas pequeñas, ocupa todo el ancho disponible */
    }
}


</style>