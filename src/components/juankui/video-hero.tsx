
export function VideoHero () {
  return (
    <section className="size-full">
      <video
        className="absolute inset-0 z-0 h-full w-full bg-slate-800 object-cover"
        src="/video/video-1.webm"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-b from-transparent to-[#1d293d]" />
      <div className="absolute inset-0 z-10 bg-slate-900 opacity-50"></div>
    </section>
  )
}