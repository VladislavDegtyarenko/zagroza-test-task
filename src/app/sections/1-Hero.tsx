import Image from "next/image";
import Container from "@/app/ui/Container";
import Button from "../ui/Button";
import Paragraph from "../ui/Paragraph";

const Hero = () => {
  return (
    <div className="  text-white pb-24 overflow-x-hidden overflow-hidden">
      <div className="relative  bg-accent-dark pt-32 pb-14">
        <Image
          fill={true}
          src="/hero-bg.png"
          alt="hero background image"
          className="hidden md:block pointer-events-none"
        />
        <Container>
          <div className="relative">
            <div className="relative max-w-full md:max-w-[50%]">
              <h1 className="text-5xl leading-[66px] lg:text-[4em] lg:leading-[86px] font-extrabold">
                Um slogan
                <br /> chamativo aqui.
              </h1>
              <Paragraph className="mt-3 text-white ">
                Um texto sobre o seu produto ou serviço. Explique{" "}
                <span className="text-action font-bold">porque ele é valioso</span> e
                direcione o usuário ao próximo objetivo.
              </Paragraph>
              <div className="flex flex-col md:flex-row gap-4 mt-4">
                <Button variant="solid">Eu quero!</Button>
                <Button variant="outlined">Conhecer mais</Button>
              </div>
            </div>
            <div className="relative b-0 l-0 md:absolute md:w-[717px] md:h-[661px]  md:-bottom-[210px] md:-right-[280px] lg:-right-[180px] pointer-events-none">
              <Image
                src="/hero-man-image.png"
                fill={true}
                alt="hero image"
                className=""
              ></Image>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
