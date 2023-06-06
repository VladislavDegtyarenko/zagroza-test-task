import Button from "./Button";

const SubscribeForm = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center mt-20">
      <h4>Receba as novidades do nice</h4>
      <form
        action=""
        className="flex w-full justify-between items-stretch border-[1px] border-white rounded-md overflow-hidden"
      >
        <input
          type="email"
          placeholder="nome@email.com"
          className="bg-transparent px-4 w-44 sm:w-auto shrink"
        />
        <Button variant="solid-white" className="min-w-0 grow-1">
          Inscrever
        </Button>
      </form>
    </div>
  );
};

export default SubscribeForm;
