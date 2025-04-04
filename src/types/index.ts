export interface FormData {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
  };
  addressInfo: {
    street: string;
    city: string;
    zip: string;
  };
  preferences: {
    newsletter: boolean;
    notification: boolean;
    theme: "light" | "dark";
  };
}

export type FormAction =
  | { type: "UPDATE_PERSONAL_INFO"; payload: Partial<FormData["personalInfo"]> }
  | { type: "UPDATE_ADDRESS_INFO"; payload: Partial<FormData["addressInfo"]> }
  | { type: "UPDATE_PREFERENCES"; payload: Partial<FormData["preferences"]> }
  | { type: "RESET_FORM" };
