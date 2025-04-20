import { Play } from "lucide-react";
import Navbar from "~/components/navbar";
import { Button } from "~/components/ui/button";
import puppies from "../../assets/puppies.svg";
import womanAndDog from "../../assets/woman-and-dog.svg";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="w-50 h-80 bg-secondary rounded-4xl fixed -top-40 left-0 right-0 rotate-100 mx-auto"></div>
      <section className="bg-hero-background m-aut0 text-primary h-dvh flex flex-col justify-center items-center gap-12">
        <div className="container w-[95%] md:w-[80%] flex gap-12 flex-col lg:flex-row justify-between items-center">
          <div className="md:w-1/2">
            <div>
              <>
                <h1 className="text-h1 font-700 capitalize ">
                  one more friend
                </h1>
                <h2 className="text-h3 font-700 capitalize">
                  thousand more fun!
                </h2>
              </>
              <div className="mt-4 w-fit">
                <p className="text-14 font-400 text-justify md:max-w-[340px]">
                  Having a pet means you have more joy, a new friend a happy
                  persom who will always be with you to have fun. We have 200+
                  different pets that can meet your needs!
                </p>
              </div>
              <div className="mt-4 flex gap-4 flex-wrap items-center justify-start w-full">
                <Button
                  variant="outline"
                  className="bg-transparent rounded-2xl text-primary-200 cursor-pointer hover:bg-secondary hover:border-none"
                >
                  View Intro{" "}
                  <span>
                    <Play />
                  </span>
                </Button>
                <Button className="rounded-2xl text-white cursor-pointer hover:bg-transparent hover:text-primary-200 hover:border">
                  Explore Now
                </Button>
              </div>
            </div>
          </div>
          <div className="relative w-full overflow-hidden rounded-b-4xl lg:hidden">
            <div className="absolute w-1/3 aspect-[2/3] bg-primary rotate-8 -bottom-6 left-1/20 rounded-t-4xl z-0" />
            <div className="absolute w-[300px] aspect-3/2 bg-secondary rotate-8 -bottom-6 left-3/10 rounded-t-4xl z-0" />

            {/* Image */}
            <img
              src={puppies}
              alt="Smiling woman holding a dog"
              className="relative z-10 w-full h-auto"
            />
          </div>
          <img src={womanAndDog} alt="" className="hidden lg:block" />
        </div>
      </section>
      <section className="text-red-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum iusto
        temporibus ipsa neque non aut libero adipisci laudantium quia sint
        aliquam ratione iure, dolorum accusamus, nam, ex fuga tempora fugit!
      </section>
    </>
  );
};

export default HomePage;
