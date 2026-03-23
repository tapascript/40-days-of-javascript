const { log } = console;
log("JS INTL API Session");

// The same moment in time: March 15, 2026, 2:30 PM UTC
// How it gets displayed around the world:

// United States (en-US)       3/15/2026, 2:30 PM
// United Kingdom (en-GB)      15/03/2026, 14:30
// Germany (de-DE)             15.3.2026, 14:30 Uhr
// Japan (ja-JP)               2026/3/15 14:30
// Saudi Arabia (ar-SA)        ١٥/٣/٢٠٢٦، ٢:٣٠ م   (Arabic numerals!)
// India - Hindi (hi-IN)       15/3/2026, 2:30 अपराह्न
// China (zh-CN)               2026/3/15 14:30
// Korea (ko-KR)               2026. 3. 15. 오후 2:30
// Russia (ru-RU)              15.03.2026, 14:30
// Brazil (pt-BR)              15/03/2026, 14:30

// -- INTL: Intro --
log("-- 1. Intro --");
log(typeof Intl);

{
    // JS Date Objects got a few in-built formatting support. But they use the INTL API underneath.
    const date = new Date("2026-03-15T14:30:00Z");
    log(date.toLocaleDateString("en-US"));
    log(date.toLocaleTimeString("en-US"));
    log(date.toLocaleDateString("de-DE"));
    log(date.toLocaleTimeString("de-DE"));
}

// Locale

// BCP 47 locale tag structure:
// language[-script][-region][-extensions]
/*
  'en'        // English (no region — use defaults)
  'en-US'     // English as used in the United States
  'en-GB'     // English as used in Great Britain
  'zh-Hans'   // Chinese, written in Simplified script
  'zh-Hant'   // Chinese, written in Traditional script
  'zh-TW'     // Chinese as used in Taiwan
  'sr-Latn'   // Serbian written in Latin script
  'sr-Cyrl'   // Serbian written in Cyrillic script

    The language subtag is a 2-3 letter ISO 639 code
    The region subtag is a 2-letter ISO 3166 code

    Real-world examples with date implications:
    'en-US'     // Month/Day/Year  (3/15/2026)
    'en-GB'     // Day/Month/Year  (15/03/2026)
    'en-CA'     // Year-Month-Day  (2026-03-15)
    'de-DE'     // Day.Month.Year  (15.3.2026)
    'ja-JP'     // Year/Month/Day  (2026/3/15)
*/

// -- INTL: Constructor --
// Signature:
// new Intl.DateTimeFormat(locales?, options?)
log("-- 2. Constructor --");
{
    const fmt = new Intl.DateTimeFormat();
    log(fmt.format(new Date("2026-03-15")));
    log(fmt.format(Date.now()));
    log(fmt.format(1742040600000));
    log(fmt.format());

    // With locales
    const usFmt = new Intl.DateTimeFormat("en-US");
    const ukFmt = new Intl.DateTimeFormat("en-GB");
    const deFmt = new Intl.DateTimeFormat("de-DE");
    const jaFmt = new Intl.DateTimeFormat("ja-JP");

    const date = new Date("2026-03-15T14:30:00Z");

    log("usFmt =>", usFmt.format(date));
    log("ukFmt =>", ukFmt.format(date));
    log("deFmt =>", deFmt.format(date));
    log("jaFmt =>", jaFmt.format(date));
}

// -- INTL: Format Date & Time With Optioons --
log("-- 3. Format Date & Time w/options --");

{
    const date = new Date("2026-03-15T14:30:45Z");

    const dtFmt = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }); // try: long, medium, short
    log(dtFmt.format(date));

    const tmFmt = new Intl.DateTimeFormat("en-US", { timeStyle: "full" }); // try: long, medium, short
    log(tmFmt.format(date));

    const fmt = new Intl.DateTimeFormat("en-US", {
        dateStyle: "short",
        timeStyle: "short",
    });
    log("en-US =>", fmt.format(date));

    const deFmt = new Intl.DateTimeFormat("de-DE", {
        dateStyle: "full",
        timeStyle: "short",
    });

    log("deFmt =>", deFmt.format(date));

    const jpFmt = new Intl.DateTimeFormat("ja-JP", {
        dateStyle: "full",
        timeStyle: "short",
    });

    log("jpFmt =>", jpFmt.format(date));
}

// -- INTL: Practical Field Combo --

log("-- 4. Practical Field Combo --");

{
    const date = new Date("2026-03-15T14:30:00Z");
    const fmt = (locale, opts) =>
        new Intl.DateTimeFormat(locale, opts).format(date);

    log(fmt("en-US", { month: "long", day: "numeric", year: "numeric" }));
    // Compact date for tables
    log(fmt("en-US", { month: "short", day: "numeric" }));
    // Month and Year Only
    log(fmt("en-US", { month: "long", year: "numeric" }));
    // Day of the Week
    log(fmt("en-US", { weekday: "long", month: "long", day: "numeric" }));
    // Time only, 24-hour: '20:00'
    log(fmt("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }));
    // Full Time for logs
    log(
        fmt("en-CA", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
        }),
    );
}

// -- INTL: Timezones --
log("-- 5. TimeZones --");

{
    const date = new Date("2026-03-15T20:00:00Z"); // 8 PM UTC

    const fmt = (locale, opts) =>
        new Intl.DateTimeFormat(locale, opts).format(date);
    const timeOpts = { timeStyle: "short", dateStyle: "short" }; // use the "long" style for the TZ names in the output

    // Local TimeZone
    log("In Local TZ =>", fmt("en-US", timeOpts));

    // In America/New_York ImeZone
    log(
        "In America/New_York =>",
        fmt("en-US", { ...timeOpts, timeZone: "America/New_York" }),
    );

    // In Europe/London ImeZone
    log(
        "In Europe/London =>",
        fmt("en-GB", { ...timeOpts, timeZone: "Europe/London" }),
    );

    // In Europe/Berlin ImeZone
    log(
        "In Europe/Berlin =>",
        fmt("de-DE", { ...timeOpts, timeZone: "Europe/Berlin" }),
    );

    // In Asia/Tokyo ImeZone
    log(
        "In Asia/Tokyo =>",
        fmt("ja-JP", { ...timeOpts, timeZone: "Asia/Tokyo" }),
    );
}

// -- INTL: Timezone Names --
log("-- 6. Timezone Names --");

{
    const date = new Date("2026-03-15T14:00:00Z");
    const tz = "America/Los_Angeles";

    const fmt = (tzName) =>
        new Intl.DateTimeFormat("en-US", {
            hour: "numeric",
            minute: "2-digit",
            timeZone: tz,
            timeZoneName: tzName,
        }).format(date);

    log(fmt("short"));
    log(fmt("long"));
    log(fmt("shortOffset"));
    log(fmt("longOffset"));
    log(fmt("shortGeneric"));
    log(fmt("longGeneric"));
}

// -- INTL: Relative Time Formatting --
log("-- 7. Relative Time Formatting --");

{
    // Constructor: new Intl.RelativeTimeFormat(locale?, options?)
    const rtf = new Intl.RelativeTimeFormat("en-US", {
        style: "long",
        numeric: "auto",
    }); // also use numeric:"always" for neumeric always and other styles like "short" and "narrow"

    log(rtf.format(-1, "day"));
    log(rtf.format(-3, "day"));
    log(rtf.format(-1, "week"));
    log(rtf.format(-2, "month"));
    log(rtf.format(-1, "year"));
    log(rtf.format(1, "day"));
    log(rtf.format(3, "hour"));
    log(rtf.format(1, "week"));
    log(rtf.format(0, "day"));
    log(rtf.format(0, "second"));

    // format to parts
    const parts = rtf.formatToParts("-3", "day");
    log(parts);
}

// -- INTL: How JS Picks a Locale? --
log("-- 8. How JS Picks a Locale? --");

{
    // JavaScript picks the first one it fully supports

    const date = new Date("2026-03-15T20:00:00Z");
    const locales = ["ban", "id"];
    const fmt = (locale, opts) => new Intl.DateTimeFormat(locales).format(date);
    log(fmt(date));

    // Practical usage
    const userLocales = navigator.languages;
    log(userLocales);
    const appLocales = ["de-DE", "en-US"];
    // Find the best match between user preference and app support:
    const negotiated = Intl.DateTimeFormat.supportedLocalesOf(userLocales, {
        localeMatcher: "best fit",
    });
    log(negotiated);
}

// -- INTL: Performance --
log("-- 9. Performance --");

{
    // WRONG: Creating a new formatter every time
    function formatDateBad(date) {
        // New formatter on EVERY call — very slow!
        return new Intl.DateTimeFormat("en-US", {
            dateStyle: "medium",
        }).format(date);
    }

    // CORRECT: Create once, reuse many times
    const dateFormatter = new Intl.DateTimeFormat("en-US", {
        dateStyle: "medium",
    });

    function formatDateGood(date) {
        return dateFormatter.format(date); // Fast!
    }

    // PATTERN
    const formatterCache = new Map();

    function getFormatter(locale, options) {
        const key = `${locale}::${JSON.stringify(options)}`;

        if (!formatterCache.has(key)) {
            formatterCache.set(key, new Intl.DateTimeFormat(locale, options));
        }

        return formatterCache.get(key);
    }

    // Usage:
    function formatDate(date, locale, options) {
        return getFormatter(locale, options).format(date);
    }

    // formatDate is now fast regardless of how many unique locales/options
    // you use — each combination is created only once
    const dateStr = formatDate(new Date("2026-03-15"), "en-US", {
        dateStyle: "long",
    });
    log(dateStr);
    formatDate(new Date("2026-06-20"), "en-US", { dateStyle: "long" }); // Cache hit!
    formatDate(new Date("2026-03-15"), "de-DE", { dateStyle: "long" }); // New entry
}

// -- INTL: Format Range --
log("-- 10. Format Range --");

{
    const fmt = new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    const start = new Date("2026-03-15T00:00:00Z");
    const end1 = new Date("2026-03-20T00:00:00Z"); // Same month/year
    const end2 = new Date("2026-04-10T00:00:00Z"); // Different month
    const end3 = new Date("2027-01-15T00:00:00Z"); // Different year

    log(fmt.formatRange(start, end1));
    log(fmt.formatRange(start, end2));
    log(fmt.formatRange(start, end3));

    // Also works across TZs
    const tzFmt = new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        timeZone: "America/New_York",
    });

    const meetingStart = new Date("2026-03-15T14:00:00Z");
    const meetingEnd = new Date("2026-03-15T15:30:00Z");

    log(tzFmt.formatRange(meetingStart, meetingEnd))
}
