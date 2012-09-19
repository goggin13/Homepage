require 'spec_helper.rb'

describe "blog page" do
  
  before do
    visit ''
    page.should have_content 'My random thoughts on random programming things'
  end
  
  it "should list all the current blog entries" do
    page.should have_css '.post', :count => 3
  end

  it "should toggle entries closed and open" do
    page.should have_css '.toggle.collapse'
    find('.toggle.collapse').click
    page.should_not have_css '.toggle.collapse'
    
    find('.toggle.expand').click
    page.should have_css '.toggle.collapse'
  end
  
end