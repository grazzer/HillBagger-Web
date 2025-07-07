import axios from "axios";

export async function getHills(queryParams: string) {
  const query = "https://hillbagger-api-v2.onrender.com/hills" + queryParams;
  return await axios.get(query).then((response) => {
    return [response.data.hills, response.data.count];
  });
}

export async function getHillsNew(
  classification: string,
  pagination: number,
  direction: string | undefined,
  searchString: string | undefined
) {
  let query =
    "https://hillbagger-api-v2.onrender.com/hills" +
    "/" +
    classification +
    "?p=" +
    pagination;
  if (direction) {
    query = query + "&d=" + direction;
  }
  if (searchString) {
    query = query + "&s=" + searchString;
  }
  // for testing loading page only --- remove
  // await sleep(2000);
  return await axios.get(query).then((response) => {
    return [response.data.hills, response.data.count];
  });
}
