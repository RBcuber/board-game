export default function About() {
  return (
    <div className="p-6 bg-accent h-lvh">
      <h2 className="mx-6 my-10 font-extrabold text-3xl">About us</h2>
      <p>
        Imagine a multi-platform digital environment with instant access to
        hundreds of licensed board games…
      </p>
      <ul className="flex flex-col">
        <li>
          Welcome to Tabletopia! Online arena for playing board games just like
          in real life. Play directly in modern desktop web browsers on Mac and
          Windows platforms, or download on Steam, App Store and Google Play.
        </li>
        <li>
          Unique editor for building new board games from scratch and bringing
          paper games to the digital.
        </li>
        <li>
          No programming skills required! Specialized tools for playtesting,
          demonstrating, promoting, and monetizing your games.
        </li>
      </ul>
    </div>
  );
}
