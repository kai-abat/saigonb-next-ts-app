import { State } from "./services/LoginAction";

export function extractErrorMessge(
  formState: State,
  name: string
): string | null {
  if (!formState) {
    return null;
  }

  if (formState.status === "error") {
    const message = formState.errors?.find((error) =>
      error.path === name ? error : null
    );

    if (message) return message.message;
  }
  return null;
}
