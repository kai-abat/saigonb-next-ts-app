import { State } from "./actions/newMenuAction";

export const formatToCurreny = (value: number): string => {
  return `₱${value}`;
};

export const extractErrorMessge = (
  formState: State,
  name: string
): string | null => {
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
};

export const getFallbackImagePath = (): string => {
  return "/images/saigonbrewers-fallback-loader-w400.png";
};

export const extractServerErrorMessage = (
  servMessage: string | null | undefined
): string | undefined => {
  if (!servMessage) return undefined;
  return servMessage.match(/^SERVER: (.+)/)?.at(1);
};
