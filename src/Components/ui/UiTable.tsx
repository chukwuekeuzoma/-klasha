import React, { useState, useMemo } from "react";
import UiFilterDropDown from "./UiFilterDropDown";
import styled from "styled-components";
import { Option } from "./UiFilterDropDown";
import UiIcon from "./UiIcon";
import TransactionHistoryData from "../../types/TransactionHistoryData";

interface Header {
  title: string;
  query: string;
}

interface Row extends Record<string, any> {
  id: string;
}

interface Props {
  tableTitle?: string;
  data: Row[];
  headers: Header[];
  filterOptions?: Option[];
  isSearchable: boolean;
  fieldsToSearch: string[];
}

export default function UiTable({
  data,
  headers,
  tableTitle,
  fieldsToSearch,
  isSearchable,
  filterOptions,
}: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("");

  const filteredData = useMemo(() => {
    if (!status) return data;
    return data?.filter((data) => data.status === status);
  }, [status, data]);

  const useFilterdData = useMemo(() => {
    return filteredData?.map((data: TransactionHistoryData) => ({
      ...data,
    }));
  }, [filteredData]);

  const sortedData = useMemo(() => {
    if (!isSearchable && !searchTerm && !fieldsToSearch) return useFilterdData;
    return useFilterdData.filter((item) => {
      return fieldsToSearch?.some((key) => {
        const value = item[key];
        if (typeof value === "string")
          return value.toLowerCase().includes(searchTerm.toLowerCase());
        return false;
      });
    });
  }, [data, searchTerm]);

  const options = [
    { label: "Pending", value: "pending" },
    { label: "Success", value: "success" },
  ];

  const handleOptionSelect = (selectedOption: string) => {
    setStatus(selectedOption);
  };

  return (
    <TableContainer>
      <TableTitle>{tableTitle}</TableTitle>
      <SearchableContainer>
        <SearchInputContainer>
          <input
            placeholder="Search"
            name="searchTerm"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value as string);
            }}
          />
          <div className="search-icon-container">
            <UiIcon icon="SearchIcon" size={20} />
          </div>
        </SearchInputContainer>
        <div className="filter-export-container">
          <UiFilterDropDown
            options={options}
            defaultSelectedValue=""
            onChange={handleOptionSelect}
          />
          <Export>Export</Export>
        </div>
      </SearchableContainer>
      <Table>
        <TableHeader>
          <TableRow>
            {headers?.map((header, index) => (
              <TableHeadItem key={index}>{header.title}</TableHeadItem>
            ))}
          </TableRow>
        </TableHeader>
        <tbody>
          {sortedData?.map((item) => {
            return (
              <TableRow key={item.id}>
                {headers?.map((header, index) => {
                  return (
                    <TableDataItem key={index}>
                      <div>{item[header.query]}</div>
                    </TableDataItem>
                  );
                })}
              </TableRow>
            );
          })}
        </tbody>
      </Table>
    </TableContainer>
  );
}

const TableContainer = styled.div`
  border: 1px solid var(--color-primary-400);
  background: var(--color-primary-300);
  min-height: 70vh;
  overflow-x: auto;
  overflow-y: auto;
`;

const TableTitle = styled.div`
  border-bottom: 1px solid var(--color-primary-400);
  padding: 15px;
  color: var(--color-primary-50);
  font-size: 18px;
`;

const SearchableContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-primary-400);
  padding: 10px;

  .filter-export-container {
    display: flex;
    align-items: center;
  }
`;

const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 200px;

  .search-icon-container {
    position: absolute;
    margin-right: 12px;
    right: 0;
  }

  input {
    outline: 0;
    border-width: 1px;
    width: 200px;
    border: 1px solid var(--color-primary-400);
    border-radius: 5px;
    background: none;
    height: 30px;
    position: relative;
    padding-left: 10px;
  }

  input:focus {
    border-color: var(--color-primary-150);
  }
`;

const Export = styled.div`
  padding: 10px;
  background-color: var(--color-primary-300);
  border: 1px solid var(--color-primary-50);
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  text-align: center;
  margin-left: 20px;
`;

const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: var(--color-primary-300);
  width: 100%;
  border-bottom: 1px solid var(--color-primary-400);
`;

const TableHeadItem = styled.th`
  padding: 12px 24px;
  color: var(--color-gray-100);
  font-size: 14px;
`;

const TableDataItem = styled.td`
  padding: 12px 24px;
  color: var(--color-gray-100);
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid var(--color-primary-400);
  text-align: left;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;
`;
