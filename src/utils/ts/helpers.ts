export const getEnvironment = () => {
  return process.env;
};

export const getStorage = (name: string): string | null => {
  const data = localStorage.getItem(name);
  if (data) {
    return data;
  }
  return sessionStorage.getItem(name);
};

export const setSessionStorage = (name: string, value: string): void => {
  sessionStorage.setItem(name, value);
};

export const toLowerCase = (str: string): string => {
  return str.toLowerCase();
}

export const hasDuplicates = (arr: string[]) => {
  let duplicateFound = false;

  arr.forEach((item, index) => {
    if (arr.slice(index + 1).includes(item)) {
      duplicateFound = true;
    }
  });

  return duplicateFound;
};