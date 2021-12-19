export default [{
        name: 'home',
        path: '/home',
        icon: 'crown',
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