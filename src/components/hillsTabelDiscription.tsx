import { useEffect, useState } from "react";
import { useSearch } from "@tanstack/react-router";

export default function HillsTableDescription() {
  const { classification } = useSearch({
    from: "/",
  });
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();

  useEffect(() => {
    switch (classification) {
      case "munro":
        setTitle("Munro");
        setDescription(
          "This page shows a list of all the Munros - which is a mountain in Scotland over 3000 feet high - or 914m. The list was first compiled by Sir Hugh Munro in 1891, and has been updated at various times since. There are 282 Munros and 226 Munro Tops."
        );
        return;
      case "simm":
        setTitle("Simm");
        setDescription(
          "The Simms are British hills at least 600 metres high, with 30 metres of prominence. "
        );
        return;
      case "hump":
        setTitle("Hump");
        setDescription(
          "Humps are defined as British hills with more than 100 metres of prominence. The Humps also include Marilyns since every Marilyn is also a Hump. Or you could say that the Marilyns are a subset of the Humps with more prominence."
        );
        return;
      case "marilyn":
        setTitle("Marilyn");
        setDescription(
          "A Marilyn is simply defined as a hill within Great Britain or Ireland with a prominence of 150 metres or more regardless of height."
        );
        return;
      case "all":
        setTitle("All Hills");
        setDescription("A list of all hills and mounties in Great Britain ");
        return;
      default:
        setTitle("");
        return;
    }
    console.log(title);
  }, [classification]);

  return (
    <div className="flex flex-col px-5">
      <h1 className="flex py-5 text-4xl">{title}</h1>
      <p className="py-2">
        {description}
        {/* This page shows a list of all the Munros - which is a mountain in
        Scotland over 3000 feet high - or 914m. The list was first compiled by
        Sir Hugh Munro in 1891, and has been updated at various times since.
        There are 282 Munros and 226 Munro Tops. */}
      </p>
      <p className="py-2">
        Click on the each mountain to view details, hiking routes, maps and
        photos. Create an account to add logs and track your progress.
      </p>
    </div>
  );
}
