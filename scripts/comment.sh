#! /bin/bash

curl -H "Authorization: token ${GITHUB_TOKEN}" -X POST -d "{\"body\": \"PR URL: https://sublime-codes-pr-$TRAVIS_PULL_REQUEST.now.sh\"}" "https://api.github.com/repos/${TRAVIS_REPO_SLUG}/issues/${TRAVIS_PULL_REQUEST}/comments"
