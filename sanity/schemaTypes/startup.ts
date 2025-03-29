import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const startup = defineType({
    name: "startup",
    title :"Startup",
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
            name: "author",
            type : "reference",
            to: {type: "author"}, // reference to the author document
        }),
        defineField({
            name: "views",
            type : "number",
        }),
        defineField({
            name: "description",
            type : "text",
        }),
        defineField({
            name: "category",
            type : "string",
            validation: (Rule) => Rule.min(1).max(20).required().error("Category is required"),
        }),
        defineField({
            name: "image",
            type : "url",
            validation:(Rule)=> Rule.required(),
        }),
        defineField({
            name: "pitch",
            type : "markdown",
        }),
    ],
})  //used in structure.ts also