import { useEffect, useState } from "react";
import { useSearch } from "@tanstack/react-router";
import hillsTableDescription from "../assets/text/hillsTableDescription.json";

export default function HillsTableDescription() {
  const { classification } = useSearch({
    from: "/",
  });
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string[]>();

  const _classification =
    classification as keyof typeof hillsTableDescription.descriptions;

  useEffect(() => {
    try {
      setTitle(hillsTableDescription.descriptions[_classification].title);
      setDescription(
        hillsTableDescription.descriptions[_classification].description
      );
    } catch (error) {
      setTitle("title not found");
      setDescription(["description not found"]);
      console.error(
        `Error - title and description missing from text file: ${_classification}`,
        error
      );
    }
  }, [classification]);

  const JsxDescription = description?.map((e) => (
    <p key={e} className="py-1">
      {e}
    </p>
  ));

  return (
    <div className="flex flex-col">
      <h1 className="flex py-5 text-4xl">{title}</h1>
      {JsxDescription}
      {/* <p className="py-2">{description}</p> */}
      <p className="pt-5">
        Click on the each hill to view details, hiking routes, maps and photos.
        Create an account to add logs and track your progress.
      </p>
    </div>
  );
}
