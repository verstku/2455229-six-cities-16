import type { JSX } from 'react';
import { Logo } from '@components/logo';

function Footer(): JSX.Element {
  return (
    <footer className="footer container">
      <Logo size="small" prefix="footer" />
    </footer>
  );
}

export { Footer };
