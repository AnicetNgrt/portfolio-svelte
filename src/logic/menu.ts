import { writable } from "svelte/store";

export type Menu = {
    open: boolean;
}

export const menu = writable<Menu>({
    open: false
});