import Index from "@/page/Index";
import article from "@/page/article";
import message from "@/page/message";
import author from "@/page/author";

export default  [
    // { path: '/', component: Home },
    // { path: '/about', component: About },
    {
        path:'/', component:Index
    },
    {
        path: '/article', component: article
    },
    {
        path:'/message', component: message
    },
    {
        path: '/author',component: author
    }
]