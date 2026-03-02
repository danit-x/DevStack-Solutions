type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

export function TestimonialCard({
  quote,
  name,
  role
}: TestimonialCardProps) {
  return (
    <article className="panel h-full p-6">
      <p className="text-lg leading-8 text-slate-800">“{quote}”</p>
      <div className="mt-8">
        <p className="font-semibold text-slate-950">{name}</p>
        <p className="mt-1 text-sm text-slate-500">{role}</p>
      </div>
    </article>
  );
}
