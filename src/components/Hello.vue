<!-- src/components/Hello.vue -->
<template>
    <div>
        <h1>{{ fullMessage }}</h1>
        <button @click="clicked">Click</button>
        <!--<button @click="parentClicked">Parent Click</button>-->
        <router-link to="hello-ts">Hello TS</router-link>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component({})
    export default class Hello extends Vue {
        message: string = 'Hello World'

        get fullMessage() {
            return `${this.message} from TypeScript`
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
