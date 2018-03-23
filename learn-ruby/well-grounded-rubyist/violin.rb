class Violin
  class String
    attr_accessor :pitch

    def initialize(pitch)
      @pitch = pitch
    end
  end

  def initialize
    @e = String.new("E")
    @a = String.new("A")
  end
end
