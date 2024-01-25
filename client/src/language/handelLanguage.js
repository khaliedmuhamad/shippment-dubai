import { Arabic } from "./arabic";
import { English } from "./english";

export const multilang = (e) => {
  if (e === "En") {
    return English;
  } else if (e === "Ar") {
    return Arabic;
  }
};
