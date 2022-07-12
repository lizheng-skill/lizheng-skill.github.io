import { mount } from '@vue/test-utils'
import SkillPage from '@/views/SkillPage.vue'

describe('SkillPage.vue', () => {
  it('renders folder view', () => {
    const mockRoute = {
      params: {
        id: 'SAP'
      }
    }
    const wrapper = mount(SkillPage, {
      global: {
        mocks: {
          $route: mockRoute
        }
      }
    })
    expect(wrapper.text()).toMatch('Explore UI Components')
  })
})
