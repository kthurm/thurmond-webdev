import { HiArrowRight } from "react-icons/hi";

const Contact = () => {
  return (
    <div
      name="contact"
      className="max-w-[800px] text-light px-5 lg:px-[120px] xl:px-24"
    >
      <h1 className="text-3xl md:text-5xl py-2">Contact</h1>
      <p className="text-xl md:text-2xl opacity-40">
        Submit the form below or shoot me an email @ kthurmond.webdev@gmail.com.
      </p>
      <form
        action="https://getform.io/f/cea554fd-70f8-4754-abf5-b1e248396b47"
        method="POST"
        className="flex flex-col space-y-2 pt-5 text-white/80"
      >
        <input
          className="border-light border bg-transparent rounded p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="border-light border bg-transparent rounded p-2"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="border-light border bg-transparent rounded p-2"
          rows="10"
          placeholder="Message"
          name="message"
        />
        <div className="py-3">
          <button className="ml-auto w-fit flex group items-center  hover:border-accent rounded-full py-3 px-4 border border-light text-l bg-transparentight hover:text-accent font-semibold">
            <span className="pr-0.5">Let&#8217;s connect</span>
            <span className="">
              <HiArrowRight />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
