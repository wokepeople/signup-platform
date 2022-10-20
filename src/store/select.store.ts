import { Accessor, createMemo } from "solid-js";
import { createStore } from "solid-js/store";

export type SelectItem = {
  value: any;
  label: string;
};

let selectedItem: Accessor<SelectItem>;
const [getSelectStore, setSelectStore] = createStore({
  items: [] as SelectItem[],
  selectedLabel: undefined as string | undefined,
  onSelect: (() => { }) as  (item: SelectItem) => any,
  showing: false,
  get selectedItem() {
    return selectedItem();
  }
});

selectedItem = createMemo(() =>
  getSelectStore.items.find(item => item.label === getSelectStore.selectedLabel)
);


const showStore = (show: boolean) => setSelectStore({ showing: show });

const setItems = (items: SelectItem[], onSelectCallback: (item: SelectItem) => any) => {
  setSelectStore({ items, onSelect: onSelectCallback });  
};

const selectItem = (label: string) => {
  setSelectStore({ selectedLabel: label });
  getSelectStore.onSelect(
    getSelectStore.items.find(
      (item) => item.label === getSelectStore.selectedLabel
    )
  );
};


export { getSelectStore, showStore, setItems, selectItem };