require_relative "/Users/mattgoggin/bt/dev-box/projects/homepage_new/integration_tests/spec_helper"

describe "blog page" do
  before do
    visit ""
    expect(page).to have_content "My random thoughts on random programming things"
  end

  it "lists all the current blog entries" do
    total_blogs = `ls blogs | wc -l`.to_i
    test_blogs = `ls blogs/test* | wc -l`.to_i
    expect(page).to have_css ".post", :count => (total_blogs - test_blogs)
  end

  it "toggles a blog post" do
    expect(page).to have_content "razzle dazzle"

    expect(page).to have_css ".toggle.collapse"
    find(".toggle.collapse", :match => :first).click
    expect(page).to_not have_css ".toggle.collapse"

    expect(page).to_not have_content "razzle dazzle"
    # current_url.should == "http://localhost:8000/#/blog/7"
  end

  xit "should toggle entries closed and open, which should update the url" do
    page.should have_css ".toggle.collapse"
    find(".toggle.collapse").click
    page.should_not have_css ".toggle.collapse"
    current_url.should == "http://www.mattgoggin.com/#/blog"

    find(".toggle.expand").click
    page.should have_css ".toggle.collapse"
    current_url.should == "http://www.mattgoggin.com/#/blog/50ee5751164d630200000001"

    find(".toggle.collapse").click
    page.should_not have_css ".toggle.collapse"
    current_url.should == "http://www.mattgoggin.com/#/blog"
  end

  xit "should expand an entry if it is visited directly" do
    visit "/#/blog/5010b01258f7700200000003"
    page.should have_content "It disguises that you are even using Backbone;"
  end
end
