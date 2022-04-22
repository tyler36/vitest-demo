
import { mount } from '@vue/test-utils'
import { beforeEach } from 'vitest'
import Counter from '../Counter.vue'

let wrapper;

beforeEach(async () => {
    wrapper = mount(Counter)
})

describe('Counter', () => {
  it('incremements the count', async() => {
    expect(wrapper.text()).toContain('Count: 0')

    await wrapper.find('#increment').trigger('click')
    expect(wrapper.text()).toContain('Count: 1')

    await wrapper.find('#increment').trigger('click')
    expect(wrapper.text()).toContain('Count: 2')
  })

  it('decrements the count', async() => {
    expect(wrapper.text()).toContain('Count: 0')

    await wrapper.find('#decrement').trigger('click')
    expect(wrapper.text()).toContain('Count: -1')

    await wrapper.find('#decrement').trigger('click')
    expect(wrapper.text()).toContain('Count: -2')
  })
})
