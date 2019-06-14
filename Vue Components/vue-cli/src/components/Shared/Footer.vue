<template>
    <div>
    
        <p v-if="show">You can see me!</p>
        <p v-else>Now you see me!</p>
        <p>Fo you also see me?</p>
        <button @click="show = !show">Switch</button>
        <hr>
        <hr>
    
        <hr>
        <ul>
            <li v-for="(ingredient, i) in ingredients" :key="ingredient">{{ ingredient }} ({{ i }})</li>
        </ul>
        <button @click="ingredients.push('spices')">Add New</button>
        <div  v-for="(ingredient, index) in ingredients" :key="ingredient">
        <h1>{{ ingredient }}</h1>
        <p>{{ index }}</p>
        </div>
            <hr>
        <hr>
    
        <hr>
        <ul>
            <li v-for="person in persons" :key="person.id">
                <div v-for="(value, key, index) in person" :key="value">{{key}}: {{ value }} ({{index}})</div>
                </li>

        </ul>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                show: true,
                ingredients: ['meat', 'fruit', 'cookies'],
                persons: [{
                        name: 'Max',
                        age: 27,
                        color: 'red'
                    },
                    {
                        name: 'Anna',
                        age: 'unknown',
                        color: 'blue'
                    },
    
                ]
            }
        }
    }
</script>

<style scoped>
    
</style>

