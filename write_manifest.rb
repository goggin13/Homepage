

dirs = [
  'images',
  'javascripts/frameworks',
  'javascripts/src',
  'stylesheets'
]

def process_dir(dir, f)
  Dir.foreach(dir) do |item|
    next if item == '.' or item == '..'
    
    path = "#{dir}/#{item}"
    
    if File.directory? path
      process_dir path, f
    else
      f.puts path
    end
    
  end
  
  f.puts "\n"
end

appcache_file = File.new('offline.appcache', 'w')
appcache_file.puts "CACHE MANIFEST"
appcache_file.puts "# Version #{Time.now.to_i}"
appcache_file.puts "\n"

dirs.each { |d| process_dir d, appcache_file }

appcache_file.puts "\n"
appcache_file.puts "NETWORK:\n*"

appcache_file.close