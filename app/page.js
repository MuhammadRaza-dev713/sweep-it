import Link from 'next/link'
import FeatureCard from '../components/FeatureCard'
import ContactForm from '../components/ContactForm'

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="grid grid-cols-1 lg:grid-cols-2 items-center border border-slate-600 rounded-2xl p-4 sm:p-6 lg:p-10 gap-6 lg:gap-0">
                <div className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
                        A single platform to organise, track, and grow your business with
                    </h1>
                    <div className="mt-4 flex justify-center lg:justify-start">
                        <img src="/logo.png" alt="Sweep-It" className="w-32 sm:w-40 h-auto" />
                    </div>
                </div>
                <div className="flex justify-center order-1 lg:order-2">
                    <img src="/mobile-pic.svg" alt="Sweep-It App" className="w-48 sm:w-56 md:w-64 h-auto object-contain" />
                </div>
            </section>

            {/* All-in-One Job Management Section */}
            <section className="text-center border border-slate-200 rounded-2xl p-2 sm:p-3 lg:p-4 mt-6 sm:mt-10">
                <div className='border border-slate-200 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-10'>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">All-in-One Job<br />Management</h2>
                    <p className="mt-3 sm:mt-4 text-slate-600 max-w-2xl mx-auto text-xs sm:text-sm px-2">
                        Our platform simplifies daily operations, allowing service providers to manage jobs efficiently, schedule appointments, and handle invoicing seamlessly
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="rounded-lg p-4 text-left border border-slate-200" style={{ backgroundColor: '#EDF4FD' }}>
                        <div className="flex items-center gap-3 ">
                            <div className=" flex items-center justify-center border border-slate-500 rounded-xl p-2">
                                <img src="/streamline.svg" alt="profit icon" className=" text-primary" />
                            </div>
                            <h3 className="font-semibold text-slate-900 text-base">Profitability</h3>
                        </div>
                        <p className="mt-2 text-[16px] font-semibold text-slate-500 leading-relaxed">Our all-in-one app helps tradespeople save time, cut admin costs, and stay organised — from scheduling and invoicing to daily planning. Work more efficiently, earn more, and keep every job on track.</p>
                    </div>

                    <div className="rounded-lg p-4 text-left border border-slate-200" style={{ backgroundColor: '#EDF4FD' }}>
                        <div className="flex items-center gap-3 ">
                            <div className=" flex items-center justify-center border border-slate-500 rounded-xl p-2">
                                <img src="/icon-park.svg" alt="profit icon" className=" text-primary" />
                            </div>
                            <h3 className="font-semibold text-slate-900 text-base">Simplicity</h3>
                        </div>
                        <p className="mt-2 text-[16px] font-semibold text-slate-500 leading-relaxed">You don’t need complicated systems — you need something that works.
                            Our simple, smart app helps you stay organised, manage jobs, and save hours every week.</p>
                    </div>

                    <div className="rounded-lg p-4 text-left border border-slate-200" style={{ backgroundColor: '#EDF4FD' }}>
                        <div className="flex items-center gap-3 ">
                            <div className=" flex items-center justify-center border border-slate-500 rounded-xl p-2">
                                <img src="/uil_process.svg" alt="profit icon" className=" text-primary" />
                            </div>
                            <h3 className="font-semibold text-slate-900 text-base">Integration</h3>
                        </div>
                        <p className="mt-2 text-[16px] font-semibold text-slate-500 leading-relaxed">Integration made effortless.
                            We bring all your tools together in one connected platform — syncing your jobs, clients, and finances for a faster, smarter way to work.</p>
                    </div>

                    <div className="rounded-lg p-4 text-left border border-slate-200" style={{ backgroundColor: '#EDF4FD' }}>
                        <div className="flex items-center gap-3 ">
                            <div className=" flex items-center justify-center border border-slate-500 rounded-xl p-2">
                                <img src="/fluent_person.svg" alt="support icon" className=" text-primary" />
                            </div>
                            <h3 className="font-semibold text-slate-900 text-base">Support</h3>
                        </div>
                        <p className="mt-2 text-[16px] font-semibold text-slate-500 leading-relaxed">Reliable support whenever you need it.
                            Our team is here to help you get the most out of the app — from setup to everyday use. Focus on your jobs, while we make sure everything runs smoothly.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-6 sm:py-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">Testimonials</h2>
                <p className="text-slate-500 mb-6 sm:mb-8 text-sm sm:text-base">What Our Clients Say</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                    <div className="bg-white border border-slate-200 rounded-lg p-4 sm:p-6">
                        <div className="flex items-center gap-3 mb-3 sm:mb-4">
                            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-primary rounded flex items-center justify-center text-white font-bold text-sm">
                                <img src="/fluent_person-icon.svg" alt="Person Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <h3 className="font-bold text-slate-900 text-sm sm:text-base">John Mark</h3>
                        </div>
                        <p className="text-slate-600 text-xs sm:text-sm font-semibold">"The app is incredibly intuitive and easy to use. It saves me more hours every week!"</p>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-lg p-4 sm:p-6">
                        <div className="flex items-center gap-3 mb-3 sm:mb-4">
                            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-primary rounded flex items-center justify-center text-white font-bold text-sm">
                                <img src="/fluent_person-icon.svg" alt="Person Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <h3 className="font-bold text-slate-900 text-sm sm:text-base">John Mark</h3>
                        </div>
                        <p className="text-slate-600 text-xs sm:text-sm font-semibold">"The app is incredibly intuitive and easy to use. It saves me more hours every week!"</p>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-lg p-4 sm:p-6 sm:col-span-2 md:col-span-1">
                        <div className="flex items-center gap-3 mb-3 sm:mb-4">
                            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-primary rounded flex items-center justify-center text-white font-bold text-sm">
                                <img src="/fluent_person-icon.svg" alt="Person Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <h3 className="font-bold text-slate-900 text-sm sm:text-base">John Mark</h3>
                        </div>
                        <p className="text-slate-600 text-xs sm:text-sm font-semibold">"The app is incredibly intuitive and easy to use. It saves me more hours every week!"</p>
                    </div>
                </div>
            </section>

            {/* CTA Banner Section */}
            <section className="bg-gradient-to-r from-[#0044cc] via-[#0077b6] to-[#0099cc] rounded-2xl p-6 sm:p-8 md:p-12 text-center text-white">
                <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight">Boost Productivity For Your Business.</h2>
                <p className="mt-2 sm:mt-3 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">Now Available With Either £, € or $</p>
                <p className="mt-1 sm:mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl opacity-90 font-semibold">Options.</p>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl opacity-90">Boost your chimney sweeping business efficiently</p>
                <Link href="/contact" className="mt-4 sm:mt-6 px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-primary font-semibold rounded-md hover:bg-slate-100 transition items-center gap-2 inline-flex text-sm sm:text-base">
                    <img src="/mingcute_group.svg" alt="Contact Us" className="w-4 h-4 sm:w-5 sm:h-5 inline" /> Contact Us
                </Link>
            </section>

            {/* Additional Features Section */}
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-10 p-3 sm:p-4 border border-slate-200 rounded-lg">
                <div className="card" style={{ backgroundColor: '#EDF4FD' }}>
                   <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 border border-slate-400 rounded flex items-center justify-center text-white font-bold text-sm">
                            <img src="/streamline.svg" alt="Person Icon" className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <h3 className="font-bold text-slate-900 text-sm sm:text-base">Increase Profits</h3>
                    </div>
                    <p className="font-semibold text-xs sm:text-sm text-slate-500">Experience seamless integration with your current tools and systems.</p>
                </div>

                <div className="card" style={{ backgroundColor: '#EDF4FD' }}>
                     <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 border border-slate-400 rounded flex items-center justify-center text-white font-bold text-sm">
                            <img src="/icon-park.svg" alt="Person Icon" className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <h3 className="font-bold text-slate-900 text-sm sm:text-base">Improve Workflow</h3>
                    </div>
                    <p className="font-semibold text-xs sm:text-sm text-slate-500">Our user-friendly interface makes onboarding a breeze.</p>
                </div>

                <div className="card sm:col-span-2 md:col-span-1" style={{ backgroundColor: '#EDF4FD' }}>
                   <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 border border-slate-400 rounded flex items-center justify-center text-white font-bold text-sm">
                            <img src="/uil_process.svg" alt="Person Icon" className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <h3 className="font-bold text-slate-900 text-sm sm:text-base">Enhance Management</h3>
                    </div>
                    <p className="font-semibold text-xs sm:text-sm text-slate-500">Receive ongoing support and updates to keep your operations running smoothly.</p>
                </div>
            </section>

            {/* Get In Touch Section */}
            <div className='mt-6 sm:mt-10'>
                <ContactForm />
            </div>
              
        </>
    )
}
