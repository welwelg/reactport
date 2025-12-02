import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const serviceID = "service_r3dt2b6";
    const templateID = "template_pe1vvqd";
    const publicKey = "Z5YF5lM_ySGXmhmyL";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: "Wel Tech Code",
      time: new Date().toLocaleString(),
    };

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: serviceID,
            template_id: templateID,
            user_id: publicKey, // specific field for Public Key
            template_params: templateParams,
          }),
        }
      );

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      } else {
        const errorData = await response.text();
        console.error("EmailJS Error:", errorData);
        setStatus("error");
        setTimeout(() => setStatus(""), 5000);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="relative flex items-center justify-center min-h-screen px-4 py-12 overflow-hidden bg-gray-950"
    >
      {/* Background Blob */}
      <div
        className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-orange-600/20 rounded-full blur-3xl"
      ></div>

      {/* Main Card */}
      <article className="relative z-10 flex flex-col w-full max-w-5xl overflow-hidden bg-gray-900 shadow-2xl rounded-2xl md:flex-row">
        {/* Image Side */}
        <aside className="relative w-full h-64 md:w-1/2 md:h-auto bg-gradient-to-br from-orange-500 to-orange-700">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <svg
                className="w-24 h-24 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <p className="text-xl font-bold">Get In Touch</p>
            </div>
          </div>
        </aside>

        {/* Contact Form Side */}
        <section className="w-full p-6 sm:p-8 md:p-12 md:w-1/2">
          <header className="mb-8">
            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Contact Us
            </h2>
            <p className="mt-2 text-sm text-gray-400 sm:text-base md:text-lg">
              We'd love to hear from you. Send us a message!
            </p>
          </header>

          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-300 sm:text-base"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 text-sm text-white transition-colors bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 sm:text-base"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-300 sm:text-base"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 text-sm text-white transition-colors bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 sm:text-base"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-300 sm:text-base"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full px-4 py-3 text-sm text-white transition-colors bg-gray-800 border border-gray-700 rounded-lg resize-none focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 sm:text-base"
              ></textarea>
            </div>

            {/* Status Messages */}
            {status && (
              <div
                className={`p-4 rounded-lg text-center font-medium transition-all ${
                  status === "success"
                    ? "bg-green-600/20 text-green-400 border border-green-600/30"
                    : status === "error"
                    ? "bg-red-600/20 text-red-400 border border-red-600/30"
                    : "bg-orange-600/20 text-orange-400 border border-orange-600/30"
                }`}
              >
                {status === "success" && (
                  <div className="flex items-center justify-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Message sent successfully!
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-center justify-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Failed to send. Please try again.
                  </div>
                )}
                {status === "sending" && (
                  <div className="flex items-center justify-center gap-2">
                    <svg
                      className="w-5 h-5 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending message...
                  </div>
                )}
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={status === "sending"}
              className="w-full px-6 py-3 text-lg font-semibold text-white transition-all transform bg-orange-600 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed sm:text-xl"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </div>
        </section>
      </article>
    </section>
  );
}
