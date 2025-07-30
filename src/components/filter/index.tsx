"use client";

import { useState } from "react";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerDescription,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";

import styles from "./filter.module.css";

type Item = {
  label: string;
  value: string;
};

type Props = {
  title: string;
  name: string;
  type: "range" | "select" | "switch";
  items?: Item[];
  placeHolder?: string;
  prefixLabel?: string;
  secondItems?: Item[];
  secondPlaceHolder?: string;
  secondPrefixLabel?: string;
};

export default function Filter({
  title,
  name,
  type,
  items = [],
  placeHolder = "",
  prefixLabel = "",
  secondItems = [],
  secondPlaceHolder = "",
  secondPrefixLabel = "",
}: Props) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const [active, setActive] = useState(false);

  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const [secondOpen, setSecondOpen] = useState(false);
  const [selectedSecondItem, setSelectedSecondItem] = useState<Item | null>(
    null
  );

  return (
    <div className={styles.container}>
      <div className={styles.filterHeader}>
        <button className={styles.button} onClick={() => setActive(!active)}>
          <i
            className={`${
              active ? styles.buttonArrowActive : ""
            } icon-chevron-down`}
          ></i>
          <span className={styles.title}>{title}</span>
        </button>
      </div>

      <div className={`${styles.content} ${!active ? styles.height0 : ""}`}>
        {type === "range" && (
          <>
            {isDesktop ? (
              <>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={`${styles.selectBox} ${
                        selectedItem && styles.selectBoxTextActive
                      }`}
                    >
                      {selectedItem
                        ? `${prefixLabel} ${selectedItem.label}`
                        : placeHolder}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className={styles.selectBoxContent}
                    align="start"
                  >
                    <StatusList
                      items={items}
                      setOpen={setOpen}
                      setSelectedItem={setSelectedItem}
                    />
                  </PopoverContent>
                </Popover>

                <Popover open={secondOpen} onOpenChange={setSecondOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={`${styles.selectBox} ${
                        selectedSecondItem && styles.selectBoxTextActive
                      }`}
                    >
                      {selectedSecondItem
                        ? `${secondPrefixLabel} ${selectedSecondItem.label}`
                        : secondPlaceHolder}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className={styles.selectBoxContent}
                    align="start"
                  >
                    <StatusList
                      items={secondItems}
                      setOpen={setSecondOpen}
                      setSelectedItem={setSelectedSecondItem}
                    />
                  </PopoverContent>
                </Popover>
              </>
            ) : (
              <>
                <Drawer open={open} onOpenChange={setOpen} autoFocus={open}>
                  <DrawerTrigger asChild>
                    <Button
                      variant="outline"
                      className={`${styles.selectBox} ${
                        selectedItem && styles.selectBoxTextActive
                      }`}
                    >
                      {selectedItem
                        ? `${prefixLabel} ${selectedItem.label}`
                        : placeHolder}
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerTitle />
                    <DrawerDescription />
                    <div className="mt-4 border-t">
                      <StatusList
                        items={items}
                        setOpen={setOpen}
                        setSelectedItem={setSelectedItem}
                      />
                    </div>
                  </DrawerContent>
                </Drawer>

                <Drawer
                  open={secondOpen}
                  onOpenChange={setSecondOpen}
                  autoFocus={secondOpen}
                >
                  <DrawerTrigger asChild>
                    <Button
                      variant="outline"
                      className={`${styles.selectBox} ${
                        selectedSecondItem && styles.selectBoxTextActive
                      }`}
                    >
                      {selectedSecondItem
                        ? `${secondPrefixLabel} ${selectedSecondItem.label}`
                        : secondPlaceHolder}
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerTitle />
                    <DrawerDescription />
                    <div className="mt-4 border-t">
                      <StatusList
                        items={secondItems}
                        setOpen={setSecondOpen}
                        setSelectedItem={setSelectedSecondItem}
                      />
                    </div>
                  </DrawerContent>
                </Drawer>
              </>
            )}
          </>
        )}

        {type === "select" && (
          <>
            {isDesktop ? (
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={`${styles.selectBox} ${
                      selectedItem && styles.selectBoxTextActive
                    }`}
                  >
                    {selectedItem
                      ? `${prefixLabel} ${selectedItem.label}`
                      : placeHolder}
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className={styles.selectBoxContent}
                  align="start"
                >
                  <StatusList
                    items={items}
                    setOpen={setOpen}
                    setSelectedItem={setSelectedItem}
                  />
                </PopoverContent>
              </Popover>
            ) : (
              <Drawer open={open} onOpenChange={setOpen} autoFocus={open}>
                <DrawerTrigger asChild>
                  <Button
                    variant="outline"
                    className={`${styles.selectBox} ${
                      selectedItem && styles.selectBoxTextActive
                    }`}
                  >
                    {selectedItem
                      ? `${prefixLabel} ${selectedItem.label}`
                      : placeHolder}
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerTitle />
                  <DrawerDescription />
                  <div className="mt-4 border-t">
                    <StatusList
                      items={items}
                      setOpen={setOpen}
                      setSelectedItem={setSelectedItem}
                    />
                  </div>
                </DrawerContent>
              </Drawer>
            )}
          </>
        )}

        {type === "switch" && (
          <div className={styles.switchContainer}>
            <span className={styles.switchPlaceholder}>{placeHolder}</span>
            <Switch
              className={`${styles.switch} rtl:flex-row-reverse rtl:justify-between`}
            />
          </div>
        )}
      </div>
    </div>
  );
}

function StatusList({
  setOpen,
  setSelectedItem,
  items,
}: {
  setOpen: (open: boolean) => void;
  setSelectedItem: (status: Item | null) => void;
  items: Item[];
}) {
  return (
    <Command className={styles.commandContainer}>
      <CommandInput placeholder="جستجو" />
      <CommandList className={styles.commandListContainer}>
        <CommandEmpty>نتیجه ای یافت نشد</CommandEmpty>
        <CommandGroup>
          {items.map((status) => (
            <CommandItem
              key={status.value}
              value={status.value}
              onSelect={(value) => {
                setSelectedItem(
                  items.find((priority) => priority.value === value) || null
                );
                setOpen(false);
              }}
              className={styles.selectBoxItem}
            >
              {status.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
