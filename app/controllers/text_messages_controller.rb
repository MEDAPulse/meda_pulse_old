class TextMessagesController < ApplicationController
  def create
    @client = Client.find(params[:text_message][:client_id])
    content = params[:text_message][:content]
    message_sent = Twilio.send_message(@client.phone, content)

    if message_sent
      message = TextMessage.new(text_message_params)
      message.incoming_message = false
      if message.save
        #send partial back
      else
        #send error
      end
    end

    redirect_to @client

  end

  private

  def text_message_params
    params.require(:text_message).permit(:content, :client_id)
  end
end