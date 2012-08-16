
# ruby write_manifest.rb
# echo "wrote manifest"
./s3/s3cmd put --acl-public --recursive ~/projects/coffee/home/javascripts/frameworks/ s3://matt-goggin/home/javascripts/frameworks/
./s3/s3cmd put --acl-public --recursive ~/projects/coffee/home/javascripts/src/ s3://matt-goggin/home/javascripts/src/
./s3/s3cmd put --acl-public --recursive ~/projects/coffee/home/stylesheets/ s3://matt-goggin/home/stylesheets/
./s3/s3cmd put --acl-public --recursive ~/projects/coffee/home/images/ s3://matt-goggin/home/images/
./s3/s3cmd put --acl-public --recursive ~/projects/coffee/home/templates/ s3://matt-goggin/home/templates/
# ./s3/s3cmd put --acl-public --recursive ~/projects/coffee/home/offline.appcache s3://matt-goggin/home/offline.appcache
./s3/s3cmd put --acl-public --recursive ~/projects/coffee/home/test.html s3://matt-goggin/home/test.html
./s3/s3cmd put --acl-public --recursive ~/projects/coffee/home/index.html s3://matt-goggin/home/index.html

# need custom appcache header to upload appcache manifest