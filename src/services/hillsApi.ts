import axios from "axios";

export async function getHills(queryParams: string) {
  const query = "https://hillbagger-api-v2.onrender.com/hills" + queryParams;
  return await axios.get(query).then((response) => {
    return response.data;
  });
}
