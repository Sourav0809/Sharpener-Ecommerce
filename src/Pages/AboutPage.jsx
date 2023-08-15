function AboutPage() {
  return (
    <>
      <section className="flex justify-center items-center bg-gray-600 text-white mt-1 p-20 text-8xl">
        <h1 className=" font-mono">About Us</h1>
      </section>
      <div className=" mt-20 mb-20 p-10 flex flex-wrap gap-3 justify-center items-center">
        <div>
          <img
            src="https://www.annauniv.edu/cccdm/img/about-us.jpg"
            className=" w-[40rem] h-[30rem] "
          />
        </div>
        <div className=" w-[40%]">
          <p>
            Welcome to our website! We are dedicated to providing you with the
            best and most up-to-date information in the industry. Our team of
            experts works tirelessly to bring you comprehensive and accurate
            content that caters to your needs. With a passion for excellence, we
            strive to be your go-to source for all things related to fashion.
          </p>
          <p>
            Whether you are a seasoned professional looking to stay updated or a
            curious individual eager to learn, our platform is designed to meet
            your requirements. Our commitment to quality extends beyond just the
            information we provide. We also focus on creating an engaging and
            user-friendly experience for you. Navigating through our website is
            easy, ensuring that you can quickly access the knowledge you seek
            without any hassle. As a community-driven platform, we value your
            input. Feel free to reach out to us with your suggestions, feedback,
            and questions.
          </p>
          <p>
            Your insights are invaluable in helping us enhance our services and
            cater to your evolving interests. Thank you for choosing us as your
            trusted source. We look forward to being a part of your journey in
            fashion and beyond.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
