import { useEffect, useState } from "react";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";

const USERNAME = "Aviral0702";

const GitHubActivity = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`, { signal: controller.signal }),
          fetch(
            `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=4`,
            { signal: controller.signal }
          ),
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API error");

        setProfile(await userRes.json());
        setRepos(await reposRes.json());
      } catch (err) {
        if (err.name !== "AbortError") setError(true);
      }
    }

    load();
    return () => controller.abort();
  }, []);

  return (
    <section
      className="py-16 md:py-24 px-4 bg-gray-900 text-white"
      aria-labelledby="github-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 id="github-heading" className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">
              GitHub Activity
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Open-source work and recent repositories.
          </p>
        </div>

        {error && (
          <p className="text-center text-gray-400">
            Could not load GitHub data.{" "}
            <a
              href={`https://github.com/${USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline"
            >
              View profile on GitHub
            </a>
          </p>
        )}

        {!error && !profile && (
          <div className="flex justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-purple-500 border-t-transparent" />
          </div>
        )}

        {profile && (
          <>
            <div className="mb-8 flex flex-wrap items-center justify-center gap-6 rounded-xl border border-gray-800 bg-gray-800/50 p-6">
              <a
                href={profile.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-purple-300 transition-colors"
              >
                <img
                  src={profile.avatar_url}
                  alt={`${profile.name || USERNAME} GitHub avatar`}
                  className="h-14 w-14 rounded-full border-2 border-purple-500"
                />
                <div className="text-left">
                  <p className="font-bold text-lg">{profile.name || USERNAME}</p>
                  <p className="text-sm text-gray-400 flex items-center gap-1">
                    <Github size={14} /> @{profile.login}
                  </p>
                </div>
              </a>
              <div className="flex gap-6 text-center">
                <div>
                  <p className="text-2xl font-bold text-white">{profile.public_repos}</p>
                  <p className="text-xs text-gray-400 uppercase">Repos</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{profile.followers}</p>
                  <p className="text-xs text-gray-400 uppercase">Followers</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-gray-800 bg-gray-800/40 p-5 transition-colors hover:border-purple-500/50 hover:bg-gray-800/70"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {repo.name}
                    </h3>
                    <ExternalLink size={16} className="shrink-0 text-gray-500 group-hover:text-purple-400" />
                  </div>
                  <p className="text-sm text-gray-400 line-clamp-2 mb-4">
                    {repo.description || "No description"}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    {repo.language && (
                      <span className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-purple-500" />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star size={12} /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={12} /> {repo.forks_count}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default GitHubActivity;
