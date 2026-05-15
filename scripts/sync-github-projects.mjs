#!/usr/bin/env node
/**
 * Fetches pinned GitHub repositories for leonardespi and writes
 * src/data/github-projects.json. Run before each release:
 *
 *   GITHUB_TOKEN=ghp_xxx npm run sync:projects
 *
 * Requires a classic or fine-grained PAT with `public_repo` read scope.
 */

import { writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const TOKEN = process.env.GITHUB_TOKEN;
if (!TOKEN) {
  console.error('Error: GITHUB_TOKEN env var is required.');
  console.error('  GITHUB_TOKEN=ghp_xxx npm run sync:projects');
  process.exit(1);
}

const QUERY = `{
  user(login: "leonardespi") {
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository {
          name
          description
          url
          homepageUrl
          repositoryTopics(first: 10) {
            nodes {
              topic { name }
            }
          }
          languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
            edges {
              size
              node { name color }
            }
            totalSize
          }
        }
      }
    }
  }
}`;

console.log('Fetching pinned repositories from GitHub…');

const res = await fetch('https://api.github.com/graphql', {
  method: 'POST',
  headers: {
    Authorization: `bearer ${TOKEN}`,
    'Content-Type': 'application/json',
    'User-Agent': 'leonardespi-site-sync',
  },
  body: JSON.stringify({ query: QUERY }),
});

if (!res.ok) {
  console.error(`GitHub API error: ${res.status} ${res.statusText}`);
  process.exit(1);
}

const { data, errors } = await res.json();

if (errors) {
  console.error('GraphQL errors:', JSON.stringify(errors, null, 2));
  process.exit(1);
}

const projects = data.user.pinnedItems.nodes.map((repo) => ({
  name: repo.name,
  description: repo.description ?? '',
  url: repo.url,
  homepage: repo.homepageUrl || null,
  topics: repo.repositoryTopics.nodes.map((n) => n.topic.name),
  languages: repo.languages.edges.map(({ size, node }) => ({
    name: node.name,
    color: node.color ?? '#888',
    percentage:
      repo.languages.totalSize > 0
        ? Math.round((size / repo.languages.totalSize) * 1000) / 10
        : 0,
  })),
}));

const outDir = resolve(__dirname, '../src/data');
const outPath = resolve(outDir, 'github-projects.json');

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, JSON.stringify(projects, null, 2) + '\n');

console.log(`✓ Written ${projects.length} projects to src/data/github-projects.json`);
projects.forEach((p) => {
  const langs   = p.languages.map((l) => `${l.name} ${l.percentage}%`).join(', ');
  const topics  = p.topics.length ? ` topics: ${p.topics.join(', ')}` : '';
  console.log(`  · ${p.name}${p.homepage ? ' → ' + p.homepage : ''} [${langs}]${topics}`);
});
