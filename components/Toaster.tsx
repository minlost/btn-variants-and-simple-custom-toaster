"use client";
import useToast from "@/app/hooks/useToast";

const Toaster = () => {
  const { toasts, removeToast } = useToast();

  return (
    <>
      {toasts.map((toast, index) => (
        <div
          key={index}
          className="fixed bottom-0 right-0 z-50 w-96 p-4 m-4 bg-white rounded-lg shadow-lg"
        >
          <div className="flex items-center justify-between">
            <p className="text-lg font-medium text-gray-800">{toast.message}</p>
            <button onClick={removeToast}>
              <svg
                className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-800"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Toaster;
