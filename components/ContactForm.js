'use client'

import { useState } from 'react'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    })
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        
        // Simulate form submission (replace with actual API call)
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        setIsSubmitting(false)
        setIsSubmitted(true)
        
        // Reset form
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''
        })
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            setIsSubmitted(false)
        }, 5000)
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="w-full mx-auto border border-slate-200 rounded-xl sm:rounded-2xl p-2 sm:p-4">

                <section className="">
                    <div className="text-center mb-4 sm:mb-8 border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 bg-white">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-2">Get In Touch</h2>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-900 mb-1">We want to Hear From You</h3>
                        <p className="text-slate-500 text-xs sm:text-sm">Contact us for support or inquiries</p>
                    </div>

                    <div className="mx-auto border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 bg-white">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 pb-3 sm:pb-4 border-b border-slate-200 mb-4 sm:mb-6">Contact Us</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            <div>
                                <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-slate-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
                                    placeholder="First Name"
                                />
                            </div>
                            <div>
                                <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-slate-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
                            <div>
                                <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-slate-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
                                    placeholder="Email"
                                />
                            </div>
                            <div>
                                <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full border border-slate-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
                                    placeholder="1(428)5363634"
                                />
                            </div>
                        </div>
                        <div className="mt-4 sm:mt-6 flex flex-col lg:flex-row gap-4 sm:gap-6 lg:items-end">
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-slate-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary h-28 sm:h-36 resize-none text-sm sm:text-base"
                                    placeholder="Message"
                                />
                            </div>

                            <div className="flex-shrink-0 p-0 sm:p-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full lg:w-auto px-8 sm:px-16 lg:px-24 py-2.5 sm:py-3 bg-gradient-to-r from-[#0099cc] via-[#0077b6] to-[#0044cc] text-white font-semibold rounded-lg hover:opacity-90 transition disabled:opacity-70 text-sm sm:text-base"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </form>

            {/* Toast Notification - Fixed Bottom Right */}
            {isSubmitted && (
                <div className="fixed bottom-4 right-4 left-4 sm:left-auto sm:bottom-6 sm:right-6 z-50 animate-toast-in">
                    <div className="bg-white rounded-lg shadow-2xl border border-slate-200 overflow-hidden sm:min-w-[320px]">
                        <div className="flex items-start gap-3 p-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div className="flex-1 pt-1">
                                <p className="text-sm font-semibold text-slate-900">Success!</p>
                                <p className="text-sm text-slate-500 mt-0.5">Your message has been sent successfully.</p>
                            </div>
                            <button 
                                onClick={() => setIsSubmitted(false)}
                                className="flex-shrink-0 text-slate-400 hover:text-slate-600 transition"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="h-1 bg-green-500 animate-toast-progress"></div>
                    </div>
                </div>
            )}
        </>
    )
}
