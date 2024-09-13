const myComponentTemplate = `
  <div class="tw-p-4 tw-border tw-border-gray-300 tw-rounded-lg">
    <h2 class="tw-text-xl tw-font-bold mb-2">{{title}}</h2>
    <p class="tw-text-gray-600">{{content}}</p>
  </div>
`;

createWebComponent("my-component", myComponentTemplate, ["title", "content"]);
