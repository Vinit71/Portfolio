import { useState } from "react";
import toast from "react-hot-toast";
function Contact() {

  const [formData2, setFormData2] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData2({ ...formData2, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { name, email, message } = formData2;
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    const formData = new FormData(event.target);

    formData.append("access_key", "");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success("I have recieved you msg!", {position: "top-right"})
      event.target.reset();
    } else {
      toast.error("Currently we are not accepting mails through form. Please do direct mail.", {position: "top-right"})
      console.log("Error", data);
    }
  };

  return (
    <div id="contact" className="flex flex-col items-center justify-center  lg:gap-[75px] my-10 lg:my-20 lg:mx-[170px]">
      <div className="flex flex-col items-center px-[25px] mb-[35px] lg:mb-0 lg:text-center">
        <h1 className="nerko-one-regular text-[32px] font-bold sm:text-2xl md:text-6xl lg:text-6xl">
          Contact me
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row justify-center text-center gap-[50px] lg:gap-[150px]">
        <div className="flex flex-col lg:items-start lg:gap-[30px]">
          <h1 className="lg:text-left text-[31px] font-semibold bg-[#ffc300] bg-clip-text text-transparent whitespace-nowrap lg:mt-[0.5rem] lg:text-[55px]">
          let&apos;s talk
          </h1>

          <p className="text-white text-[22px] lg:leading-[35px] lg:text-left max-w-full">
          Feel free to connect with me for any queries or if you need assistance.
          I&apos;m always open to collaboration opportunities and look forward to exploring how we can work together
          </p>

          <div className="mt-3 text-white text-[20px] flex justify-center  gap-[30px] lg:gap-[50px]">
            <a href="">vinitkumarg22@gmail.com</a>
            <a href="">750*****13</a>
          </div>
        </div>


    <form onSubmit={onSubmit} className="flex flex-col items-center sm:items-start gap-[30px] mx-auto sm:mx-0 w-21 sm:w-auto">
        <div className="w-full sm:w-auto">
          <label className="flex text-start block text-white text-[24px] font-normal mb-2" htmlFor="name">Name</label>
          <input 
            type="text" 
            name='name' 
            id='name' 
            placeholder='Enter your name' 
            value={formData2.name}
            onChange={handleChange}
            className="border-none w-[300px] sm:w-[400px] md:w-[500px] h-[50px] pl-[20px] rounded-[2px] bg-gray-300 text-blue-800 text-[20px]" 
          />
        </div>

        <div className="w-full sm:w-auto">
          <label className="flex text-start block text-white text-[24px] font-normal mb-2" htmlFor="email">Email</label>
          <input 
            type="email" 
            name='email' 
            id='email' 
            placeholder='Enter your email' 
            value={formData2.email}
            onChange={handleChange}
            className="border-none w-[300px] sm:w-[400px] md:w-[500px] h-[50px] pl-[20px] rounded-[2px] bg-gray-300 text-blue-800 text-[20px]" 
          />
        </div>

        <div className="w-full sm:w-auto">
          <label className="flex text-start block text-white text-[24px] font-normal mb-2" htmlFor="message">Your Message</label>
          <textarea 
            name="message" 
            id='message' 
            rows="10" 
            placeholder='Enter your message'
            value={formData2.message}
            onChange={handleChange}
            className="w-[300px] sm:w-[400px] md:w-[500px] h-[100px] border-none p-[25px] rounded-[2px] bg-gray-300 text-black text-[20px]" 
          ></textarea>
        </div>

        <button 
          type='submit' 
          className="border-none rounded-full bg-[#ffc300] text-[#000814] text-[22px] font-semibold tracking-[1.5px] py-[10px] px-[25px] mb-[50px] cursor-pointer transition-transform transform hover:scale-[1.04]"
        >
          Submit
        </button>
    </form>

      </div>
    </div>
  );
}

export default Contact;
