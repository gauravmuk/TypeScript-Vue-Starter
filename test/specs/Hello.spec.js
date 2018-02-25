import { shallow } from 'vue-test-utils'
import Hello from '../../src/components/Hello.vue'

describe('Hello.vue', () => {
   it('renders the bakar component', () => {
        const wrapper = shallow(Hello, {
           propsData: {}
        });
        expect(wrapper.find('h1')).toHaveLength(1);
   });
});
