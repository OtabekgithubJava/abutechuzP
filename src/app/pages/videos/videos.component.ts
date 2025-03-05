import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { title } from 'node:process';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  videos = [
    { id: 'UIubOOngvjM', title: 'Twillio: SMS jo\'natish tizimi Twillio configuratsiyasi orqali' },
    { id: 'UKr-la5-B3o', title: 'ADO.NET: Databazaga malimot yuklab, malimot o\'qish' },
    { id: 'JbdoXk4_cUw', title: 'PGAdmin: PostgreSQLdagi kuchliroq darajadagi metodlar va amaliyot' },
    { id: 'c-DOKHY7FoU', title: 'PGAdmin: Databaza nima va postgreSQLda CRUD operatsiyasi' },
    { id: 'fEsDHGRH6Fc', title: 'Flowbite: Code \'yozmasdan\' responsive va zamonaviy sayt yasash' },
    { id: 'M-Vb3pqk3qg', title: 'Inline Buttons: C# Telegram botda inline tugmachalar va kichik proyekt' },
    { id: '4RdhKoCijIE', title: 'Keyboard Buttons: C# Telegram botda klaviatura tugmachalari' },
    { id: '-e4cRXphdjc', title: 'Stack VS Queue: C# dagi FIFO va LIFO nazariyalari' },
    { id: 'tVacciUhTzY', title: 'TG Bot OOP: classlar orqali telegram bot yasash | qulayroq usul' },
    { id: '-4ywLoiHybU', title: 'C# Dictionary: C# tilida dictionary\'dan foydalaning!!!' },
    { id: 'ZSDX-gddjtw', title: 'Services & Interface: C#da interface va service nima???' },
    { id: 'YoOVaRWpP8c', title: 'Class Integration: Boshqa fayldagi classni program.cs da chqarib, foydalanish' },
    { id: 'pienoKPcWWA', title: 'Kutubxona loyihasi 2-qism: classdagi obyektlarga foreach orqali murojaat qilish' },
    { id: 'eFtZRT05zMI', title: 'Kutubxona loyihasi 1-qism: C#da get & set nima?' },
    { id: '7-ocA8vleU0', title: 'CCC: C# Class Constructori | Class haqida batafsil' },
    { id: 'HLEafCWAK2k', title: 'Params & Exception: Chegarasiz parameter qabul qilish & Xatosizlantirish ' },
    { id: '6r1zzgJuwWg', title: 'C# Methods: Void va Returnli funksiyalar farqlari batafsil' },
    { id: 'xz_sPVhd-zI', title: 'Random kutubxonasi: C#da tosh, qaychi, qog\'oz o\'yini random orqali' },
    { id: 'tSGsBhsdIBU', title: 'Bubble Sort: Bubble sort qanday algoritm asosida ishlashini c#da o\'rganing' },
    { id: 'UaAu8NhUiFs', title: 'C# List, While & For: List elementlarni while va for looplari orqali aylantirish' },
    { id: 'OLz9c0DE9gE', title: '42 Mimic: Htm & Css dan foydalanib 42.uz saytini 0dan yozish'},
    { id: 'aoaHX-SJynY', title: 'Sakkiz: Kanalga post qoyadigan admin bolish uchun royhatdan otish'}
  ];

  filteredVideos = this.videos;
  isLightTheme = false; 

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');
    this.isLightTheme = savedTheme === 'light';
  }

  searchVideos(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredVideos = this.videos.filter(video =>
      video.title.toLowerCase().includes(searchTerm)
    );
  }

  getSafeUrl(videoId: string): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  toggleTheme(): void {
    this.isLightTheme = !this.isLightTheme;
    localStorage.setItem('theme', this.isLightTheme ? 'light' : 'dark');
  }
}