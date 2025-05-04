import React, { useState } from 'react';

// Assume basic grid layout CSS is provided externally (e.g., in app.css)
// .grid-container, .grid-item, .content-container, .image-container, .button-container

function Index() {
  // State for Section 1 (Cat toggle)
  const [catVisible, setCatVisible] = useState(true);

  // State for Section 2 (Puppy/Mystery show/hide)
  const [puppyVisible, setPuppyVisible] = useState(true); // Start showing puppy

  // State for Section 3 (Fade)
  const [fadeOpacity, setFadeOpacity] = useState(1);
  const [fadeDisplay, setFadeDisplay] = useState('block');
  const animDuration = 600; // Using 600ms for all animations as a consistent duration

  // State for Section 4 (Slide)
  const [slideMaxHeight, setSlideMaxHeight] = useState('500px'); // Needs a large enough value
  const [slideDisplay, setSlideDisplay] = useState('block');

  // Section 1 Handlers (Toggle)
  const handleCatToggle = () => {
    setCatVisible(prev => !prev);
  };

  // Section 2 Handlers (Show/Hide)
  const handleShowPuppy = () => {
    setPuppyVisible(true);
  };

  const handleHidePuppy = () => {
    setPuppyVisible(false);
  };

  // Section 3 Handlers (Fade)
  const handleFadeIn = () => {
    // If already visible or transitioning in, do nothing
    if (fadeDisplay === 'block' && fadeOpacity === 1) return;

    setFadeDisplay('block');
    // Use requestAnimationFrame twice to ensure display change is applied before transition
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
           setFadeOpacity(1);
        });
    });
  };

  const handleFadeOut = () => {
     // If already hidden or transitioning out, do nothing
     if (fadeDisplay === 'none' && fadeOpacity === 0) return;

    setFadeOpacity(0);
    // Set display to none after the transition ends
    setTimeout(() => {
      setFadeDisplay('none');
    }, animDuration);
  };

  const handleFadeToggle = () => {
    // If currently visible (opacity > 0 or display block), fade out
    // If currently hidden (opacity is 0 AND display none), fade in
    if (fadeOpacity > 0 || fadeDisplay === 'block') {
       handleFadeOut();
    } else {
       handleFadeIn();
    }
  };

  // Section 4 Handlers (Slide)
  const handleSlideDown = () => {
     // If already expanded or transitioning down, do nothing
     if (slideDisplay === 'block' && slideMaxHeight !== '0px') return;

    setSlideDisplay('block');
    // Use requestAnimationFrame twice to ensure display change is applied before transition
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            setSlideMaxHeight('500px'); // Use a sufficiently large value
        });
    });
  };

  const handleSlideUp = () => {
     // If already collapsed or transitioning up, do nothing
     if (slideDisplay === 'none' && slideMaxHeight === '0px') return;

    setSlideMaxHeight('0px');
    setTimeout(() => {
      setSlideDisplay('none');
    }, animDuration);
  };

  const handleSlideToggle = () => {
     // If max-height is > 0px OR display is block, it's expanded or transitioning -> slide up
     // If max-height is 0px AND display is none, it's collapsed -> slide down
     if (slideMaxHeight !== '0px' || slideDisplay === 'block') {
        handleSlideUp();
     } else {
        handleSlideDown();
     }
  };


  // Define animation styles using the consistent duration
  // In a real app, these would be in a CSS file.
  const animationStyles = `
    .fade-img {
      transition: opacity ${animDuration}ms ease-in-out;
    }
    .slide-img {
      transition: max-height ${animDuration}ms ease-in-out;
      overflow: hidden; /* Important for slide effect */
    }
  `;

  return (
    <>
      {/* Add style tag for animation transitions. Not standard practice in production,
          use CSS modules or a global CSS file instead. Included here for demo clarity. */}
      <style>{animationStyles}</style>

      <div className="grid-container">
        <div className="grid-item">
          <div className="content-container">
            <button onClick={handleCatToggle}>.toggle()</button>
          </div>
          <div className="image-container">
            <img
              alt="a nice cat"
              id="cat-image"
              src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80"
              style={{ display: catVisible ? 'block' : 'none' }}
            />
          </div>
        </div>

        <div className="grid-item">
          <div className="content-container">
            <div className="button-container">
              <button onClick={handleShowPuppy}>.show()</button>
              <button onClick={handleHidePuppy}>.hide()</button>
            </div>
          </div>
          <div className="image-container">
            <img
              alt="a question mark"
              id="mystery-image"
              src="https://images.unsplash.com/photo-1484069560501-87d72b0c3669?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80"
              style={{ display: puppyVisible ? 'none' : 'block' }}
            />
            <img
              alt="a very small, cute puppy"
              id="puppy-image"
              src="https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80"
              style={{ display: puppyVisible ? 'block' : 'none' }}
            />
          </div>
        </div>

        <div className="grid-item">
          <div className="content-container">
            <div className="button-container">
              <button onClick={handleFadeOut}>.fadeOut()</button>
              <button onClick={handleFadeIn}>.fadeIn()</button>
              <button onClick={handleFadeToggle}>.fadeToggle()</button>
            </div>
          </div>
          <div className="image-container">
            <img
              alt="small kitten outside in grass"
              className="fade-img"
              src="https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80"
              style={{
                opacity: fadeOpacity,
                display: fadeDisplay,
              }}
            />
          </div>
        </div>

        <div className="grid-item">
          <div className="content-container">
            <div className="button-container">
              <button onClick={handleSlideUp}>.slideUp()</button>
              <button onClick={handleSlideDown}>.slideDown()</button>
              <button onClick={handleSlideToggle}>.slideToggle()</button>
            </div>
          </div>
          <div className="image-container">
            <img
              alt="anxious cat"
              className="slide-img"
              src="https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"
               style={{
                maxHeight: slideMaxHeight,
                display: slideDisplay,
                overflow: 'hidden',
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;```typescript
/**
 * Renders a demo page showcasing different methods for controlling element visibility and applying simple animations in React.
 *
 * This component demonstrates four distinct techniques:
 * 1.  **Simple Toggle:** Using the CSS `display` property to show/hide an element instantly.
 * 2.  **Show/Hide Swap:** Toggling the `display` property between two elements to swap which one is visible.
 * 3.  **Fade Animation:** Using CSS `opacity` transition combined with managing the `display` property to fade an element in and out.
 * 4.  **Slide Animation:** Using CSS `max-height` transition combined with `overflow: hidden` and managing the `display` property to slide an element up and down.
 *
 * It utilizes React's `useState` hook to manage the visibility and animation state for each section independently. Event handlers trigger state updates to initiate the visibility changes and animations.
 *
 * @remarks
 * - This component is primarily for demonstration purposes.
 * - It assumes external CSS provides basic grid layout styles (`.grid-container`, `.grid-item`, `.content-container`, `.image-container`, `.button-container`).
 * - Animation transition styles (`.fade-img`, `.slide-img`) are included via an inline `<style>` tag within the component's render output. **This is not a standard or recommended practice for production applications.** In production, these styles should be managed externally using CSS files, CSS modules, or styled-components for better organization, maintainability, and separation of concerns.
 * - The animation duration is defined by the `animDuration` constant and applied to all animated transitions.
 * - Techniques involving `requestAnimationFrame` and `setTimeout` are used to correctly sequence state updates and CSS property changes (`display` vs. `opacity`/`max-height`) to ensure transitions are triggered effectively.
 *
 * @example
 * ```tsx
 * import Index from './Index'; // Assuming the component file is named Index.tsx or Index.jsx
 * import './app.css'; // Assuming this file contains the necessary grid layout CSS
 *
 * function App() {
 *   return (
 *     <div>
 *       <h1>React Animation Demos</h1>
 *       <Index />
 *     </div>
 *   );
 * }
 *
 * export default App;
 * ```
 */
```
