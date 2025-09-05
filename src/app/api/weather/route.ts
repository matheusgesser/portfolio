const LATITUDE = process.env.LATITUDE;
const LONGITUDE = process.env.LONGITUDE;

export async function GET() {
    if (LATITUDE === undefined || LONGITUDE === undefined)
        throw new Error('No location data set.')

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&current_weather=true`

    const response = await fetch(url)
        .then(response => response.json());

    const { temperature, weathercode } = response.current_weather;

    const data = {
        temperature,
        weathercode,
    };

    return Response.json({ success: true, data });
};