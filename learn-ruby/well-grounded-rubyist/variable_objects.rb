str = "Hello"
abc = str
str.replace("Goodbye")
puts str
puts abc

def say_goodbye
  str = "Hello"
  abc = str
  str.replace("Goodbye")
  puts str
  puts abc
end

say_goodbye
