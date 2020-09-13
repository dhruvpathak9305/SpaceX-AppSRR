/**
 * Html
 * This Html.js file acts as a template that we insert all our generated
 * application strings into before sending it to the client.
 */
import serialize from "serialize-javascript";


const Html = ({ content, title = "SpaceX",store }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
     
    </head>
    <body style="margin:0">
      <div id="root">${content}</div>
      <script>window.INITIAL_STATE=${serialize(store.getState())}</script>
      <script src="bundle.js"></script>
    </body>
  </html>
`;

export default Html;

//   ${styles}
// <script>window.INITIAL_STATE=${serialize(store.getState())}</script>