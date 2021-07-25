import Vue from "vue"
import { mount, WrapperArray } from "@vue/test-utils"

import Error from "~/components/base/error/BaseError.vue"

describe("Error component", () => {
  it("correctly render with 1 error", () => {
    const error = "Some error text"
    const wrapper = mount(Error, {
      propsData: {
        error,
      },
    })

    const itemsWrapper = wrapper.find(".errors__items")
    const item = wrapper.find(".errors__item")

    expect(itemsWrapper.exists()).toBe(false)

    expect(item.text()).toBe(error)
  })

  it("correctly render with few errors", () => {
    const errors = ["Some error text", "Some error text 1", "Some error text 2"]
    const wrapper = mount(Error, {
      propsData: {
        errors,
      },
    })

    const itemsWrapper = wrapper.find(".errors__items")
    const items = wrapper.findAll(".errors__item") as unknown as WrapperArray<Vue>

    expect(itemsWrapper.exists()).toBe(true)
    expect(items).toHaveLength(errors.length)
    errors.forEach((error, index) => expect(items.at(index).text()).toBe(error))
  })

  it("correctly render with two params", () => {
    const error = "Some error text"
    const errors = ["Some error text", "Some error text 1", "Some error text 2"]
    const wrapper = mount(Error, {
      propsData: {
        error,
        errors,
      },
    })

    const resultErrors = [error].concat(errors)
    const itemsWrapper = wrapper.find(".errors__items")
    const items = wrapper.findAll(".errors__item") as unknown as WrapperArray<Vue>

    expect(itemsWrapper.exists()).toBe(true)
    expect(items).toHaveLength(errors.length + 1)
    resultErrors.forEach((error, index) => expect(items.at(index).text()).toBe(error))
  })
})
