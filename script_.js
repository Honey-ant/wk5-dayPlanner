// const moment = require("moment");
// const fs = require('fs');

const now = moment();
const savedAt = now.format("YYYY-MM-DD");
const $container = $(".times");
const scheduledEvents = getPlans();

$("#2a").text(now.format("dddd, Do MMMM"));

for (let i = 9; i <= 17; i++) {
    const hour = i > 12 ? i - 12 : i;
    const meridiem = i < 12 ? "AM" : "PM";
    const inputID = hour + meridiem;
    const compareTime = moment(now).hour(i);
    const className = getTenseClassName(compareTime);

    $container.append(`
    <div class="row time-block">
    <label for="${inputID}" class="hour col-xl-1 col-md-2 col-3">${hour} ${meridiem}</label>
    <textarea id="${inputID}" name="${inputID}" class="${className} col-9 row col-xl-10 col-md-9 col-8" rows="4" cols="33" >${scheduledEvents[inputID] ?? " " }
    </textarea>
      <button type="button" class="saveBtn col" data-timeblock="${inputID}"><i class="far fa-save"></i></button>
 </div>`);
}

function getTenseClassName(compareMoment) {
    if (now.isBefore(compareMoment, "hour")) return "future";
    if (now.isAfter(compareMoment, "hour")) return "past";
    if (now.isSame(compareMoment, "hour")) return "present";
}

$(".saveBtn").click(function(event) {
    const eventTime = event.currentTarget.dataset.timeblock;
    const textAreaContent = $(`#${eventTime}`).val();
    scheduledEvents[eventTime] = textAreaContent;
    storeScheduledEvents(scheduledEvents);
});

function storeScheduledEvents(obj) {
    let serializescheduledEvents = JSON.stringify(obj);
    window.localStorage.setItem(savedAt, serializescheduledEvents);
}

function getPlans() {
    const eventsJSON = window.localStorage.getItem(savedAt);
    return eventsJSON === null ? {} : JSON.parse(eventsJSON);
}