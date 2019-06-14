<template>
    <div>
        <label for="name">First Name:</label>
        <input placeholder="The firstName field must be at least 3 characters." type="text" v-model="firstName" v-validate="{ required: true, min: 3 }" name='firstName' :class="{ 'is-invalid': submitted && errors.has('firstName') }" />
        <div v-if="submitted && errors.has('firstName')" class="invalid-feedback">{{ errors.first('firstName') }}</div>
    </div>
</template>
