import { mount } from "@vue/test-utils"

import Socials from "~/components/base/social/Socials.vue"
import { SocialInterface } from "~/interfaces/social"

describe("Socials component", () => {
  const propTitle = "Socials title"
  const propItems: SocialInterface[] = []

  it("correctly render", () => {
    const wrapper = mount(Socials, {
      propsData: {
        title: propTitle,
        items: propItems,
      },
    })

    const title = wrapper.find(".socials__title")
    const items = wrapper.findAll(".socials__item")

    expect(title.text()).toBe(propTitle)
    expect(items).toHaveLength(propItems.length)
  })

  it("correctly render with border", () => {
    const wrapper = mount(Socials, {
      propsData: {
        title: propTitle,
        items: propItems,
        withBorder: true,
      },
    })

    const items = wrapper.find(".socials__items")

    expect(items.classes()).toContain("socials__items_bordered")
  })

  it("correctly render without border", () => {
    const wrapper = mount(Socials, {
      propsData: {
        title: propTitle,
        items: propItems,
        withBorder: false,
      },
    })

    const items = wrapper.find(".socials__items")

    expect(items.classes()).not.toContain("socials__items_bordered")
  })
})
