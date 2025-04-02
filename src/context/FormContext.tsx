import { useContext, useReducer } from "react";
import { createContext } from "react";
import { FormAction, FormData } from "../types";
import { formReducer, initialFormState } from "../reducers/formReduce";

type FormContextType = {
  state: FormData;
  dispatch: React.Dispatch<FormAction>;
};
const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(formReducer, initialFormState);
  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext(){
 const context = useContext(FormContext)

 if(context === undefined){
  throw new Error('useFormContext must be within a form provider')
 }
 return context
}