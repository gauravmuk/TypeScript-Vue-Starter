import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class Parent extends Vue {
    message: string = 'Hello from parent'

    clicked() {
        console.log('clicked from parent');
    }

    parentClicked() {
        console.log('parent clicked');
    }
}
