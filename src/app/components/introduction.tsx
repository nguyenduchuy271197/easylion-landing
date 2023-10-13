export default function Introduction() {
  return (
    <section>
      <div className="mx-auto max-w-screen-lg px-8">
        <div className="md:p-12 p-6 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg">
          <video autoPlay className="w-full rounded-lg" muted>
            <source src="/assets/likelion.mp4" type="video/mp4" />
            Sorry, your browser doesn&apos;t support videos.
          </video>
        </div>
      </div>
    </section>
  );
}
