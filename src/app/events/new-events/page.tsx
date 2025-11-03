import CreateEvents from "@/app/actions/create-events";

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center from-background to-secondary/20 p-8">
      <form
        action={CreateEvents}
        className="flex flex-col gap-6 w-full max-w-lg bg-background border border-border 
                   rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-center text-highlight mb-4 tracking-wide">
          Create New Event
        </h2>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name-input"
            className="text-sm font-medium text-foreground/80"
          >
            Event Name
          </label>
          <input
            type="text"
            name="name"
            id="name-input"
            placeholder="Night game"
            className="p-3 rounded-lg border border-border bg-background/80 text-foreground 
                       placeholder:text-muted-foreground focus:outline-none focus:ring-2 
                       focus:ring-pink-400 transition-all duration-200"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="input-description"
            className="text-sm font-medium text-foreground/80"
          >
            Description
          </label>
          <textarea
            name="description"
            id="input-description"
            rows={4}
            placeholder="Describe your event..."
            className="p-3 rounded-lg border border-border bg-background/80 text-foreground 
                       placeholder:text-muted-foreground focus:outline-none focus:ring-2 
                       focus:ring-pink-400 transition-all duration-200 resize-none"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 
                     text-white font-semibold tracking-wide shadow-md hover:shadow-lg 
                     transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default Page;
