<template>
    <div class="container">
            <h2 class="h-title">Examples</h2>
            <h3 class="h-sub-title">Datatable</h3>
            <Datepicker 
                lang="pt-br" 
                v-model="date" 
                :time-picker-options="timePickerOptions" 
                type="datetime"
                :confirm="true"
                :minute-step="5"
                format="dd-MM-yyyy HH:mm:ss"
            />
        <div class="table-responsive">
            <table border="0" cellpadding="0" cellspacing="0">
                <thead>
                    <tr>
                        <td>Código</td>
                        <td>Nome</td>
                        <td>Ativo</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.cd">
                        <td>{{user.id}}</td>
                        <td>{{user.name}}</td>
                        <!--<td><el-switch v-model="user.isActive" /></td>-->
                        <td> 
                            <v-switch color="primary" v-model="user.isActive"></v-switch>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>
</template>

<script>
import Datepicker from 'vue2-datepicker' 
export default {
    name: "Painel",
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
            ],
            timePickerOptions: {
                start: '00:00',
                step: '00:30',
                end: '23:30'
            },
            date: 0
        }
    },
    methods: {
    },
    components: {
        Datepicker
    }
}
</script>

<style lang="scss">

</style>

