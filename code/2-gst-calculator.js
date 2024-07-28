// ####################################
// #### ----- GST Calculator ----- ####
// ####################################

function gstCalculator() {
  const gstRate = 1.15
  
  alert('The price with GST is the price and 15%.')

  let cost = prompt ('What is the cost discluding GST?')
  let result = cost * gstRate

  alert ('The cost including GST is $' + result)

}
