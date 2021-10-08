export class FooterLink {
  title: string;
  list = [
    {
      label: 'Обувь',
      value: '/footwear',
    },
    {
      label: 'Одежда',
      value: '/clothing',
    },
    {
      label: 'Акссесуары',
      value: '/accessories',
    },
    {
      label: 'Новинки',
      value: '/novelty',
    },
    {
      label: 'Календарь релизов',
      value: '/release-calendar',
    },
    {
      label: 'Распродажа',
      value: '/sale',
    },
  ];

  constructor(title: string) {
    this.title = title;
  }
}

export class FooterHelpLinks {
  title = 'помощь';
  list = [
    {
      label: 'Доставка',
      value: '/delivery',
    },
    {
      label: 'Возврат',
      value: '/return',
    },
    {
      label: 'Отмена заказа',
      value: '/order-cancellation',
    },
  ];
}
