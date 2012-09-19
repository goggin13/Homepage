require 'bundler/setup'
require 'rspec'
require 'capybara'
require 'capybara/dsl'

RSpec.configure do |config|
  config.include Capybara::DSL
end

Capybara.default_driver = :selenium
Capybara.app_host = 'http://www.mattgoggin.com'
Capybara.default_wait_time = 10

