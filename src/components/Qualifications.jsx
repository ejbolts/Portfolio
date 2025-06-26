import education from "../data/education";
import workExperience from "../data/workExperience";
import certs from "../data/certs";

const Experience = () => {
  return (
    <div>
      <div className="rounded-2xl border-2 border-zinc-300 p-6  dark:border-zinc-700 duration-1000">
        {/* Work Section */}
        <h2 className="flex  text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          <svg
            className="w-6 h-6 stroke-zinc-500 dark:stroke-zinc-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
          <span className="ml-3">Work</span>
        </h2>
        {workExperience.map((workExperience) => (
          <ol className="mt-6 space-y-4" key={workExperience.worktitle}>
            <li className="flex gap-4">
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <img
                  src={workExperience.workimgUrl}
                  alt=""
                  className="rounded-full"
                  loading="lazy"
                />
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {workExperience.worktitle}
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  {workExperience.workrole}
                </dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label="2019 until Present"
                >
                  {workExperience.workdate}
                </dd>
              </dl>
            </li>
          </ol>
        ))}

        {/* Education Section */}
        <h2 className="flex pt-6 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          <svg
            className="w-6 h-6 stroke-zinc-500 dark:stroke-zinc-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            ></path>
          </svg>
          <span className="ml-3">Education</span>
        </h2>
        {education.map((education) => (
          <ol className="mt-6 space-y-4" key={education.schooltitle}>
            <li className="flex gap-4">
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <img
                  src={education.schoolimgUrl}
                  alt=""
                  className="rounded-full "
                  loading="lazy"
                />
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {education.schooltitle}
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  {education.schoolrole}
                </dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label="2019 until Present"
                >
                  {education.schooldate}
                </dd>
              </dl>
            </li>
          </ol>
        ))}

        {/* Certifications Section */}
        <h2 className="flex pt-6 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          <svg
            className="w-6 h-6 stroke-amber-500 dark:stroke-amber-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="ml-3">Certifications</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {certs.map((cert) => (
            <li className="flex gap-4" key={cert.title}>
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 bg-white">
                {cert.imgUrl ? (
                  <img
                    src={cert.imgUrl}
                    alt={cert.title}
                    className="rounded-full"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-xs text-gray-400">No Image</span>
                )}
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Certification</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                  <a href={`${cert.link}`}>{cert.title}</a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="12"
                    height="12"
                    viewBox="0 0 128 128"
                    className="fill-zinc-900 dark:fill-zinc-100 transition-colors duration-300"
                  >
                    <path d="M 84 11 C 82.3 11 81 12.3 81 14 C 81 15.7 82.3 17 84 17 L 106.80078 17 L 60.400391 63.400391 C 59.200391 64.600391 59.200391 66.499609 60.400391 67.599609 C 61.000391 68.199609 61.8 68.5 62.5 68.5 C 63.2 68.5 63.999609 68.199609 64.599609 67.599609 L 111 21.199219 L 111 44 C 111 45.7 112.3 47 114 47 C 115.7 47 117 45.7 117 44 L 117 14 C 117 12.3 115.7 11 114 11 L 84 11 z M 24 31 C 16.8 31 11 36.8 11 44 L 11 104 C 11 111.2 16.8 117 24 117 L 84 117 C 91.2 117 97 111.2 97 104 L 97 59 C 97 57.3 95.7 56 94 56 C 92.3 56 91 57.3 91 59 L 91 104 C 91 107.9 87.9 111 84 111 L 24 111 C 20.1 111 17 107.9 17 104 L 17 44 C 17 40.1 20.1 37 24 37 L 69 37 C 70.7 37 72 35.7 72 34 C 72 32.3 70.7 31 69 31 L 24 31 z"></path>
                  </svg>
                </dd>

                <dt className="sr-only">About</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  {cert.about}
                </dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label="2019 until Present"
                >
                  {cert.date}
                </dd>
              </dl>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Experience;
