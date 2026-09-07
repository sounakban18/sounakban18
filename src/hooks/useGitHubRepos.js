import { useState, useEffect } from 'react';

export const FALLBACK_REPOS = [
  {
    id: 1,
    name: 'sounakban18',
    description: 'Config files & developer workflow notes documenting my frontend and AI-assisted tooling setup.',
    language: 'JavaScript',
    languageColor: '#f1e05a',
    stargazers_count: 0,
    html_url: 'https://github.com/sounakban18/sounakban18',
    updated_at: '2026-09-07T08:01:02Z',
    isPrimary: true,
  },
  {
    id: 2,
    name: 'Claude---MOMI-Masala-',
    description: 'Interactive spice & food brand product experience exploring rapid prototyping with Claude & JavaScript.',
    language: 'JavaScript',
    languageColor: '#f1e05a',
    stargazers_count: 0,
    html_url: 'https://github.com/sounakban18/Claude---MOMI-Masala-',
    updated_at: '2026-08-25T18:12:16Z',
  },
  {
    id: 3,
    name: 'claude-for-legal',
    description: 'Workflow prompts and plugin explorations for legal document automation and structured assistance.',
    language: 'Workflow',
    languageColor: '#0891b2',
    stargazers_count: 0,
    html_url: 'https://github.com/sounakban18/claude-for-legal',
    updated_at: '2026-06-27T13:19:51Z',
  },
];

const LANGUAGE_COLORS = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Python: '#3572A5',
  Workflow: '#0891b2',
  Default: '#4c805c',
};

const CACHE_KEY = 'sounak_github_repos_cache';

function getCachedRepos() {
  try {
    const cached = typeof window !== 'undefined' ? sessionStorage.getItem(CACHE_KEY) : null;
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch {
    // Ignore storage issues
  }
  return null;
}

export function useGitHubRepos() {
  const [repos, setRepos] = useState(() => getCachedRepos() || FALLBACK_REPOS);
  const [loading, setLoading] = useState(() => !getCachedRepos());
  const [isLive, setIsLive] = useState(() => Boolean(getCachedRepos()));

  useEffect(() => {
    // If already loaded from cache, don't re-fetch
    if (getCachedRepos()) {
      return;
    }

    let isMounted = true;
    const controller = new AbortController();

    async function fetchRepos() {
      try {
        const res = await fetch('https://api.github.com/users/sounakban18/repos?sort=updated&per_page=6', {
          signal: controller.signal,
          headers: {
            Accept: 'application/vnd.github.v3+json',
          },
        });

        if (!res.ok) {
          throw new Error(`GitHub API status: ${res.status}`);
        }

        const data = await res.json();
        if (!Array.isArray(data) || data.length === 0) {
          throw new Error('Empty repo list');
        }

        const formatted = data.map((repo) => {
          let description = repo.description;
          if (!description) {
            const fallbackMatch = FALLBACK_REPOS.find((f) => f.name.toLowerCase() === repo.name.toLowerCase());
            description = fallbackMatch?.description || 'Frontend and workflow exploration repository.';
          }

          const lang = repo.language || 'Code';
          const color = LANGUAGE_COLORS[lang] || LANGUAGE_COLORS.Default;

          return {
            id: repo.id,
            name: repo.name,
            description,
            language: lang,
            languageColor: color,
            stargazers_count: repo.stargazers_count || 0,
            html_url: repo.html_url,
            updated_at: repo.updated_at,
          };
        });

        if (isMounted) {
          const topRepos = formatted.slice(0, 4);
          setRepos(topRepos);
          setIsLive(true);
          setLoading(false);
          try {
            sessionStorage.setItem(CACHE_KEY, JSON.stringify(topRepos));
          } catch {
            // Ignore quota errors
          }
        }
      } catch (err) {
        if (err.name !== 'AbortError') {
          if (isMounted) {
            setRepos(FALLBACK_REPOS);
            setLoading(false);
            setIsLive(false);
          }
        }
      }
    }

    fetchRepos();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return { repos, loading, isLive };
}

