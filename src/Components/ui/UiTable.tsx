/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo } from "react";
import UiDropDown from "./UiDropDown";
import styled from "styled-components";
import { Option } from "./UiDropDown";
import UiIcon from "./UiIcon";
import ReactPaginate from "react-paginate";
import { CSVLink } from "react-csv";

interface Header {
  title: string;
  query: string;
}

interface Row extends Record<string, any> {
  id: string;
}

interface Props {
  tableTitle: string;
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
  const [paginationLevel, setPaginationLevel] = useState(0);
  const [postPerPage] = useState(4);

  const paginatedData = useMemo(() => {
    const start = paginationLevel * postPerPage;
    return data.slice(start, start + postPerPage);
  }, [paginationLevel, status]);

  const paginate = ({ selected }: { selected:number }) => setPaginationLevel(selected);

  const filteredData = useMemo(() => {
    if (!status) return paginatedData;
    return paginatedData?.filter((data) => data.status === status);
  }, [status, paginatedData, paginationLevel]);

  const sortedData = useMemo(() => {
    if (!isSearchable && !searchTerm && !fieldsToSearch) return filteredData;
    return filteredData.filter((item) => {
      return fieldsToSearch?.some((key) => {
        const value = item[key];
        if (typeof value === "string")
          return value.toLowerCase().includes(searchTerm.toLowerCase());
        return false;
      });
    });
  }, [data, searchTerm, status, paginationLevel]);

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
          {filterOptions && (
            <UiDropDown
              options={filterOptions}
              defaultSelectedValue=""
              onChange={handleOptionSelect}
            />
          )}
          <CSVLink data={sortedData} className="links">
            <Export>Export</Export>
          </CSVLink>
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
      <div className="pagination-container">
        <ReactPaginate
          previousLabel={<UiIcon icon="ArrowleftIcon" size={20} />}
          nextLabel={<UiIcon icon="ArrowRightIcon" size={20} />}
          forcePage={paginationLevel}
          pageCount={data.length / postPerPage}
          onPageChange={paginate}
          containerClassName={"pagination"}
          disabledClassName={"paginate-disabled"}
          activeClassName={"active"}
        />
      </div>
    </TableContainer>
  );
}

const TableContainer = styled.div`
  border: 1px solid var(--color-primary-400);
  background: var(--color-primary-300);
  height: 450px;
  overflow-x: auto;
  overflow-y: auto;

  .pagination-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding: 5px;
    margin-right: 20px;
    border-radius: 10px;
    border: 1px solid var(--color-primary-400);
  }

  .pagination li {
    display: inline-block;
    margin-right: 20px;
  }

  .pagination li a {
    display: block;
    padding: 5px;
    text-align: center;
    color: var(--color-primary-150);
    border-radius: 15px;
    cursor: pointer;
    font-size: 14px;
  }

  .pagination li.active a {
    background-color: var(--color-primary-350);
    color: var(--color-primary-50);
  }
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
  gap: 10px;
  right: 10px;

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
    margin-left: 10px;
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
  min-width: 100%;
  width: 900px;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: var(--color-primary-300);
  width: 100%;
  border-bottom: 1px solid var(--color-primary-400);
`;

const TableHeadItem = styled.th`
  padding: 12px;
  color: var(--color-gray-100);
  font-size: 14px;
`;

const TableDataItem = styled.td`
  padding: 12px;
  color: var(--color-gray-100);
  font-size: 14px;
  line-height: 20px;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid var(--color-primary-400);
  text-align: right;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: var(--color-gray-50);
  }
`;
