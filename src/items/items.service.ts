import { Injectable } from '@nestjs/common';

export interface Item {
  id: number;
  name: string;
}

@Injectable()
export class ItemsService {
  private items: Item[] = [
    { id: 1, name: 'iPhone 13' },
    { id: 2, name: 'Samsung Galaxy S21' },
    { id: 3, name: 'Google Pixel 6' },
    { id: 4, name: 'OnePlus 9' },
    { id: 5, name: 'Xiaomi Mi 11' },
    { id: 6, name: 'Oppo Find X3' },
    { id: 7, name: 'Sony Xperia 5 II' },
    { id: 8, name: 'Huawei P40 Pro' },
    { id: 9, name: 'Nokia 8.3 5G' },
    { id: 10, name: 'Motorola Edge 20' },
  ];

  findAll(): Item[] {
    return this.items;
  }

  search(query: string): Item[] {
    return this.items.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase()),
    );
  }
}
