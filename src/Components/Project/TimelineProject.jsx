import { Timeline } from "../../Components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div className="space-y-2 ">
          <h1 className="mb-4 text-2xl font-normal text-white bg-transparent ">
            Junior Front-End Developer
          </h1>
          <p className="text-sm text-neutral-300">Rainier Technology</p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="space-y-2">
          <h1 className="mb-4 text-2xl font-normal text-white bg-transparent ">
            Bachelor of Science in Electrical and Electronics Engineering (EEE)
          </h1>
          <p className="text-sm text-neutral-300">
            IUBAT— International University of Business Agriculture and
            Technology
          </p>
          <p className="text-sm text-neutral-300">Passing Year: 2023</p>
          <p className="text-sm text-neutral-300">Result: 3.76 out of 4.00</p>
        </div>
      ),
    },
    {
      title: "2017",
      content: (
        <div className="space-y-2">
          <h1 className="mb-4 text-2xl font-normal  bg-transparent ">
            Higher Secondary Certificate
          </h1>
          <p className="text-sm text-neutral-300">
            Adamjee Cantonment College, Dhaka
          </p>
          <p className="text-sm text-neutral-300">Passing Year: 2017</p>
          <p className="text-sm text-neutral-300">Result: GPA 5.00</p>
        </div>
      ),
    },
    {
      title: "2015",
      content: (
        <div className="space-y-2">
          <h1 className="mb-4 text-2xl font-normal bg-transparent ">
            Secondary School Certificate
          </h1>
          <p className="text-sm text-neutral-300">
            Sristy Academic School, Tangail
          </p>
          <p className="text-sm text-neutral-300">Passing Year: 2015</p>
          <p className="text-sm text-neutral-300">Result: GPA 5.00</p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
