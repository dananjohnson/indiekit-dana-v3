import "dotenv/config.js";
import { Indiekit } from "@indiekit/indiekit";
import { GithubStore } from "@indiekit/store-github";
import postTypes from "./postTypes.js";

const indiekit = new Indiekit();

const github = new GithubStore({
  user: process.env.GITHUB_USER,
  repo: process.env.GITHUB_REPO,
  branch: process.env.GITHUB_BRANCH,
  token: process.env.GITHUB_TOKEN,
});

indiekit.set("publication.me", process.env.PUBLICATION_URL);
indiekit.set("publication.postTypes", postTypes);
indiekit.set("publication.store", github);
indiekit.set("publication.timeZone", "America/Los_Angeles");

const server = indiekit.server();

// Export server
export default server;
