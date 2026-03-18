import { useState } from "react";

function FormSection() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Email sent successfully!");
        setFormData({ username: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Server error. Is the backend running?");
    }
  };

  return (
    <section className="ContactForm m-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="form_section">
            <form onSubmit={handleSubmit}>
              <div className="grid pb-5">
                <label htmlFor="username" className="text-left font-bold text-2xl pb-2">Name</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="border-2 border-gray-200 p-2 rounded-2xl"
                  required
                />
              </div>

              <div className="grid pb-5">
                <label htmlFor="email" className="text-left font-bold text-2xl pb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-2 border-gray-200 p-2 rounded-2xl"
                  required
                />
              </div>

              <div className="grid pb-5">
                <label htmlFor="phone" className="text-left font-bold text-2xl pb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-2 border-gray-200 p-2 rounded-2xl"
                />
              </div>

              <div className="grid pb-10">
                <label htmlFor="message" className="text-left font-bold text-2xl pb-2">Message</label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="border-2 border-gray-200 p-2 rounded-2xl h-32"
                />
                <button type="submit" className="mt-5 bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition">
                  Send Inquiry
                </button>
                {status && <p className="mt-3 font-semibold">{status}</p>}
              </div>
            </form>
          </div>

          <div className="address_section p-10 bg-gray-50 rounded-2xl">
            <div className="cars font-bold text-left space-y-4">
              <h2 className="text-xl">Email: test@gmail.com</h2>
              <h2 className="text-xl">Phone: +(119)-90889</h2>
              <h2 className="text-xl">Address: St, Josh St, UK</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormSection;