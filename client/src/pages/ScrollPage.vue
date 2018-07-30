<template>
    <div id="scroll-page">
        <div class="container">   
            <h2>Infinity Scroll Component example</h2>
            <inf-scroll :array="array" initial="20" >
                <div slot="end" class="endOfFile">
                    Acabou
                </div>
            </inf-scroll>
        </div>
    </div>
</template>

<script>
import InfScroll from '@/components/InfScroll';
export default {
    name: 'scrollPage',
    data(){
        return{
            array: []     
        }
    },
    components: {
        InfScroll
    },
    mounted(){
        for (let index = 0; index < 30; index++) {
            this.array.push(Math.round(Math.random()*10),Math.round(Math.random()*10));
        }
    }
}
</script>

<style lang="scss">

</style>


