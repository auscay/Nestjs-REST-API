import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-items.dto';
import { ItemsService } from './items.service';
import { Item } from './interface/items.interface';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}
    @Get()
    async findAll(): Promise<Item[]> {
        return await this.itemsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<Item> {
        return await this.itemsService.findOne(id);
    }

    @Post()
    async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
        return await this.itemsService.create(createItemDto);
    }

    @Put(':id')
    async update(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item> {
        return await this.itemsService.update(id, updateItemDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Item> {
    return await this.itemsService.delete(id);
    }


    
}
