import {Injectable} from '@nestjs/common';
import {MainBannerModel} from '../../common/data-models/main-banner.model';
import {GoodsGridModel} from '../../common/data-models/goods-grid.model';
import {CategoryModel} from '../../common/data-models/category.model';
import {FilterType} from '../../common/data-models/filter.model';

@Injectable()
export class MockService {
  getMainPageMock(): MainBannerModel {
    return {
      collection: {
        title: 'Modern Iconoc',
        subtitle: 'AW22',
        url: 'catalog/iconic-aw22'
      },
      data: this.arrayCut(2, this.getGoods()),
      recommendations: this.arrayCut(4, this.getGoods())
    };
  }

  getCategoryMock(url: string): CategoryModel {
    return {
      filters: [
        {
          type: FilterType.SIZE,
          title: 'Размеры',
          data: [
            {label: '33.5', value: '33.5'},
            {label: '34.5', value: '34.5'},
            {label: '35', value: '35'},
            {label: '36', value: '36'},
            {label: '36.5', value: '36.5'},
            {label: '37', value: '37'},
            {label: '37.5', value: '37.5'},
            {label: '38', value: '38'}
          ]
        }
      ],
      breadCrumbs: this.makeBreadCrumbs(url),
      data: this.getGoods()
    };
  }

  arrayCut(length: number, arr) {
    const data = [];
    let counter = 0;
    while (counter < length) {

      if (arr[counter] != null) {
        data.push(arr[counter]);
      }

      counter += 1;
    }

    return data;
  }

  getGoods() {
    return this.shuffle<GoodsGridModel>(this.goodsGridModel);
  }

  private shuffle<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  private makeBreadCrumbs(url: string) {
    return [this.mainMenu.filter(val => val.value == url)[0], this.shuffle(this.subMenu)[0]];
  }

  private mainMenu = [
    {label: 'Женщинам', value: 'women'},
    {label: 'Мужчинам', value: 'men'},
    {label: 'Детям', value: 'children'},
    {label: 'Тренды', value: 'trends'},
    {label: 'Новинки', value: 'latest'},
    {label: 'Скидки', value: 'discounts'}
  ];

  private subMenu = [
    {
      label: 'Обувь',
      value: 'footwear'
    },
    {
      label: 'Одежда',
      value: 'clothing'
    },
    {
      label: 'Акссесуары',
      value: 'accessories'
    },
    {
      label: 'Новинки',
      value: 'novelty'
    }
  ];

  private goodsGridModel = [
    {
      id: 1,
      title: 'Пуховик мужской',
      price: 10499,
      colorCount: 2,
      img: [
        'https://cdn.fila.ru/upload/mdm/media_content/resize/be9/2000_2000_919a/48516020299.jpg',
        'https://cdn.fila.ru/upload/mdm/media_content/resize/a87/2000_2000_bed5/48516030299.jpg'
      ]
    },
    {
      id: 2,
      title: 'Брюки мужские',
      price: 2999,
      colorCount: 3,
      img: [
        'https://cdn.fila.ru/upload/mdm/media_content/resize/001/2000_2000_729e/45142160299.jpg',
        'https://cdn.fila.ru/upload/mdm/media_content/resize/7fa/2000_2000_a2c7/45142170299.jpg'
      ]
    },
    {
      id: 3,
      title: 'Куртка утепленная женская',
      price: 5999,
      colorCount: 2,
      img: [
        'https://cdn.fila.ru/upload/mdm/media_content/resize/a47/2000_2000_842f/52222110299.jpg',
        'https://cdn.fila.ru/upload/mdm/media_content/resize/e91/2000_2000_a294/51932700299.jpg'
      ]
    },
    {
      id: 4,
      title: 'Брюки женские',
      price: 3669,
      colorCount: 2,
      img: [
        'https://cdn.fila.ru/upload/mdm/media_content/resize/a71/2000_2000_4642/45141960299.jpg',
        'https://cdn.fila.ru/upload/mdm/media_content/resize/85c/2000_2000_6ac2/45141950299.jpg'
      ]
    },
    {
      id: 5,
      title: 'Плавки мужские',
      price: 1399,
      colorCount: 2,
      img: [
        'https://cdn.fila.ru/upload/mdm/media_content/resize/86a/2000_2000_5ebc/51932750299.jpg',
        'https://cdn.fila.ru/upload/mdm/media_content/resize/313/2000_2000_0a54/51932760299.jpg'
      ]
    },
    {
      id: 6,
      title: 'Кроссовки мужские Run Nxt Mid 2.0',
      price: 6999,
      colorCount: 1,
      img: [
        'https://cdn.fila.ru/upload/mdm/media_content/resize/993/2000_2000_723c/50062130299.jpg',
        'https://cdn.fila.ru/upload/mdm/media_content/resize/ca3/2000_2000_4a6f/50062150299.jpg'
      ]
    },
    {
      id: 7,
      title: 'Свитшот мужской',
      price: 2999,
      colorCount: 3,
      img: [
        'https://cdn.fila.ru/upload/mdm/media_content/resize/f10/2000_2000_69e7/51523310299.jpg',
        'https://cdn.fila.ru/upload/mdm/media_content/resize/442/2000_2000_e0b6/51523320299.jpg'
      ]
    }
  ];
}
