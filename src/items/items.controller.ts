import { Controller, Get, Query } from '@nestjs/common';
import { ItemsService, Item } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  getAllItems(): Item[] {
    return this.itemsService.findAll();
  }

  @Get('search')
  searchItems(@Query('query') query: string): Item[] {
    return this.itemsService.search(query);
  }
}
