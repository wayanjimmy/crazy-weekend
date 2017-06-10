require "./revealing_references"
require "test/unit"

class TestRevealingReferences < Test::Unit::TestCase
  def setup
    @data = [[622, 20], [622, 53], [559, 30]]
  end

  def test_data_length
    assert_equal(3, @data.length)
  end

  def test_diameter
    @ws = ReavelingReferences.new(@data).wheelify
    puts @ws
  end
end
