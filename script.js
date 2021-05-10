var dayWeek = $('#2a');

function displayDay() {
var dayWeek = today.format("[Today is] dddd")
$("#2a").text(dayWeek); 
}
// moment().format('LTS'); 


function displayTime() {
    var rightNow = moment().format('LLLL');
    dayWeek.text(rightNow);
}
  displayTime() 

  // var timeEl = $('.hour')
  // console.log(timeEl)
  // timeEl.each(element => {
  //   console.log($(this).text())
  // });


  // function displayPlans(type, message) {
  //     nineAm.textContent = message;
  //     nineAm.setAttribute("class", type);
  // }

  // function savePlans() {
  //     var nineAm = document.querySelector(".9am").nodeValue;

  //     localStorage.setItem("nineAm", nineAm);
  // }




//   function displayTime() {
//     var rightNow = moment().format('MMM Do YYYY, h:mm:ss a');
//     dayWeek.text(rightNow);
// }
//   displayTime() 