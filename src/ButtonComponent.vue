<template>
        <li id="list" 
            v-bind:class="[computedClass, 'button']"
            v-on:click="selectButton(buttonAsProp.color)"> 
            Button {{ buttonAsProp.id }}
        </li>
</template>


<script>
  import { colorBus } from './main';

    export default {
    props: ['buttonAsProp'],

        data() {
            return {
                colors: ["green", "pink", "blue", "yellow", "purple"],
                colorClass: "green",
                bigBoxColor: "",
                selectedIndex: 0
            }
        },

        methods: {
            selectButton(buttonAsPropColor) {
                this.colorClass = buttonAsPropColor.toLowerCase();
                this.emitIdAndColor();
            },

            emitIdAndColor() {
                colorBus.$emit('selectedButton', this.buttonAsProp);
            }
        },

        created() {
            colorBus.$on('bigBoxColor', (bigBoxColor) => {
                let shouldSelect = this.buttonAsProp.color.toLowerCase() === bigBoxColor; 
                if(shouldSelect) {
                    this.selectButton(bigBoxColor);
                }
            });

            colorBus.$on('selectedButton', (selectedButton) => {
               this.selectedIndex = selectedButton.id;
            });
        },

        computed: {
            computedClass() {
                let isSelected = this.buttonAsProp.id === this.selectedIndex;
                return isSelected ? this.colorClass+'Button' : 'greenButton';
            }
        }
    }

</script>

<style>

    .button {
        font-size: 20px;
        margin: 20px;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 400px;
        height: 100px;
    }

    .greenButton {
        color: #63D070;
        border: 3px solid #63D070;
    }

    .pinkButton {
        background-color: #C17C96;
        color:  #7F173C;
        border: 3px solid #7F173C;
    }

    .blueButton {
        background-color: #46718F;
        color:  #093D62;
        border: 3px solid #093D62;
    }

    .yellowButton {
        background-color: #FFD24D;
        color: #CC9900;
        border: 3px solid #CC9900;
    }
        
    .purpleButton {
        background-color: #915EB6;
        color: #642492;
        border: 3px solid #642492;
    }


</style>
