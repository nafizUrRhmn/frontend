export interface Menu{
  id: number;
  name: string;
  header: string;
  iconClass: string | null;
  parentId: number | null;
  sequence: number;
}
