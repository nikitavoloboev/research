# Data model

# 1. Store, retrieve links

- be able to save, retrieve links from web
  - https://www.podia.com is nice as design copy (mobile & desktop)
- be able to save, retrieve links from CLI (check [this](https://github.com/nikitavoloboev/learning/blob/master/go/savelink/main.go), does nearly same but saves to a file, instead of DB)
  - https://github.com/cli/cli for inspiration of nice CLI design (good `-h` etc)

# 2. Deploy

- deploy with prod postgres. write dockerfile. Either on Digital Ocean, AWS or GCP.

## Improve

- why does hot reload break when creating new file
- use <Link> component for links