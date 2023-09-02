import { INTRODUCTION_STRING } from './IntroductionBadge.constants';

export const IntroductionBadge = () => {
  return (
    <div className="p-3 bg-green rounded-2xl rounded-bl-none">
      <h5 className="text-white font-light">{INTRODUCTION_STRING}</h5>
    </div>
  );
};
