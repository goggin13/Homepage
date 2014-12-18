require_relative "#{Dir.pwd}/integration_tests/spec_helper"

describe "jasmine specs" do
  it "has no failures" do
    visit "/test.html"
    expect(page).to have_content "0 failures"
  end
end
