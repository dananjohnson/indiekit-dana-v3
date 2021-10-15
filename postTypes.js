export default [
  {
    type: "note",
    name: "Note",
    path: {
      post: "src/notes/{​yyyy}-{MM}-{dd}-{​slug}.md",
      url: "notes/{​yyyy}-{MM}-{dd}-{​slug}",
    },
    media: {
      path: "src/assets/images/notes/{​filename}",
    },
  },
  {
    type: "photo",
    name: "Screenshot",
    post: {
      path: "src/screnshots/{​yyyy}-{MM}-{dd}-{​slug}.md",
    },
    media: {
      path: "src/assets/images/screenshots/{​filename}",
    },
  },
];
