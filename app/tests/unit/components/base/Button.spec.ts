import { mount } from "@vue/test-utils"
import Button from "~/components/base/button/Button.vue"

describe("Base Button", () => {
  test("works", () => {
    const buttonText = "I am a button"
    const wrapper = mount(Button, {
      propsData: {
        padding: "2rem",
        content: buttonText,
      },
    })

    const button = wrapper.find(".button")
    expect(button.text()).toBe(buttonText)
    expect(button.attributes().style).toBe("padding: 2rem;")
  })
})
