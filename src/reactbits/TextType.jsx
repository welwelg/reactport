import React, { useState, useEffect } from 'react';

export default function TextType({ 
  text, 
  typingSpeed = 75, 
  pauseDuration = 1500, 
  showCursor = true, 
  cursorCharacter = "|" 
}) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursorBlink, setShowCursorBlink] = useState(true);

  // Typing effect
  useEffect(() => {
    const currentText = text[textIndex];
    let timer;

    if (!isDeleting) {
      if (charIndex < currentText.length) {
        timer = setTimeout(() => {
          setDisplayText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        // Pause before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, typingSpeed / 2);
      } else {
        // Move to next text
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % text.length);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, textIndex, isDeleting, text, typingSpeed, pauseDuration]);

  // Cursor blink effect
  useEffect(() => {
    if (!showCursor) return;

    const cursorTimer = setInterval(() => {
      setShowCursorBlink((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, [showCursor]);

  return (
    <div className="inline-block">
      <span>{displayText}</span>
      {showCursor && (
        <span
          className={`ml-1 transition-opacity ${
            showCursorBlink ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {cursorCharacter}
        </span>
      )}
    </div>
  );
}