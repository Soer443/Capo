import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quest-page',
  templateUrl: './quest-page.component.html',
  styleUrls: ['./quest-page.component.css']
})
export class QuestPageComponent implements OnInit {
  quests = [
    {name: 'Кража', id: 1, img: 'https://orig00.deviantart.net/bab1/f/2014/013/4/e/thief_icon_by_s7_by_sidyseven-d721kwz.png',
      description:
      'Здесь должен быть текст, но обломись...Описания нет потому что я ленивая жопа.',
      reward:{authority:21, loot:'А тебе мало краденного?' }, shortDescription:''  },
    {name: 'Заказ на убийство', id: 2, img: 'https://vignette.wikia.nocookie.net/heroesofthestorm/images/9/95/%D0%98%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0_%D0%A1%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%D0%BD%D0%BE%D1%81%D1%82%D1%8C_%D0%9D%D0%BE%D0%B2%D0%B0_%D0%9A%D0%B0%D0%BB%D0%B5%D1%87%D0%B0%D1%89%D0%B8%D0%B9_%D0%B2%D1%8B%D1%81%D1%82%D1%80%D0%B5%D0%BB.png/revision/latest?cb=20160410063302&path-prefix=ru',
      description:
      'Здесь должен быть текст, но обломись...Описания нет потому что я ленивая жопа',
      reward:{authority:99, loot:'трупец-холодец' }, shortDescription:''  },
    {name: 'Рэкет', id: 3, img: 'http://icdn.pro/images/en/f/i/fight-club-soap-icone-6743-128.png',
      description:
      'Здесь должен быть текст, но обломись...Описания нет потому что я ленивая жопа',
      reward:{authority:23, loot:'зубы' }, shortDescription:''  }
  ];

  constructor() { }

  ngOnInit() {
  }

}
