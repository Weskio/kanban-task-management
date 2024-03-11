import { Column } from "./column";

export interface Board {
    "name": string,
      "isActive" : boolean,
      "columns":Column[]
}
