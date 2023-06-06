import Image from "next/image";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Paragraph from "../ui/Paragraph";
import Input from "../ui/Input";
import Button from "../ui/Button";

const Contact = () => {
  return (
    <div className="py-9 bg-[#F8F6FA]">
      <Container>
        <Image
          src="/contact.png"
          width={110}
          height={110}
          alt=""
          className="mx-auto mb-4"
        ></Image>
        <SectionTitle>Ainda tem dúvidas? Fale conosco!</SectionTitle>
        <div className="flex flex-col md:flex-row justify-between mt-20 gap-8">
          <div className="max-w-sm">
            <Paragraph>
              Ofereça um meio de comunicação direto.
              <br />
              Pode ser um <span className="font-semibold">contato@email.com.br</span>
            </Paragraph>
            <Paragraph>
              Ou crie um formulário ao lado que entrem em contato{" "}
              <span className="text-accent">o mais rápido possível!</span>
            </Paragraph>
            <a
              href="tel:+380971234567"
              className="flex items-center gap-2 font-semibold text-accent-dark mt-6"
            >
              <Image
                width={39}
                height={39}
                src="/whatsapp-icon.png"
                alt="whatsapp icon"
              ></Image>{" "}
              Hey! Estamos no whatsapp!
            </a>
          </div>
          <form className="space-y-4 max-w-sm flex-1">
            <Input type="text" label="Name" placeholder="Nome Sobrenome" />
            <Input type="email" label="Email" placeholder="nome@email.com.br" />
            <Input type="tel" label="Telefone" placeholder="21 9988-7766" />
            <Button variant="solid" align="right">
              Enviar!
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
