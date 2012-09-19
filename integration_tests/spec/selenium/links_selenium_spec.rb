require 'spec_helper.rb'

describe "links page" do
  
  before do
    visit ''
    page.should have_content 'blog'
  end
  
  it "should load" do
    click_link 'Links'
    page.should have_content 'moar goggin on interwebz'
  end
end