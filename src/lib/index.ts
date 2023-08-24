export type SortFunction<T> = (a: T, b: T) => 1 | -1 | 0;

/** Doubly-Linked List Item
 *  Wraps an item in the list
 */
export class LinkedListItem<T> {
  private _parentList: LinkedList<T>;
  private _value: T;

  constructor(value: T, containingList: LinkedList<T>) {
    this._value = value;
    this._parentList = containingList;
  }

  get value() {
    return this._value;
  }

  next() {
    this._parentList.findNext(this);
  }

  previous() {
    this._parentList.findPrevious(this);
  }
}

/** Linked List (double link)
 *  a linear data structure in which elements are not stored at a contiguous location,
 *  instead, elements are stored using pointers. The List forms a series of connected nodes,
 *  where each node stores data and the address of the next node
 */
export class LinkedList<T> {
  private _items: LinkedListItem<T>[] = [];
  private _sortFunction: SortFunction<T>;

  constructor(items: T[] = [], sort: SortFunction<T>) {
    this._items = items.map((x) => new LinkedListItem<T>(x, this));
    this._sortFunction = sort;
  }

  /** returns the contents of the list as an array */
  get items() {
    return this._items;
  }

  /** retrieves first item in the sorted list */
  get head() {
    return this._items[0];
  }

  /** retrieves the last item in the sorted list */
  get tail() {
    return this._items[this._items.length - 1];
  }

  private sort() {
    this._items.sort((a, b) => {
      return this._sortFunction(a.value, b.value);
    });
  }

  /** returns the next node based on the provided node */
  findNext(current: LinkedListItem<T>) {
    const idx = this._items.findIndex((x) => x.value == current);
    return this._items[idx];
  }

  /** find the previous item in the list */
  findPrevious(current: LinkedListItem<T>) {
    const idx = this._items.findIndex((x) => x.value == current);
    return this._items[idx];
  }

  /** add new element to the LinkedList */
  add(item: T) {
    this._items.push(new LinkedListItem<T>(item, this));
    this.sort();
  }

  /** removes an element from the linked list */
  remove(item: T) {
    const index = this._items.findIndex((x) => x == item);
    if (index === -1) {
      throw new Error("Element not found");
    }
    this._items = this._items.filter((_, idx) => idx !== index);
  }

  /** converts the stored items back to their original value */
  toArray() {
    return this._items.map((linkedListItem) => linkedListItem.value);
  }
}
