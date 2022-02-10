export default function Header() {
  return (
    <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
  <div
    className="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl"
  >
    Welcome to my site!
  </div>
  <video
    autoPlay
    loop
    muted
    className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
  >
    <source
      src="../public/videos/header.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
</header>
  );
}
