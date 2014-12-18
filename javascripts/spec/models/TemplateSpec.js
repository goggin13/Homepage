describe("Template", function() {
  it("synchronously fetches a template", function() {
    var template = Template.fetch("Test");

    rendered = template({name: "matt"});
    expect(rendered).toBe("hello, matt");
  });
});
