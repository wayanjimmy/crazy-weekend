require "./gear3"
require "test/unit"

class TestGear < Test::Unit::TestCase
  def test_diameter
    assert_equal(29, Gear.new(52, 11, 26, 1.5).diameter)
  end

  def test_gear_inches
    assert_equal(137.0909090909091, Gear.new(52, 11, 26, 1.5).gear_inches)
  end
end
