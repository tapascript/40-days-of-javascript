const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const regionFilter = document.getElementById("regionFilter");
const loader = document.getElementById("loader");
const error = document.getElementById("error");
const countryDetails = document.getElementById("countryDetails");
const mapDiv = document.getElementById("map");
let map;

searchBtn.addEventListener("click", () => {
    const country = searchInput.value.trim();
    if (!country) return;
    fetchCountry(country);
});

async function fetchCountry(name) {
    loader.classList.remove("hidden");
    error.classList.add("hidden");
    countryDetails.innerHTML = "";

    try {
        const response = await fetch(
            `https://restcountries.com/v3.1/name/${name}?fullText=true`
        );
        const data = await response.json();
        const country = data[0];

        if (!country) {
            throw new Error("Invalid Country Name or Not Matching in DB");
        }
        const languages = country.languages
            ? Object.values(country.languages).join(", ")
            : "N/A";

        countryDetails.innerHTML = `
          <div class="p-4 border rounded shadow">
            <img src="${country.flags.svg}" alt="Flag" class="w-32 mb-2">
            <h2 class="text-xl font-bold">${country.name.common}</h2>
            <p><strong>Capital:</strong> ${country.capital}</p>
            <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
            <p><strong>Languages:</strong> ${languages}</p>
            <div class="mb-4">
                <h2 class="text-xl font-semibold mb-2">Local Timezones</h2>
                <ul id="timezoneList" class="list-disc ml-6"></ul>
            </div>
            <button onclick="saveFavorite('${
                country.name.common
            }')" class="mt-2 bg-green-500 text-white px-4 py-2 rounded">Save Favorite</button>
          </div>`;

        updateTimezones(country.timezones);

        drawMap(country.latlng);
    } catch (err) {
        error.classList.remove("hidden");
        error.textContent = err.message || "Failed to load country data";
    } finally {
        loader.classList.add("hidden");
    }
}

async function fetchByCode(code) {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
    const data = await res.json();
    fetchCountry(data[0].name.common);
}

function saveFavorite(name) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.includes(name)) {
        favorites.push(name);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        alert(`${name} saved to favorites!`);
    }
}

function updateTimezones(timezones) {
    const timezoneList = document.getElementById("timezoneList");
    timezoneList.innerHTML = ""; // Clear previous results

    timezones.forEach((tz) => {
        const li = document.createElement("li");
        const localTime = getTimeUsingIntl(tz);
        li.textContent = `${tz} → ${localTime}`;
        timezoneList.appendChild(li);
    });
}

function getTimeUsingIntl(timezone) {
    try {
        const options = {
            timeZone: convertToIANA(timezone),
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        };
        return new Intl.DateTimeFormat("en-US", options).format(new Date());
    } catch (err) {
        console.warn(`Timezone ${timezone} not supported, falling back.`);
        return "Unsupported timezone";
    }
}

function convertToIANA(utcString) {
    // Basic support for known UTC formats
    if (utcString === "UTC") return "Etc/UTC";

    const match = utcString.match(/^UTC([+-]\d{2}):(\d{2})$/);
    if (match) {
        const [, hour, min] = match;
        // Convert UTC offset to Etc/GMT format (note: reverse sign for IANA)
        const offset = parseInt(hour, 10);
        const sign = offset < 0 ? "+" : "-";
        return `Etc/GMT${sign}${Math.abs(offset)}`; // IANA flips signs
    }

    return "Etc/UTC"; // fallback
}

function drawMap(latLang) {
    const [lat, lng] = latLang;
    if (!map) {
        map = L.map("map").setView([lat, lng], 5);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
            map
        );
    } else {
        map.setView([lat, lng], 5);
        L.marker([lat, lng])
            .addTo(map)
            .bindPopup(country.name.common)
            .openPopup();
    }
}
