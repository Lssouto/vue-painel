<template>
    <div class="container">
        <h2 class="section-title">Examples</h2>
        <h3>Datatable</h3>
        <div class="container table-responsive">
            <table border="0" cellpadding="0" cellspacing="0">
                <thead>
                    <tr>
                        <td>Código</td>
                        <td>Nome</td>
                        <td>Ativo</td>
                        <td>Código</td>
                        <td>Nome</td>
                        <td>Ativo</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.cd">
                        <td>{{user.id}}</td>
                        <td>{{user.name}}</td>
                        <td><vs-switch vs-type="primary" v-model="user.isActive" @change="putUserState(user)"/></td>
                        <td>{{user.id}}</td>
                        <td>{{user.name}}</td>
                        <td><vs-switch vs-type="primary" v-model="user.isActive" @change="putUserState(user)"/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "Homepage",
    data(){
        return{
            users: [
                {id: 1, name: 'Lucas', isActive: false},
                {id: 2, name: 'Diego', isActive: true},
                {id: 3, name: 'Julia', isActive: true},
                {id: 4, name: 'Gabriela', isActive: false},
                {id: 5, name: 'Caio', isActive: true},
                {id: 6, name: 'Maria', isActive: false},
                {id: 7, name: 'Maria', isActive: false},
                {id: 8, name: 'Maria', isActive: false},
                {id: 9, name: 'Maria', isActive: false},
                {id: 10, name: 'Maria', isActive: false},
                {id: 11, name: 'Maria', isActive: false},
                {id: 12, name: 'Maria', isActive: false},
                {id: 13, name: 'Maria', isActive: false},
            ]
        }
    },
    methods: {
        putUserState(user){
            this.$vs.notify({title:'Alteração de status',text:'Usuário: ' + user.name + ' Alterado com sucesso',color:'primary', icon:'check_box', fixed: true})
        }
    }
}
</script>

<style>

</style>

