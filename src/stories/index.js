import { storiesOf } from "@storybook/vue";

import Alert from "../components/Alert";

storiesOf("Alert")
  .add(
    "story as a template",
    () => `   
  <kintone-alert 
    message="このメッセージは注意書きです" />
  `
  )
  .add("story as a component", () => ({
    components: { Alert },
    data() {
      return {
        message: "このメッセージは注意書きです"
      };
    },
    template: '<Alert :message="message" />'
  }));
