# 📦 DecompressionStream with gzipped text Example

Working code for [DecompressionStream](https://developer.mozilla.org/en-US/docs/Web/API/DecompressionStream), which is a standard Web API.

DecompressionStream is already available in Baseline since 2023.

## Features

- 📦 DecompressionStream (Web API)
- 📝 plain text source file
- 🗜️ gzip
- 📄 single file

## 🛑 Warning

Before using CompressionStreams think about these compression topics:

- some compressed contents are single files,
- some of them can contain multiple files,
- others can contain folder structures with files,
- the algorithms can differ,
- streams and files are also different.

## Installation

Install [http-server](https://www.npmjs.com/package/http-server) globally:

`npm install --global http-server`

## Usage

1. Run inside `src` folder: `http-server`
1. Open browser at: `http://127.0.0.1:8080/`
1. Select the `welcome.txt.gz` file from `data` folder and check its contents with this app.

## License

Read the [LICENSE file](LICENSE).

## References

- [Compression and decompression in the browser with the Compression Streams API](https://developer.chrome.com/blog/compression-streams-api)
- [MDN - Compression Streams API](https://developer.mozilla.org/en-US/docs/Web/API/Compression_Streams_API)

## History

I started the project on 28th of May, 2025.
