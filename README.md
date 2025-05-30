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

- [WHATWG - Compression Living Standard](https://compression.spec.whatwg.org/)
- [MDN - DecompressionStream](https://developer.mozilla.org/en-US/docs/Web/API/DecompressionStream)
- [MDN - Compression Streams API](https://developer.mozilla.org/en-US/docs/Web/API/Compression_Streams_API)
- [Compression Streams are now supported on all browsers](https://web.dev/blog/compressionstreams)
- [Compression and decompression in the browser with the Compression Streams API](https://developer.chrome.com/blog/compression-streams-api)
- [Writing a simple browser zip file decompressor with CompressionStreams](https://dev.to/ndesmic/writing-a-simple-browser-zip-file-decompressor-with-compressionstreams-5che)
- [S. Vazzoler: CompressionStream JS API](https://stefanovazzoler.com/compression-stream-api/)
- [A. Martel: How to use the native Compression Streams API to compress and decompress strings in JavaScript](https://gist.github.com/alexis-martel/f70aaae9239b1e1a4a9eee8cf8f30b46)
- [CompressionStream now behaves differently in Node.js, compared to browsers](https://github.com/mozilla/pdf.js/issues/17399)

## History

I started the project on 28th of May, 2025.
