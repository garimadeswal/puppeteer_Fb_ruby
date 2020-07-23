require "selenium-webdriver"
include Selenium
include Selenium::WebDriver

cfile = ARGV[0]
pageToLike = ARGV[1]

options = Chrome::Options.new()
options.add_argument('--disable-notifications')
options.add_argument('start-maximized')
driver = WebDriver.for(:chrome, options: options)


file = File.read(cfile)
map = JSON.parse(file)
user = map['user']
pwd = map['pwd']


driver.get("http://facebook.com")
wait.until {driver.find_element(:css, "#email")}