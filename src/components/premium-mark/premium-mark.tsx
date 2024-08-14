import { JSX } from 'react';

type PrefixForPremiumMark = 'place-card' | 'offer';

type PremiumMarkProps = {
  prefix: PrefixForPremiumMark;
};

function PremiumMark({ prefix }: PremiumMarkProps): JSX.Element {
  return (
    <div className={`${prefix}__mark`}>
      <span>Premium</span>
    </div>
  );
}

export { PremiumMark };
