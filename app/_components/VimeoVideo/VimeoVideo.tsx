import React from "react";

interface VimeoVideoProps {
  link: string;
}

const VimeoVideo = ({ link }: VimeoVideoProps) => {
  if (!link) return null; // Prevent rendering if link is empty

  // Convert regular Vimeo link to an embed URL
  const getVimeoEmbedUrl = (url: string): string | null => {
    const regExp = /vimeo\.com\/(?:video\/)?(\d+)/;
    const match = url.match(regExp);
    return match ? `https://player.vimeo.com/video/${match[1]}` : null;
  };

  const embedUrl = getVimeoEmbedUrl(link);

  if (!embedUrl) {
    console.error("Invalid Vimeo link:", link);
    return <p className="text-red-500">Invalid Vimeo Link</p>;
  }

  return (
    <iframe
      className="w-[185px] h-[120px]"
      src={embedUrl}
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
      title="Vimeo Video"
    />
  );
};

export default VimeoVideo;
