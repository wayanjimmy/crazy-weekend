class WordCounter
  attr_accessor :words

  def initialize
    @words = File.read('test.txt')
  end

  def word_count
    word_list = {}
    word_list.tap do |w|
      @words.split(" ").each do |word|
        word_list = process_word_in_list(word, w)
      end
    end
  end

  private

  def process_word_in_list(word, word_list)
    return word_list if word.empty?
    word_list[word] ||= 0
    word_list[word] += 1
    word_list
  end
end

p WordCounter.new().word_count
