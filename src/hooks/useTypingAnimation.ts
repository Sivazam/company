import { useState, useEffect } from 'react';

export const useTypingAnimation = (texts: string[], typingSpeed = 100, pauseSpeed = 2000, fixedWidth = false) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  // Find the longest text for fixed width
  const maxLength = Math.max(...texts.map(text => text.length));

  const getDisplayText = () => {
    if (!fixedWidth) return currentText;
    
    // Pad with spaces to maintain fixed width
    const padding = ' '.repeat(maxLength - currentText.length);
    return currentText + padding;
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      // Typing phase
      if (currentText.length < texts[currentIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText(texts[currentIndex].substring(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Pause after typing
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseSpeed);
      }
    } else {
      // Deleting phase
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        }, typingSpeed / 2);
      } else {
        // Move to next text
        timeout = setTimeout(() => {
          setCurrentIndex((currentIndex + 1) % texts.length);
          setCurrentText(texts[(currentIndex + 1) % texts.length].substring(0, 1));
          setIsTyping(true);
        }, pauseSpeed / 2);
      }
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [currentText, currentIndex, isTyping, texts, typingSpeed, pauseSpeed]);

  return {
    currentText: getDisplayText(),
    currentIndex,
    isTyping,
  };
};