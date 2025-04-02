import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

interface FormData {
  addressInfo: {
    street: string;
    city: string;
    zip: string;
  };
}

interface FormAction {
  type: "UPDATE_ADDRESS_INFO";
  payload: Partial<FormData["addressInfo"]>;
}
const initialAddressInfoState: FormData["addressInfo"] = {
  street: "",
  city: "",
  zip: "",
};

const AddressPage = () => {
  const [state, dispatch] = useReducer(
    addressInfoReducer,
    initialAddressInfoState
  );
  const navigate = useNavigate();
  function addressInfoReducer(
    state = initialAddressInfoState,
    action: FormAction
  ) {
    return {
      ...state,
      ...action.payload,
    };
  }
  const handleNextPage = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/preferences");
  };
  return (
    <form className="flex flex-col gap-8" onSubmit={handleNextPage}>
      <h1 className="text-xl">Address details</h1>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="street">Street address</label>
        <input
          type="text"
          id="street"
          required
          className="border-l border-[#dfe5f6] focus:bg-gray-200 outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-black"
          value={state.street}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_ADDRESS_INFO",
              payload: { street: e.target.value },
            })
          }
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          required
          className="border-l border-[#dfe5f6] focus:bg-gray-200 outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-black"
          value={state.city}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_ADDRESS_INFO",
              payload: { city: e.target.value },
            })
          }
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="zip">Zipcode</label>
        <input
          type="text"
          id="zip"
          required
          className="border-l border-[#dfe5f6] focus:bg-gray-200 outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-black"
          value={state.zip}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_ADDRESS_INFO",
              payload: { zip: e.target.value },
            })
          }
        />
      </div>
      <div className="flex *:basis-1/2 gap-4">
        <button
          className="p-2 bg-gray-200 rounded transition-colors hover:bg-[#dfe5f6]"
          onClick={() => navigate("/")}
        >
          Back
        </button>
        <button
          type="submit"
          className="p-2 bg-gray-200 rounded transition-colors hover:bg-[#dfe5f6]"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default AddressPage;
