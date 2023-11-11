function showEvaluation(time) {
    var resultElement = document.getElementById('result');
    var evaluation = "";
  
    switch (time) {
      case 'Less than 20 minutes':
        evaluation = "Excellent! This is an amazing time! A very small percentage of the general population can reach this time.";
        break;
      case '20-25 minutes':
        evaluation = "Good job! You're on a good pace. The percentage of people who can achieve this time is relatively low, but higher than for faster times.";
        break;
      case '25-30 minutes':
        evaluation = "Keep up the good work. That's a solid time. you can do it better. A larger percentage of the population can reach this range.";
        break;
      case '30-35 minutes':
        evaluation = "You're doing well. Keep training! The percentage of people who can reach this time is more significant.";
        break;
      case 'More than 35 minutes':
        evaluation = "Keep training to improve your time! A substantial percentage of the population can reach or exceed this time.";
        break;
      default:
        evaluation = "Unrecognized time.";
    }
    resultElement.innerHTML = evaluation;
  }

  function showEvaluation2(time) {
    var resultElement = document.getElementById('result2');
    var evaluation = "";
  
    switch (time) {
      case 'Less than 40 minutes':
        evaluation = "Excellent! This is an amazing time for a 10K run. Achieved by top-tier runners and elite athletes.";
        break;
      case '40-50 minutes':
        evaluation = "Good job! Achievable by experienced and dedicated runners. A relatively low percentage of people can achieve this time.";
        break;
      case '50-60 minutes':
        evaluation = "Keep up the good work. This is a good time and within reach for intermediate and enthusiastic runners.";
        break;
      case '60-70 minutes':
        evaluation = "You're doing well. This is a reasonable time for recreational runners. A significant percentage of people can achieve this time.";
        break;
      case 'More than 70 minutes':
        evaluation = "A realistic goal for many beginners and casual runners. A substantial percentage of the population can achieve or exceed this time.";
        break;
      default:
        evaluation = "Unrecognized time.";
    }
    resultElement.innerHTML = evaluation;
  }

  function showEvaluation3(time) {
    var resultElement = document.getElementById('result3');
    var evaluation = "";
  
    switch (time) {
      case 'Less than 1 hour':
        evaluation = "Excellent! This is an amazing time for a 15K run. Achieved by top-tier runners and elite athletes.";
        break;
      case '1-1.5 hours':
        evaluation = "Good job! Achievable by experienced and dedicated runners. A relatively low percentage of people can achieve this time.";
        break;
      case '1.5-2 hours':
        evaluation = "Keep up the good work. This is a good time and within reach for intermediate and enthusiastic runners.";
        break;
      case '2-2.5 hours':
        evaluation = "You're doing well. This is a reasonable time for recreational runners. A significant percentage of people can achieve this time.";
        break;
      case 'More than 2.5 hours':
        evaluation = "A realistic goal for many beginners and casual runners. A substantial percentage of the population can achieve or exceed this time.";
        break;
      default:
        evaluation = "Unrecognized time.";
    }
  
    resultElement.innerHTML = evaluation;
  }
  
  setTimeout(function() {
    resultElement.classList.add('appear');
  }, 100);

  
  
  
  