require "./gear1"
require "test/unit"

class TestGear < Test::Unit::TestCase
  def test_ratio
    assert_equal(4.7272727272727275, Gear.new(52, 11).ratio)
  end

  def test_ratio2
    assert_equal(1.1111111111111112, Gear.new(30, 27).ratio)
  end
end
