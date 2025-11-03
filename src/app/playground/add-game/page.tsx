import { createCategory } from "@/app/actions/create-categoriy";

const CreateGame = () => {
  return (
    <div className="flex justify-center  bg-background">
      <form
        action={createCategory}
        className="flex flex-col gap-4 w-full max-w-md bg-foreground text-background p-6 rounded-xl shadow-md border border-border"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="p-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="p-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition"
        />
       
        <button
          type="submit"
          className="mt-2 py-2 px-4 rounded-md bg-accent text-foreground font-medium hover:bg-secondary transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateGame;
