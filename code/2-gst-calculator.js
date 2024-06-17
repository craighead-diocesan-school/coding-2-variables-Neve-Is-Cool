// ####################################
// #### ----- GST Calculator ----- ####
// ####################################

function gstCalculator() {
  alert('The price with GST is the price and 15%.')

  let cost = prompt ('What is the cost discluding GST?')
  let result = cost * 1.15

  alert ('The cost including GST is $' + result)

}
