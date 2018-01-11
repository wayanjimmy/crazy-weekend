print "Information desired."

request = gets.chomp

ticket = Object.new

#if request == "venue"
  #puts ticket.venue
#elsif request == "performer"
  #puts ticket.performer
#end

if ticket.respond_to?(request)
  puts ticket.send(request)
else
  puts "No such information available"
end
