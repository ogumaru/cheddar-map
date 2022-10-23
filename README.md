# Cheddar Map

地図上にポイントを落としたり保存したりするやつ

[https://cheddar.ogumaru.dev/](https://cheddar.ogumaru.dev/)

## 機能

- ダブルクリックによるポイントの描画
- CSV ファイル をインポートしてのポイントの描画
- 描画したポイントの座標を CSV 形式でダウンロード

## デプロイ手順

### 実行環境

下記の環境で動作確認済です。

| 項目 | バージョン |
| ---- | ---------- |
| node | v16.15.0   |
| npm  | 8.5.5      |

実行には ESRI 社の GIS ライセンスが必要です。

### 実行

```bash
npm install
export ARCGIS_APIKEY=****

# 本番ビルド
npm run build

# /dist ディレクトリを公開
python3 -m http.server --directory ./dist/
```

### ローカル環境での実行(開発環境)

```bash
npm install
export ARCGIS_APIKEY=****

# テスト実行
npm run serve
```

## 利用した主なもの

### 実装

| 名称                      | 用途                 |
| ------------------------- | -------------------- |
| React                     | フロントエンド       |
| webpack                   | モジュールバンドラ   |
| ArcGIS API for JavaScript | 地図描画, レイヤ処理 |

### デプロイ

| 名称             | 用途         |
| ---------------- | ------------ |
| Cloudflare Pages | デプロイ環境 |
