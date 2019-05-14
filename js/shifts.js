
const workShifts = [
  {
    "break_notes": "15-18",
    "end_time": "23:00",
    "pay_rate": 10,
    "start_time": "10:00"
  },
  {
    "break_notes": "18.30-19.00",
    "end_time": "23:00",
    "pay_rate": 12,
    "start_time": "18:00"
  },
  {
    "break_notes": "4PM-5PM",
    "end_time": "22:30",
    "pay_rate": 14,
    "start_time": "12:00"
  },
  {
    "break_notes": "3-4",
    "end_time": "18:00",
    "pay_rate": 10,
    "start_time": "09:00"
  },
  {
    "break_notes": "4-4.10PM",
    "end_time": "23:00",
    "pay_rate": 20,
    "start_time": "09:00"
  },
  {
    "break_notes": "15 - 17",
    "end_time": "23:00",
    "pay_rate": 10,
    "start_time": "11:00"
  },
  {
    "break_notes": "11 - 13",
    "end_time": "16:00",
    "pay_rate": 10,
    "start_time": "10:00"
  }
];

//steps to calculate the Labor costs by hour worked for a resturant:
//1. for each shif sum the total hrs worked and removing non paid hours such as break-time
//2. multiuply the hourly rate by number of hrs in each shift (in variable paidShiftHoursOne,paidShiftHoursTwo...)
//3. divide the  (variable paidShiftHoursOne,paidShiftHoursTwo...) for each shift by number of weeks in a year (52) keep the result in variable (labourCostPerShift)
//4. the result (labourCostPerShift) is the labour cost per shift
//5. add all (labourCostPerShift) together to get the (totalLabourCostPerShift)

//Multiply Function
function paidPerShift(payRate,paidShiftHours){
  return payRate * paidShiftHours;
}

//division Function
function labourCostPerShift(paidShiftHours){
  return paidShiftHours / 52;
}


let breakNotesValues = Array.from(workShifts, o => o.break_notes);
let startTimeValues = Array.from(workShifts, o => o.start_time);
let endTimeValues = Array.from(workShifts, o => o.end_time);
let payRateValues = Array.from(workShifts, o => o.pay_rate);
// document.write('<p>work Shift ' + JSON.stringify(workShifts) + '</p>');
// document.write('<p>braek note: ' + JSON.stringify(breakNotesValues) + '</p>');
// document.write('<p>start time: ' + JSON.stringify(startTimeValues) + '</p>');
// document.write('<p>end time: ' + JSON.stringify(endTimeValues) + '</p>');
// document.write('<p>pay rate: ' + JSON.stringify(payRateValues) + '</p>');


  
//Calculate shift one duration
//declare shift variables

let breakNotesValuesOne= workShifts[0].break_notes;
let startTimeValuesOne = workShifts[0].start_time;
let endTimeValuesOne = workShifts[0].end_time;
let payRateValuesOne = workShifts[0].pay_rate;

//** First Shift Calculation */
//create date format for shift start and end         
let startShiftTimeOne = new Date("01/01/2007 " + startTimeValuesOne).getHours();
let endShiftTimeOne = new Date("01/01/2007 " + endTimeValuesOne).getHours();

//calculate shift durations before extracting break time
let shifthoursOne = endShiftTimeOne - startShiftTimeOne;   

//converting and seperate break notes to numbers 
//break start time
let breakTimeStartOne = parseInt(breakNotesValuesOne, 10);
//break end time
let breakTimeEndOne = breakNotesValuesOne.replace('15-','');

//calculate break durations 
let breakDurationOne = breakTimeEndOne - breakTimeStartOne;

//calculate total paid shift hours
let paidShiftHoursOne = shifthoursOne - breakDurationOne;

//calculate labour cost per shift

var paidPerShiftOne = paidPerShift(paidShiftHoursOne,payRateValuesOne); // Function is called, return value will end up in paidPerShiftOne




console.log('paidPerShiftOne',paidPerShiftOne);
console.log(breakTimeStartOne);
console.log(breakTimeEndOne);
console.log(breakDurationOne);
console.log(paidShiftHoursOne);



// document.write(`<h1>One Shift startTime    ${startTimeValuesOne} </p>`);
// document.write(`<h1>One Shift endTime    ${endTimeValuesOne} </p>`);
// document.write(`<h1>One Shift payRate   ${payRateValuesOne} </p>`);
// document.write(`<h1>shift hours with break    ${shifthoursOne} </p>`);
// document.write(`<p>break starts   ${breakTimeStartOne} </p>`);
// document.write(`<p>break end   ${breakTimeEndOne} </p>`);
// document.write(`<p>break duration   ${breakDurationOne} </p>`);
// document.write(`<p>Paid Shift one Hours  ${paidShiftHoursOne} </p>`);
// document.write(`<p>Cost of Labour for shift one  ${paidPerShiftOne} </p>`);

//Calculate shift Two duration
//declare shift variables

let breakNotesValuesTwo= workShifts[1].break_notes;
let startTimeValuesTwo = workShifts[1].start_time;
let endTimeValuesTwo = workShifts[1].end_time;
let payRateValuesTwo = workShifts[1].pay_rate;

//** First Shift Calculation */
//create date format for shift start and end         
let startShiftTimeTwo = new Date("01/01/2007 " + startTimeValuesTwo).getHours();
let endShiftTimeTwo = new Date("01/01/2007 " + endTimeValuesTwo).getHours();

//calculate shift durations before extracting break time
let shifthoursTwo = endShiftTimeTwo - startShiftTimeTwo;   

//converting and seperate break notes to numbers 
//break start time
let breakStart = breakNotesValuesTwo.replace('-19.00','')
let breakTimeStart = parseFloat(breakStart)

//break end time
let breakEnd = breakNotesValuesTwo.replace('18.30-','');
let breakTimeEnd = parseFloat(breakEnd)

let breakDurationTwo = breakTimeEnd - breakTimeStart;


console.log('sum',breakDurationTwo);

//calculate total paid shift hours
let paidShiftHoursTwo = shifthoursTwo - breakDurationTwo;

//calculate labour cost per shift


var paidPerShiftTwo = paidPerShift(paidShiftHoursTwo,payRateValuesTwo); // Function is called, return value will end up in paidPerShiftTwo
console.log('paidPerShiftTwo',paidPerShiftTwo);



// document.write(`<h1>Two Shift startTime    ${startTimeValuesTwo} </p>`);
// document.write(`<h1>Two Shift endTime    ${endTimeValuesTwo} </p>`);
// document.write(`<h1>Two Shift payRate   ${payRateValuesTwo} </p>`);
// document.write(`<h1>shift hours with break    ${shifthoursTwo} </p>`);
// document.write(`<p>break starts   ${breakTimeStart} </p>`);
// document.write(`<p>break end   ${breakTimeEnd} </p>`);
//document.write(`<p>break duration   ${breakDurationTwo} </p>`);
// document.write(`<p>Paid Shift Two Hours  ${paidShiftHoursTwo} </p>`);
// document.write(`<p>Cost of Labour for shift Two  ${paidPerShiftTwo} </p>`);


//**  Shift Three Calculation */

//declare shift variables
let breakNotesValuesThree= workShifts[2].break_notes;
let startTimeValuesThree = workShifts[2].start_time;
let endTimeValuesThree = workShifts[2].end_time;
let payRateValuesThree = workShifts[2].pay_rate;


//create date format for shift start and end         
let startShiftTimeThree = new Date("01/01/2007 " + startTimeValuesThree).getHours();
let endShiftTimeThree = new Date("01/01/2007 " + endTimeValuesThree).getHours();

//calculate shift durations before extracting break time
let shifthoursThree = endShiftTimeThree - startShiftTimeThree;   

//converting and seperate break notes to numbers 
//break start time
let breakTimeStartThree = parseInt(breakNotesValuesThree, 10);
//break end time
let breakTimeEndThree = breakNotesValuesThree.replace('4PM-','').replace('PM','');

//calculate break durations 
let breakDurationThree = breakTimeEndThree - breakTimeStartThree;

//calculate total paid shift hours
let paidShiftHoursThree = shifthoursThree - breakDurationThree;

//calculate labour cost per shift
//let labourCostShiftThree = paidShiftHoursThree

var paidPerShiftThree = paidPerShift(paidShiftHoursThree,payRateValuesThree); // Function is called, return value will end up in paidPerShiftThree
console.log('paidPerShiftThree',paidPerShiftThree);

console.log(breakTimeStartThree);
console.log(breakTimeEndThree);
console.log(breakDurationThree);
console.log(paidShiftHoursThree);

// document.write(`<h1>Three Shift startTime    ${startTimeValuesThree} </p>`);
// document.write(`<h1>Three Shift endTime    ${endTimeValuesThree} </p>`);
// document.write(`<h1>Three Shift payRate   ${payRateValuesThree} </p>`);
// document.write(`<h1>shift hours with break    ${shifthoursThree} </p>`);
// document.write(`<p>break starts   ${breakTimeStartThree} </p>`);
// document.write(`<p>break end   ${breakTimeEndThree} </p>`);
// document.write(`<p>break duration   ${breakDurationThree} </p>`);
// document.write(`<p>Paid Shift Three Hours  ${paidShiftHoursThree} </p>`);
// document.write(`<p>Cost of Labour for shift Three  ${paidPerShiftThree} </p>`);

//** Four Shift Calculation */
//declare shift variables

let breakNotesValuesFour= workShifts[3].break_notes;
let startTimeValuesFour = workShifts[3].start_time;
let endTimeValuesFour = workShifts[3].end_time;
let payRateValuesFour = workShifts[3].pay_rate;


//create date format for shift start and end         
let startShiftTimeFour = new Date("01/01/2007 " + startTimeValuesFour).getHours();
let endShiftTimeFour = new Date("01/01/2007 " + endTimeValuesFour).getHours();

//calculate shift durations before extracting break time
let shifthoursFour = endShiftTimeFour - startShiftTimeFour;   

//converting and seperate break notes to numbers 
//break start time
let breakTimeStartFour = parseInt(breakNotesValuesFour, 10);
//break end time
let breakTimeEndFour = breakNotesValuesFour.replace('3-','');

//calculate break durations 
let breakDurationFour = breakTimeEndFour - breakTimeStartFour;

//calculate total paid shift hours
let paidShiftHoursFour = shifthoursFour - breakDurationFour;

//calculate labour cost per shift
//let labourCostShiftFour = paidShiftHoursFour

var paidPerShiftFour = paidPerShift(paidShiftHoursFour,payRateValuesFour); // Function is called, return value will end up in paidPerShiftFour
console.log('paidPerShiftFour',paidPerShiftFour);

console.log(breakTimeStartFour);
console.log(breakTimeEndFour);
console.log(breakDurationFour);
console.log(paidShiftHoursFour);

// document.write(`<h1>Four Shift startTime    ${startTimeValuesFour} </p>`);
// document.write(`<h1>Four Shift endTime    ${endTimeValuesFour} </p>`);
// document.write(`<h1>Four Shift payRate   ${payRateValuesFour} </p>`);
// document.write(`<h1>shift hours with break    ${shifthoursFour} </p>`);
// document.write(`<p>break starts   ${breakTimeStartFour} </p>`);
// document.write(`<p>break end   ${breakTimeEndFour} </p>`);
// document.write(`<p>break duration   ${breakDurationFour} </p>`);
// document.write(`<p>Paid Shift Four Hours  ${paidShiftHoursFour} </p>`);
// document.write(`<p>Cost of Labour for shift Four  ${paidPerShiftFour} </p>`);

//** Five Shift Calculation */
//declare shift variables

let breakNotesValuesFive= workShifts[4].break_notes;
let startTimeValuesFive = workShifts[4].start_time;
let endTimeValuesFive = workShifts[4].end_time;
let payRateValuesFive = workShifts[4].pay_rate;


//create date format for shift start and end         
let startShiftTimeFive = new Date("01/01/2007 " + startTimeValuesFive).getHours();
let endShiftTimeFive = new Date("01/01/2007 " + endTimeValuesFive).getHours();

//calculate shift durations before extracting break time
let shifthoursFive = endShiftTimeFive - startShiftTimeFive;   

//converting and seperate break notes to numbers 
//break start time
let breakTimeStartFive = parseInt(breakNotesValuesFive, 10);
//break end time
let breakTimeEndF = breakNotesValuesFive.replace('4-','');
let breakTimeEndFive = breakTimeEndF.replace('PM','');
//calculate break durations 
let breakDurationFive = breakTimeEndFive - breakTimeStartFive;

//calculate total paid shift hours
let paidShiftHoursFive = shifthoursFive - breakDurationFive;

//calculate labour cost per shift
//let labourCostShiftFive = paidShiftHoursFive

var paidPerShiftFive = paidPerShift(paidShiftHoursFive,payRateValuesFive); // Function is called, return value will end up in paidPerShiftFive
console.log('paidPerShiftFive',paidPerShiftFive);

console.log(breakTimeStartFive);
console.log(breakTimeEndFive);
console.log(breakDurationFive);
console.log(paidShiftHoursFive);

// document.write(`<h1>Five Shift startTime    ${startTimeValuesFive} </p>`);
// document.write(`<h1>Five Shift endTime    ${endTimeValuesFive} </p>`);
// document.write(`<h1>Five Shift payRate   ${payRateValuesFive} </p>`);
// document.write(`<h1>shift hours with break    ${shifthoursFive} </p>`);
// document.write(`<p>break starts   ${breakTimeStartFive} </p>`);
// document.write(`<p>break end   ${breakTimeEndFive} </p>`);
// document.write(`<p>break duration   ${breakDurationFive} </p>`);
// document.write(`<p>Paid Shift Five Hours  ${paidShiftHoursFive} </p>`);
// document.write(`<p>Cost of Labour for shift Five  ${paidPerShiftFive} </p>`);


//Calculate shift Six duration
//declare shift variables

let breakNotesValuesSix= workShifts[5].break_notes;
let startTimeValuesSix = workShifts[5].start_time;
let endTimeValuesSix = workShifts[5].end_time;
let payRateValuesSix = workShifts[5].pay_rate;


//create date format for shift start and end         
let startShiftTimeSix = new Date("01/01/2007 " + startTimeValuesSix).getHours();
let endShiftTimeSix = new Date("01/01/2007 " + endTimeValuesSix).getHours();

//calculate shift durations before extracting break time
let shifthoursSix = endShiftTimeSix - startShiftTimeSix;   

//converting and seperate break notes to numbers 
//break start time
let breakTimeStartSix = parseInt(breakNotesValuesSix, 10);
//break end time
let breakTimeEndSix = breakNotesValuesSix.replace('15 - ','');

//calculate break durations 
let breakDurationSix = breakTimeEndSix - breakTimeStartSix;

//calculate total paid shift hours
let paidShiftHoursSix = shifthoursSix - breakDurationSix;

//calculate labour cost per shift
//let labourCostShiftSix = paidShiftHoursSix


var paidPerShiftSix = paidPerShift(paidShiftHoursSix,payRateValuesSix); // Function is called, return value will end up in paidPerShiftSix
console.log('paidPerShiftSix',paidPerShiftSix);

console.log(breakTimeStartSix);
console.log(breakTimeEndSix);
console.log(breakDurationSix);
console.log(paidShiftHoursSix);

// document.write(`<h1>Six Shift startTime    ${startTimeValuesSix} </p>`);
// document.write(`<h1>Six Shift endTime    ${endTimeValuesSix} </p>`);
// document.write(`<h1>Six Shift payRate   ${payRateValuesSix} </p>`);
// document.write(`<h1>shift hours with break    ${shifthoursSix} </p>`);
// document.write(`<p>break starts   ${breakTimeStartSix} </p>`);
// document.write(`<p>break end   ${breakTimeEndSix} </p>`);
// document.write(`<p>break duration   ${breakDurationSix} </p>`);
// document.write(`<p>Paid Shift Six Hours  ${paidShiftHoursSix} </p>`);
// document.write(`<p>Cost of Labour for shift Six  ${paidPerShiftSix} </p>`);

//Calculate shift Seven duration
//declare shift variables

let breakNotesValuesSeven= workShifts[6].break_notes;
let startTimeValuesSeven = workShifts[6].start_time;
let endTimeValuesSeven = workShifts[6].end_time;
let payRateValuesSeven = workShifts[6].pay_rate;


//create date format for shift start and end         
let startShiftTimeSeven = new Date("01/01/2007 " + startTimeValuesSeven).getHours();
let endShiftTimeSeven = new Date("01/01/2007 " + endTimeValuesSeven).getHours();

//calculate shift durations before extracting break time
let shifthoursSeven = endShiftTimeSeven - startShiftTimeSeven;   

//converting and seperate break notes to numbers 
//break start time
let breakTimeStartSeven = parseInt(breakNotesValuesSeven, 10);
console.log('seven ',breakTimeStartSeven);
//break end time
let breakTimeEndSeven = breakNotesValuesSeven.replace('11 - ','');
console.log('seven end ',breakTimeEndSeven);
console.log('val',breakNotesValuesSeven)
//calculate break durations 
let breakDurationSeven = breakTimeEndSeven - breakTimeStartSeven;

//calculate total paid shift hours
let paidShiftHoursSeven = shifthoursSeven - breakDurationSeven;

//calculate labour cost per shift
//let labourCostShiftSeven = paidShiftHoursSeven


var paidPerShiftSeven = paidPerShift(paidShiftHoursSeven,payRateValuesSeven); // Function is called, return value will end up in paidPerShiftSeven
console.log('paidPerShiftSeven',paidPerShiftSeven);

console.log(breakTimeStartSeven);
console.log(breakTimeEndSeven);
console.log(breakDurationSeven);
console.log(paidShiftHoursSeven);

// document.write(`<h1>Seven Shift startTime    ${startTimeValuesSeven} </p>`);
// document.write(`<h1>Seven Shift endTime    ${endTimeValuesSeven} </p>`);
// document.write(`<h1>Seven Shift payRate   ${payRateValuesSeven} </p>`);
// document.write(`<h1>shift hours with break    ${shifthoursSeven} </p>`);
// document.write(`<p>break starts   ${breakTimeStartSeven} </p>`);
// document.write(`<p>break end   ${breakTimeEndSeven} </p>`);
// document.write(`<p>break duration   ${breakDurationSeven} </p>`);
// document.write(`<p>Paid Shift Seven Hours  ${paidShiftHoursSeven} </p>`);
// document.write(`<p>Cost of Labour for shift Seven  ${paidPerShiftSeven} </p>`);

//Labour Cost Per Shifts

let labourCostShiftOne = labourCostPerShift(paidPerShiftOne);
let labourCostShiftTwo = labourCostPerShift(paidPerShiftTwo);
let labourCostShiftThree = labourCostPerShift(paidPerShiftThree);
let labourCostShiftFour = labourCostPerShift(paidPerShiftFour);
let labourCostShiftFive = labourCostPerShift(paidPerShiftFive);
let labourCostShiftSix = labourCostPerShift(paidPerShiftSix);
let labourCostShiftSeven = labourCostPerShift(paidPerShiftSeven);


//Sum all Labour Cost per shift to get total labour cost 


let totalLabourCost = labourCostShiftOne + labourCostShiftTwo + labourCostShiftThree + labourCostShiftFour + labourCostShiftFive + 
labourCostShiftSix + labourCostShiftSeven;


console.log(`labour cost shift one ${labourCostShiftOne} $`);
console.log('labourCostShiftTwo',labourCostShiftTwo);
console.log('labourCostShiftThree',labourCostShiftThree);
console.log('labourCostShiftFour',labourCostShiftFour);
console.log('labourCostShiftFive',labourCostShiftFive);
console.log('labourCostShiftSix',labourCostShiftSix);
console.log('labourCostShiftSeven',labourCostShiftSeven);

console.log(`totalLabourCost ${totalLabourCost} $`);





