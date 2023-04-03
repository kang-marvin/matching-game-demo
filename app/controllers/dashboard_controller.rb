class DashboardController < ApplicationController
  def index
    # Note: This can be either 2,4 or 6
    @board_size = 4
  end
end
