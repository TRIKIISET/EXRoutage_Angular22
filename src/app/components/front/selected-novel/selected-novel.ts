import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NovelService } from '../../../services/novel-service';
import { Novel } from '../../../model/novel';
import { UpperCasePipe } from '@angular/common';

@Component({
  imports: [RouterLink, UpperCasePipe],
  selector: 'app-selected-novel',
  styleUrl: './selected-novel.css',
  templateUrl: './selected-novel.html',
})
export class SelectedNovel implements OnInit{
    private readonly activatedRoute= inject(ActivatedRoute);
    private readonly novelService = inject(NovelService);
    private readonly router = inject(Router);
    novel=signal<Novel|undefined>(undefined);

  ngOnInit(): void {
    let idNovel = Number(this.activatedRoute.snapshot.paramMap.get('idNovel'));
    if(idNovel)
        this.novel.set(this.novelService.getNovelById(idNovel));
  }
  onDelete(id:number){
    if(id){
      this.novelService.deleteNovel(id);
      this.router.navigate(['/allBooks/novels']);
    }

  }
}
