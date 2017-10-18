import { DirectiveOptions } from 'vue';

const directive: DirectiveOptions = {
    inserted(el, node) {
        if (node.modifiers.background) {
            el.style.backgroundColor = node.value;
        } else {
            el.style.color = node.value;
        }
    }
}

export default directive
