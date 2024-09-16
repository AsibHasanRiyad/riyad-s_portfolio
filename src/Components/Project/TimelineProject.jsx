import { Timeline } from "../../Components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div className="space-y-2 ">
          <h1 className="mb-4 text-3xl font-normal bg-transparent ">
            Junior Front-End Developer
          </h1>
          <p className="text-lg ">Rainier Technology</p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="space-y-2">
          <h1 className="mb-4 text-3xl font-normal bg-transparent ">
            Bachelor of Science in Electrical and Electronics Engineering (EEE)
          </h1>
          <p className="text-lg ">
            IUBAT— International University of Business Agriculture and
            Technology
          </p>
          <p className="text-lg ">Passing Year: 2023</p>
          <p className="text-lg ">Result: 3.76 out of 4.00</p>
        </div>
      ),
    },
    {
      title: "2017",
      content: (
        <div className="space-y-2">
          <h1 className="mb-4 text-3xl font-normal bg-transparent ">
            Higher Secondary Certificate
          </h1>
          <p className="text-lg ">Adamjee Cantonment College, Dhaka</p>
          <p className="text-lg ">Passing Year: 2017</p>
          <p className="text-lg ">Result: GPA 5.00</p>
        </div>
      ),
    },
    {
      title: "2015",
      content: (
        <div className="space-y-2">
          <h1 className="mb-4 text-3xl font-normal bg-transparent ">
            Secondary School Certificate
          </h1>
          <p className="text-lg ">Sristy Academic School, Tangail</p>
          <p className="text-lg ">Passing Year: 2015</p>
          <p className="text-lg ">Result: GPA 5.00</p>
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
