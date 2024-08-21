export const Experience = () => {
  return (
    <div>
      <h1 className="font-medium text-gray-900 mb-4 text-lg">Education</h1>
      <ol className="relative border-s border-gray-200">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -start-1.5 border"></div>
          <div className="flex flex-row items-center gap-2">
            <div className="text-md font-medium text-gray-900">
              Computer Science
            </div>
            <div className="inline-block uppercase text-xs rounded-full px-1 py-0 border border-gray-500 text-gray-500">
              present
            </div>
          </div>
          <div className="mb-4 text-sm font-normal text-gray-500">
            <a
              className="hover:text-gray-700"
              href="https://www.maastrichtuniversity.nl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Maastricht University
            </a>
          </div>
        </li>
        <li className="ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border"></div>
          <div className="text-md font-medium text-gray-900">
            Automation Technician
          </div>
          <div className="mb-4 text-sm font-normal text-gray-500">
            <a
              className="hover:text-gray-700"
              href="https://www.zspkleszczow.pl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Secondary Technical School of Modern Technologies
            </a>
          </div>
        </li>
      </ol>
    </div>
  );
};
