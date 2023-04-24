import UiTable from "../Components/UI/UiTable";
import { TransactionHistory } from "../data/TarnsactionHistory";
export default function Transactionhistory() {
  const headers = [
    {
      title: "Transaction ID",
      query: "id",
    },
    {
      title: "Source",
      query: "source",
    },
    {
      title: "Customer email",
      query: "customer_name",
    },
    {
      title: "Customer email",
      query: "customer_email",
    },
    {
      title: "Amount",
      query: "amount",
    },
    {
      title: "Request date",
      query: "created_date",
    },
    {
      title: "Status",
      query: "status",
    },
  ];

  const filterOptions = [
    { label: "All", value: "" },
    { label: "Pending", value: "pending" },
    { label: "Success", value: "success" },
  ];

  return (
    <div>
      <UiTable
        data={TransactionHistory}
        fieldsToSearch={["customer_name"]}
        isSearchable
        tableTitle="Transaction History"
        headers={headers}
        filterOptions={filterOptions}
      />
    </div>
  );
}
