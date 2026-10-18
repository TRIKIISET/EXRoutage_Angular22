import { Routes } from '@angular/router';
import { Presentation } from './components/front/presentation/presentation';
import { BookList } from './components/front/book-list/book-list';
import { PoetryList } from './components/front/poetry-list/poetry-list';
import { NovelList } from './components/front/novel-list/novel-list';
import { Aboutus } from './components/front/aboutus/aboutus';
import { Error } from './components/error/error';
import { BiographyList } from './components/front/biography-list/biography-list';

export const routes: Routes = [
    { path: 'presentation', title: 'Présentation', component: Presentation },
    {
        path: 'allBooks', title: 'Tous les livres', component: BookList,
        children: [
            { path: 'poetry', title: 'Poésie', component: PoetryList },
            { path: 'biography', title: 'Biographie', component: BiographyList },
            { path: 'novels', title: 'Roman', component: NovelList },
            { path: '', redirectTo: 'novels', pathMatch: 'full' }
        ]
    },
    { path: '', redirectTo: 'presentation', pathMatch: 'full' },
    { path: 'aboutus', title: 'A propos', component: Aboutus },
    { path: '**', title: 'Erreur', component: Error },

];
