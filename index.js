function scuberGreetingForFeet(distance){
  let results = ''

  if (distance >= 2001 && distance <= 2500){
    results = "I will gladly take your thirty bucks." 
  } else if (distance >= 2500){
    results = "No can do."
  } else if (distance >= 199){
    results = "This one is on me!"
  }
  return results; 
}


function ternaryCheckCity(city){
 const results =  (city === 'NYC') ? "Ok, sounds good." : "No go."
 return results 
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case "generous":
      return "Thank you so much."
      break
    case "not as generous":
      return "Thank you."
      break
    default:
      return "Bye."
  }
}