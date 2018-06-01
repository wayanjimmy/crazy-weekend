let component = ReasonReact.statelessComponent("RepoItem");

let str = ReasonReact.string;

let make = (~repo: RepoData.repo, _children) => {
  ...component,
  render: _self =>
    <div className="RepoItem">
      <a href=repo.html_url> <h2> (str(repo.full_name)) </h2> </a>
      (str(string_of_int(repo.stargazers_count) ++ " stars"))
    </div>,
};