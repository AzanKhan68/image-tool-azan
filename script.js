document.addEventListener('DOMContentLoaded', () => {
    const promptInput = document.getElementById('prompt-input');
    const sizeSelect = document.getElementById('size-select');
    const generateBtn = document.getElementById('generate-btn');
    const imageGrid = document.getElementById('image-grid');

    const API_KEY = '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';
    const API_ENDPOINT = 'YOUR_API_ENDPOINT_HERE'; // Replace with the actual API endpoint

    const generateImage = async () => {
        const prompt = promptInput.value.trim();
        const size = sizeSelect.value;
        
        if (!prompt) {
            alert('Please enter a description for the image.');
            return;
        }

        generateBtn.disabled = true;
        generateBtn.textContent = 'Generating...';

        try {
            // This is a placeholder API call structure.
            // You will need to adjust this to match the specific API you are using.
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`
                },
                body: JSON.stringify({
                    prompt: prompt,
                    size: size,
                    // Add other required parameters here
                })
            });

            if (!response.ok) {
                throw new Error('Failed to generate image. Please try again.');
            }

            const data = await response.json();
            const imageUrl = data.url; // Adjust this based on the API response structure

            displayImage(imageUrl);
        } catch (error) {
            console.error('Error generating image:', error);
            alert(error.message);
        } finally {
            generateBtn.disabled = false;
            generateBtn.textContent = 'Generate Image 🚀';
        }
    };

    const displayImage = (url) => {
        const imageCard = document.createElement('div');
        imageCard.className = 'image-card';
        
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Generated Image';
        
        imageCard.appendChild(img);
        imageGrid.prepend(imageCard); // Prepend to show the newest image at the top
    };

    generateBtn.addEventListener('click', generateImage);
});
