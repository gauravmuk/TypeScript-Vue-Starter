<!-- src/components/Hello.vue -->
<template>
    <div>
        <h1>{{ fullMessage }}</h1>
        <button @click="clicked">Click</button>
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
    }
</script>

<style></style>
