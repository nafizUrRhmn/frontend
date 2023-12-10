import {Component} from "@angular/core";

export interface Menu{
  id: number;
  name: string;
  header: string;
  iconClass: string | null;
  parentId: number | null;
  children: null | Menu[];
  sequence: number;
  component: any | null;
}
