import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xe3c40a9A166C49b0B1C6cAa1D314CB0b77BbB7Fd");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Human Brain",
        description: "This NFT will give you access to StormDAO!",
        image: readFileSync("scripts/assets/brain.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();