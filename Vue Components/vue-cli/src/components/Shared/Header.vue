<template>
    <div>
        <hr>
        <input type='text' v-model='changeInputText' v-on:input="changeTitle">
        <h1 v-once>{{ title }}</h1>
        <p>{{ title }}</p>
        <a v-bind:href='link' target="_blank">Google</a>
        <hr>
        <hr>
        <hr>
        <p v-html='finishedLink'></p>
        <hr>
        <hr>
        <hr>
        <button v-on:click='increase'>Increase</button>
        <button v-on:click='decrease'>Decrease</button>
        <button v-on:click='counter++'>Increase</button>
        <button v-on:click='counter--'>Decrease</button>
    
        <p>Counter: {{counter}}</p>
        <p>Result: {{result}}</p>
    
    
        <hr>
        <hr>
        <hr>
        <p v-on:mousemove="updateCoordinates">Coordinates: {{x}} / {{y}} -
            <span v-on:mousemove="dummy">DEAD SPOT</span>
        </p>
        <input type='text' v-on:keyup.enter.space='alertMe'>
        <hr>
        <hr>
        <hr>
        
            <div class="demo" 
            @click="attachRed = !attachRed"
            :class="divClasses"></div>
            <div class="demo"
            :class="{red: attachRed}"></div>
            <div class="demo"
            :class="[color, {red: attachRed}]"></div>
            
            <hr>
            <input type="text" v-model="color">
            <input type="text" v-model="width">
            <div class="demo"  :style='myStyle'></div>
            <div class="demo"  :style="[myStyle, {height: width + 'px'}]"></div>

    
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                title: 'Hello World!',
                link: 'https://google.com',
                finishedLink: '<a href="https://google.com">Google</a>',
                counter: 0,
                x: 0,
                y: 0,
                changeInputText: 'Change Input Text',
                result: '',
                attachRed: false,
                color:"green",
                width: 100
            }
        },
        computed:{
            divClasses: function(){
                return{
                    red: this.attachRed,
                    blue: !this.attachRed
                }
            },
            myStyle: function(){
                return{
                    backgroundColor:this.color,
                    width: this.width + 'px'
                };
            }
        },
        methods: {
            changeTitle: function(event) {
                this.title = event.target.value;
            },
    
            sayHello: function() {
                this.title = 'Hello';
                return this.title
            },
    
            increase: function() {
                this.counter++;
                this.result = this.counter > 5 ? 'Greater 5' : 'Smaller 5'
            },
            decrease: function() {
                this.counter--;
                this.result = this.counter > 5 ? 'Greater 5' : 'Smaller 5'
            },
    
    
    
            updateCoordinates: function(event) {
                this.x = event.clientX;
                this.y = event.clientY;
            },
    
            alertMe: function() {
                alert('Alert!');
            },
    
            dummy: function(event) {
                event.stopPropagation();
    
            }
        }
    }
</script>

<style>
.demo{
    width: 100px;
    height: 100px;
     background-color: grey;
     display: inline-block;
}
.red{

    background-color: red;
}
.green{
  
    background-color: green;
}
.blue{
  
    background-color: blue;
}
</style>
