import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Link from 'next/link'

function Slider() {
  return (
    <section className="relative mt-5 shadow-2xl w-full mx-auto bg-transparent">
      <div />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showArrows={false}
        showIndicators={true}
        showThumbs={false}
        interval={5000}
        width={350}
      >
        <div>
          <img 
          className="rounded-t-[1.5rem] "
          loading="lazy" src="https://rukminim1.flixcart.com/image/416/416/kg2l47k0-0/poster/8/a/c/medium-pbd222-allu-arjun-wall-poster-300gsm-size-13x19-inch-original-imafwe38rejfhpp7.jpeg?q=70" alt="" />
          <div className="h-20 bg-[#313338] p-4 rounded-b-[1.5rem] flex justify-center items-center text-white hover:text-yellow-400 cursor-pointer">
            <Link href="/digital-art-collection">
              <p>View digital art collection</p>
            </Link>
          </div>
        </div>
        <div>
          <img 
          className="rounded-t-[1.5rem] "
          loading="lazy" src="https://files.prokerala.com/movies/pics/800/telugu-movie-ala-vaikunthapurramuloo-teaser-poster-110683.jpg" alt="" />
          <div className="h-20 bg-[#313338] p-4 rounded-b-[1.5rem] flex justify-center items-center text-white hover:text-yellow-400 cursor-pointer">
            <Link href="/digital-art-collection">
              <p>View movie poster collection</p>
            </Link>
          </div>
        </div>

      </Carousel>
    </section>
  );
}

export default Slider;