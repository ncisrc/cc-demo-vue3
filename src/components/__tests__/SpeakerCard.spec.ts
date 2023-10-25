import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import SpeakerCard from '../SpeakerCard.vue'

describe('SpeakerCard', () => {
  it('renders properly', () => {
    const speakerMock = {
      name: 'John Doe',
      disambiguatingDescription: 'A very cool person',
      descriptionHtml: 'A very cool person',
      image: 'https://via.placeholder.com/150',
      websites: ['https://example.com']
    }

    const wrapper = mount(SpeakerCard, { props: { speaker: speakerMock } })
    expect(wrapper.text()).toContain(speakerMock.name)
  })
})
