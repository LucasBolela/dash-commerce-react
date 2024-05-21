export default function HomeGreatings() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-32">
      <h3 className="text-3xl">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        "Olá, Ricky!"
      </h3>
      <h3 className="text-3xl font-bold">
        Aqui estão, as <span className="text-primary">Recomendações</span>
      </h3>
      <h3 className="text-3xl font-bold">Para você HOJE!</h3>
    </div>
  );
}
