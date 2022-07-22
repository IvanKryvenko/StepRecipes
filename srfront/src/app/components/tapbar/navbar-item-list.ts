import { NavItem } from './../../interfaces/navbar-items';

export const ItemsList: NavItem[] = [
    {
        route: '/home', 
        icon: 'home',
        title: 'Home',
    },
    {
        route: '/search', 
        icon: 'search',
        title: 'Search',
    },
    {
        route: '/favourite', 
        icon: 'favorite_border',
        title: 'Likes',
    },
    {
        route: '/wish', 
        icon: 'receipt_long',
        title: 'Wish list',
    },
    {
        route: '/user', 
        icon: 'account_circle',
        title: 'Profile',
    }
];