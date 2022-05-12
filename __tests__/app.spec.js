import { mount, createLocalVue } from '@vue/test-utils'
import TheTransaction from '../src/components/TheTransaction.vue'

const localVue = createLocalVue;
const searchingVariable = '0x980f548fe0324fb2d05106f2295f5bb8c946bac590cd8d91bc4aa73087219282';

describe('TheBlockchainData', () => {
    // Inspect the raw component options
    it('has data', () => {
      expect(typeof TheTransaction.data).toBe('function')
    })
  })

describe('TheBlockchainData', ()=>{
  it('has methods', ()=>{
    expect(typeof TheTransaction.methods).toBe('object')
  });
})

describe('unit tests for TheTransaction', ()=>{
  if('renders a div', ()=>{
    const wrapper = mount(TheTransaction)
    expect(wrapper.contains('div')).toBeTruthy()
  });
})