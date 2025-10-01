async function convertText() {
    const text = document.getElementById('text').value;
    const apiKey = "YOUR_API_KEY";      // Paste your IBM API Key here
    const url = "YOUR_SERVICE_URL";     // Paste your IBM Service URL here

    const response = await fetch(`${url}/v1/synthesize?voice=en-US_AllisonV3Voice`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa('apikey:' + apiKey)
        },
        body: JSON.stringify({ text: text }),
    });

    const audioData = await response.arrayBuffer();
    const blob = new Blob([audioData], { type: 'audio/wav' });
    document.getElementById('audio').src = URL.createObjectURL(blob);
}
