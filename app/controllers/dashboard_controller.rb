class DashboardController < ApplicationController
  ANIMALS = ['dog', 'cat', 'pig', 'owl', 'ant'] # Add more
  COLORS = ['red', 'green', 'yellow', 'lime', 'pink'] # Add more

  def index
    @board_size = 4
    @board_finished_result = generate_board_result(@board_size)
  end

  private

  def generate_board_result(size)
    board = create_board(size)
    hashify_board(board).to_json
  end


  def create_board(size)
    return [] unless size.even?

    color_options = COLORS.shuffle.take(size / 2)
    letter_options = ANIMALS.shuffle.take(size)
    options = color_options.product(letter_options)

    (options * 2).shuffle
  end

  def hashify_board(board)
    result = {}
    board
      .group_by.with_index { |_, index| index }
      .transform_values { |value| value.join("--")}
      .each do |key, value|
        result[value] ||= []
        result[value] << key
        result[value].uniq!
      end

    result
  end
end
