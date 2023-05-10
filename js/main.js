const panoramaImage = new PANOLENS.ImagePanorama("images/panorama/panorama-1.jpg");
const panoramaContainer = document.querySelector(".panorama-container");

const viewer = new PANOLENS.Viewer({
    container: panoramaContainer,
    autoRotate: true,
    autoRotateSpeed: 0.5,
    
});

viewer.add(panoramaImage);