import { useNavigate } from "react-router-dom";
import { useFormContext } from "../context/FormContext";

const PreferencesPage = () => {
  const { state, dispatch } = useFormContext();
  const navigate = useNavigate();

  const handleNextPage = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/summary");
  };
  return (
    <form className="flex flex-col gap-8" onSubmit={handleNextPage}>
      <h1 className="text-xl">Preferences</h1>
      <div className="flex gap-2 items-center">
        <label
          htmlFor="newsletter"
          className="order-1 font-bold cursor-pointer"
        >
          Newsletter
        </label>
        <input
          type="checkbox"
          id="newsletter"
          required
          className="appearance-none size-5 bg-[#9ACBD0] hover:bg-[#F39E60] rounded-full checked:bg-[#FFEB00] duration-75 cursor-pointer"
          checked={state.preferences.newsletter}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_PREFERENCES",
              payload: { newsletter: e.target.checked },
            })
          }
        />
      </div>
      <div className="flex gap-2 items-center">
        <label
          htmlFor="notification"
          className="order-1 font-bold cursor-pointer"
        >
          Notifications
        </label>
        <input
          type="checkbox"
          id="notifications"
          required
          className="appearance-none size-5 bg-[#9ACBD0] hover:bg-[#F39E60] rounded-full checked:bg-[#FFEB00] duration-75 cursor-pointer"
          checked={state.preferences.notification}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_PREFERENCES",
              payload: { notification: e.target.checked },
            })
          }
        />
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="theme" className="font-bold">
          Theme preference
        </label>
        <div className="flex gap-2 items-center">
          <input
            type="radio"
            id="theme"
            required
            className="border-l border-[#dfe5f6] focus:bg-gray-200 outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-black"
            value={"light"}
            checked={state.preferences.theme === "light"}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_PREFERENCES",
                payload: { theme: e.target.value as "light" },
              })
            }
          />
          <span>Light</span>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="radio"
            id="theme"
            required
            className="border-l border-[#dfe5f6] focus:bg-gray-200 outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-black"
            value={"dark"}
            checked={state.preferences.theme === "dark"}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_PREFERENCES",
                payload: { theme: e.target.value as "dark" },
              })
            }
          />
          <span>Dark</span>
        </div>
      </div>
      <div className="flex *:basis-1/2 gap-4">
        <button
          className="p-2 bg-gray-200 rounded transition-colors hover:bg-[#dfe5f6]"
          onClick={() => navigate("/address")}
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

export default PreferencesPage;
