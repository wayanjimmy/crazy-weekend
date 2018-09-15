open Express;

let app = express();

Express.App.use(app, Middleware.json());

let onListen = (e: Js.null_undefined(Js.Exn.t)) =>
  switch (e) {
  | exception (Js.Exn.Error(e)) =>
    Js.log(e);
    Node.Process.exit(1);
  | _ => "Listening at http://127.0.0.1:3000" |> Js.log
  };

let server = Express.App.listen(app, ~port=3000, ~onListen, ());