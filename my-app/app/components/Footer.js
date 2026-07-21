"use clients";

export default function Footer() {
  return (
    <section className="pt-16 pb-7 bg-[#D2665A] dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between -mt-10 pb-5 border-b border-white gap-8">
          <span className="text-white text-4xl font-bold">TAPAKILA</span>

          <div className="flex items-center gap-4">
            <a
              href="javascript:;"
              className="p-3 rounded-full bg-white text-gray-700 group transition-all duration-500 hover:bg-[#ddd5d5] dark:hover:bg-red-600 hover:text-white focus-within:outline-0 focus-within:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M13.077 10.7339L13.4445 8.43347H11.1808V6.93821C11.1808 6.30919 11.4968 5.69455 12.5074 5.69455H13.5511V3.73561C12.9433 3.64013 12.3292 3.58847 11.7136 3.58105C9.8505 3.58105 8.63412 4.68453 8.63412 6.67941V8.43347H6.56885V10.7339H8.63412V16.298H11.1808V10.7339H13.077Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="javascript:;"
              className="p-3 rounded-full bg-white text-gray-700 group transition-all duration-500 hover:bg-[#ddd5d5] dark:hover:bg-red-600 hover:text-white focus-within:outline-0 focus-within:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M7.7117 9.93956C7.7117 8.66117 8.76298 7.62456 10.0601 7.62456C11.3573 7.62456 12.4092 8.66117 12.4092 9.93956C12.4092 11.218 11.3573 12.2546 10.0601 12.2546C8.76298 12.2546 7.7117 11.218 7.7117 9.93956ZM6.44187 9.93956C6.44187 11.909 8.06177 13.5055 10.0601 13.5055C12.0585 13.5055 13.6784 11.909 13.6784 9.93956C13.6784 7.97012 12.0585 6.37367 10.0601 6.37367C8.06177 6.37367 6.44187 7.97012 6.44187 9.93956ZM12.9761 6.23228C12.976 6.3971 13.0256 6.55824 13.1184 6.69532C13.2113 6.83239 13.3433 6.93926 13.4978 7.00239C13.6523 7.06552 13.8223 7.08209 13.9863 7.05C14.1503 7.01791 14.301 6.93861 14.4193 6.82211C14.5377 6.70561 14.6182 6.55716 14.6509 6.39552C14.6836 6.23388 14.667 6.06632 14.603 5.91402C14.5391 5.76173 14.4307 5.63153 14.2917 5.53991C14.1527 5.44829 13.9892 5.39935 13.822 5.39928H13.8217C13.5975 5.39939 13.3825 5.48717 13.224 5.64336C13.0654 5.79954 12.9763 6.01136 12.9761 6.23228V6.23228ZM7.21337 15.5922C6.52637 15.5613 6.15296 15.4486 5.90481 15.3533C5.57583 15.2271 5.3411 15.0767 5.0943 14.8338C4.8475 14.591 4.69474 14.3598 4.56722 14.0356C4.47049 13.7912 4.35605 13.4231 4.32482 12.746C4.29066 12.014 4.28384 11.7941 4.28384 9.93962C4.28384 8.08512 4.29123 7.86584 4.32482 7.13323C4.35611 6.45617 4.47139 6.08878 4.56722 5.84362C4.6953 5.51939 4.84784 5.28806 5.0943 5.04484C5.34076 4.80162 5.57526 4.65106 5.90481 4.5254C6.15285 4.43006 6.52637 4.31728 7.21337 4.28651C7.95613 4.25284 8.17925 4.24612 10.0601 4.24612C11.9411 4.24612 12.1644 4.25339 12.9078 4.28651C13.5948 4.31734 13.9676 4.43095 14.2163 4.5254C14.5453 4.65106 14.7801 4.80195 15.0268 5.04484C15.2736 5.28773 15.4258 5.51939 15.5539 5.84362C15.6507 6.08806 15.7651 6.45617 15.7963 7.13323C15.8305 7.86584 15.8373 8.08512 15.8373 9.93962C15.8373 11.7941 15.8305 12.0134 15.7963 12.746C15.765 13.4231 15.65 13.7911 15.5539 14.0356C15.4258 14.3598 15.2733 14.5912 15.0268 14.8338C14.7804 15.0765 14.5453 15.2271 14.2163 15.3533C13.9683 15.4486 13.5948 15.5614 12.9078 15.5922C12.165 15.6258 11.9419 15.6326 10.0601 15.6326C8.1784 15.6326 7.9559 15.6258 7.21337 15.5922V15.5922ZM7.15503 3.03717C6.40489 3.07084 5.8923 3.18806 5.44465 3.35973C4.98105 3.53701 4.58859 3.77484 4.19641 4.16073C3.80423 4.54662 3.56352 4.93401 3.38364 5.39089C3.20945 5.83234 3.09051 6.33723 3.05635 7.07651C3.02162 7.81695 3.01367 8.05367 3.01367 9.93956C3.01367 11.8255 3.02162 12.0622 3.05635 12.8026C3.09051 13.542 3.20945 14.0468 3.38364 14.4882C3.56352 14.9448 3.80429 15.3327 4.19641 15.7184C4.58853 16.1041 4.98105 16.3416 5.44465 16.5194C5.89314 16.6911 6.40489 16.8083 7.15503 16.842C7.90675 16.8756 8.14655 16.884 10.0601 16.884C11.9737 16.884 12.2139 16.8762 12.9653 16.842C13.7155 16.8083 14.2277 16.6911 14.6756 16.5194C15.139 16.3416 15.5317 16.1043 15.9239 15.7184C16.3161 15.3325 16.5563 14.9448 16.7367 14.4882C16.9108 14.0468 17.0304 13.5419 17.064 12.8026C17.0981 12.0616 17.1061 11.8255 17.1061 9.93956C17.1061 8.05367 17.0981 7.81695 17.064 7.07651C17.0298 6.33717 16.9108 5.83206 16.7367 5.39089C16.5563 4.93428 16.3154 4.54723 15.9239 4.16073C15.5323 3.77423 15.139 3.53701 14.6762 3.35973C14.2277 3.18806 13.7154 3.07028 12.9658 3.03717C12.2145 3.00351 11.9743 2.99512 10.0607 2.99512C8.14712 2.99512 7.90675 3.00295 7.15503 3.03717Z"
                  fill="currentColor"
                />
              </svg>
            </a>

            <a
              href="Tapakila@gmail.com"
              className="p-3 rounded-full bg-white text-gray-700 group transition-all duration-500 hover:bg-[#ddd5d5] dark:hover:bg-red-600 hover:text-white focus-within:outline-0 focus-within:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M12 13.7L19.4 7H4.6L12 13.7zM22 3c1.1 0 1.99.9 1.99 2L24 19c0 1.1-.89 2-1.99 2H2c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h20z"
                  fill="currentColor"
                />
              </svg>
            </a>

            <a
              href="tel:+261345678910"
              className="p-3 rounded-full bg-white text-gray-700 group transition-all duration-500 hover:bg-[#ddd5d5] dark:hover:bg-red-600 hover:text-white focus-within:outline-0 focus-within:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="20"
                height="20"
                viewBox="0 0 30 30"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="py-14 flex -pt-5 flex-col lg:flex-row justify-between gap-8 border-b border-white">
          <div className="w-full lg:w-auto flex flex-col sm:flex-row lg:items-start items-center gap-6 md:gap-12 lg:gap-24">
            <div className="text-center lg:text-left">
              {["DEVENIR ORGANISATEUR", "CONTACTER NOUS", "A PROPOS"].map(
                (item) => (
                  <h6
                    key={item}
                    className="text-base font-normal text-white whitespace-nowrap transition-all duration-300 dark:hover:text-red-600 hover:text-[#ddd5d5] focus-within:outline-none focus-within:text-red-600"
                  >
                    {item}
                  </h6>
                )
              )}
            </div>
            <div className="text-center lg:text-left">
              {[
                "Culture",
                "Sports & loisirs",
                "Foires et séminaires",
                "Spectacles et concerts",
              ].map((item) => (
                <h6
                  key={item}
                  className="text-base font-normal text-white whitespace-nowrap transition-all duration-300 hover:text-[#ddd5d5] dark:hover:text-red-600 focus-within:outline-none focus-within:text-red-600"
                >
                  {item}
                </h6>
              ))}
            </div>
          </div>

          <div className="w-full lg:max-w-md mx-auto lg:mx-0">
            <h6 className="text-lg font-medium text-white mb-4 lg:mb-7">
              Newsletter
            </h6>
            <div className="bg-gray-200 rounded-3xl p-5">
              <form action="#" className="flex flex-col gap-4">
                <div className="relative">
                  <label className="flex items-center mb-2 text-gray-500 text-base font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    className="block w-full px-5 py-3 text-lg font-normal shadow-xs text-gray-800 bg-white border border-gray-400 rounded-full placeholder-gray-500 focus:outline-none focus:border-gray-500"
                    placeholder="yourmail@gmail.com"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-start">
                    <input
                      id="terms-checkbox"
                      type="checkbox"
                      className="w-5 h-5 cursor-pointer border border-gray-600 rounded-md mr-2 hover:border-gray-400 hover:bg-gray-900 checked:border-gray-400 checked:bg-gray-800 focus:ring-2 focus:ring-gray-500"
                    />
                    <label
                      htmlFor="terms-checkbox"
                      className="text-sm font-normal cursor-pointer text-gray-500"
                    >
                      I agree with{" "}
                      <a href="#" className="text-red-600 underline">
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-red-600 underline">
                        Terms of Service
                      </a>
                    </label>
                  </div>
                  <input
                    type="submit"
                    value="Send"
                    className="text-white text-base font-semibold py-3 px-7 rounded-full cursor-pointer bg-red-700 transition-all duration-300 hover:bg-red-500 hover:text-gray-900"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left mt-0">
          <p className="text-sm sm:text-lg text-gray-400">
            © 2027 Tapakila. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
