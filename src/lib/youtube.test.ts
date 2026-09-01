import { describe, expect, it } from "vitest";

import { youtubeEmbedUrl, youtubeId } from "./youtube";

describe("youtubeId", () => {
  it("watch?v= shaklini tanidi", () => {
    expect(youtubeId("https://www.youtube.com/watch?v=dQw4w9WgXcQ")).toBe("dQw4w9WgXcQ");
  });

  it("qo‘shimcha parametrlar bilan ham ishlaydi", () => {
    expect(youtubeId("https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=42s&list=PL1")).toBe(
      "dQw4w9WgXcQ",
    );
  });

  it("youtu.be qisqa havolasini tanidi", () => {
    expect(youtubeId("https://youtu.be/dQw4w9WgXcQ")).toBe("dQw4w9WgXcQ");
    expect(youtubeId("https://youtu.be/dQw4w9WgXcQ?t=10")).toBe("dQw4w9WgXcQ");
  });

  it("embed, shorts va live shakllarini tanidi", () => {
    expect(youtubeId("https://www.youtube.com/embed/dQw4w9WgXcQ")).toBe("dQw4w9WgXcQ");
    expect(youtubeId("https://www.youtube.com/shorts/dQw4w9WgXcQ")).toBe("dQw4w9WgXcQ");
    expect(youtubeId("https://www.youtube.com/live/dQw4w9WgXcQ")).toBe("dQw4w9WgXcQ");
  });

  it("yalang‘och id ni qabul qiladi", () => {
    expect(youtubeId("dQw4w9WgXcQ")).toBe("dQw4w9WgXcQ");
  });

  it("bo‘sh va noto‘g‘ri qiymatlarda null qaytaradi", () => {
    expect(youtubeId(null)).toBeNull();
    expect(youtubeId("")).toBeNull();
    expect(youtubeId("salom")).toBeNull();
    expect(youtubeId("https://vimeo.com/12345")).toBeNull();
    expect(youtubeId("https://www.youtube.com/watch?v=qisqa")).toBeNull();
  });

  it("bo‘shliqlarni kesadi", () => {
    expect(youtubeId("  https://youtu.be/dQw4w9WgXcQ  ")).toBe("dQw4w9WgXcQ");
  });
});

describe("youtubeEmbedUrl", () => {
  it("nocookie domenida embed havolasi yasaydi", () => {
    const url = youtubeEmbedUrl("https://youtu.be/dQw4w9WgXcQ");
    expect(url).toContain("youtube-nocookie.com/embed/dQw4w9WgXcQ");
    expect(url).toContain("rel=0");
  });

  it("noto‘g‘ri havolada null", () => {
    expect(youtubeEmbedUrl("salom")).toBeNull();
  });
});
