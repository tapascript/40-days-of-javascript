console.log("JavaScript Date & Time");

// 1. Create Date
const now = new Date();

console.log(now);
console.log(now.getTime());

console.log(Date.now());

// 2. Create Date
const d1 = new Date(1705320000000);
const d2 = new Date(1705320000000);
console.log(d1 === d2); // false

d1.getTime() === d2.getTime();

// 3. Date String
const dateStr = new Date("January 15, 2024");

const dateOnly = new Date("2024-01-15");
const unambiguous = new Date("2024-01-15T00:00:00+00:00");

// 4. Year, Month, Day, ... Arguments
// January 15, 2024
const d = new Date(2024, 0, 15); // 0 = January!

// Full datetime: March 20, 2024 at 3:30:45 PM
const detaileDate = new Date(2024, 2, 20, 15, 30, 45);

const overflow = new Date(2024, 12, 1);
console.log(overflow);

// Getter Methods
const date = new Date("2024-01-15T03:00:00Z"); // 3 AM UTC

// ── LOCAL TIME GETTERS (based on machine's timezone) ──
date.getFullYear(); // Full year: 2024
date.getMonth(); // 0-indexed month: 0 = Jan, 11 = Dec
date.getDate(); // Day of month: 1–31
date.getDay(); // Day of week: 0 = Sunday, 6 = Saturday
date.getHours(); // Hours: 0–23
date.getMinutes(); // Minutes: 0–59
date.getSeconds(); // Seconds: 0–59
date.getMilliseconds(); // Milliseconds: 0–999
date.getTime(); // Milliseconds since epoch (timezone-independent)

// ── UTC GETTERS (always UTC, timezone-independent) ──
date.getUTCFullYear(); // Year in UTC
date.getUTCMonth(); // Month in UTC (0-indexed)
date.getUTCDate(); // Day of month in UTC
date.getUTCDay(); // Day of week in UTC
date.getUTCHours(); // Hours in UTC
date.getUTCMinutes(); // Minutes in UTC
date.getUTCSeconds(); // Seconds in UTC
date.getUTCMilliseconds(); // Milliseconds in UTC

// Setters
const date = new Date("2024-01-15T12:00:00Z");
console.log(date.toISOString()); // '2024-01-15T12:00:00.000Z'

date.setFullYear(2025); // '2025-01-15T12:00:00Z'

// All the setter methods:
date.setMonth(5); // Set to June (0-indexed!)
date.setDate(20); // Set day to 20th
date.setHours(18); // Set to 6 PM local
date.setMinutes(30); // Set minutes to 30
date.setSeconds(0); // Set seconds to 0
date.setMilliseconds(0); // Set ms to 0
date.setTime(1705320000000); // Set entire timestamp

// UTC setters:
date.setUTCFullYear(2024);
date.setUTCMonth(0);
date.setUTCDate(15);
date.setUTCHours(0);

// Avoid mutation - Always clone your date Object
function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days); // Mutates the original!
    return result;
}

const original = new Date("2024-01-15");
const future = addDays(original, 7);
// Jan 15
console.log(original.toDateString()); // Jan 15 -- Not Mutated
console.log(future.toDateString()); // Jan 22



const date = new Date('2024-12-25'); // Christmas

console.log(date.getMonth()); // 11

console.log(date.getMonth() + 1);

const MONTHS = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
];

MONTHS[0] // January
MONTHS[date.getMonth()] // December


function getTodayComponents() {
  const now = new Date();
  return {
    year:  now.getFullYear(),
    month: now.getMonth() + 1,
    day:   now.getDate()
  };
}


// validatind Parsed Date

const bad = new Date('not-a-date');
console.log(bad);           // Invalid Date
console.log(isNaN(bad));  // true

function isValidDate(date) {
    return date instanceof Date && !isNaN(date.getTime())
}

function safeParse(dateString) {
  if (!dateString) return null;
  const date = new Date(dateString);
  return isValidDate(date) ? date : null;
}


// Date Arithmetics
const MS = {
  SECOND: 1_000,
  MINUTE: 1_000 * 60,          //        60,000
  HOUR:   1_000 * 60 * 60,     //     3,600,000
  DAY:    1_000 * 60 * 60 * 24 //    86,400,000
};

const today = new Date();
const in7Days = new Date(today.getTime() + 7 * MS.DAY);

function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

// Difefrence Between Dates
const start = new Date('2024-01-01');
const end   = new Date('2024-12-31');
const diffMs = end - start; // 31,449,600,000 ms

const diffDays    = Math.floor(diffMs / (1000 * 60 * 60 * 24));

function daysBetween(date1, date2) {
  const MS_PER_DAY = 1000 * 60 * 60 * 24;
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  // Strip time components for accurate day calculation
  d1.setHours(0, 0, 0, 0);
  d2.setHours(0, 0, 0, 0);
  return Math.round(Math.abs(d2 - d1) / MS_PER_DAY);
}

// Age Calculator - Task

function calculateAge(birthday) {
}


// Leap Year

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(isLeapYear(2024)); // true  -- div by 4
console.log(isLeapYear(1900)); // false -- div by 100, not 400
console.log(isLeapYear(2000)); // true  -- div by 400
console.log(isLeapYear(2023)); // false -- not div by 4


// DST

// In the US DST starts on the second Sunday in March at 2AM skipping to 3AM
// It ends in November(first Sunday of November, 2AM, repeating 1am to 1:59am)

// 10th March - DST Starts
const skip = new Date(2026, 2, 10, 2, 30, 0); // March 10, 2:30 AM => 3:30 AM
skip.getHours(); //3

// JavaScript can't distinguish between these two 1:30 AMs


function isDST(date) {
  // If the timezone offset is less than the max offset for the year,
  // we're in daylight saving time (clocks are ahead = smaller offset)
  const jan = new Date(date.getFullYear(), 0, 1); // January
  const jul = new Date(date.getFullYear(), 6, 1); // July
  const stdOffset = Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
  return date.getTimezoneOffset() < stdOffset;
}

const winterDate = new Date(2024, 0, 15); // January 15
const summerDate = new Date(2024, 6, 15); // July 15

console.log(isDST(winterDate)); // false (standard time)
console.log(isDST(summerDate)); // true (daylight saving time -- in US)

// Points to note

// 1. STORE as UTC or timestamps
const stored = date.toISOString();  // '2024-01-15T12:00:00.000Z'
const timestamp = date.getTime();   // 1705320000000

// 2. COMPARE using timestamps
const isSameTime = date1.getTime() === date2.getTime();
const isBefore   = date1 < date2;  // Coerces to number
const isAfter    = date1 > date2;

// 3. PARSE ISO 8601 strings only
const safe = new Date('2024-01-15T12:00:00Z'); // Always specify Z or offset

// 4. NEVER mutate -- always clone
const cloned = new Date(original);
cloned.setDate(cloned.getDate() + 7);

// 5. MONTH is 0-indexed -- always add 1 for display
const month = date.getMonth() + 1; // 1-12

// 6. ADD DAYS with setDate() not raw milliseconds (DST-safe)
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

// 7. USE UTC getters on the server
const serverYear = date.getUTCFullYear();
