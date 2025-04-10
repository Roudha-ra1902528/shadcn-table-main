import { TableCell, TableRow } from "@/components/ui/table";

export default function DataTableCollapsible() {
    const visitors = [
        {
          id: "user001",
          name: "Alice Johnson",
          totalDuration: "5m 32s",
          completionRate: 0.75, // Optional, for the Gauge component
        },
        {
          id: "user002",
          name: "Bob Smith",
          totalDuration: "2m 15s",
          completionRate: 0.4,
        },
        {
          id: "user003",
          name: "Charlie Davis",
          totalDuration: "8m 01s",
          completionRate: 0.9,
        },
      ];

  return (
    <>
      {visitors ? ( 
        visitors.map((visitor) => (
          <TableRow key={visitor.id} className="flex justify-between">
            <TableCell >{visitor.name}</TableCell>
            <TableCell >{visitor.totalDuration}</TableCell>
            <TableCell>
              <h2>gauge</h2>
            </TableCell>
          </TableRow>
        ))
      ) : null}
    </>
  );
}
