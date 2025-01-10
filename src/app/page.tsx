import Image from 'next/image';
import Header from './components/Header';
import { InformationCircleIcon, PlayIcon } from '@heroicons/react/24/outline';
import { Banner } from './components/Banner';

export default function Home() {
  return (
    <div className='relative h-screen overflow-hidden bg-gradient-to-b lg:h-[140vh]'>
      <Header />
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <Banner />
      </main>
    </div>
  );
}
