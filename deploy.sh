
# ruby write_manifest.rb
# echo "wrote manifest"
./s3/s3cmd put --acl-public --recursive ~/projects/coffee/home/javascripts/frameworks/ s3://www.mattgoggin.com/javascripts/frameworks/
./s3/s3cmd put --acl-public --recursive ~/projects/coffee/home/javascripts/src/ s3://www.mattgoggin.com/javascripts/src/
./s3/s3cmd put --acl-public --recursive ~/projects/coffee/home/stylesheets/ s3://www.mattgoggin.com/stylesheets/
./s3/s3cmd put --acl-public --recursive ~/projects/coffee/home/images/ s3://www.mattgoggin.com/images/
./s3/s3cmd put --acl-public --recursive ~/projects/coffee/home/templates/ s3://www.mattgoggin.com/templates/
# ./s3/s3cmd put --acl-public --recursive ~/projects/coffee/home/offline.appcache s3://www.mattgoggin.com/home/offline.appcache
./s3/s3cmd put --acl-public --recursive ~/projects/coffee/home/test.html s3://www.mattgoggin.com/test.html
./s3/s3cmd put --acl-public --recursive ~/projects/coffee/home/index.html s3://www.mattgoggin.com/index.html
./s3/s3cmd put --acl-public --recursive ~/projects/coffee/home/index.html s3://www.mattgoggin.com/404.html

# need custom appcache header to upload appcache manifest