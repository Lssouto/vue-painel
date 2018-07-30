<template>
    <div id="inf-scroll">
        <ul class="infinity-list">
            <li v-for="(number,index) in arrayShow" :key="index">
                {{ number }}
            </li>
        </ul>
        <slot name="end" v-if="endOfArray">
            Fim dos dados
        </slot>
    </div>
</template>

<script>
import { debounce } from 'lodash';
export default {
    name: 'inf-scroll',
    data(){
        return{
            page: 0,
            endOfArray: false,
            default: {
                gap: 60, //%
                perPage: 4
            }
        }
    },
    beforeMount () {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    mounted(){
        
    },
    methods: {
        handleScroll: debounce(function(){
            if(this.endPosition >= this.array.length){
                this.endOfArray = true;
                return;
            }
            if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - this.realGap)){
                this.page += 1;
            }
        },25)
    },
    computed: {
        realGap(){
            return document.body.offsetHeight * ((this.loadGap)? this.loadGap : this.default.gap) / 100;
        },
        arrayShow(){
            if(!this.array)
                return [];
            return this.array.slice(0,this.endPosition);
        },
        endPosition(){
            let page = this.page;
            let perPage = (this.perPage)? this.perPage : this.default.perPage;
            let initial = this.initial;
            return parseInt(initial) + parseInt(perPage) * parseInt(page);
        }
    },
    props: [
        'array',
        'loadGap',
        'perPage',
        'initial'
    ]
}
</script>

<style lang="scss">
.infinity-list{
    margin-top: 15px;
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