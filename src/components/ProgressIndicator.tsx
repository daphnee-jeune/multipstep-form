import { CheckCircle2, Circle } from "lucide-react";
import { useLocation } from "react-router-dom";

const steps = [
  {
    path: "/",
    label: "Personal",
  },
  {
    path: "/address",
    label: "Address",
  },
  {
    path: "/preferences",
    label: "Preferences",
  },
  {
    path: "/summary",
    label: "Summary",
  },
];
const ProgressIndicator = () => {
  const location = useLocation();
  const currentStepIdx = steps.findIndex(
    (step) => step.path === location.pathname
  );

  return (
    <section
      className="grid grid-cols-2
    gap-x-8 gap-y-4 place-items-center sm:grid-cols-4 sm:justify-items-start"
    >
      {steps.map((step, idx) => (
        <div key={step.label}>
          <figure
            className={`flex flex-col items-center rounded-full p-1 ${
              idx < currentStepIdx
                ? "text-[#00ffa2]"
                : idx === currentStepIdx
                ? "text-[#F39E60]"
                : "text-[#4fc4d1]"
            }`}
          >
            {idx === currentStepIdx ? (
              <CheckCircle2 className="size-8" />
            ) : (
              <Circle className="size-8" />
            )}
            <figcaption>{step.label}</figcaption>
          </figure>
          {idx < steps.length - 1 && (
            <div
              className={`absolute h-1 sm:w-8 bottom-4 -right-16 rounded-sm ${
                idx < currentStepIdx
                  ? "bg-[#00ffa2]"
                  : idx === currentStepIdx
                  ? "bg-[#f39e60]"
                  : "bg-[#4fc4d1]"
              } `}
            ></div>
          )}
        </div>
      ))}
    </section>
  );
};

export default ProgressIndicator;
