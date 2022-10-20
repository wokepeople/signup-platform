import { Close } from "@suid/icons-material";
import Box from "@suid/material/Box";
import IconButton from "@suid/material/IconButton";
import List from "@suid/material/List";
import ListItem from "@suid/material/ListItem";
import ListItemButton from "@suid/material/ListItemButton";
import ListItemText from "@suid/material/ListItemText";
import Stack from "@suid/material/Stack";
import TextField from "@suid/material/TextField";
import { createEffect, createMemo, For, Ref, Show } from "solid-js";
import { inputModel } from "../forms/utils";

import * as Store from "../store/select.store";
import { SelectableRow } from "./selectable-row.component";

export const Selector = () => {

  const handleSelectItem = (label: string) => {
    Store.selectItem(label);
    Store.showStore(false);
    searchInput.setValue("");
  };
  
  const handleClose = () => {
    Store.showStore(false);
    searchInput.setValue('');
  }

  
  const searchInput = inputModel("search");

  const filteredItems = createMemo(() => Store.getSelectStore.items.filter(item => item.label.toLocaleLowerCase().includes(searchInput.getValue())));

  let input: HTMLDivElement;

  createEffect(() => {
    if (Store.getSelectStore.showing == true) {
      console.log(input);

      input.querySelector('input').focus();
    }
  })

  return (
    <Show when={Store.getSelectStore.showing}>
      <Box
        zIndex={10}
        backgroundColor={"white"}
        displayRaw={"flex"}
        flexDirection={"column"}
        position="fixed"
        top={0}
        bottom={0}
        right={0}
        left={0}
      >
        <Box
          pr={"0.5rem"}
          pt={"0.5rem"}
          pl={"0.5rem"}
          displayRaw={"flex"}
          alignItems={'center'}
          justifyContent={"flex-end"}
        >
          <TextField
            onChange={searchInput._inputFunctions.onChange}
            id="level"
            sx={{

            }}
            ref={input}
            label="filtre os resultados"
            variant="outlined"
            fullWidth
          />
          <Box>
            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </Box>
        </Box>
        <Box overflow={"auto"}>
          <List>
            <For each={filteredItems()}>
              {(item) => (
                <SelectableRow
                  onClick={() => handleSelectItem(item.label)}
                >
                  {item.label}
                </SelectableRow>
              )}
            </For>
          </List>
        </Box>
      </Box>
    </Show>
  );
};
