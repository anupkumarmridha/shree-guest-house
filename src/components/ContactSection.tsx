const ContactSection = () => {
    return (
      <div id="contact" className="mt-10 text-center bg-gray-100 p-6">
      <h2 className="text-2xl font-bold">📍 Find Us Here</h2>
      <p className="text-gray-600">
        No 23, Appavoo Gramani Street, Ellis Rd, Border Thottam, Padupakkam,
        Triplicane, Chennai, Tamil Nadu 600002
      </p>
      <p className="text-gray-600 mt-4">
        📞 Contact Number:{" "}
        <a href="tel:+919876543210" className="text-blue-500 hover:underline">
          +91 98765 43210
        </a>
      </p>
      <p className="text-gray-600">
        📧 Email:{" "}
        <a
          href="mailto:info@shreeguesthouse.com"
          className="text-blue-500 hover:underline"
        >
          info@shreeguesthouse.com
        </a>
      </p>
      <iframe 
          title="Hotel Location"
          className="mt-4 w-full h-64 rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.6312352945987!2d80.27061116956065!3d13.065882699203653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526757541f764d%3A0xe713bd461e2b6471!2sSHREE%20GUEST%20HOUSE!5e0!3m2!1sen!2sin!4v1739444208757!5m2!1sen!2sin" 
          allowFullScreen
          loading="lazy">
        </iframe>
      </div>
    );
  };
  
  export default ContactSection;
  