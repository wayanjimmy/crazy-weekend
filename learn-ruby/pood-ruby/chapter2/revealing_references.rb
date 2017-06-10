class ReavelingReferences
  attr_reader :wheels
  def initialize(data)
    @wheels = wheelify(data)
  end

  def diameters
    wheels.collect {|wheel|}
      diameter(wheel)
  end

  def diameter(wheel)
    wheel.rim + (wheel.tire * 2)
  end
end
