"use strict";

document.getElementById("fileInput").addEventListener("change", async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const ds = new DecompressionStream("gzip");

        // Pipe the file stream through the decompression stream
        const decompressedStream = file.stream().pipeThrough(ds);

        // Convert decompressed stream back to Blob
        const decompressedBlob = await new Response(
            decompressedStream
        ).blob();

        // Read the decompressed text
        const textContent = await decompressedBlob.text();

        document.getElementById("output").textContent = textContent;
    } catch (error) {
        console.error("Decompression failed:", error);
    }
});
