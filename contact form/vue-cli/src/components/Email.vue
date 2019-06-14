<template>
    <div>
        <label for="email">Email</label>
        <input placeholder="The email field must be a valid email." type="email" v-model="email" v-validate="'required|email'" name="email" :class="{ 'is-invalid': submitted && errors.has('email') }" />
        <div v-if="submitted && errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</div>
    </div>
</template>
