import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  images: string[];
  title: string;
  startIndex?: number;
  onClose: () => void;
}

export default function Gallery({ images, title, startIndex = 0, onClose }: Props) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, goNext, goPrev]);

  useEffect(() => {
    setCurrentIndex(startIndex);
  }, [startIndex]);

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/95 flex flex-col items-center justify-center animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Close gallery"
      >
        <X size={20} />
      </button>

      <div className="relative flex-1 flex items-center justify-center w-full px-4 sm:px-16">
        {images.length > 1 && (
          <button
            onClick={goPrev}
            className="absolute left-2 sm:left-4 z-10 w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        <img
          src={images[currentIndex]}
          alt={`${title} - Screenshot ${currentIndex + 1}`}
          className="max-w-[90vw] max-h-[75vh] object-contain rounded-lg"
        />

        {images.length > 1 && (
          <button
            onClick={goNext}
            className="absolute right-2 sm:right-4 z-10 w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>

      <div className="flex flex-col items-center gap-3 py-4">
        <p className="text-white/90 text-sm font-medium">{title}</p>
        {images.length > 1 && (
          <p className="text-white/50 text-xs mono">
            {currentIndex + 1} / {images.length}
          </p>
        )}
        {images.length > 1 && (
          <div className="flex gap-1.5 max-w-[80vw] overflow-x-auto pb-1">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Thumbnail ${i + 1}`}
                className={`w-14 h-10 object-cover rounded cursor-pointer border-2 transition-all flex-shrink-0 ${
                  i === currentIndex
                    ? 'border-primary opacity-100'
                    : 'border-transparent opacity-40 hover:opacity-70'
                }`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
