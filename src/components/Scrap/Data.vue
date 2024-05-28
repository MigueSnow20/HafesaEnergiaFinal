<template>
    <div class="dataTable">
        <table>
            <tr>
                <td><Strong>Platts Gasóleo $/tonelada:</Strong></td>
                <td>{{ platts }}</td>
            </tr>
            <tr>
                <td><Strong>ICE Gasóleo $/tonelada:</Strong></td>
                <td>{{ ice }}</td>
            </tr>
            <tr>
                <td><Strong>RBOB Gasolina $/galón:</Strong></td>
                <td>{{ rbob }}</td>
            </tr>
            <tr>
                <td><Strong>Tipo de cambio:</Strong></td>
                <td>{{ tipoCambio }}</td>
            </tr>
            <tr>
                <td><Strong>EUR/USD - Euro Dólar:</Strong></td>
                <td>{{ divisaCambio }}</td>
            </tr>
            <tr>
                <td><Strong>Gasoil €/m3</Strong></td>
                <td>{{ precioGasoilEm }}</td>
            </tr>
            <tr>
                <td><Strong>Gasolina €/m3</Strong></td>
                <td>{{ precioGasolina }}</td>
            </tr>
            <tr>
                <td><Strong>Futuros gasoil:</Strong></td>
                <td>{{ gasoleo }}</td>
            </tr>
            <tr>
                <td><Strong>Futuros gasolina  (RBOB):</Strong></td>
                <td>{{ gasolina }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import VariationService from '@/Service/VariationService';

export default {
    name: 'data',
    data() {
        return {
            platts: null,
            ice: null,
            rbob: null,
            tipoCambio: null,
            divisaCambio: null,
            precioGasoilEm: null,
            precioGasolina: null,
            gasoleo: null,
            gasolina: null,
            variationService: null,
        }
    },
    created() {
        this.variationService = new VariationService();
        this.variationService.getPrecioGasoilEm().then(data => {
            this.precioGasoilEm = data.data;
        });
        this.variationService.getPrecioGasolina().then(data => {
            this.precioGasolina = data.data;
        });
        this.variationService.getPlatts().then(data => {
            this.platts = data.data;
        });
        this.variationService.getIce().then(data => {
            this.ice = data.data;
        });
        this.variationService.getRBob().then(data => {
            this.rbob = data.data;
        });
        this.variationService.getTipoDeCambio().then(data => {
            this.tipoCambio = data.data;
        });
        this.variationService.getDivisaCambio().then(data => {
            this.divisaCambio = data.data;
        });
        this.variationService.getGasoilScraped().then(data => {
            this.gasoleo = data.data;
        });
        this.variationService.getGasolinaScraped().then(data => {
            this.gasolina = data.data;
        });
    }
}
</script>

<style scoped>
.dataTable {
    padding: 50px;
}

.dataTable table {
    width: 50%;
    border-collapse: collapse;
    text-align: center;
    font-family: "Times New Roman", Times, serif;
    margin: 0 auto;
}

.dataTable td {
    padding: 10px;
    font-size: 1.5em;
    color: #5b4d6e;
    font-weight: 900;
    
}

.dataTable tr:nth-child(odd) {
    background-color: #e9e9e9;
}

.dataTable td:nth-child(even) {
    color: rgba(0, 0, 0, 0.548);
}

.dataTable tr {
    border-bottom: 2px solid #5b4d6e;
}

.dataTable tr:last-child {
    border-bottom: none;
}

@media (max-width: 768px) {
    .dataTable td {
        font-size: 1.2em;
        padding: 15px;
    }
}

@media (max-width: 480px) {
    .dataTable td {
        font-size: 1em;
        padding: 10px;
    }

    .dataTable table {
        width: 100%;
    }
}
</style>