export const USERNAME_VERIFICATION_REGEX = /^[a-zA-Z0-9]{4,}$/;
export const EMAIL_VERIFICATION_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
export const PASSWORD_VERIFICATION_REGEX = /^(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{6,}$/
export function isEmptyOrNull (str: string) {
    return !str || !str.trim();
}