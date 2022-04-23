import React from "react";

const Login = () => {
  return (
    <section className="py-14">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative bg-[#F4F7FF] mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 text-center sm:px-12 md:px-[60px]">
              <div className="mb-10 mx-auto md:mb-[4.25rem] text-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-4 justify-center">
                  <span className="ml-3 text-xl cursor-pointer pt-4">
                    Crea<span className="text-[#ff0099ed]">Tink</span>
                  </span>
                </a>
              </div>

              <div>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Email"
                    className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    placeholder="Password"
                    className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                  />
                </div>
                <div className="mb-10">
                  <button class="text-white w-full bg-indigo-500 border-0 py-3 px-5 text-base focus:outline-none hover:bg-indigo-600 rounded text-lg default">
                    Sign Up
                  </button>
                </div>
              </div>

              <p className="mb-6 text-base text-[#adadad]">Connect With</p>
              <ul className="-mx-2 mb-12 flex justify-between">
                <li className="w-full px-2">
                  <a
                    href="javascript:void(0)"
                    className="flex h-11 items-center justify-center rounded-md bg-[#D64937] hover:bg-opacity-90"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.8477 8.17132H9.29628V10.643H15.4342C15.1065 14.0743 12.2461 15.5574 9.47506 15.5574C5.95916 15.5574 2.8306 12.8821 2.8306 9.01461C2.8306 5.29251 5.81018 2.47185 9.47506 2.47185C12.2759 2.47185 13.9742 4.24567 13.9742 4.24567L15.7024 2.47185C15.7024 2.47185 13.3783 0.000145544 9.35587 0.000145544C4.05223 -0.0289334 0 4.30383 0 8.98553C0 13.5218 3.81386 18 9.44526 18C14.4212 18 17.9967 14.7141 17.9967 9.79974C18.0264 8.78198 17.8477 8.17132 17.8477 8.17132Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
