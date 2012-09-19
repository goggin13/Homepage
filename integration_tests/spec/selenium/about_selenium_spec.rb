require 'spec_helper.rb'

describe "about page" do
  
  before do
    visit ''
    page.should have_content 'blog'
  end
  
  it "should load" do
    click_link 'About'
    page.should have_content 'A computer science grad student at cornell'
  end
end