export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5f049f8255msh81edac4cd578244p12d4c0jsn6d5574b536a2',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}