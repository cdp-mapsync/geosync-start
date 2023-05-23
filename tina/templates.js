export function pageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "subtitle",
      label: "subtitle",
    },
    {
      type: "string",
      name: "description",
      label: "meta description",
    },
  ];
}
export function postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "string",
      name: "type",
      label: "type",
    },
    {
      type: "string",
      name: "description",
      label: "meta description",
    },
  ];
}
export function productFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "string",
      name: "header",
      label: "header",
    },
    {
      type: "string",
      name: "content",
      label: "content",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "object",
      name: "button",
      label: "button",
      fields: [
        {
          type: "boolean",
          name: "enable",
          label: "enable",
        },
        {
          type: "string",
          name: "label",
          label: "label",
        },
        {
          type: "string",
          name: "link",
          label: "link",
        },
      ],
    },
    {
      type: "string",
      name: "caption",
      label: "caption",
    },
    {
      type: "string",
      name: "video",
      label: "video",
    },
  ];
}
