import { useState, type ChangeEvent, type FormEvent } from "react";
function FormSection() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((pervData) => ({
      ...pervData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form data submited:", formData);
  };
  return (
    <section className="ContactForm m-20">
      <div className="container">
        <div className="grid grid-cols-2 gap-10">
          <div className="form_section">
            <form onSubmit={handleSubmit}>
              <div className="grid pb-5">
                <label
                  htmlFor="name"
                  className="text-left font-bold text-2xl pb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="border-2 border-[#FFF]-100 p-1 rounded-2xl"
                />
              </div>
              <div className="grid pb-5">
                <label
                  htmlFor="email"
                  className="text-left font-bold text-2xl pb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-2 border-[#FFF]-100 p-1 rounded-2xl"
                />
              </div>
              <div className="grid pb-5">
                <label
                  htmlFor="email"
                  className="text-left font-bold text-2xl pb-2"
                >
                  Phone Number
                </label>
                <input
                  type="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-2 border-[#FFF]-100 p-1 rounded-2xl"
                />
              </div>
              <div className="grid pb-10">
                <label
                  htmlFor="text"
                  className="text-left font-bold text-2xl pb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="border-2 border-[#FFF]-100 p-1 rounded-2xl h-32"
                />
                <button type="submit" className="mt-5">
                  Send Enquire
                </button>
              </div>
            </form>
          </div>
          <div className="addRess_section p-20">
            <div className="cars font-bold text-left">
              <h2>Email: test@gmail.com</h2>
              <h2>Phone: +(119)-90889</h2>
              <h2>Address: St,Josh st, uk</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormSection;
