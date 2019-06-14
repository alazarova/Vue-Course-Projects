<template>
    <div>
        <label for="name">Last Name:</label>
        <input placeholder="The lastName field must be at least 3 characters." type="text" v-model="lastName" v-validate="{ required: true, min: 3 }" name='lastName' :class="{ 'is-invalid': submitted && errors.has('lastName') }" />
        <div v-if="submitted && errors.has('lastName')" class="invalid-feedback">{{ errors.first('lastName') }}</div>
    </div>
</template>
