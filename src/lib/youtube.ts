/**
 * YouTube havolasidan video id ni ajratadi.
 * Qo‘llab-quvvatlanadigan shakllar:
 *   https://www.youtube.com/watch?v=ID
 *   https://youtu.be/ID
 *   https://www.youtube.com/embed/ID
 *   https://www.youtube.com/shorts/ID
 *   ID (11 belgili)
 */
export function youtubeId(input: string | null | undefined): string | null {
  if (!input) return null;
  const value = input.trim();
  if (/^[\w-]{11}$/.test(value)) return value;

  try {
    const url = new URL(value);
    const host = url.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = url.pathname.slice(1).split("/")[0];
      return /^[\w-]{11}$/.test(id) ? id : null;
    }

    if (host === "youtube.com" || host === "m.youtube.com" || host === "youtube-nocookie.com") {
      const v = url.searchParams.get("v");
      if (v && /^[\w-]{11}$/.test(v)) return v;
      const match = url.pathname.match(/^\/(embed|shorts|v|live)\/([\w-]{11})/);
      if (match) return match[2];
    }
  } catch {
    return null;
  }
  return null;
}

/** Reklamasiz, maxfiylik rejimidagi embed havolasi. */
export function youtubeEmbedUrl(input: string | null | undefined): string | null {
  const id = youtubeId(input);
  if (!id) return null;
  const params = new URLSearchParams({
    rel: "0",           // oxirida boshqa kanallarning videosi chiqmasin
    modestbranding: "1",
    playsinline: "1",
  });
  return `https://www.youtube-nocookie.com/embed/${id}?${params}`;
}

export function youtubeThumbnail(input: string | null | undefined): string | null {
  const id = youtubeId(input);
  return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : null;
}
