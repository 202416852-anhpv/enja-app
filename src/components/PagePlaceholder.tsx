type PagePlaceholderProps = {
  title: string;
};

export default function PagePlaceholder({ title }: PagePlaceholderProps) {
  return (
    <div>
      <h1 className="text-2xl">{title}</h1>
    </div>
  );
}
