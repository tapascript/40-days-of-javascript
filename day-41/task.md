# JavaScript Dates — Practice Assignments

## Parts 1 & 2: Foundations, Core Concepts & the Intl API

### Task 01 — Epoch Explorer

Write a function `epochInfo(date)` that accepts any JavaScript `Date` object and returns an object containing:

- The milliseconds since epoch
- The seconds since epoch (floored)
- A boolean indicating whether the date is before or after the Unix epoch
- How many days have passed since the epoch

### Task 02 — UTC Clock

Build a function `utcClock(date)` that returns a formatted object with the following UTC components of a given date:

- Full year
- Month (1-indexed, zero-padded to 2 digits)
- Day (zero-padded to 2 digits)
- Hours, minutes, and seconds (all zero-padded)
- A combined string in the format `YYYY-MM-DD HH:MM:SS`

Do not use `toISOString()` or any formatting library. Use only UTC getter methods.

### Task 03 — Timezone Offset Formatter

Write a function `getOffsetLabel(date)` that returns a human-readable UTC offset string for the local timezone at the time of the given date. For example:

- `"UTC+05:30"` for India
- `"UTC-08:00"` for US Pacific Standard Time
- `"UTC+00:00"` for UTC

Account for the fact that `getTimezoneOffset()` returns the sign inverted.

### Task 04 — Safe Date Parser

Write a function `safeParse(input)` that:

- Accepts a string, number, or Date object
- Returns a valid `Date` if parsing succeeds
- Returns `null` if the input is invalid, empty, or produces an `Invalid Date`
- For date-only strings like `"2026-03-15"`, returns a `Date` representing **local midnight** (not UTC midnight)

Write at least five test cases demonstrating the edge cases your function handles.

## Task 05 — Date Constructor Comparison

Create a script that creates the same date — **March 15, 2026 at 9:30 AM local time** — using all four forms of the `Date` constructor:

1. No-argument + setters
2. Milliseconds since epoch
3. A date string
4. Year, month, day, hour, minute arguments

Log the result of `.toISOString()` for each. Explain in a comment why any of them differ.

### Task 06 — Month and Day Name Generator

Without using any third-party library, write two functions:

- `getMonthNames(locale, style)` — returns an array of 12 month names for the given locale and style (`'long'`, `'short'`, `'narrow'`)
- `getDayNames(locale, style, startOnMonday)` — returns an array of 7 weekday names, with an option to start on Monday instead of Sunday

Test both functions with at least three different locales.

### Task 07 — Immutable Date Utilities

Write the following functions. Each must **not mutate** the input date and must return a new `Date` object:

- `addDays(date, n)`
- `addMonths(date, n)`
- `addYears(date, n)`
- `subtractDays(date, n)`
- `startOfDay(date)` — returns a new date set to midnight (00:00:00.000) in local time
- `endOfDay(date)` — returns a new date set to 23:59:59.999 in local time

Write test cases that prove the original date is never modified.

### Task 08 — Date Difference Calculator

Write a function `dateDiff(date1, date2)` that returns an object describing the difference between two dates:

```js
{
  totalMs: number,
  totalSeconds: number,
  totalMinutes: number,
  totalHours: number,
  totalDays: number,
  isPast: boolean      // true if date1 is before date2
}
```

All values should be positive regardless of which date is earlier. Use the `isPast` field to indicate direction.

### Task 09 — Leap Year Utility Suite

Write the following functions:

- `isLeapYear(year)` — returns a boolean using the correct Gregorian rule
- `daysInMonth(year, month)` — returns the number of days in a given month (month is 1-indexed)
- `daysInYear(year)` — returns 365 or 366
- `nextLeapYear(year)` — returns the next leap year after the given year
- `leapYearsBetween(year1, year2)` — returns an array of all leap years between two years (inclusive)

### Task 10 — DST Detector

Write the following functions:

- `isDST(date)` — returns `true` if the given date falls within Daylight Saving Time in the local timezone
- `getDSTTransitions(year)` — attempts to find the dates when DST starts and ends in the local timezone for a given year. Return `null` for both if the timezone does not observe DST.

Test your solution in January and July to confirm it detects the difference.

### Task 11 — Safe Day Adder (DST-Aware)

Demonstrate the difference between:

- Adding exactly `n * 86400000` milliseconds to a date
- Using `setDate(getDate() + n)` to add days

Write a function `addDaysSafe(date, n)` using the `setDate` approach. Then write a test that picks a date just before a DST transition in your local timezone and shows that the two approaches produce different hours in the result.

### Task 12 — Locale Date Formatter

Write a function `localFormat(date, locale, preset)` where `preset` is one of:

- `'date-short'` → e.g. `"3/15/26"`
- `'date-long'` → e.g. `"March 15, 2026"`
- `'time-short'` → e.g. `"2:30 PM"`
- `'datetime'` → e.g. `"Mar 15, 2026, 2:30 PM"`
- `'full'` → e.g. `"Sunday, March 15, 2026 at 2:30 PM"`

Use `Intl.DateTimeFormat` internally. Test with at least four locales.

### Task 13 — World Clock Function

Build a `worldClock(date, zones)` function where `zones` is an array of objects like:

```js
{ city: 'Tokyo', timezone: 'Asia/Tokyo', locale: 'ja-JP' }
```

The function should return an array of objects with `city`, `localTime`, `localDate`, and `utcOffset` (e.g. `"GMT+9"`). Use only `Intl.DateTimeFormat` — no manual offset math.

Test it with at least five cities across different continents.

### Task 14 — Calendar Showcase

Write a script that formats the date `2026-03-15T12:00:00Z` using at least **five different calendar systems** via Unicode locale extensions (e.g. Gregorian, Islamic, Japanese, Hebrew, Persian). Display the calendar name alongside each formatted output.

### Task 15 — Smart timeAgo()

Build a `timeAgo(date, locale)` function using `Intl.RelativeTimeFormat` that:

- Automatically selects the most appropriate unit (seconds → minutes → hours → days → weeks → months → years)
- Uses `numeric: 'auto'` so it produces natural strings like "yesterday" and "last week"
- Accepts a locale parameter and works correctly in at least English, French, German, and Japanese
- Returns `"just now"` for differences under 10 seconds

Write test cases for each unit boundary.

### Task 16 — formatToParts() Custom Layout

Using `Intl.DateTimeFormat`'s `formatToParts()` method, build a function `eventBadge(date, timezone, locale)` that returns an object:

```js
{
  dayOfWeek: "SUNDAY",
  month: "MAR",
  day: "15",
  year: "2026",
  time: "2:30 PM",
  tzAbbr: "EDT"
}
```

All string values should be derived from `formatToParts()` output — no manual string construction for the date components.

### Task 17 — Formatter Cache

Implement a `FormatterCache` class with the following interface:

```js
const cache = new FormatterCache();
cache.getDateFormatter(locale, options)   // returns Intl.DateTimeFormat
cache.getRelativeFormatter(locale)        // returns Intl.RelativeTimeFormat
cache.size()                              // returns number of cached formatters
cache.clear()                             // empties the cache
```

The class must never create two formatters with identical locale+options combinations. Write a test that proves the same object reference is returned on repeated calls with the same arguments.

### Task 18 — Date Range Formatter

Write a function `formatDateRange(start, end, locale)` that uses `Intl.DateTimeFormat`'s `formatRange()` method to produce a smart range string. The output should:

- Omit repeated year/month information when start and end are in the same period
- Handle same-day ranges by showing date once and showing a time range
- Fall back gracefully if `formatRange` is unavailable in the environment

Test with ranges that span: same day, same month, same year, and across years.

### Task 19 — Age & Anniversary Calculator

Write a utility object `dateCalc` with the following methods:

- `age(birthday)` — returns the person's current age in completed years
- `nextBirthday(birthday)` — returns the `Date` of their next birthday (handles Feb 29 birthdays in non-leap years by using Feb 28)
- `daysUntilBirthday(birthday)` — returns how many days until their next birthday
- `anniversary(startDate)` — returns how many years since `startDate` (e.g. wedding anniversary)

### Task 20 — Mini Date Formatting Library

Combine everything from Parts 1 and 2 into a single `dateUtils.js` module that exports the following:

**From Part 1 concepts:**

- `isValidDate(value)`
- `parseLocalDate(isoDateString)` — parses `"YYYY-MM-DD"` as local midnight
- `addDays(date, n)`, `addMonths(date, n)`, `addYears(date, n)`
- `daysBetween(date1, date2)`
- `isLeapYear(year)`
- `isDST(date)`

**From Part 2 concepts:**

- `formatDate(date, locale, style)`
- `formatDateTime(date, locale, options)`
- `formatInTimezone(date, timezone, locale)`
- `timeAgo(date, locale)`
- `formatRange(start, end, locale)`
- `getMonthNames(locale, style)`

All functions must be pure (no mutation), all formatters must be cached internally, and the module must have zero external dependencies.
