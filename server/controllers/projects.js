const request = require("request-promise");
const { user, token } = require("config").github;

module.exports.fetch = async (req, res) => {
  const options = {
    uri: `https://api.github.com/users/${user ||
      process.env.GITHUB_USER}/repos`,
    headers: {
      Accept: "application/vnd.github.mercy-preview+json",
      "User-Agent": "request",
      Authorization: `Bearer ${token || process.env.GITHUB_TOKEN}`
    },
    qs: {
      sort: "pushed"
    }
  };

  try {
    const repos = await request(options);
    const response = JSON.parse(repos)
      // only get repos with description and emoji octocat :)
      .filter(repo => repo.description && /^:octocat:/i.test(repo.description))
      .map(({ id, name, html_url, description }) => ({
        id,
        name,
        html_url,
        description: description.replace(/:octocat:/, "").trim()
      }));
    res.json(response);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};
