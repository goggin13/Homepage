require_relative "#{Dir.pwd}/integration_tests/spec_helper"

describe "about page" do

  before do
    visit ""
  end

  it "should load" do
    click_link "About"
    expect(page).to have_content "developer at Braintree"
  end
end
