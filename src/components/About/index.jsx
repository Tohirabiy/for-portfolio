import "./style.scss";
import Me from "../../assets/images/me.jpg";
import Typewriter from "../TypeWriter";

const index = () => {
  return (
    <section className="pt-[96px] pb-[96px]{` dark:bg-[#111827] dark:text-white text-black`}  px-[32px] ">
      <div className="container">
        <div className="flex items-center bordiringa">
          <button
            id="about"
            className="px-[20px] mt-[96px] mb-[48px] {` dark:text-[#4B5563] dark:hover:text-white text-black`} buttonof bg-[#E5E7EB]  items-center flex bordiringan py-1 hover:text-white hover:bg-[#245dd1] "
          >
            About me
          </button>
        </div>

        <div className="  pb-[96px]  abouto flex  justify-between">
          <div className="left ">
            <div class="vvb">
              <img className="top-imageg" src={Me} alt="Base Image" />
              <div className="bottom-imageg"></div>
            </div>
          </div>
          <div className="right">
            <h2 className="hhe mb-[24px] {` dark:text-white text-black`} ">
              Curious about me? Here you have it:
            </h2>
            <div className="gap-y-[16px] {` dark:text-white text-black`}">
              {" "}
              <p className=" pda {` dark:text-white text-black`} bir">
                I'm a passionate, software engineer who specializes in front-end
                development . I am very enthusiastic about bringing the visual
                aspects of digital products to life. User experience, pixel
                perfect design, and writing clear, readable, highly performant
                code matters to me.
              </p>
              {/* <p className=" pda {` dark:text-white text-black`}  ikki">
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p> */}
              <p className=" pda {` dark:text-white text-black`}  uch">
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </p>
              <p className=" pda {` dark:text-white text-black`}  tort">
                When I'm not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on
                {" "}
                <a href="https://www.linkedin.com/in/tohirjon-muhammadiyev-78b653262/" target="_blank" className=" underline">
                  Linkedin
                </a>{" "}
                where I share tech-related bites and build in public, or you can
                follow me on{" "}
                <a className="underline" target="_blank" href="https://github.com/Tohirabiy">
                  GitHub
                </a>{" "}
                .
              </p>
          <div className="finally">    <p className="pda {` dark:text-white text-black`} ">
          "I have expertise in HTML5, JavaScript, React.js, Tailwind CSS, Ant Design, Flowbite, Sass, Git, and Figma, along with proficiency in utilizing Box icons.".
              </p>
         
              </div>
              <p className="pda {` dark:text-white text-black`} ">
                One last thing, I'm available for 
                {/* <span>frelance</span> */}{" "}
                 work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
