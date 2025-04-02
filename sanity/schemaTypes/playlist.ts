import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const playlist = defineType({
    name: "playlist",
    title :"Playlists",
    type: "document",
    icon: UserIcon,
    fields:[
        defineField({
            name: "title",
            type : "string",
        }),
        defineField({
            name: "slug",
            type : "slug",
            options:{
                source:'title', // 'this is a startup' --> 'this-is-a-startup-slug'
            }
        }),
        defineField({
            name: "select",
            type : "array",
            of:[{type:"reference" , to: [{type:"startup"}]}]
        }),
    ],
})  //used in structure.ts also