class ImportUserChannel < ApplicationCable::Channel
  def subscribed
    stream_from "ImportUserChannel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
