<template>
    <div class="container">
        <h1>Contact Form</h1>
        <form @submit.prevent="handleSubmit">

            
           <app-first-name></app-first-name>
           <app-last-name></app-last-name>
           <app-email></app-email>
           <app-password></app-password>


            <button type="submit">Submit</button>
    
    
    
        </form>
    
    
        <div v-if="validated" class="panel panel-default">
            <div class="panel-heading">
                <h4>Your Data</h4>
            </div>
            <div class="panel-body">
                <p>First Name: {{ firstName }}</p>
                <p>Last Name: {{ lastName }}</p>
    
                <p>Email: {{ email }}</p>
                <p>Password: {{ password }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import VeeValidate from 'vee-validate';
    
    
    import FirstName from './components/FirstName.vue';
    import LastName from './components/LastName.vue';
    import Email from './components/Email.vue';
    import Password from './components/Password.vue';
    
    Vue.use(VeeValidate);
    
    
    export default {
        data: function() {
            return {
    
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                submitted: false,
                validated: false
    
            }
        },
        methods: {
            handleSubmit(e) {
                this.submitted = true;
                this.$validator.validate().then(valid => {
                    if (valid) {
                        this.validated = true;
                    }
                });
            }
    
        },
        components: {
            appFirstName: FirstName,
            appLastName: LastName,
            appEmail: Email,
            appPassword: Password
        }
    
    }
</script>

<style>
    body {
        background-color: #B1C4F0;
    }
    
    .container {
        width: 50vw;
        margin: 25vh auto;
        /* border-radius: 0.25em; */
        box-shadow: 0em 0em 1em 0.5em rgba(0, 0, 0, 0.3);
        user-select: none;
        background-color: #fff;
        border: 1px solid #5A7CCA;
        border-radius: 0.5em;
    }
    
    h1 {
        background-color: #5A7CCA;
        padding: 0.5em 0;
        text-align: center;
        color: #FFBD87;
        margin-top: 0;
        border-radius: 0.2em 0.2em 0 0;
    }
    
    input,
    textarea {
        padding: 0.5em;
        margin: 0.5em 0 1em 0;
        border: 1px solid #cfd9db;
        background-color: #ffffff;
        border-radius: 0.25em;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
        width: 100%;
        font-size: 16px;
        outline: #72D7D7;
    }
    
    label {
        color: #5A7CCA;
        font-weight: bold;
    }
    
    form {
        margin-left: auto;
        margin-right: auto;
        width: 35vw;
    }
    
     ::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #FFA961;
        opacity: 1;
        /* Firefox */
        font-size: 14px;
    }
    
    button {
        width: 90%;
        font-size: 1.2em;
        border-radius: 0.5em;
        border: 1px solid #5A7CCA;
        background: #5A7CCA;
        padding: 1em 0;
        box-shadow: rgba(255, 255, 255, 0.1) 0 1px 0, inset rgba(255, 255, 255, 0.7) 0 1px 0;
        color: #FFBD87;
        margin: 0 5% 5% 5%;
        text-align: center;
        cursor: pointer;
        outline: none;
        font-weight: bold;
    }
    
    button:hover {
        background-color: #FFBD87;
        border: 1px solid #5A7CCA;
        color: #5A7CCA;
    }
    
    .panel {
        padding: 0 0 5% 5%;
    }
    
    .submitted {
        color: #fff;
    }
    
    .invalid-feedback {
        color: #FFBD87;
        margin-bottom: 1em;
        margin-top: -0.5em;
    }
</style>
