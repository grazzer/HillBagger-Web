export default function Row({
  title,
  data,
}: {
  title?: string;
  data?: string;
}) {
  return (
    <div className="flex flex-row py-1">
      {title ? (
        <p className="shrink-0 flex max-w-40 md:max-w-full min-w-35 pr-4 text-gray-400">
          {title}
        </p>
      ) : null}
      <p className="break-all bg-amber-500">{data}</p>
    </div>
  );
}
