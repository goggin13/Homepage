describe("AboutView", function() {
  it("displays the about page", function () {
    var aboutView = new AboutView();
    aboutView.render();

    var html = aboutView.$el.html();
    expect(html).toMatch(/.*Braintree.*/)
  });
});
