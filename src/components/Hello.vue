<!-- src/components/Hello.vue -->
<template>
    <div>
        <h1 v-colorDirective.background="'blue'">{{ fullMessage }}</h1>
        <button @click="clicked">Click</button>
        <!--<button @click="parentClicked">Parent Click</button>-->
        <router-link to="hello-ts">Hello TS</router-link>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import colorDirective from '../directives/color-directive';

    @Component({
        directives: {
            colorDirective
        }
    })
    export default class Hello extends Vue {
        message: string = 'Hello World'

        yolo: Array<string>

        bolo: Array<boolean>


        get fullMessage() {
            return `${this.message} from TypeScript`
        }

        mounted() {
            this.yolo = this.bolo as Array<string>;
        }

        created() {
            console.log('created');
        }

        clicked() {
            console.log('clicked');
        }

        beforeRouteEnter(to, from, next) {
            console.log('yolo');
            next();
        }
    }
</script>

<style></style>
