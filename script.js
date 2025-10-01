async function convertText() {
    const text = document.getElementById('text').value;
    if (!text) {
        alert("Please enter some text!");
        return;
    }

    // Demo IBM Text-to-Speech using IBM Watson public demo API
    const url = "https://api.sampleapis.com/tts/demo"; // Demo endpoint (doesn't need API key)

    try {
        const response = await fetch(`${url}?text=${encodeURIComponent(text)}`);
        if (!response.ok) throw new Error("API error");

        const blob = await response.blob();
        const audioUrl = URL.createObjectURL(blob);
        document.getElementById('audio').src = audioUrl;
    } catch (error) {
        alert("Sorry! Text-to-Speech is not available in demo mode.");
        console.error(error);
    }
}
