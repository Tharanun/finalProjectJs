async function getRandomImage() {
    try {
      const response = await fetch('https://source.unsplash.com/random');
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
  
      const imageUrl = response.url;
      displayImage(imageUrl);
    } catch (error) {
      console.error('There was a problem fetching the image:', error);
    }
  }
  
  function displayImage(imageUrl) {
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = `<img src="${imageUrl}" alt="Random Image">`;
  }
  