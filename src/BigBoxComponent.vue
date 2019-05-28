<template>
    <div id="big-div" v-bind:class="colorClass">
        <p v-if="!coloredButton"> Please, select a Button </p>
        <p v-else v-bind:function="changeBixBoxColorFromButtonComponent(coloredButton.id)"> 
            The color of the button N. {{ coloredButton.id}} is: {{ colorClass }}
        </p>
        <select 
            id="changeColor" 
            class="selectColor" 
            v-show="boxChangeColors" 
            v-model="selectedColor" 
            @change="changeBixBoxColorFromSelectList()">
            <option v-for="(color, i) in colors" :key="i"> {{ color }} </option>
        </select>
    </div>
</template>

<script>
    import { colorBus } from './main';

    export default {
        data() {
            return {
                coloredButton: null,
                colorClass: "green",
                boxChangeColors: false,
                selectedColor: '',
                colors: ['Pink', 'Blue', 'Yellow', 'Purple']
            }            
        },

        methods: {
            changeBixBoxColorFromButtonComponent(id) {
                this.boxChangeColors = true;
            },

            changeBixBoxColorFromSelectList() {                
                this.colorClass = this.selectedColor.toLowerCase();
                colorBus.$emit('bigBoxColor', this.colorClass)
            },

        },

        created() {
           colorBus.$on('selectedButton', (selectedButton) => {
               this.colorClass = selectedButton.color.toLowerCase();
               this.coloredButton = selectedButton;
               this.selectedColor = selectedButton.color;
            });
       },

       computed: {
            
       }
           
      
    }

</script>

<style>

   .green {
        font-size: 24px;
        color: #63D070;
        margin: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 500px;
        height: 300px;
        border: 3px solid #63D070;
    }

   #changeColor {
       font-size: 16px;
       display: flex;
       width: 200px;
       height: 40px;
   }


    .pink {
        margin: 20px;
        font-size: 20px;
        text-transform: uppercase;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 500px;
        height: 300px;
        background-color: #C17C96;
        color:  #7F173C;
        border: 3px solid #7F173C;
    }

    .blue {
        font-size: 20px;
        text-transform: uppercase;
        margin: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 500px;
        height: 300px;
        background-color: #46718F;
        color:  #093D62;
        border-color:  #093D62;

    }

    .yellow {
        font-size: 20px;
        text-transform: uppercase;
        margin: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 500px;
        height: 300px;
        background-color: #FFD24D;
        color: #CC9900;
        border-color: #CC9900;
    }
        
    .purple {
        font-size: 20px;
        margin: 20px;
        text-transform: uppercase;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 500px;
        height: 300px;
        background-color: #915EB6;
        color: #642492;
        border-color: #642492;
    }

</style>