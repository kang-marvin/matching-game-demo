FROM ruby:3.1.0

WORKDIR /matching-game

RUN apt-get update -yqq \
  && apt-get install -yqq --no-install-recommends \
      build-essential \
      curl \
      gnupg2 \
      libpq-dev \
      nodejs \
      npm \
  && npm install -g npm \
  && npm install -g yarn \
  && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://deb.nodesource.com/setup_19.x | bash - \
  && apt-get update -yqq \
  && apt-get install -yqq --no-install-recommends nodejs \
  && npm install -g esbuild

EXPOSE 3000