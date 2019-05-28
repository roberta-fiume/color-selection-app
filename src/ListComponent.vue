<template>
    <ul>
        <button-component v-for="button in buttons" :key="button.id" :buttonAsProp="button"></button-component>
    </ul>
</template>

<script>

import ButtonComponent from './ButtonComponent.vue'

export default {

    data() {
        return {
            buttons: [
                { id: 1, color: 'Pink'},
                { id: 2, color: 'Blue'},
                { id: 3, color: 'Yellow'},
                { id: 4, color: 'Purple'},
            ]
        }
    },

    methods: {

    },

    components: {
        "button-component": ButtonComponent
    }
 
}
</script>

<style>

</style>
