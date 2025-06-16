"use server";

export const encrypt = async (text: string, shift: number): Promise<string> => {
  return text.replace(/[a-zA-Z]/g, (char) => {
    const start = char <= "Z" ? 65 : 97;
    return String.fromCharCode(
      ((char.charCodeAt(0) - start + shift) % 26) + start
    );
  });
};

export const decrypt = async (text: string, shift: number): Promise<string> => {
  return encrypt(text, 26 - shift);
};

export const bruteForce = async (text: string): Promise<string[]> => {
  const decryptedTexts: string[] = [];

  for (let shift = 1; shift <= 26; shift++) {
    const decryptedText = await decrypt(text, shift);
    decryptedTexts.push(decryptedText);
  }

  return decryptedTexts;
};
