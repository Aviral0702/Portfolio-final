import { useEffect, useState } from "react";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

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
          fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=4`, { signal: controller.signal }),
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
      className="section-padding bg-spotify-dark"
      aria-labelledby="github-heading"
    >
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 px-2.5"
        >
          <h2 id="github-heading" className="section-heading mb-3 sm:mb-4">
            <span className="gradient-text">GitHub Activity</span>
          </h2>
          <div className="section-divider mb-4 sm:mb-6" />
          <p className="text-spotify-text-secondary max-w-xl mx-auto">
            Open-source work and recent repositories.
          </p>
        </motion.div>

        {error && (
          <p className="text-center text-spotify-text-secondary">
            Could not load GitHub data.{" "}
            <a
              href={`https://github.com/${USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-spotify-green hover:text-spotify-green-hover underline"
            >
              View profile on GitHub
            </a>
          </p>
        )}

        {!error && !profile && (
          <div className="flex justify-center">
            <div className="h-8 w-8 motion-safe:animate-spin rounded-full border-2 border-spotify-green border-t-transparent" />
          </div>
        )}

        {profile && (
          <>
            <div className="mb-8 flex flex-wrap items-center justify-center gap-6 card-spotify">
              <a
                href={profile.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-spotify-green transition-colors"
              >
                <img
                  src={profile.avatar_url}
                  alt={`${profile.name || USERNAME} GitHub avatar`}
                  className="h-14 w-14 rounded-full border-2 border-spotify-green"
                />
                <div className="text-left">
                  <p className="font-bold text-lg text-spotify-text-primary">{profile.name || USERNAME}</p>
                  <p className="text-sm text-spotify-text-secondary flex items-center gap-1">
                    <Github size={14} /> @{profile.login}
                  </p>
                </div>
              </a>
              <div className="flex gap-6 text-center">
                <div>
                  <p className="text-2xl font-bold text-spotify-text-primary">{profile.public_repos}</p>
                  <p className="text-xs text-spotify-text-tertiary uppercase">Repos</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-spotify-text-primary">{profile.followers}</p>
                  <p className="text-xs text-spotify-text-tertiary uppercase">Followers</p>
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
                  className="group card-spotify album-card"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-spotify-text-primary group-hover:text-spotify-green transition-colors">
                      {repo.name}
                    </h3>
                    <ExternalLink size={16} className="shrink-0 text-spotify-text-tertiary group-hover:text-spotify-green" />
                  </div>
                  <p className="text-sm text-spotify-text-secondary line-clamp-2 mb-4">
                    {repo.description || "No description"}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-spotify-text-tertiary">
                    {repo.language && (
                      <span className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-spotify-green" />
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
