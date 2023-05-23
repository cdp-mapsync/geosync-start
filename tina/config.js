import { defineConfig } from "tinacms";
import { pageFields } from "./templates";
import { postFields } from "./templates";
import { productFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "86bf3de0-8d86-446c-aac1-2d8d0cd407e2", // Get this from tina.io
  token: "ab878bdf6c871baa5c032fee2aa8e6b9c94d8132", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Home",
        name: "home",
        path: "content",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "Blog Post",
        name: "blog_post",
        path: "content/blog",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "**/*",
          exclude: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...postFields(),
        ],
      },
      {
        format: "md",
        label: "Pages",
        name: "pages",
        path: "content",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "**/*",
          exclude: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...productFields(),
        ],
      },
    ],
  },
});
