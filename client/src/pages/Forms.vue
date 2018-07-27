<template>
    <div id="forms">
        <h2 class="h-title">
            Forms
        </h2>
        
        <form @submit.prevent="submit()">
            <div class="input-container">
                <input type="text" name=""/>    
            </div>
            
            <input type="submit" value="Submit"/>
        </form>
    </div>
</template>

<script>
export default{
    name: 'Forms',
    methods: {
        submit(){
            console.log('wil submit')
        }
    }
}    
    
</script>

<style lang="scss">
    
</style>