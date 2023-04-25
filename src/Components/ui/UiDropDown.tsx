import React, { useState } from "react";
import styled from "styled-components";
import UiIcon from "./UiIcon";

export interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  options: Option[];
  defaultSelectedValue: string;
  onChange: (selectedValue: string) => void;
}

export default function FilterDropdown({
  options,
  defaultSelectedValue,
  onChange,
}: DropdownProps) {
  const [selectedValue, setSelectedValue] =
    useState<string>(defaultSelectedValue);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (selectedValue: string) => {
    setSelectedValue(selectedValue);
    setIsOpen(false);
    onChange(selectedValue);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={handleButtonClick}>
        <span>
          {selectedValue
            ? options.find((option) => option.value === selectedValue)?.label
            : "Filter"}
        </span>
        <UiIcon icon="FliterIcon" size={10}/>
      </DropdownButton>
      {isOpen && (
        <DropdownMenu>
          {options.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => handleMenuItemClick(option.value)}
            >
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
}

const DropdownContainer = styled.div`
  display: inline-block;
  position: relative;
`;

const DropdownButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: var(--color-primary-300);
  border: 1px solid var(--color-primary-50);
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;

  svg {
    stroke: var(--color-primary-100);
    fill: var(--color-primary-100);
    margin-left: 5px;
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: var(--color-primary-300);
  border: 1px solid var(--color-primary-400);
  border-top: none;
  border-radius: 0 0 4px 4px;
  z-index: 1;
  font-size: 12px;
`;

const DropdownMenuItem = styled.li`
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-primary-350);
  }
`;
