// Script for balloon animation
document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('audio');
  const startButton = document.getElementById('startButton');
  const lyricsContainer = document.getElementById('lyricsContainer');
  const balloonsContainer = document.getElementById('balloonsContainer');
  const apologyCard = document.getElementById('apologyCard');
  const messageButton = document.getElementById('messageButton');
  
  // Lyrics with timing (in seconds)
  const lyrics = [
    { text: "I'm sorry, so sorry", time: 2 },
    { text: "That I was such a fool", time: 5 },
    { text: "I didn't know", time: 8 },
    { text: "Love could be so cruel", time: 11 },
    { text: "Oh-oh-oh-oh uh-oh-oh", time: 14 },
    { text: "Oh-oh-oh-oh uh-oh-oh", time: 17 },
    { text: "You tell me mistakes", time: 20 },
    { text: "Are part of being young", time: 23 },
    { text: "But that don't right", time: 26 },
    { text: "The wrong that's been done", time: 29 },
    { text: "I'm sorry, so sorry", time: 32 },
    { text: "Please accept my apology", time: 35 },
    { text: "But love is blind", time: 38 },
    { text: "And I was too blind to see", time: 41 }
  ];
  
  // Balloon colors
  const balloonColors = [
    'rgba(255, 0, 0, 0.7)',    // Red
    'rgba(255, 165, 0, 0.7)',  // Orange
    'rgba(255, 255, 0, 0.7)',  // Yellow
    'rgba(0, 128, 0, 0.7)',    // Green
    'rgba(0, 0, 255, 0.7)',    // Blue
    'rgba(128, 0, 128, 0.7)',  // Purple
    'rgba(255, 192, 203, 0.7)' // Pink
  ];
  
  // Start the experience
  startButton.addEventListener('click', () => {
    audio.play();
    startButton.style.opacity = '0.5';
    displayLyrics();
    createBalloons();
    
    // Hide apology card initially
    apologyCard.style.opacity = '0';
    apologyCard.style.transform = 'translateY(50px)';
    
    // Show message button after 15 seconds
    setTimeout(() => {
      messageButton.style.opacity = '1';
      messageButton.style.pointerEvents = 'auto';
    }, 15000);
  });
  
  // Display lyrics with timing
  function displayLyrics() {
    lyrics.forEach(line => {
      setTimeout(() => {
        lyricsContainer.textContent = line.text;
        lyricsContainer.style.opacity = '1';
        
        // Fade out after 2.5 seconds
        setTimeout(() => {
          lyricsContainer.style.opacity = '0';
          
          // Show apology card specifically after "That I was such a fool" lyric
          if (line.text === "That I was such a fool") {
            setTimeout(() => {
              apologyCard.style.opacity = '1';
              apologyCard.style.transform = 'translateY(0)';
            }, 500); // Small delay after the lyric fades out
          }
        }, 2500);
      }, line.time * 1000);
    });
  }
  
  // Create balloons
  function createBalloons() {
    // Create 50 balloons
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        
        // Random position
        const left = Math.random() * 100;
        balloon.style.left = `${left}%`;
        
        // Random delay
        const delay = Math.random() * 5;
        balloon.style.animationDelay = `${delay}s`;
        
        // Random duration between 10-20 seconds
        const duration = Math.random() * 10 + 10;
        balloon.style.animationDuration = `${duration}s`;
        
        // Random color
        const colorIndex = Math.floor(Math.random() * balloonColors.length);
        balloon.style.backgroundColor = balloonColors[colorIndex];
        
        // Random size
        const size = Math.random() * 30 + 30;
        balloon.style.width = `${size}px`;
        balloon.style.height = `${size * 1.25}px`;
        
        balloonsContainer.appendChild(balloon);
        
        // Remove balloon after animation
        setTimeout(() => {
          balloon.remove();
        }, duration * 1000);
      }, i * 300); // Stagger balloon creation
    }
  }
});
