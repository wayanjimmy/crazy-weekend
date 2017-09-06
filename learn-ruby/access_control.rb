class Dog
  attr_accessor :name, :age

  def initialize(n, a)
    self.name = n
    self.age = a
  end

  def accessing_private
    "#{self.name} in human years is #{human_years}. This is secret!"
  end

  def accessing_protected
    "Will this work ?" + a_protected_method
  end

  def eat_more_than(other)
    if daily_diet < other.daily_diet
      "#{name} eats more than #{other.name}"
    end
  end

  def boy
      gender_method("boy")
  end

  protected

  def daily_diet
    age * 2
  end

  def a_protected_method
    "Yes, I'm protected"
  end

  private

  attr_writer :gender

  def gender_method(gender)
    self.gender = gender
    "#{name} is a #{gender}"
  end

  def human_years
    age * 8
  end
end

blake = Dog.new("Blake", 5)

p blake.accessing_private

p blake.accessing_protected

jackson = Dog.new("Jackson", 1)

p jackson.eat_more_than(blake)

p blake.boy
