export default [
    {
        path: "/",
        name: "HomePage",
        meta: {
            title: ""
        },
        component: () => import("@/views/home/index"),
    }
]
