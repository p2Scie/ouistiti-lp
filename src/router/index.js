import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import NotFound from "@/views/NotFound.vue";
// import AddPlace from "@/components/places/form/AddPlace.vue";
// import PlacesList from "@/components/places/PlacesList.vue";
// import PlaceDetail from "@/components/places/PlaceDetail.vue";
import ArtistsList from "@/components/artists/ArtistsList.vue";
// import ArtistRegistration from "@/components/artists/ArtistRegistration.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      // children: [
      //   {
      //     path: "places",
      //     component: PlacesList,
      //     children: [
      //       {
      //         path: "add",
      //         component: AddPlace,
      //       },
      //     ],
      //   },
      // ],
    },
    // {
    //   path: "/add",
    //   component: AddPlace,
    //   // children: [{ path: "artist", component: ArtistRegistration }],
    // },
    // {
    //   path: "/places",
    //   component: PlacesList,
    //   children: [
    //     {
    //       path: "add",
    //       component: AddPlace,
    //     },
    //   ],
    // },
    // {
    //   path: "/places/:id",
    //   component: PlaceDetail,
    //   props: true,
    //   children: [{ path: "artist", component: ArtistsList }],
    // },
    { path: "/artists", component: ArtistsList },
    { path: "/:notFound(.*)", component: NotFound },
  ],
  linkActiveClass: "active",
});

export default router;
