<template>
    <div>
        <div id="resetButtons"> {{ resetButtons}} </div>
    </div>
</template>


<script>

    export default {
        data() {
            return {
                resetButtons: 'Reset Buttons'
            }
        },

        methods: {

        },
    }

</script>

<style>

#resetButtons {
    font-size: 22px;
    color: #449595;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
    width: 300px;
    height: 50px;
    border: 3px solid #449595;
}

</style>
