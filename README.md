# use-input-select

A React hook to automatically select the contents of an input or textarea when it mounts.

## Installation

```bash
npm install use-input-select
```

## Usage

```tsx
import React, { useRef } from 'react';
import { useInputSelectOnMount } from 'use-input-select';

function MyComponent() {
  const inputRef = useRef<HTMLInputElement>(null);
  useInputSelectOnMount(inputRef, {
    delay: 100, // ms (optional)
    scrollIntoView: true, // (optional)
    caretToEnd: false // (optional)
  });

  return (
    <input
      ref={inputRef}
      type="text"
      defaultValue="Edit me — this will be selected on mount!"
    />
  );
}
```

## API

### `useInputSelectOnMount(ref, options?)`

- `ref`: `RefObject<HTMLInputElement | HTMLTextAreaElement>` — React ref to your input or textarea
- `options` (optional):
  - `delay` (`number`): Delay in milliseconds before selecting (default: `0`)
  - `scrollIntoView` (`boolean`): Scroll the input into view (default: `false`)
  - `caretToEnd` (`boolean`): Place caret at end instead of selecting all (default: `false`)

## License

MIT
