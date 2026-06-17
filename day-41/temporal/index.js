const { log } = console;
log("JS Temporal API Session");

// Bug 01: The Mutation Trap
{
    // You pass a date into a function...
    function getNextWeek(date) {
        date.setDate(date.getDate() + 7);
        return date;
    }

    const today = new Date("2026-06-01");
    const nextWeek = getNextWeek(today);

    log(today.toDateString()); // MUTATED
    log(nextWeek.toDateString());
}

// Bug 02: The Month That Starts at Zero
{
    // What month is this?
    const date = new Date(2026, 2, 15); // 2 means MARCH, not February!

    // January = 0
    // February = 1
    // March = 2
    // December = 11

    // This has been confusing developers for 30 years.
    // There is no good reason for it. It was a mistake.
}

// Bug 03: The Timezone Void
{
    // The Date object only knows TWO timezones:
    // - UTC
    // - Your local machine's timezone
    // That's it.

    // You cannot do this natively:
    try {
        const nyTime = new Date("2026-04-10T09:00:00[America/New_York]"); // ❌ Not valid
        const tokyoTime = nyTime.toTimezone("Asia/Tokyo"); // ❌ Doesn't exist
    } catch (e) {
        console.error(e);
    }

    // You have to use Intl for display,
    // do raw offset math for logic,
    // or reach for a library.
}

// Bug 04: The DST Ghost Hour
{
    // Spring forward: March 8, 2026 at 2:00 AM → clocks jump to 3:00 AM
    // 2:30 AM literally does not exist that day

    // This is valid JavaScript that creates a date that never existed:
    const ghost = new Date(2026, 2, 8, 2, 30, 0);
    // JavaScript silently adjusts it. You never know it happened.
    // No error. No warning. Just wrong data in production.
}

// Temporal Types
{
    // 1. Temporal.PlainDate
    //    A date on a calendar. No time. No timezone.
    //    Use for: birthdays, deadlines, holidays
    Temporal.PlainDate.from("2026-03-15");

    // 2. Temporal.PlainTime
    //    A time of day. No date. No timezone.
    //    Use for: opening hours, alarms, recurring times
    Temporal.PlainTime.from("09:30:00");

    // 3. Temporal.PlainDateTime
    //    Date + time, but no timezone.
    //    Use for: "our standup is every Monday at 10 AM"
    //    (each office observes it in their own timezone)
    Temporal.PlainDateTime.from("2026-03-15T09:30:00");

    // 4. Temporal.ZonedDateTime  ← the most powerful one
    //    Date + time + full timezone. DST-aware.
    //    Use for: scheduling, calendar apps, user-facing times
    Temporal.ZonedDateTime.from("2026-03-15T09:30:00[America/New_York]");

    // 5. Temporal.Instant
    //    An exact point on the timeline. No calendar. No timezone.
    //    Use for: logging, timestamps, measuring elapsed time
    Temporal.Instant.from("2026-03-15T13:30:00Z");

    // 6. Temporal.PlainYearMonth
    //    A month in a year. No day.
    //    Use for: billing cycles, credit card expiry
    Temporal.PlainYearMonth.from("2026-03");

    // 7. Temporal.PlainMonthDay
    //    A month and day. No year.
    //    Use for: annual recurring dates — birthdays, anniversaries
    Temporal.PlainMonthDay.from("03-15");
}

// Temporal: Immutability
{
    const date = Temporal.PlainDate.from("2026-06-01");
    const nextWeek = date.add({ days: 7 });

    log(date.toString()); // '2026-06-01'  => untouched ✅
    log(nextWeek.toString()); // '2026-03-08'  => new object ✅
}

// Temporal: Live Comparisons
{
    // 01: Getting today's date
    // OLD Date — the timezone trap
    const todayOld = new Date().toISOString().slice(0, 10);
    // Returns UTC date — might be 'yesterday' if you're in UTC-X timezone

    // TEMPORAL — always the correct local calendar date
    const todayNew = Temporal.Now.plainDateISO();
    // '2026-03-15'  => always your actual local today

    // 02: Adding 30 Days
    // OLD Date — mutation trap
    const deadline = new Date("2026-03-15");
    deadline.setDate(deadline.getDate() + 30); // mutates the original!
    // '2026-04-14'  (but deadline is now permanently changed)

    // TEMPORAL — immutable, readable
    const start = Temporal.PlainDate.from("2026-03-15");
    const newDeadline = start.add({ days: 30 });
    // start   = '2026-03-15'  => unchanged ✅
    // newDeadline = '2026-04-14' => new object ✅

    // 03: Comparing Two Dates
    // OLD Date — object comparison trap
    const d1 = new Date("2026-03-15");
    const d2 = new Date("2026-03-15");
    console.log(d1 === d2); // false! (different objects)
    console.log(d1 == d2); // false!
    console.log(d1.getTime() === d2.getTime()); // true (workaround)

    // TEMPORAL — built-in comparison methods
    const t1 = Temporal.PlainDate.from("2026-03-15");
    const t2 = Temporal.PlainDate.from("2026-03-15");
    t1.equals(t2); // true ✅ — clear and explicit

    // Sort-ready comparison:
    Temporal.PlainDate.compare(t1, t2); // 0 (equal), -1 (before), 1 (after)
    // Works directly in .sort() — no custom comparator needed

    // 04: DST-safe Day Adding
    // OLD Date — the 24-hour trap
    // March 8, 2026: DST spring-forward in the US
    // This day is only 23 hours long
    const preDST = new Date(2026, 2, 7, 12, 0, 0); // March 7, noon
    const plusOneDay = new Date(preDST.getTime() + 24 * 60 * 60 * 1000);
    console.log(plusOneDay.getHours()); // 13 — it's 1 PM, not noon!
    // You asked for "tomorrow at noon" and got "tomorrow at 1 PM"

    // TEMPORAL — DST-aware by design
    const zdtPreDST = Temporal.ZonedDateTime.from({
        year: 2026,
        month: 3,
        day: 7,
        hour: 12,
        timeZone: "America/New_York",
    });
    const zdtNextDay = zdtPreDST.add({ days: 1 });
    console.log(zdtNextDay.hour); // 12 — still noon ✅
    // Temporal understood it was a DST day and compensated automatically
}
