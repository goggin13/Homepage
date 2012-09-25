

file_name = "run_tests_#{Time.now.to_i}.html"
result_path = "/Users/mg343/projects/coffee/home/integration_tests/spec/logs/#{file_name}"

system "bundle exec rspec spec/ --format html > #{result_path}"

f = File.new(result_path, "r")
failures = f.read.scan(/class="example failed"/).length
f.close

puts "#{failures} failures"

if failures > 0
  email = File.new "/tmp/failure_email.txt", 'w'
  email.puts "#{failures} failures at mattgoggin.com"
  email.close
  puts "emailing goggin13"
  # system "mail -s 'Integration Test Failure' goggin13@gmail.com < #{email.path}"
end