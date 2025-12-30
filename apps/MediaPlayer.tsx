import React, { useRef } from 'react';
import { VideoRendererDriver } from '../services/VideoRendererDriver';
export const VertilMedia = ({ file }: any) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <div className="h-full bg-black flex flex-col items-center justify-center">
      {file?.extension === 'mp4' ? (
        <video ref={videoRef} src={file.content} className="w-full" controls />
      ) : (
        <i className="fas fa-compact-disc text-white/10 text-6xl animate-spin-slow"></i>
      )}
    </div>
  );
};