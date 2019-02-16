require 'braintree'
require 'rubygems'
require 'sinatra'
require 'webrick'
require 'webrick/https'
require 'openssl'

Braintree::Configuration.environment = :sandbox
Braintree::Configuration.merchant_id = '5zmrvsycrfhd2tc8'
Braintree::Configuration.public_key = '9j84yprmzqw497d8'
Braintree::Configuration.private_key = 'ec2f1b7a2333e010a7d8e7193a8d68bc'

get '/' do
    @client_token = Braintree::ClientToken.generate(
    )
    erb :checkout
end

get "/dropin" do
  @client_token = Braintree::ClientToken.generate
  # @client_token = Braintree::ClientToken.generate(:customer_id => "251484083")
  erb :dropin
end

post "/checkout" do
result = Braintree::Transaction.sale(
  :amount => "10.00",
  :payment_method_nonce => params[:payment_method_nonce],
  :customer => {
    :email => "customer@email.com",
    :first_name => "First",
    :last_name => "Last",
    :phone => "555-555-5555"
  },
  :device_data => params[:device_data],
  :options => {
  	:submit_for_settlement => true,
  }
)

if result.success?
  p result
  content_type :json
  if result.transaction.payment_instrument_type == "credit_card"
    return {:result => "Success! Braintree Transaction ID: #{result.transaction.id} | Kount Transaction id: #{result.transaction.risk_data.id}"}.to_json
  else
    return {:result => "Success! Braintree Transaction ID: #{result.transaction.id}"}.to_json
  end
  else
   p result.message
  end
end
