  const typingElement = document.getElementById('typing-text');
  if (typingElement) {
    const texts = [
      "Teaching is not a Profession but a Mission",
      "G.H.P Secondary School",
      
    ];

    let textIndex = 0;
    let charIndex = 0;

    function type() {
      if (textIndex >= texts.length) textIndex = 0;

      const currentText = texts[textIndex];
      typingElement.textContent = currentText.slice(0, ++charIndex);

      if (charIndex === currentText.length) {
        textIndex++;
        charIndex = 0;
        setTimeout(type, 1000);
      } else {
        setTimeout(type, 100);
      }
    }
    type();
  }

 