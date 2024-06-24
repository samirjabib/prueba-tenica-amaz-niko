import TablePickersForm from "./table-pickers-form/table-pickers-form";
import TablePickersMap from "./table-pickers-map/table-pickers-map";

export default function TablePickersActions() {
  return (
    <div className="flex flex-col items-center md:flex-row gap-y-4 md:justify-between mb-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Pickers
      </h1>
      <div className="flex flex-row gap-x-4">
        <TablePickersMap />
        <TablePickersForm />
      </div>
    </div>
  );
}
