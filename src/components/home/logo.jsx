export default function Logo() {
  return (
    <div className="flex items-center">
      <img
        src="/src/assets/dash-logo.png"
        width={50}
        height={50}
        alt="Picture of the author"
      />
      <h1 className="text-xl font-bold">dash</h1>
    </div>
  );
}
