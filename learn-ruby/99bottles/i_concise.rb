class Bottles
  def song
    verses(99, 0)
  end

  def verses(hi, lo)
    hi.downto(lo).map {|n| verse(n) }.join("\n")
  end

  def verse(n)
    "#{n == 0 ? 'No more' : n} bottle#{'s' if n != 1}" + " of beer on the wall "
  end
end
