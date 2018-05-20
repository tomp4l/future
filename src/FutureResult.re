
let mapOk = (f, future) => future |> Future.map(r => switch(r) {
  | Js.Result.Ok(v) => f(v)
  | Error(_) => r
});

let flatMapOk = (f, future) => future |> Future.flatMap(r => switch(r) {
  | Js.Result.Ok(v) => f(v)
  | Error(_) => Future.value(r)
});

let mapError = (f, future) => future |> Future.map(r => switch(r) {
  | Js.Result.Error(v) => f(v)
  | Ok(_) => r
});

let flatMapError = (f, future) => future |> Future.flatMap(r => switch(r) {
  | Js.Result.Error(v) => f(v)
  | Ok(_) => Future.value(r)
});

let tapOk = (f, future) => future |> Future.tap(r => switch(r) {
  | Js.Result.Ok(v) => f(v) |> ignore
  | Error(_) => ()
});

let tapError = (f, future) => future |> Future.tap(r => switch(r) {
  | Js.Result.Error(v) => f(v) |> ignore
  | Ok(_) => ()
});