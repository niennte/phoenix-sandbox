// NOTE: The contents of this file will only be executed if
// you uncomment its entry in "assets/js/app.js".

// To use Phoenix channels, the first step is to import Socket
// and connect at the socket path in "lib/web/endpoint.ex":
import { Socket } from "phoenix"

import {
  applySolution,
  reportError,
  connectionOk,
  connectionError,
} from './action';
import {
  ROOM,
  TOPIC_EQUATION_ERROR,
  TOPIC_EQUATION_SOLUTION,
} from './config'
import { isProd } from './util'

const params = {
  token: (typeof window !== 'undefined') ? window.userToken : ""
}
let socket = new Socket("/socket", { params })

// When you connect, you'll often need to authenticate the client.
// For example, imagine you have an authentication plug, `MyAuth`,
// which authenticates the session and assigns a `:current_user`.
// If the current user exists you can assign the user's token in
// the connection for use in the layout.
//
// In your "lib/web/router.ex":
//
//     pipeline :browser do
//       ...
//       plug MyAuth
//       plug :put_user_token
//     end
//
//     defp put_user_token(conn, _) do
//       if current_user = conn.assigns[:current_user] do
//         token = Phoenix.Token.sign(conn, "user socket", current_user.id)
//         assign(conn, :user_token, token)
//       else
//         conn
//       end
//     end
//
// Now you need to pass this token to JavaScript. You can do so
// inside a script tag in "lib/web/templates/layout/app.html.eex":
//
//     <script>window.userToken = "<%= assigns[:user_token] %>";</script>
//
// You will need to verify the user token in the "connect/2" function
// in "lib/web/channels/user_socket.ex":
//
//     def connect(%{"token" => token}, socket) do
//       # max_age: 1209600 is equivalent to two weeks in seconds
//       case Phoenix.Token.verify(socket, "user socket", token, max_age: 1209600) do
//         {:ok, user_id} ->
//           {:ok, assign(socket, :user, user_id)}
//         {:error, reason} ->
//           :error
//       end
//     end
//
// Finally, pass the token on connect as below. Or remove it
// from connect if you don't care about authentication.

socket.connect()
// Now that you are connected, you can join channels with a topic:
const channel = socket.channel(ROOM, {})

const setUpSocket = (store: Object) => {

  channel.on(TOPIC_EQUATION_SOLUTION, payload => {
    store.dispatch(applySolution(JSON.parse(payload.body), null, 2))
  })

  channel.join()
  .receive("ok", resp => {
    store.dispatch(connectionOk({ room: ROOM, resp}))
  })
  .receive("error", resp => {
    store.dispatch(connectionError({ room: ROOM, resp }))
  })
}

export { channel, setUpSocket }
export default socket
