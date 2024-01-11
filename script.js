function dateDiffInDays(date1, date2) {
    const millisecondsPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day

    // Convert input dates to UTC milliseconds
    const utcDate1 = Date.UTC(
        parseInt(date1.substring(0, 4)),
        parseInt(date1.substring(5, 7)) - 1,
        parseInt(date1.substring(8, 10))
    );

    const utcDate2 = Date.UTC(
        parseInt(date2.substring(0, 4)),
        parseInt(date2.substring(5, 7)) - 1,
        parseInt(date2.substring(8, 10))
    );

    // Calculate the difference in days
    const diffInDays = Math.floor((utcDate2 - utcDate1) / millisecondsPerDay);

    return diffInDays;
}