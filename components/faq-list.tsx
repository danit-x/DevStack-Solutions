type FaqItem = {
  question: string;
  answer: string;
};

type FaqListProps = {
  items: FaqItem[];
};

export function FaqList({ items }: FaqListProps) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <details
          key={item.question}
          className="panel group px-6 py-5"
          open={index === 0}
        >
          <summary className="cursor-pointer list-none text-lg font-semibold text-slate-950">
            {item.question}
          </summary>
          <p className="mt-4 pr-4 text-sm leading-7 text-slate-600">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
