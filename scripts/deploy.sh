

./build_production_js.sh

ruby switch_out_javascript.rb -prod

s3put --acl-public ~/projects/coffee/home/javascripts/application.js s3://www.mattgoggin.com/javascripts/application.js
s3put --acl-public --recursive ~/projects/coffee/home/stylesheets/ s3://www.mattgoggin.com/stylesheets/
s3put --acl-public --recursive ~/projects/coffee/home/images/ s3://www.mattgoggin.com/images/
s3put --acl-public --recursive ~/projects/coffee/home/templates/ s3://www.mattgoggin.com/templates/
s3put --acl-public --recursive ~/projects/coffee/home/test.html s3://www.mattgoggin.com/test.html
s3put --acl-public --recursive ~/projects/coffee/home/index.html s3://www.mattgoggin.com/index.html
s3put --acl-public --recursive ~/projects/coffee/home/index.html s3://www.mattgoggin.com/404.html

ruby switch_out_javascript.rb -dev