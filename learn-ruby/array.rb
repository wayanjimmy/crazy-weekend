animals = %w( ant bee cat dog elk )
animals.each {|animal| puts animal}

def wrap &b
  print "Santa says: "
  3.times(&b)
  print "\n"
end

wrap { print "Ho!" }
