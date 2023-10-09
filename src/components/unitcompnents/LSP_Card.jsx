export function LSP_Card() {
  return (
    <div className="flex flex-col w-[20%] p-2 border border-neutral-200 rounded-md shadow-md duration-100 hover:scale-[1.02]">
      <img
        className="rounded-sm"
        src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
      ></img>
      <div className="flex flex-col items-center">
        <p className="text-violet-900 text-xl font-medium">PROFESSION</p>
        <p>Name</p>
        <p>City</p>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ducimus
          molestias eum, in commodi impedit consequatur recusandae autem? Omnis
          natus delectus deleniti perspiciatis quibusdam, quaerat fugit libero
          illum mollitia placeat!
        </p>
        <p>Rating</p>
      </div>
    </div>
  );
}
