import { Component, inject, Signal, signal } from '@angular/core';
import { Novel } from '../../../model/novel';
import { TitleCasePipe } from '@angular/common';
import { NovelService } from '../../../services/novel-service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  imports: [TitleCasePipe, RouterLink],
  selector: 'app-novel-list',
  styleUrl: './novel-list.css',
  templateUrl: './novel-list.html',
})
export class NovelList {
  private readonly novelService = inject(NovelService);
  novels : Signal<Novel[]>= this.novelService.novels;



}
