import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TablePickersActions from "./table-pickers-actions";

const pickers = [
  {
    name: "John Doe",
    pickUpTime: "2024-06-24 10:00",
    address: "123 Main St",
    phone: "(555) 123-4567",
    materialKg: "15",
  },
  {
    name: "Jane Smith",
    pickUpTime: "2024-06-24 11:00",
    address: "456 Oak Ave",
    phone: "(555) 987-6543",
    materialKg: "20",
  },
  {
    name: "Mike Johnson",
    pickUpTime: "2024-06-24 12:00",
    address: "789 Pine Rd",
    phone: "(555) 555-5555",
    materialKg: "25",
  },
  {
    name: "Emily Davis",
    pickUpTime: "2024-06-24 13:00",
    address: "321 Birch Ln",
    phone: "(555) 666-6666",
    materialKg: "30",
  },
  {
    name: "David Wilson",
    pickUpTime: "2024-06-24 14:00",
    address: "654 Maple Dr",
    phone: "(555) 777-7777",
    materialKg: "35",
  },
  {
    name: "Sarah Brown",
    pickUpTime: "2024-06-24 15:00",
    address: "987 Cedar St",
    phone: "(555) 888-8888",
    materialKg: "40",
  },
  {
    name: "James Taylor",
    pickUpTime: "2024-06-24 16:00",
    address: "159 Elm St",
    phone: "(555) 999-9999",
    materialKg: "45",
  },
];

export default function TablePickers() {
  return (
    <div>
      <TablePickersActions />
      <Table>
        <TableCaption>A list of your recent pickers.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Pick-up Time</TableHead>
            <TableHead>Address</TableHead>
            <TableHead className="text-right">Phone</TableHead>
            <TableHead className="text-right">Material (Kg)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pickers.map((picker) => (
            <TableRow key={picker.name}>
              <TableCell className="font-medium">{picker.name}</TableCell>
              <TableCell>{picker.pickUpTime}</TableCell>
              <TableCell>{picker.address}</TableCell>
              <TableCell className="text-right">{picker.phone}</TableCell>
              <TableCell className="text-right">{picker.materialKg}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell className="text-right">210 Kg</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
