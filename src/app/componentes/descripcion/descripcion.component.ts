import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css'],
})
export class DescripcionComponent implements OnInit {
  productos = [
    {
      id: 1001,
      titulo: 'Zapatos adidas De Damas',
      precio: 'U$S 17',
      envio: 'Si',
      ubicacion: 'Tachira-Tachira',
      disponibles: 30,
      vendidos: 99,
      opiniones: 15,
      img: 'https://http2.mlstatic.com/D_NQ_NP_832603-MLV48896568637_012022-O.webp',
    },
    {
      id: 1002,
      titulo: 'Sweater con Capucha',
      precio: 'U$S 54',
      envio: 'Envio Gratis',
      ubicacion: 'Mun. Libertador (Noreste), Distrito Capital',
      disponibles: 15,
      vendidos: 5,
      opiniones: 4,
      img: 'https://http2.mlstatic.com/D_NQ_NP_715920-MLV48484779554_122021-O.webp',
    },
    {
      id: 1003,
      titulo: 'Zapato Nike Running',
      precio: 'U$S 149',
      envio: 'No',
      ubicacion: 'Mun. Libertador (Noreste), Distrito Capital',
      disponibles: 5,
      vendidos: 1,
      opiniones: 0,
      img: 'https://http2.mlstatic.com/D_NQ_NP_664739-MLV46294594949_062021-O.webp',
    },
    {
      id: 1004,
      titulo: 'Fajas Termica Reductora',
      precio: 'U$S 19',
      envio: 'Si',
      ubicacion: 'Mun. Libertador (Noreste), Distrito Capital',
      disponibles: 73,
      vendidos: 93,
      opiniones: 10,
      img: 'https://http2.mlstatic.com/D_NQ_NP_937047-MLV49561987039_042022-O.webp',
    },
    {
      id: 1005,
      titulo: 'Joggers de Caballero',
      precio: 'U$S 18',
      envio: 'Si',
      ubicacion: 'Cabudare-Lara',
      disponibles: 50,
      vendidos: 202,
      opiniones: 8,
      img: 'https://http2.mlstatic.com/D_NQ_NP_902153-MLV47577121997_092021-O.webp',
    },
  ];
  productoId: any = 0;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('cargo descripcion');
    this.getProducto();
  }

  getProducto(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.productoId = id;
  }
}
