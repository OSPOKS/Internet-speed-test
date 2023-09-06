const startButton = document.getElementById('start-button');
const downloadSpeed = document.getElementById('download-speed');
const uploadSpeed = document.getElementById('upload-speed');
const resultDiv = document.getElementById('result');

startButton.addEventListener('click', () => {
    startButton.disabled = true;
    startButton.innerText = 'Testing...';

    // Simulate a delay for testing purposes (replace with actual speed test logic)
    setTimeout(() => {
        const simulatedDownloadSpeed = Math.random() * 100;
        const simulatedUploadSpeed = Math.random() * 100;

        downloadSpeed.innerText = simulatedDownloadSpeed.toFixed(2) + ' Mbps';
        uploadSpeed.innerText = simulatedUploadSpeed.toFixed(2) + ' Mbps';

        resultDiv.style.display = 'block';
        startButton.innerText = 'Restart Test';
        startButton.disabled = false;
    }, 3000); // Simulated 3-second test
});

