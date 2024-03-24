
export default function Home() {
  return (
    <main>
      {/* <video
        className='w-full h-full object-cover overflow-hidden'
        loop
        muted
        autoPlay
        src={require('/public/videos/dubai_banner.webm')} /> */}
      <video className='w-full' loop autoPlay muted>
        <source src='/videos/colors_desktop.mp4'/>
      </video>
    </main>
  );
}
