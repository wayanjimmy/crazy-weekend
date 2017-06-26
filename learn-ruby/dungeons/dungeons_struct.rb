class Dungeon
  attr_accessor :player

  def initialize(player_name)
    @player = Player.new(player_name)
    @rooms = []
  end

  def add_room(reference, name, description, connections)
    @rooms << Room.new(reference, name, description, connections)
  end

  def start(location)
    @player.location = location
    show_current_description
  end

  def show_current_description()
    puts find_room_in_dungeon(@player.location).full_description
  end

  def find_room_in_dungeon(reference)
    @rooms.detect { |room| room.reference == reference }
  end

  class Room
    attr_accessor :reference, :name, :description, :connections

    def initialize(reference, name, description, connections)
      @reference = reference
      @name = name
      @description = description
      @connections = connections
    end

    def full_description
      @name + "\n\n Your are in " + @description
    end
  end
end

my_dungeon = Dungeon.new("Jimmy lengeh")
puts my_dungeon.player.name

my_dungeon.add_room(:largecave, "Large Cave", "a large caverneous cave", { :west => :smallcave })
my_dungeon.add_room(:smallcave, "Small Cave", "a small clustrophobic cave", { :east => :largecave })
