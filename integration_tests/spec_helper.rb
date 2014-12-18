require "bundler/setup"
require "rspec"
require "capybara"
require "capybara/dsl"

headless = nil
RSpec.configure do |config|
  config.include Capybara::DSL
end

Capybara.default_driver = :selenium
Capybara.app_host = ENV["APP_HOST"] || "http://localhost:8000"
Capybara.default_wait_time = 2
