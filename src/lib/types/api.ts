export type ApiOk = {
  id: string;
  status: "ok";
};

export type ApiErr =
  | { error: string }
  | { error: string; issues?: unknown };