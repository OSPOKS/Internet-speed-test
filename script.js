const startButton = document.getElementById('start-button');
const downloadSpeed = document.getElementById('download-speed');
const uploadSpeed = document.getElementById('upload-speed');
const resultDiv = document.getElementById('result');
const ipAddress = document.getElementById('ip-address');

startButton.addEventListener('click', () => {
    startButton.disabled = true;
    startButton.innerText = 'Testing...';

   
    const ip = navigator.getIPAddress();
    ipAddress.innerText = ip;

   
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
