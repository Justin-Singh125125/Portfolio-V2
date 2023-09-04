import { INTRODUCTION_STRING } from './HeroBadge.constants';

export const HeroBadge = () => {
  return (
    <div className="inline-block p-3 bg-green rounded-2xl rounded-bl-none">
      <h5 className="text-white font-light">{INTRODUCTION_STRING}</h5>
    </div>
  );
};
