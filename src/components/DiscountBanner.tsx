import banner from "@/assets/discount offer.png";
const DiscountBanner = () => {
  return (
    <section className="py-5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <img 
            src={banner} 
            alt="Special Discount Banner"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-glow"
          />
        </div>
      </div>
    </section>
  );
};

export default DiscountBanner;
