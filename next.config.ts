import type { NextConfig } from "next";

// GitHub Pages serves a project site at https://<user>.github.io/<repo>/.
// In Actions, GITHUB_REPOSITORY is "<owner>/<repo>", so the base path follows
// the repository name automatically (e.g. rename the repo to "works" -> /works).
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "works";
const basePath = isGithubActions ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    // GitHub Pages has no image optimization server
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
