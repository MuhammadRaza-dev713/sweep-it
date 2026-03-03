export default function Hero(){
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-deep">A single platform to organise, track, and grow your business with</h1>
        <div className="mt-4 text-primary font-semibold text-lg">Sweep-It</div>
        <p className="mt-6 text-slate-600">Our platform simplifies daily operations, allowing service providers to manage jobs efficiently, schedule appointments, and handle invoicing seamlessly.</p>
        <div className="mt-6 flex gap-3">
          <a className="px-5 py-3 bg-primary text-white rounded-md">Get Started</a>
          <a className="px-5 py-3 border rounded-md">Learn More</a>
        </div>
      </div>
      <div className="mx-auto">
        <div className="w-64 h-128 bg-gradient-to-b from-white to-slate-100 border rounded-xl shadow-lg p-4 flex items-center justify-center">
          <img src="/phone.png" alt="app mockup" className="w-40" />
        </div>
      </div>
    </section>
  )
}
