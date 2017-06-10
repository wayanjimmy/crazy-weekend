require "./gear2"
require "test/unit"

class TestGear < Test::Unit::TestCase
  def test_gear_inches
    assert_equal(137.0909090909091, Gear.new(52, 11, 26, 1.5).gear_inches)
  end
end
