require_relative "#{Dir.pwd}/integration_tests/spec_helper"

describe "links page" do

  before do
    visit ""
  end

  it "should load" do
    click_link "Links"
    expect(page).to have_content "moar goggin on interwebz"
  end
end
