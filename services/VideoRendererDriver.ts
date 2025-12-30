export const VideoRendererDriver = {
  applyProcessing: (video: HTMLVideoElement | null) => {
    if (!video) return;
    video.style.filter = 'contrast(1.05) saturate(1.1) brightness(1.02)';
  },
  getOverlayStyles: () => ({
    background: 'radial-gradient(circle, transparent 20%, rgba(0,0,0,0.1) 100%)',
    pointerEvents: 'none' as const,
    opacity: 0.3
  })
};