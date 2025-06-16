"use server";

export const encode = async (text: string): Promise<string> => {
  return btoa(encodeURIComponent(text));
};

export const decode = async (encodedText: string): Promise<string> => {
  try {
    return decodeURIComponent(atob(encodedText));
  } catch (error) {
    console.error(error);
    throw new Error("Invalid Base64 string");
  }
};
