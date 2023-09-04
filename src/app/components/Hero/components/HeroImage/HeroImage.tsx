import Image from 'next/image';
import Justin from './images/justin.jpeg';

export const HeroImage = () => {
  return (
    <div className="w-[24rem] h-[24rem] rounded-full bg-gray-light flex items-center justify-center">
      <div className="w-[22rem] h-[22rem] rounded-full bg-gray flex items-center justify-center">
        <Image
          priority
          className="w-[20rem] h-[20rem] rounded-full object-cover"
          src={Justin}
          alt="Picture of Justin Singh"
        />
      </div>
    </div>
  );
};
