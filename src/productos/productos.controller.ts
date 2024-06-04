import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
    constructor(private readonly productosService: ProductosService) { }

    @Get()
    getAllProductos() {
        return this.productosService.findAll();
    }


    @Get(':id')
    getProductosById(@Param('id') id: number) {
        console.log('ID del producto:', id);
        return this.productosService.findById(id);
    }


    @Post()
    createProducto(@Body() producto: any) {
        this.productosService.create(producto);
    }

    @Put(':id')
    updateProducto(@Param('id') id: number, @Body() producto: any) {
        this.productosService.update(id, producto);
    }

    @Delete(':id')
    deleteProducto(@Param('id') id: number) {
        this.productosService.delete(id);
    }
}
