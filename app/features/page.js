export default function Features() {
    return (
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* Header Section */}
            <div className="border border-slate-200 rounded-lg sm:rounded-xl p-2 sm:p-4">
                <div className="text-center py-4 sm:py-6 md:py-8 border border-slate-200 rounded-lg sm:rounded-xl mb-2 sm:mb-4 px-3 sm:px-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                    </div>
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2">Dashboard</h1>
                    <p className="text-slate-500 text-xs sm:text-sm max-w-lg mx-auto">
                        Revolutionize your service business with Sweep-It, the all-in-one job management tool designed for maximum efficiency.
                    </p>
                </div>

                {/* Feature Tabs/Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                    {/* Dashboard Tab */}
                    <div className="p-1 sm:p-2">
                        <div className="flex items-center gap-2 border-slate-200 bg-blue-100 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 mb-2 sm:mb-4">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                            <span className="font-semibold text-slate-900 text-sm sm:text-base">Dashboard</span>
                        </div>
                        <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-700 border border-slate-200 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6">
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Business Overview Cards</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Today's jobs count with completion status</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Total revenue (paid invoices) with VAT toggle</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Pending payments tracking</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Today's Schedule</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Live view of today's appointments</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Status indicators (scheduled, in progress, completed)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Quick access to customer details</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Payment status badges</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Upcoming Appointments</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Next 5 appointments preview</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Date, time, and customer information</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Direct links to calendar view</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Quick Action Cards</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Navigate to customers, schedule, and route planning</span>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Management Tab */}
                    <div className="p-1 sm:p-2">
                        <div className="flex items-center gap-2 border-slate-200 bg-blue-100 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 mb-2 sm:mb-4">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                            </svg>
                            <span className="font-semibold text-slate-900 text-sm sm:text-base">Customer Management</span>
                        </div>
                        <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-700 border border-slate-200 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6">
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Customer Database</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Full contact details (name, email, phone, address)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Property information (type, chimney type)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Service history tracking</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Last service date and next due date</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Custom notes and preferences</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Automated geocoding for UK addresses</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Customer Actions</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Create, edit, and archive customers</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Book appointments directly from customer profile</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Record payments</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>View customer service history</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>CSV import for bulk customer upload</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Archive System</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Soft delete (archive) customers</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Separate archived customers view</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Restore archived customers</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Permanent deletion option</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Archived customers excluded from appointments and reminders</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border border-slate-200 rounded-lg sm:rounded-xl p-2 sm:p-4">
                {/* Calendar & Scheduling Section */}
                <div className="text-center py-4 sm:py-6 md:py-8 border border-slate-200 rounded-lg sm:rounded-xl mb-2 sm:mb-4 px-3 sm:px-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2">Calendar & Scheduling</h1>
                    <p className="text-slate-500 text-xs sm:text-sm max-w-lg mx-auto">
                        Add paragraph text. Click "Edit Text" to update the font, size and more. To change and reuse text themes, go to Site Styles.
                    </p>
                </div>

                {/* Calendar & Scheduling Tabs/Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                    {/* Calendar & Scheduling Tab */}
                    <div className="p-1 sm:p-2">
                        <div className="flex items-center gap-2 border-slate-200 bg-blue-100 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 mb-2 sm:mb-4">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <span className="font-semibold text-slate-900 text-sm sm:text-base">Calendar & Scheduling</span>
                        </div>
                        <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-700 border border-slate-200 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6">
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Archived customers excluded from appointments and reminders</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Monthly view with appointment indicators</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Click any date to view appointments</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Visual appointment count badges</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Navigate between months</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Jump to today</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Appointment Management</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Create appointments with customer selection</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>7am-7pm time slots</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Service type selection (sweep, inspection, repair, installation)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Duration tracking</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Pricing and payment status</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Custom notes per appointment</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Status tracking (scheduled, confirmed, in progress, completed, cancelled)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Auto-fill customer details from database</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Daily View</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Side panel showing selected day's appointments</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Quick edit access</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Status and payment badges</span>
                            </li>
                        </ul>
                    </div>

                    {/* Daily Schedule Tab */}
                    <div className="p-1 sm:p-2">
                        <div className="flex items-center gap-2 border-slate-200 bg-blue-100 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 mb-2 sm:mb-4">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            <span className="font-semibold text-slate-900 text-sm sm:text-base">Daily Schedule</span>
                        </div>
                        <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-700 border border-slate-200 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6">
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Time-Based Schedule (7am-7pm)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Hour-by-hour view of appointments</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Empty slot indicators</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Color-coded status cards</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Appointment details at a glance</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Job Management</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Start job (mark as in progress)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Mark complete (automatically creates invoice and updates service dates)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>View customer location</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Quick access to customer profile</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Payment status display</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Date Navigation</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Previous/next day navigation</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Jump to today/tomorrow</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Date-specific schedule view</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            {/* Route Planner Section */}
            <div className="border border-slate-200 rounded-lg sm:rounded-xl p-2 sm:p-4">
                <div className="text-center py-4 sm:py-6 md:py-8 border border-slate-200 rounded-lg sm:rounded-xl mb-2 sm:mb-4 px-3 sm:px-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2">Route Planner</h1>
                    <p className="text-slate-500 text-xs sm:text-sm max-w-lg mx-auto">
                        Plan you daily routes with ease.
                    </p>
                </div>

                {/* Route Planner Tabs/Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                    {/* Route Planner Tab 1 */}
                    <div className="p-1 sm:p-2">
                        <div className="flex items-center gap-2 border-slate-200 bg-blue-100 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 mb-2 sm:mb-4">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-semibold text-slate-900 text-sm sm:text-base">Route Planner</span>
                        </div>
                        <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-700 border border-slate-200 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6">
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Route Optimisation</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Drag-and-drop appointment reordering</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Automatic route calculation</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Distance and time estimates</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Fuel cost calculator</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Fuel Cost Tracking</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Customisable fuel type (petrol/diesel)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Adjustable price per liter</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>MPG configuration</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Real-time cost calculation</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Litres used calculation</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Google Maps Integration</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Open Full Route" button for turn-by-turn navigation</span>
                            </li>
                        </ul>
                    </div>

                    {/* Route Planner Tab 2 */}
                    <div className="p-1 sm:p-2">
                        <div className="flex items-center gap-2 border-slate-200 bg-blue-100 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 mb-2 sm:mb-4">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-semibold text-slate-900 text-sm sm:text-base">Route Planner</span>
                        </div>
                        <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-700 border border-slate-200 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6">
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Individual location links</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>UK-specific routing</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Address-based navigation (not coordinates)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Opens directly in Google Maps app on mobile</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Route Statistics</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Total jobs for the day</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Total distance in miles</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Total travel time</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Estimated fuel cost</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Date Selection</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>View routes for any date</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Navigate between days</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Direct link from Daily Schedule</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Sweep Certification Section */}
            <div className="border border-slate-200 rounded-lg sm:rounded-xl p-2 sm:p-4">
                <div className="text-center py-4 sm:py-6 md:py-8 border border-slate-200 rounded-lg sm:rounded-xl mb-2 sm:mb-4 px-3 sm:px-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2">Sweep Certification</h1>
                    <p className="text-slate-500 text-xs sm:text-sm max-w-lg mx-auto">
                        Add paragraph text. Click "Edit Text" to update the font, size and more. To change and reuse text themes, go to Site Styles.
                    </p>
                </div>

                {/* Sweep Certification Tabs/Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                    {/* HETAS Certificates Tab 1 */}
                    <div className="p-1 sm:p-2">
                        <div className="flex items-center gap-2 border-slate-200 bg-blue-100 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 mb-2 sm:mb-4">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                            </svg>
                            <span className="font-semibold text-slate-900 text-xs sm:text-sm md:text-base">HETAS or any other Regulatory Bodies - Certificates</span>
                        </div>
                        <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-700 border border-slate-200 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6">
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Certificate Generation</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Unique certificate numbers</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Auto-fill customer details</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Service date tracking</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Appliance type (wood stove, open fire, gas, oil, multi-fuel, pellet, AGA)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Flue type documentation</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Fuel type tracking</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Previous sweep date</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Work Documentation</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Cleaning method description</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>CCTV inspection checkbox</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Smoke test checkbox</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Inspection details</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Issues found documentation</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Recommendations for maintenance</span>
                            </li>
                        </ul>
                    </div>

                    {/* HETAS Certificates Tab 2 */}
                    <div className="p-1 sm:p-2">
                        <div className="flex items-center gap-2 border-slate-200 bg-blue-100 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 mb-2 sm:mb-4">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                            </svg>
                            <span className="font-semibold text-slate-900 text-xs sm:text-sm md:text-base">HETAS or any other Regulatory Bodies - Certificates</span>
                        </div>
                        <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-700 border border-slate-200 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6">
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Recommendations for maintenance</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Additional notes</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Engineer Information</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Engineer name</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>HETAS/Reg Body - registration number</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Professional qualifications</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Certificate Management</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>View all certificates</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Email certificates to customers</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Track sent status</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Certificate number tracking</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Issue date and service date</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Company Branding</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Separate certificate logo upload</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Company details on certificates</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Reminders & Automations Section */}
            <div className="border border-slate-200 rounded-lg sm:rounded-xl p-2 sm:p-4">
                <div className="text-center py-4 sm:py-6 md:py-8 border border-slate-200 rounded-lg sm:rounded-xl mb-2 sm:mb-4 px-3 sm:px-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2">Reminders & Automations</h1>
                    <p className="text-slate-500 text-xs sm:text-sm max-w-lg mx-auto">
                        Set appointment reminders via SMS & Email, Payment Reminders, Send out Google Review Requests and Service Due Dates.
                    </p>
                </div>

                {/* Reminders & Automations Tabs/Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                    {/* Reminders & Automations Tab 1 */}
                    <div className="p-1 sm:p-2">
                        <div className="flex items-center gap-2 border-slate-200 bg-blue-100 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 mb-2 sm:mb-4">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <span className="font-semibold text-slate-900 text-sm sm:text-base">Reminders & Automations</span>
                        </div>
                        <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-700 border border-slate-200 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6">
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>24-Hour Appointment Reminders</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Automatic SMS reminders (if phone available)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Automatic email reminders (if email available)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Sent to customers with appointments tomorrow</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Tracks reminder sent status</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Manual trigger with one click</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Batch sending</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Google Review Requests</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Automatic requests for completed jobs</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Sent day after service completion</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Google Place ID integration</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Direct link to leave review</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Tracks request sent status</span>
                            </li>
                        </ul>
                    </div>

                    {/* Reminders & Automations Tab 2 */}
                    <div className="p-1 sm:p-2">
                        <div className="flex items-center gap-2 border-slate-200 bg-blue-100 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 mb-2 sm:mb-4">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <span className="font-semibold text-slate-900 text-sm sm:text-base">Reminders & Automations</span>
                        </div>
                        <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-700 border border-slate-200 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6">
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Payment Reminders</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Automatic reminders for overdue invoices</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Email notifications with payment links</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Track reminder sent dates</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>One-click batch sending</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Stripe payment integration</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Service Due Reminders (Separate Page)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Identify customers due for service</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Based on service frequency (6 months/12 months)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Email reminders with service details</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Track last reminder sent</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Book appointments directly from reminder</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Recently sent reminders view (last 30 days)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Simple Billing Solution Section */}
            <div className="border border-slate-200 rounded-lg sm:rounded-xl p-2 sm:p-4">
                <div className="text-center py-4 sm:py-6 md:py-8 border border-slate-200 rounded-lg sm:rounded-xl mb-2 sm:mb-4 px-3 sm:px-4">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2">Simple Billing Solution</h1>
                    <p className="text-slate-500 text-xs sm:text-sm max-w-lg mx-auto">
                        Create and manage invoices effortlessly with Sweep-It's streamlined billing features.
                    </p>
                </div>

                {/* Simple Billing Solution Cards - Top Row */}
            
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 font-semibold mb-3 sm:mb-4 md:mb-6">
                    {/* Automate Billing Card */}
                    <div className="rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 bg-blue-100">
                        <div className="flex items-center gap-2 mb-3 sm:mb-4">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center">
                                {/* <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg> */}

                                <div className="flex items-center justify-center border border-slate-500 rounded-lg sm:rounded-xl p-1.5 sm:p-2">
                                    <img src="/streamline.svg" alt="profit icon" className="text-primary w-4 h-4 sm:w-auto sm:h-auto" />
                                </div>
                            </div>
                            <span className="font-semibold text-slate-900 text-sm sm:text-base">Automate Billing</span>
                        </div>
                        <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-600">
                            <li>Invoice Generation</li>
                            <li>Auto-created when job marked complete</li>
                            <li>Unique invoice numbers</li>
                            <li>Customer details inclusion</li>
                            <li>Line items breakdown</li>
                            <li>VAT calculation (20% UK standard rate)</li>
                            <li>Subtotal and total with VAT</li>
                            <li>Issue date and due date (30 days default)</li>
                        </ul>
                    </div>

                    {/* Invoice Management Card */}
                    <div className="rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 bg-blue-100">
                        <div className="flex items-center gap-2 mb-3 sm:mb-4">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center">
                                {/* <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                            </svg> */}

                                <div className="flex items-center justify-center border border-slate-500 rounded-lg sm:rounded-xl p-1.5 sm:p-2">
                                    <img src="/icon-park.svg" alt="profit icon" className="text-primary w-4 h-4 sm:w-auto sm:h-auto" />
                                </div>
                            </div>
                            <span className="font-semibold text-slate-900 text-sm sm:text-base">Invoice Management</span>
                        </div>
                        <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-600">
                            <li>List all invoices</li>
                            <li>Filter by status (draft, sent, paid, overdue, cancelled)</li>
                            <li>View invoices</li>
                            <li>Email invoices to customers</li>
                            <li>Track sent date</li>
                            <li>Payment status tracking</li>
                        </ul>
                    </div>

                    {/* Invoice Features Card */}
                    <div className="rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 bg-blue-100">
                        <div className="flex items-center gap-2 mb-3 sm:mb-4">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center">
                                {/* <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                            </svg> */}

                                <div className="flex items-center justify-center border border-slate-500 rounded-lg sm:rounded-xl p-1.5 sm:p-2">
                                    <img src="/uil_process.svg" alt="profit icon" className="text-primary w-4 h-4 sm:w-auto sm:h-auto" />
                                </div>
                            </div>
                            <span className="font-semibold text-slate-900 text-sm sm:text-base">Invoice Features</span>
                        </div>
                        <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-600">
                            <li>Company logo on invoices</li>
                            <li>Professional layout</li>
                            <li>Company details (name, address, VAT number)</li>
                            <li>Bank details for BACS payments</li>
                            <li>Payment methods (cash, cheque, card, BACS, Stripe)</li>
                            <li>Stripe online payment integration</li>
                            <li>Email delivery with view link</li>
                        </ul>
                    </div>
                </div>

                {/* Simple Billing Solution Cards - Bottom Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 font-semibold">
                    {/* Accountant Reporting Card */}
                    <div className="rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 bg-blue-100">
                        <div className="flex items-center gap-2 mb-3 sm:mb-4">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center">
                                {/* <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                            </svg> */}
                                <div className="flex items-center justify-center border border-slate-500 rounded-lg sm:rounded-xl p-1.5 sm:p-2">
                                    <img src="/streamline.svg" alt="profit icon" className="text-primary w-4 h-4 sm:w-auto sm:h-auto" />
                                </div>
                            </div>
                            <span className="font-semibold text-slate-900 text-sm sm:text-base">Accountant Reporting</span>
                        </div>
                        <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-600">
                            <li>Send invoice reports to accountant</li>
                            <li>Date range selection</li>
                            <li>Email summary with all invoices</li>
                            <li>Detailed breakdown</li>
                        </ul>
                    </div>

                    {/* VAT Toggle Card */}
                    <div className="rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 bg-blue-100">
                        <div className="flex items-center gap-2 mb-3 sm:mb-4">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center">
                                {/* <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg> */}

                                <div className="flex items-center justify-center border border-slate-500 rounded-lg sm:rounded-xl p-1.5 sm:p-2">
                                    <img src="/icon-park.svg" alt="profit icon" className="text-primary w-4 h-4 sm:w-auto sm:h-auto" />
                                </div>
                            </div>
                            <span className="font-semibold text-slate-900 text-sm sm:text-base">VAT Toggle</span>
                        </div>
                        <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-600">
                            <li>Global VAT display toggle</li>
                            <li>Show/hide VAT in all prices</li>
                            <li>Persistent across pages</li>
                            <li>Toggle in sidebar for easy access</li>
                        </ul>
                    </div>

                    {/* Settings Card */}
                    <div className="rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 bg-blue-100">
                        <div className="flex items-center gap-2 mb-3 sm:mb-4">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center">
                                {/* <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg> */}

                                <div className="flex items-center justify-center border border-slate-500 rounded-lg sm:rounded-xl p-1.5 sm:p-2">
                                    <img src="/uil_process.svg" alt="profit icon" className="text-primary w-4 h-4 sm:w-auto sm:h-auto" />
                                </div>
                            </div>
                            <span className="font-semibold text-slate-900 text-sm sm:text-base">Settings</span>
                        </div>
                        <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-600">
                            <li>Company Profile</li>
                            <li>Company name, address, contact details</li>
                            <li>Website URL</li>
                            <li>VAT number</li>
                            <li>Currency selection (GBP, USD, EUR)</li>
                            <li>Logo Management</li>
                            <li>Separate invoice logo upload</li>
                            <li className="flex items-center justify-between">
                                <span>Separate certificate logo upload...</span>
                                <span className="text-primary font-medium cursor-pointer">See More</span>
                            </li>
                        </ul>
                    </div>
                
                </div>
            </div>
        </div>
    )
}
