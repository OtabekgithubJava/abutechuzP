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
    { id: 'R878uzXCEkA', title: 'C# HTML Email: API orqali, emailga HTMl content jo\'natish', type: 'C#' },
    { id: '_YkN9XiL0iY', title: 'C# Email: Account sozlash va google orqali email jo\'natish', type: 'C#' },
    { id: 'xwSGc_R_B-Q', title: 'C# Application: Har xil turdagi Get() orqali filterlashlar', type: 'C#' },
    { id: 'JZX5tWi3Exw', title: 'C++ Nested For: Ichma-ich for orqali bir nechta algoritmlar', type: 'C++' },
    { id: 'kfUcNcKMXNk', title: 'C# Design Pattern: BaseRepo Design Patternga birichi qadam', type: 'C#' },
    { id: 'uqAi54pEdB4', title: 'C++ loop va ASCII: va boshqa string, char, ASCII misollar', type: 'C++' },
    { id: 'Sr77bQXbNgo', title: 'C# TRIPLE-CRUD: uchta model (table)ni bir biriga ulash', type: 'C#' },
    { id: 'ouoss63af9M', title: 'C# MULTI-CRUD: Ikkita model (table)ni bir biriga ulash', type: 'C#' },
    { id: 'GzkJ6QzYvLs', title: 'C++ While Loop: Katta imtihonlarga kerakli algoritmlar', type: 'C++' },
    { id: '2F2Ky-YSM40', title: 'C# API: Service & IService qismida CRUD operatsiyasi', type: 'C#' },
    { id: 'X6Pp0FLHbl4', title: 'C++ String Methods: Length, Size, Index, At, Append', type: 'C++' },
    { id: 'xOD7vcOXW8I', title: 'C++ Switch Case & Break: Hafta kunini tekshirish', type: 'C++' },
    { id: '8QuAhalZg6k', title: 'C++ Input: CIN orqali foydalanuvchidan ma\'limot olish', type: 'C++' },
    { id: 'L8Egk_GQHZc', title: 'C++da qiymat o\'zgartirish: faqat 1 soatgacha dars', type: 'C++' },
    { id: '8nQQM7MZXuU', title: 'EntityFrameWorCore 2-qism: Controller, Migration, API vahokazo', type: 'C#' },
    { id: 'Gx9m2YCxFyA', title: 'EntityFrameWorkCore: ConectionString sozlashgacha...', type: 'C#' },
    { id: 'tsuLo29faqc', title: 'LINQ: Where, Select, OrderBy, OrderByDecending...', type: 'C#' },
    { id: 'N28rTpoJqUI', title: 'C++: C++ tilidagi ma\'limot turlari va o\'zgaruvchilar', type: 'C++' },
    { id: 'UIubOOngvjM', title: 'Twillio: SMS jo\'natish tizimi Twillio configuratsiyasi orqali', type: 'C#' },
    { id: 'UKr-la5-B3o', title: 'ADO.NET: Databazaga malimot yuklab, malimot o\'qish', type: 'C#' },
    { id: 'JbdoXk4_cUw', title: 'PGAdmin: PostgreSQLdagi kuchliroq darajadagi metodlar va amaliyot', type: 'C#' },
    { id: 'c-DOKHY7FoU', title: 'PGAdmin: Databaza nima va postgreSQLda CRUD operatsiyasi', type: 'C#' },
    { id: 'fEsDHGRH6Fc', title: 'Flowbite: Code \'yozmasdan\' responsive va zamonaviy sayt yasash', type: 'Other' },
    { id: 'M-Vb3pqk3qg', title: 'Inline Buttons: C# Telegram botda inline tugmachalar va kichik proyekt', type: 'C#' },
    { id: '4RdhKoCijIE', title: 'Keyboard Buttons: C# Telegram botda klaviatura tugmachalari', type: 'C#' },
    { id: '-e4cRXphdjc', title: 'Stack VS Queue: C# dagi FIFO va LIFO nazariyalari', type: 'C#' },
    { id: 'tVacciUhTzY', title: 'TG Bot OOP: classlar orqali telegram bot yasash | qulayroq usul', type: 'C#' },
    { id: '-4ywLoiHybU', title: 'C# Dictionary: C# tilida dictionary\'dan foydalaning!!!', type: 'C#' },
    { id: 'ZSDX-gddjtw', title: 'Services & Interface: C#da interface va service nima???', type: 'C#' },
    { id: 'YoOVaRWpP8c', title: 'Class Integration: Boshqa fayldagi classni program.cs da chqarib, foydalanish', type: 'C#' },
    { id: 'pienoKPcWWA', title: 'Kutubxona loyihasi 2-qism: classdagi obyektlarga foreach orqali murojaat qilish', type: 'C#' },
    { id: 'eFtZRT05zMI', title: 'Kutubxona loyihasi 1-qism: C#da get & set nima?', type: 'C#' },
    { id: '7-ocA8vleU0', title: 'CCC: C# Class Constructori | Class haqida batafsil', type: 'C#' },
    { id: 'HLEafCWAK2k', title: 'Params & Exception: Chegarasiz parameter qabul qilish & Xatosizlantirish', type: 'C#' },
    { id: '6r1zzgJuwWg', title: 'C# Methods: Void va Returnli funksiyalar farqlari batafsil', type: 'C#' },
    { id: 'xz_sPVhd-zI', title: 'Random kutubxonasi: C#da tosh, qaychi, qog\'oz o\'yini random orqali', type: 'C#' },
    { id: 'tSGsBhsdIBU', title: 'Bubble Sort: Bubble sort qanday algoritm asosida ishlashini c#da o\'rganing', type: 'C#' },
    { id: 'UaAu8NhUiFs', title: 'C# List, While & For: List elementlarni while va for looplari orqali aylantirish', type: 'C#' },
    { id: 'OLz9c0DE9gE', title: '42 Mimic: Htm & Css dan foydalanib 42.uz saytini 0dan yozish', type: 'Other' },
    { id: 'aoaHX-SJynY', title: 'Sakkiz: Kanalga post qoyadigan admin bolish uchun royhatdan otish', type: 'Other' }
  ];

  filteredVideos = this.videos;
  isLightTheme = false; 

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');
    this.isLightTheme = savedTheme === 'light';
    this.filterVideos('All'); 
  }

  filterVideos(filter: string): void {
    if (filter === 'All') {
      this.filteredVideos = this.videos;
    } else {
      this.filteredVideos = this.videos.filter(video => video.type === filter); 
    }
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