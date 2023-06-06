import Container from "../ui/Container";
import LogoIcon from "./assets/LogoIcon";
import SubscribeForm from "../ui/SubscribeForm";
import Nav from "./components/Nav";

const Footer = () => {
  return (
    <footer className="bg-accent-dark text-white pt-10 pb-8">
      <Container>
        <div className="flex flex-wrap gap-8 justify-between items-center">
          <LogoIcon />

          <Nav color="white" />
        </div>

        <SubscribeForm />

        <hr className="mt-12" />
        <p className="text-xs text-center mt-4">
          Nice template by @lopesluiza on Figma - {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
