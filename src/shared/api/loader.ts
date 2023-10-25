import axios from "axios";

import { API_URL } from "@/shared/lib/constants";

export async function loader() {
  try {
    const { data } = await axios.get(API_URL);

    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err);
    }
  }
}
