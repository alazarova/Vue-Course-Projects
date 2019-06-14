<template>
    <div class="container">
                <h1>Filter & Mixins</h1>
                <p>{{ text | toUppercase | to-lowercase }}</p>
                <hr>
                <button @click="fruits.push('Berries')">Add New Item</button>
                <input type="text" v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
                </ul>
    <hr>
    <app-list></app-list>
         
    </div>
</template>

<script>
import List from './List.vue';
import { fruitMixin } from './fruitMixin';


    export default {
        mixins: [fruitMixin],
        data() {
            return {
            
               text: 'Hello there!'
            }
        },
        filters:{
           toUppercase(value) {
                return value.toUpperCase();
           } 
        },
        
        components: {
            appList: List
        }
    }
</script>

<style>
    
</style>
