import Image from 'next/image';
import Justin from './images/justin.jpeg';

export const HeroImage = () => {
  return (
    <div className="w-[19rem] h-[19rem] rounded-full bg-gray-light flex items-center justify-center">
      <div className="w-[17rem] h-[17rem] rounded-full bg-gray flex items-center justify-center">
        <Image
          priority
          className="w-[15rem] h-[15rem] rounded-full object-cover"
          src={Justin}
          alt="Picture of Justin Singh"
        />
      </div>
    </div>
  );
};
