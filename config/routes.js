export default [{
        name: 'home',
        path: '/home',
        icon: 'areaChart',
        component: './HomePage',
    },
    {
        path: '/',
        redirect: '/home',
    },
    {
        component: './404',
    },
];