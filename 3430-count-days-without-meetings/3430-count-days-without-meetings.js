var countDays = function(days, meetings) {
    meetings.sort((a, b) => a[0] - b[0]);

    let mergedMeetings = [];
    for (let meeting of meetings) {
        if (mergedMeetings.length === 0 || meeting[0] > mergedMeetings[mergedMeetings.length - 1][1]) {
            mergedMeetings.push(meeting);
        } else {
            mergedMeetings[mergedMeetings.length - 1][1] = Math.max(mergedMeetings[mergedMeetings.length - 1][1], meeting[1]);
        }
    }

    let meetingDaysCount = 0;
    for (let [start, end] of mergedMeetings) {
        meetingDaysCount += (end - start + 1);
    }

    return days - meetingDaysCount;
};