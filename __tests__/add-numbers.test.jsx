describe('Test Adding Numbers', () => {
  it('Expect 1 + 2 to be 3', () => {
    expect(1 + 2).toBe(3)
    expect(3).toMatchSnapshot()
  })
})
