function getDays(date1, date2) {
    const time1 = new Date(date1).getTime();
    const time2 = new Date(date2).getTime();
    const millisaniyaFarq = Math.abs(time1 - time2);
    const kunlarFarq = millisaniyaFarq / (1000 * 60 * 60 * 24);
    return Math.floor(kunlarFarq);
}
console.log(getDays("June 10, 2019", "June 20, 2019")); 
console.log(getDays("March 28, 2024", "March 10, 2024")); 
console.log(getDays("June 12,2024", "June 11, 2024"));
