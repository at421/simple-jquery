import React from 'react';

```typescript
/**
 * @remarks
 * PageHeader is a simple React functional component that renders a static header
 * for a page. It typically displays the main title of the page.
 *
 * This component does not accept any props.
 *
 * @example
 * ```tsx
 * import React from 'react';
 * import PageHeader from './PageHeader';
 *
 * const App = () => {
 *   return (
 *     <div>
 *       <PageHeader />
 *       <main>
 *         {/!* Your page content here *!/}
 *         <p>Welcome to the jQuery examples page.</p>
 *       </main>
 *     </div>
 *   );
 * };
 *
 * export default App;
 * ```
 *
 * @returns A React element representing the page header.
 */
```const PageHeader = () => {
  return (
    <header>
      <h1>jQuery Examples</h1>
    </header>
  );
};

export default PageHeader;
