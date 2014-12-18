describe("LinksView", function() {
  it("displays the links page", function () {
    var linksView = new LinksView();
    linksView.render();

    var html = linksView.$el.html();
    expect(html).toMatch(/.*moar goggin on interwebz.*/)
  });
});
