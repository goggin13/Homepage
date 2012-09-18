
java -jar compiler.jar \
  --js_output_file=javascripts/application.js \
  --js=javascripts/frameworks/jquery-1.7.1.min.js \
  --js=javascripts/frameworks/underscore.js \
  --js=javascripts/frameworks/backbone.js \
  --js=javascripts/frameworks/mustache.js \
  --js=javascripts/frameworks/showdown.js \
  --js=javascripts/src/models/blog.js \
  --js=javascripts/src/models/project.js \
  --js=javascripts/src/views/static_view.js \
  --js=javascripts/src/views/home_view.js \
  --js=javascripts/src/views/error_view.js \
  --js=javascripts/src/views/blog_view.js \
  --js=javascripts/src/views/contact_view.js \
  --js=javascripts/src/views/about_view.js \
  --js=javascripts/src/views/projects_view.js \
  --js=javascripts/src/routers/application.js \
  --js=javascripts/src/index.js

