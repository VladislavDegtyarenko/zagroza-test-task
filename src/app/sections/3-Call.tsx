import Image from "next/image";
import Container from "../ui/Container";
import Paragraph from "../ui/Paragraph";
import Button from "../ui/Button";

const Call = () => {
  return (
    <div className="pt-[142px] pb-[189px] overflow-hidden">
      <Container>
        <div className="relative">
          <Image
            src="/calling-man.png"
            width={717}
            height={661}
            alt="hero image"
            className="hidden md:block absolute -bottom-[170px] -right-[400px] lg:-right-[200px] pointer-events-none"
          ></Image>
          <div className="max-w-md">
            <Paragraph accent uppercase>
              #contecomagente
            </Paragraph>
            <h2 className="text-4xl font-bold color-accent-dark mt-4">
              Simples, rápido e do seu jeito.
            </h2>
            <Paragraph>
              Mostre os valores da sua marca e como ela pode fazer parte da vida do
              usuário que está lendo. Gerar identificação é a chave para{" "}
              <span className="text-accent font-bold">conquistar seu cliente.</span>
            </Paragraph>
            <div className="mt-4">
              <Button variant="solid">Eu quero!</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Call;
