export default function Footer(){
  return (
    <footer className="bg-gradient-to-r from-[#0044cc] via-[#0077b6] to-[#0099cc] text-white mt-8 sm:mt-12 md:mt-16 rounded-2xl sm:rounded-3xl mx-2 sm:mx-0">
      <div className="max-w-5xl mx-auto py-6 sm:py-8 px-4 sm:px-6">
        {/* Top Row: Logo and Social Icons */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 sm:gap-0 mb-6">
          {/* Logo Box */}
          <div className="bg-white rounded-xl px-2 py-1 text-slate-900 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <img src="/logo.png" alt="Sweep-It" className="w-20 sm:w-24" />
              {/* <span className="font-bold text-primary">Sweep-It</span> */}
            </div>
            <div className="text-xs text-slate-600 mt-1 font-semibold">
              All-In-One Platform for<br />Chimney Sweeps
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-2 sm:gap-3">

            <div className="p-2 sm:p-3 bg-white/20 rounded-xl sm:rounded-2xl">
            <a href="#" className="">
              <img src="/instagram.svg" alt="Instagram" className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            </div>
            
            <div className="p-2 sm:p-3 bg-white/20 rounded-xl sm:rounded-2xl">
            <a href="#" className="">
                <img src="/facebook.svg" alt="Facebook" className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            </div>
          </div>
        </div>

        {/* Contact Info Rows */}
        <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-center">
            <span className="text-xs sm:text-sm font-semibold">Email: sale@sweep-it.co.uk</span>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-center">
            <span className="text-xs sm:text-sm font-semibold">Call: 015027100337</span>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-center">
            <span className="text-xs sm:text-sm font-semibold">Mobile: 077333473698</span>
          </div>
        </div>

        {/* App Store Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <a href="#" className="bg-black rounded-lg px-3 sm:px-4 py-2 flex items-center justify-center gap-2 hover:opacity-90 transition border border-white-200">
            <svg className="w-8 sm:w-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs sm:text-sm opacity-80">Download on the</div>
              <div className="text-lg sm:text-2xl font-semibold">App Store</div>
            </div>
          </a>
          <a href="#" className="bg-black rounded-lg px-3 sm:px-4 py-2 flex items-center justify-center gap-2 hover:opacity-90 transition border border-white-200">
            <svg className="w-8 sm:w-12" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M3.609 1.814L13.792 12 3.61 22.186a2.16 2.16 0 01-.422-.972V2.786c.063-.357.21-.682.422-.972z"/>
              <path fill="#FBBC04" d="M17.558 8.234L3.609 1.814l10.183 10.183 3.766-3.763z"/>
              <path fill="#4285F4" d="M3.609 22.186l13.949-6.42-3.766-3.763L3.609 22.186z"/>
              <path fill="#34A853" d="M21.393 12c0 .653-.252 1.257-.706 1.712l-3.129 1.522-3.766-3.231 3.766-3.766 3.129 1.522c.454.454.706 1.058.706 1.711v.53z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs sm:text-sm opacity-80">GET IT ON</div>
              <div className="text-lg sm:text-2xl font-semibold">Google Play</div>
            </div>
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm gap-2 sm:gap-0">
          <a href="#" className="hover:opacity-80 order-2 md:order-1">Terms of Service</a>
          <div className="text-center order-1 md:order-2">
            <div>© 2026 Sweep-It. All rights reserved.</div>
            <div className="text-[10px] sm:text-xs opacity-80">Designed & Developed by AlnairTech</div>
          </div>
          <a href="#" className="hover:opacity-80 order-3">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}
