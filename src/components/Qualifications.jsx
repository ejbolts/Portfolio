import education from "../data/education";
import workExperience from "../data/workExperience";
import certs from "../data/certs";

const Experience = () => {
  return (
    <div>
      <div className="rounded-2xl border-2 border-zinc-300 p-6  dark:border-zinc-700 duration-1000">
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
        <h2 className="flex pt-6 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-zinc-600 dark:fill-zinc-500 transition-colors duration-300"
            height="25px"
            width="25px"
            version="1.1"
            viewBox="0 0 489.6 489.6"
          >
            <g>
              <g>
                <path d="m404.35,297.5c27.1-22.3 43.6-55.5 43.6-91.3 0-30.9-11.3-58.9-30.2-79.7v-116.1c0-6.3-4.2-10.4-10.4-10.4h-363.6c-6.3,0-10.4,4.2-10.4,10.4v468.8c0,6.3 4.2,10.4 10.4,10.4h363.5c5.2,0 10.4-4.2 10.4-10.4v-58.6l38.6-13.3-51.9-109.8zm23.8-91.3c-0.1,38.6-21.9,73-56.3,88.6-12.5,5.2-26,8.3-40.6,8.3-53.1,0-96.9-43.8-96.9-96.9s43.8-96.9 96.9-96.9 95.8,42.7 96.9,96.9zm-136.3,110.1l-21.1,93-40.6-14.5 42.2-87.3c6.2,3.5 12.7,6.5 19.5,8.8zm105,152.5h-342.7v-448h342.7v87.6c-18.6-12.6-41.1-19.9-65.6-19.9-27.2,0-52.1,9.1-71.9,24.4v-0.5h-138.6v20.8h118c-15.8,20.1-25.3,45.5-25.3,72.9 0,9.7 1.2,19.1 3.4,28.1h-96.1v20.8h103.4c7.2,15.6 17.7,29.2 30.7,40.2l-28.8,60.9h-105.3v20.8h95.5l-14.3,30.2 84.4,29.2 26.3-115c6,0.9 12.2,1.4 18.5,1.4 4.8,0 9.7-0.3 14.5-0.8l26.2,114.3 25-8.6v41.2zm-9.4-59.4l-20.7-91.4c4.3-1.2 17.6-7 20.2-8.5l41.1,85.3-40.6,14.6z" />
                <path d="m306.15,170.9l-54.2,8.3 39.6,38.5-9.4,54.2 49-24 47.9,25-9.3-54.1 38.5-39.6-54.2-8.3-23.9-49-24,49zm35.4,19.8l22.9,3.1-16.7,16.7 4.3,22.8-20.8-10.4-20.8,11.5 4.2-24-16.8-16.6 22.9-3.1 10.4-20.8 10.4,20.8z" />
              </g>
            </g>
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
