class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    until @game_over
      take_turn
    end
    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    require_sequence
    round_success_message
    @sequence_length += 1
  end

  def show_sequence
    add_random_color
    @seq.each do |color|
      p "Color is #{color}."
    end
  end

  def require_sequence
    @seq.each do |color|
      input = gets.chomp
      if color[0] == input
        game_over = true
      break
    end
    end
  end

  def add_random_color
    @seq << COLORS.sample
  end

  def round_success_message
    p "That round was successful."
  end

  def game_over_message
    p "Game over!"
  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq = []
  end
end
