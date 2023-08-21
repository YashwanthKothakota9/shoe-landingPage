import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          We Provide You
          <span className="text-green-500"> Super</span>
          <span className="text-green-500"> Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Experience the epitome of premium style and comfort through our
          meticulously crafted shoes. With a focus on elevating your
          satisfaction, our designs promise unparalleled quality, innovative
          features, and a touch of refined elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our unwavering commitment to precision and excellence guarantees your
          utmost satisfaction.
        </p>
        <div className="mt-11 ">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe-8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
