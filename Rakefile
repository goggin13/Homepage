require "rspec/core/rake_task"
require "yaml"
require "aws-sdk"

RSpec::Core::RakeTask.new(:spec) do |task|
  task.pattern = "integration_tests"
end

task :default => :spec

desc "start the static server"
task :run do
  system("python -m SimpleHTTPServer")
end

namespace :staging do
  desc "deploy to staging"
  task :deploy do
    deploy("staging")
  end
end

namespace :production do
  desc "deploy to production"
  task :deploy do
    STDOUT.puts "Really deploy to production? (yes/no)"
    next unless STDIN.gets.strip == "yes"
    deploy("production")
  end
end

def deploy(environment)
  base_path = environment == "production" ? "" : "staging/"

  credentials = YAML.load_file(".s3_credentials.yml")
  s3 = AWS::S3.new(credentials["s3"])
  bucket = s3.buckets["www.mattgoggin.com"]

  ["blogs", "images", "javascripts", "stylesheets"].each do |folder|
    puts folder
    Dir.glob("#{folder}/**/*").each do |path|
      next if File.directory?(path)
      upload_to_s3(bucket, base_path, path)
    end
  end

  upload_to_s3(bucket, base_path, "index.html")
  upload_to_s3(bucket, base_path, "test.html")
end

def upload_to_s3(bucket, base_path, path)
  s3_path = base_path + path
  print "\t#{path}..."
  content_type = if path =~ /.*\.html$/
    "text/html"
   elsif path =~ /.*\.js$/
    "text/javascript"
  elsif path =~ /.*\.css$/
    "text/css"
  else
    "text/plain"
  end
  result = bucket.objects.create(s3_path, File.open(path), :acl => :public_read, :content_type => content_type)
  puts " :) #{result.content_length} bytes of #{content_type}"
end
