export interface Menu{
  id: number;
  name: string;
  header: string;
  iconClass: string | null;
  parentId: number | null;
  children: null | Menu[];
  sequence: number;
}
