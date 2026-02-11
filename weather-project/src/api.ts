const API_KEY = import.meta.env.VITE_API_KEY;

export async function getWeather({ lat, lon }: { lat: number; lon: number }) {
    if (!API_KEY) {
        throw new Error("API-Key nicht gefunden! .env-Datei prüfen");
    }

    // ✅ 2.5/weather - KOSTENLOS!
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=de&appid=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`API-Fehler: ${response.status} – Key oder Limit?`);
    }

    return response.json();
}
