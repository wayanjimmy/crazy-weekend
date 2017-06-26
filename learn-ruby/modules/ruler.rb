module Toolbox
  class Ruler
    attr_accessor :length
  end
end

module Country
  class Ruler
    attr_accessor :name
  end
end

a = Toolbox::Ruler.new
a.length = 50

b = Country::Ruler.new
b.name = "Genghis Khan"

puts a.length
puts b.name
