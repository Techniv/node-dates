/**
 * Created by Techniv on 24/05/2014.
 */

var dates = require('../libs/dates');

console.log(dates.format(dates.standardFormat.ISO8601));

var formatter = dates.createFormatter("The date is: www dd MMMM yyyy - hh:mm:ss.sss $a");

console.log(formatter.format(new Date));

formatter = dates.createFormatter("La date est : www dd MMMM yyyy - HH:mm:ss.sss", 'fr');

console.log(formatter.format(new Date));