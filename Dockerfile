# Node.jsの公式イメージをベースにする
FROM node:21.6.0-alpine

# 作業ディレクトリを設定
WORKDIR /app

# pnpmのインストール
RUN npm install -g pnpm

# プロジェクトの依存関係をコピー
COPY package.json pnpm-lock.yaml ./

# 依存関係のインストール
RUN pnpm install

# アプリケーションのソースコードをコピー
COPY . .

# ビルドコマンド
RUN pnpm run build

# 開発モードでアプリを起動
CMD ["pnpm", "run", "dev"]
