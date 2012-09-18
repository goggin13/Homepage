
current_html = File.read('index.html')
script_tag_regex = /(<script type="text\/javascript" src=".*"><\/script>)/
app_js_tag = '<script type="text/javascript" src="javascripts/application.js"></script></html>'

if ARGV[0] == '-prod'

  current_html.gsub! script_tag_regex, '<!-- \1 -->'

  current_html.gsub! /<\/html>/, app_js_tag

  puts current_html

else
  
  current_html.gsub! //, '<!-- \1 -->'
  current_html.gsub! app_js_tag, '</html>'
  
end

File.write('index.html', current_html)