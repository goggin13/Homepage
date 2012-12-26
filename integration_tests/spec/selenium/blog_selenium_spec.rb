require 'spec_helper.rb'

describe "blog page" do
  
  before do
    visit ''
    page.should have_content 'My random thoughts on random programming things'
  end
  
  it "should list all the current blog entries" do
    page.should have_css '.post', :count => 6
  end

  it "should toggle entries closed and open, which should update the url" do
    page.should have_css '.toggle.collapse'
    find('.toggle.collapse').click
    page.should_not have_css '.toggle.collapse'
    current_url.should == "http://www.mattgoggin.com/#/blog"
    
    find('.toggle.expand').click
    page.should have_css '.toggle.collapse'
    current_url.should == "http://www.mattgoggin.com/#/blog/50da6eec1a0e090200000001"
    
    find('.toggle.collapse').click
    page.should_not have_css '.toggle.collapse'
    current_url.should == "http://www.mattgoggin.com/#/blog"
  end
  
  it "should expand an entry if it is visited directly" do
    visit '/#/blog/5010b01258f7700200000003'
    page.should have_content "It disguises that you are even using Backbone;"
  end
  
end