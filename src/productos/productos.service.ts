import { Injectable, NotFoundException } from '@nestjs/common';
@Injectable()
export class ProductosService {
    private productos0 = [
        {
            id: 1,
            nombre: 'Xiaomi 14 Ultra',
            categoria: 'Telefonos'
        },
        {
            id: 2,
            nombre: 'Xiaomi 14',
            categoria: 'Telefonos'
        },
        {
            id: 3,
            nombre: 'Xiaomi 13T',
            categoria: 'Telefonos'
        },
        {
            id: 4,
            nombre: 'Xiaomi 12T pro',
            categoria: 'Telefonos'
        },
        {
            id: 5,
            nombre: 'Xiaomi 12',
            categoria: 'Telefonos'
        }
    ];

    findAll() {
        return this.productos0;
    }

 
    findById(id: number) {
        console.log('Buscando producto con ID:', id);
        console.log('Lista de productos:', this.productos0);
        const prod = this.productos0.find(p => p.id == id);
        console.log('Producto encontrado:', prod);
        if (!prod) throw new NotFoundException(`Producto con el id '${id}' no encontrado`);
        return prod;
    }
    
    


    create(producto: any) {
        this.productos0.push(producto);
    }

    update(id: number, producto: any) {
        const index = this.productos0.findIndex(p => p.id == id);
        if (index !== -1) {
            this.productos0[index] = { ...producto, id };
        }
    }

    delete(id: number) {
        const index = this.productos0.findIndex(p => p.id == id);
        if (index !== -1) {
            this.productos0.splice(index, 1);
        }
    }
}


