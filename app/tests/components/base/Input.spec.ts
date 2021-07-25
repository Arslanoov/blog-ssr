import { mount } from "@vue/test-utils"

import Input from "~/components/base/input/BaseInput.vue"

describe("Input component", () => {
  it("correctly render", () => {
    const classNames = ["class1", "class2"]

    const wrapper = mount(Input, {
      propsData: {
        class: classNames.join(" "),
      },
    })

    const inputWrapper = wrapper.find(".input")
    const input = wrapper.find(".input__item")

    expect(inputWrapper.exists()).toBe(true)
    expect(input.exists()).toBe(true)

    expect(input.classes()).toEqual(expect.arrayContaining(classNames))
  })
})
