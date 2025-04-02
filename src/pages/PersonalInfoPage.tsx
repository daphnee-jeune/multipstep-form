import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

interface FormData {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

interface FormAction {
  type: "UPDATE_PERSONAL_INFO";
  payload: Partial<FormData["personalInfo"]>;
}
const initialPeronalInfoState: FormData["personalInfo"] = {
  firstName: "",
  lastName: "",
  email: "",
};

const PersonalInfoPage = () => {
  const [state, dispatch] = useReducer(
    personalInfoReducer,
    initialPeronalInfoState
    );
    const navigate = useNavigate();

  function personalInfoReducer(
    state = initialPeronalInfoState,
    action: FormAction
  ) {
    return {
      ...state,
      ...action.payload,
    };
  }
  const handleNextPage = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/address");
  };
  return (
    <form className="flex flex-col gap-8" onSubmit={handleNextPage}>
      <h1 className="text-xl">Personal information</h1>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          id="firstname"
          required
          className="border-l border-[#dfe5f6] focus:bg-gray-200 outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-black"
          value={state.firstName}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_PERSONAL_INFO",
              payload: { firstName: e.target.value },
            })
          }
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          id="lastname"
          required
          className="border-l border-[#dfe5f6] focus:bg-gray-200 outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-black"
          value={state.lastName}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_PERSONAL_INFO",
              payload: { lastName: e.target.value },
            })
          }
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          required
          className="border-l border-[#dfe5f6] focus:bg-gray-200 outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-black"
          value={state.email}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_PERSONAL_INFO",
              payload: { email: e.target.value },
            })
          }
        />
      </div>
      <button
        type="submit"
        className="p-2 bg-gray-200 rounded transition-colors hover:bg-[#dfe5f6]"
      >
        Next
      </button>
    </form>
  );
};

export default PersonalInfoPage;
