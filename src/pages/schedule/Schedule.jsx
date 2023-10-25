const Schedule = () => {
  return (
    <>
      <section className="max-w-screen-xl mx-auto flex-col-reverse  lg:flex-row justify-between items-center  bg-white dark:bg-gray-900 antialiased flex ">
        <div className=" px-4 py-8  lg:px-6 sm:py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
              Schedule
            </h2>

            <div className="mt-4">
              <a
                title=""
                className="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Learn more about our agenda
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
            <div className="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
              <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  08:00 - 09:00
                </p>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  <a className="hover:underline">
                    Registration and Morning Refreshments
                  </a>
                </h3>
              </div>

              <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  09:00 - 10:00
                </p>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  <a className="hover:underline">
                    Welcome and Icebreaker Activity
                  </a>
                </h3>
              </div>

              <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  10:00 - 11:00
                </p>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  <a className="hover:underline">Team Building Challenges</a>
                </h3>
              </div>

              <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  11:00 - 12:00
                </p>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  <a className="hover:underline">Collaborative Project Work</a>
                </h3>
              </div>

              <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  12:00 - 13:00
                </p>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  <a className="hover:underline">
                    Communication Skills Workshop
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://i.ibb.co/djSr57q/387437558-1443581489821268-6304650632457787407-n.gif"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default Schedule;
