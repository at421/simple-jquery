import React from 'react';

```typescript
/**
 * A simple header component for the application.
 *
 * This functional component renders a `<header>` element containing an `<h1>` tag
 * with the title "jQuery Examples". It does not accept any props.
 *
 * @example
 * ```tsx
 * import Header from './Header';
 *
 * function App() {
 *   return (
 *     <div>
 *       <Header />
 *       <main>
 *         {/* Your main content here */}
 *       </main>
 *     </div>
 *   );
 * }
 * ```
 */
```const Header = () => {
  return (
    <header>
      <h1>jQuery Examples</h1>
    </header>
  );
};

export default Header;
