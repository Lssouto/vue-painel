<template>
    <div id="inf-scroll">
        <div class="container">
            <h1>Infinity scroll</h1>
            <h2>Keep Rolling ;)</h2>
            <ul class="infinity-list">
                <li v-for="number in array">
                    {{ number }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { debounce } from 'lodash';
export default {
    name: 'inf-scroll',
    data(){
        return{
            array: [],
            gap: 30 //%
        }
    },
    beforeMount () {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    mounted(){
        for(let i = 0; i < 20 ; i++)  {
            this.array.push(Math.round(Math.random()*10));
        }
    },
    methods: {
        handleScroll: debounce(function(){
            console.log(window.scrollY)
            if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - this.realGap)){
               this.array.push(Math.round(Math.random()*10),Math.round(Math.random()*10));
            }
        },25)
    },
    computed: {
        realGap(){
            return document.body.offsetHeight * this.gap / 100;
        }
    }
}
</script>

<style lang="scss">
.infinity-list{
    @include flex-align( 1 1 49%);
    flex-wrap: wrap;
    & > li{
        background-color: rgba($primary,.3);
        border-radius: 4px;
        padding: 10px 0;
        text-align: center;
        font-size: 22px;
        font-weight: bolder;
        margin-bottom: 8px;
        
        &:nth-child(2n){
            margin-left: 5px;
        }
        &:nth-child(3n){
            background-color: rgba($primary,.3);
            color: $dark-primary;
        }
        &:nth-child(3n+1){
            background-color: rgba($secundary,.3);
            color: $dark-secundary;
        }
        &:nth-child(3n+2){
            background-color: rgba(black,.3);
            color: $white;
        }
    }
}
    
</style>