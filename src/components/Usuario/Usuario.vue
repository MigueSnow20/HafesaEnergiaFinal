<template>
    <div>
        <DataTable :value="usuarios" :paginator="true" :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" stripedRows removableSort  tableStyle="min-width: 50rem">
            <Column field="name" header="Nombre" sortable style="width: 25%"></Column>
            <Column field="surname" header="Apellidos" sortable style="width: 25%"></Column>
            <Column field="email" header="Email" sortable style="width: 25%"></Column>
            <Column field="phone" header="Teléfono" sortable style="width: 25%"></Column>
        </DataTable>
    </div>
</template>

<script>
import UsuarioService from '@/Service/UsuarioService';

export default {
    name: 'getAllUsuarios',
    data() {
        return {
            usuarios: null,
            usuarioService: null,
        }
    },
    created() {
        this.usuarioService = new UsuarioService();
        this.usuarioService.getAll().then(data => {
            this.usuarios = data.data;
            console.log(this.usuarios);
        });
    }
}
</script>

<style scoped>

</style>