import React from "react";

interface YoutubeVideoProps {
  link: string;
}

const YoutubeVideo = ({ link }: YoutubeVideoProps) => {
  if (!link) return null; // Prevent rendering if link is empty

  // Convert regular YouTube link to an embed URL
  const getYouTubeEmbedUrl = (url: string): string | null => {
    const regExp =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]+)/;
    const match = url.match(regExp);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  };

  const embedUrl = getYouTubeEmbedUrl(link);

  if (!embedUrl) {
    console.error("Invalid YouTube link:", link);
    return <p className="text-red-500">Invalid YouTube Link</p>;
  }

  return (
    <iframe
      className="w-[185px] h-[120px]"
      src={embedUrl}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
};

export default YoutubeVideo;
