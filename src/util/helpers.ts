// List of common passwords that should not be allowed
const commonPasswords = [
  'Password1!',
  'Welcome123!',
  'Qwerty@123',
  'Admin@123',
  'Letmein!23',
  'Pa$$w0rd',
  'Hello@123',
  'Summer@2023',
  'ChangeMe!',
  'Abcdef@1',
  'Passw0rd!',
  'Master!123',
  'Welcome@123',
  'Winter!2023',
  'Spring@2023',
  'Autumn!123',
  'Example@123',
  'Temp@1234',
  'Admin!2023',
  'Default@1',
];

/**
 * Defines whether a name is valid
 * @description For a username to be valid it must not have special characters
 * @param fullName
 * @returns
 */
export const isValidName = (fullName: string): Boolean => {
  return !/^[a-zA-Z0-9_-]+$/.test(fullName);
};

/**
 *Defines whether a password is valid
 * @description For a password to be valid it must have at least 8 characters and must not belong to the list of common passwords.
 * @param password
 * @returns
 */
export const isValidPassword = (password: string): Boolean => {
  if (password.length < 8) {
    return false;
  }

  const isCommonPassword = commonPasswords.includes(password.toLowerCase());

  return !isCommonPassword;
};

/**
 * Separate the full name into two fields with the first and last name
 * @example
 * fullname = 'Juan Ramirez' => ['Juan', 'Ramiez']
 * fullname = 'Juan Manuel Ramirez' => ['Juan Manuek', 'Ramiez']
 * fullname = 'Juan Manuel Ramirez Gonzalez' => throw Error("Nombre invalido")
 * fullname = 'Juan' => throw Error("Nombre invalido")
 * @param fullName
 * @returns
 */
export const splitSurname = (fullName: string): string[] => {
  if ((fullName.split(' ').length = 2)) {
    const [name, surname] = fullName.split(' ');
    return [name, surname];
  } else if ((fullName.split(' ').length = 3)) {
    const [name_1, name_2, surname] = fullName.split(' ');
    const name = name_1.concat(' ', name_2);

    return [name, surname];
  }

  throw new Error('Nombre invalido');
};
