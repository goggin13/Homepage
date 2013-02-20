require 'spec_helper.rb'

describe "projects page" do
  
  before do
    visit ''
    click_link 'Projects'
    page.should have_content 'hacked on recently'
  end
  
  it "should list all the current projects" do
    page.should have_css '.project', :count => 8
  end

  it "should toggle projects closed and open" do
    page.should_not have_css '.project.expanded'
    find('.project').click
    page.should have_css '.project.expanded'
    
    sleep(1)
    find('body').click
    sleep(2)
    page.should_not have_css '.project.expanded'
  end
  
end