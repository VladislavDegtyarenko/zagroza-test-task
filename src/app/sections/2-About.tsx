import Container from "./../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Paragraph from "../ui/Paragraph";
import Card from "../ui/Card";

const cardsData = [
  {
    title: "Rápido",
    description:
      "Aproveite esta seção para destacar os benefícios do seu produto ou serviço.",
  },
  {
    title: "Do seu jeito",
    description:
      "Aproveite esta seção para destacar os benefícios do seu produto ou serviço.",
  },
  {
    title: "Como você queria",
    description:
      "Aproveite esta seção para destacar os benefícios do seu produto ou serviço.",
  },
];

const About = () => {
  return (
    <div className="mt-12">
      <Container>
        <SectionTitle>Um subtítulo para quem rolou até aqui!</SectionTitle>
        <Paragraph center>
          Aproveite esta seção para destacar os benefícios do seu produto ou serviço.
          <br />
          Palavras-chave ajudam no SEO.
        </Paragraph>
        <ul className="flex flex-col md:flex-row justify-between items-stretch gap-4 lg:gap-12 mt-8">
          {cardsData.map((card, index) => (
            <li key={card.title} className="flex items-stretch flex-1">
              <Card src={`/about-img-${index + 1}.png`} {...card} />
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default About;
