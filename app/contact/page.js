const ContactPage = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange text-white py-2 px-4 rounded-md hover:bg-orange/90 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-semibold mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-4">
                We'd love to hear from you. Please reach out to us using any of the following methods:
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-orange mb-2">Address</h3>
                <p className="text-gray-600">
                  123 Carpet Street<br />
                  New York, NY 10001<br />
                  United States
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-orange mb-2">Phone</h3>
                <p className="text-gray-600">
                  Sales: (555) 123-4567<br />
                  Support: (555) 987-6543
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-orange mb-2">Email</h3>
                <p className="text-gray-600">
                  Sales: sales@persiancarpets.com<br />
                  Support: support@persiancarpets.com
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-orange mb-2">Business Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 