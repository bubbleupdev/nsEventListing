import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

import {EventsListComponent} from "./pages/events/events-list.component";

const routes: Routes = [

    //{ path: "", redirectTo: "/items", pathMatch: "full" },
    {path: "", redirectTo: "/events", pathMatch: "full"},

    {path: "events", component: EventsListComponent},

    //{ path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
