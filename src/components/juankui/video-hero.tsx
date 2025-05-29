'use client'

export function VideoHero () {
  return (
    <section className="size-full">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9InN2ZyIgxmlnsPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjMjIyIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjxwYXRoIGQ9Ik0zNiAzNGg0djFoLTR2LTF6bTAtMmgxdjRoLTF2LTR6bTItMmgxdjFoLTF2LTF6bS0yIDJoMXYxaC0xdi0xem0tMi0yaDF2MWgtMXYtMXptMi0yaDF2MWgtMVYyOGV6bTIgMEgzNnZ2MWgtMXYtMXptMCAyaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
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