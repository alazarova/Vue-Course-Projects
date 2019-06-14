<template>
    <div>
        <label for="password">Password:</label><br>
        <input placeholder="The password field is required." type="password" v-model="password" v-validate="{ required: true, min: 6 }" name="password" :class="{ 'is-invalid': submitted && errors.has('password') }">
        <div v-if="submitted && errors.has('password')" class="invalid-feedback">{{ errors.first('password') }}</div>
    </div>
</template>
