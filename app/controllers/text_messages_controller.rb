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


  def incoming
    account_sid = params[:AccountSid]

    if account_sid == ENV['TWILIO_ACCT_SID']
      incoming_message = params[:Body]
      incoming_number = params[:From]
    else
      return nil
    end

    client = Client.find_by_phone(incoming_number)

    if client
      text_message = TextMessage.new(content: incoming_message, client: client, incoming_message: true)
    end

    if text_message && text_message.save
      head :ok
    else
      return nil
    end

  end

  private

  def text_message_params
    params.require(:text_message).permit(:content, :client_id)
  end
end