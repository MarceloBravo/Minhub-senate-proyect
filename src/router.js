import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from './views/home/home.vue';
import CongressSenateComponent from './views/congress-senate/congress-senate.vue'
import CongressHouseComponent from './views/congress-house/congress-house.vue'
import AttendanceSenateComponent from './views/attendance-senate/attendance-senate.vue'
import AttendanceHouseComponent from './views/attendance-house/attendance-house.vue'
import LoyaltySenateComponent from './views/loyalty-senate/loyalty-senate.vue'
import LoyaltyHouseComponent from './views/loyalty-house/loyalty-house.vue'

const routes = [
    {path: '/', name: 'home', component: HomeComponent},
    {path: '/congress-senate', name: 'congress-senate', component: CongressSenateComponent},
    {path: '/congress-house', name: 'congress-house', component: CongressHouseComponent},
    {path: '/attendance-senate', name: 'attendance-senate', component: AttendanceSenateComponent},
    {path: '/attendance-house', name:'attendance-home', component: AttendanceHouseComponent},
    {path: '/loyalty-senate', name: 'loyalty-senate', component: LoyaltySenateComponent},
    {path: '/loyalty-house', name: 'loyalty-house', component: LoyaltyHouseComponent}
];

const router = createRouter ({
    history: createWebHistory(),
    routes
});

export default router;