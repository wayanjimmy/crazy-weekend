type state = {repoData: option(array(RepoData.repo))};

type action =
  | Loaded(RepoData.repo);

let str = ReasonReact.string;

let dummyRepos: array(RepoData.repo) = [|
  RepoData.parseRepoJson(
    Js.Json.parseExn(
      {js|
    {
    stargazers_count: 25,
    full_name: "jsdf/reason-react-hacker-news",
    html_url: "https://github.com/jsdf/reason-react-hacker-news"
    }
    |js},
    ),
  ),
|];

let component = ReasonReact.reducerComponent("App");

let make = _children => {
  ...component,
  initialState: () => {repoData: None},
  reducer: (action, _state) =>
    switch (action) {
    | Loaded(loadedRepo) => ReasonReact.Update({repoData: Some(loadedRepo)})
    },
  render: self => {
    let repoItems =
      switch (self.state.repoData) {
      | Some(repos) =>
        ReasonReact.array(
          Array.map((repo: RepoData.repo) => <RepoItem repo />, repos),
        )
      | None => str("Loading")
      };
    <div className="App">
      <h1> (ReasonReact.string("Reason Projects")) </h1>
      repoItems
    </div>;
  },
};