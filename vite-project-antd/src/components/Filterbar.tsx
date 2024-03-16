import { FC, CSSProperties, useCallback, KeyboardEvent, useState } from "react";
import { Flex, Tabs, Input, Select } from "antd";
import type { TabsProps, SelectProps } from "antd";

export type TFilterbarProps = {
  onTabs: (key: string) => void;
  currentTabs: string;
  selectValue: string;
  onSelect: (value: string) => void;
  onFilterInput: (value?: string) => void;
};

const filterbarStyle: CSSProperties = {
  padding: "5px",
};

const tabs: TabsProps["items"] = [
  {
    key: "1",
    label: "Курсы",
  },
  {
    key: "2",
    label: "Термины",
  },
];

const select: SelectProps["options"] = [
  {
    value: "all",
    label: "Фильтровать",
  },
  {
    value: "passed",
    label: <span>Пройденные</span>,
  },
  {
    value: "new",
    label: <span>Новые</span>,
  },
];

export const Filterbar: FC<TFilterbarProps> = (props) => {
  const { onTabs, currentTabs, selectValue, onSelect, onFilterInput } = props;

  const onChange = useCallback((key: string) => {
    onTabs(key);
  }, []);

  const onKeyDownInput = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    onFilterInput(e.target.value);
  }, []);

  return (
    <Flex style={filterbarStyle} gap={20} align="center" justify="space-between">
      <Tabs style={{ flex: "2" }} defaultActiveKey={currentTabs} items={tabs} onChange={onChange}></Tabs>
      <Select
        style={{ minWidth: "130px" }}
        defaultValue={selectValue}
        options={select}
        onChange={(e) => onSelect(e.target.value)}
      ></Select>
      <Flex>
        <Input style={{ flex: "1" }} placeholder="Поиск..." allowClear onChange={(e) => onKeyDownInput(e)} />
      </Flex>
    </Flex>
  );
};
