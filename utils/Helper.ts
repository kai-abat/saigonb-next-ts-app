import { State } from './actions/menuActions';
import { PageProps } from './types/Props';

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

  if (formState.status === 'error') {
    const message = formState.errors?.find(error =>
      error.path === name ? error : null
    );

    if (message) return message.message;
  }
  return null;
};

export const getFallbackImagePath = (): string => {
  return '/images/saigonbrewers-fallback-loader-w400.png';
};

export const extractServerErrorMessage = (
  servMessage: string | null | undefined
): string | undefined => {
  if (!servMessage) return undefined;
  return servMessage.match(/^SERVER: (.+)/)?.at(1);
};

export const extractNumberFromURLParams = (
  param: string | string[] | undefined
): number | undefined => {
  let paramFinal: number | undefined;
  if (typeof param === 'string' && param.match(`^[0-9]+$`)) {
    paramFinal = Number(param);
  } else if (Array.isArray(param)) {
    const idFound = param.find(value => value.match(`^[0-9]+$`));
    paramFinal = Number(idFound);
  }
  return paramFinal;
};

export const getDupelicateIndexFromArrayList = (
  arrayList: string[]
): number[] => {
  const duplicateIndices: number[] = [];

  const duplicates = arrayList.filter(
    (item, index) => arrayList.indexOf(item) !== index
  );

  duplicates.forEach(itemDupe => {
    arrayList.forEach((item, index) => {
      item === itemDupe && duplicateIndices.push(index);
    });
  });

  return duplicateIndices.sort();
};

export const getFilenames = (paths: string[]): string[] => {
  const imageFilenames: string[] = [];
  paths.forEach(path => {
    const fileName = path.split('/').pop();
    if (fileName) imageFilenames.push(fileName);
  });
  return imageFilenames;
};

// File Checksum SHA256
export const computeSHA256 = async (file: File): Promise<string> => {
  const buffer = await file.arrayBuffer();
  const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
};
