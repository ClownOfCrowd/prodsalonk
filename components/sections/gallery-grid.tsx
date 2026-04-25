"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { type Locale } from "@/lib/i18n";
import { getGalleryImages, getUIText } from "@/lib/salon-data";

type GalleryGridProps = {
  locale: Locale;
};

export function GalleryGrid({ locale }: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const galleryImages = getGalleryImages(locale);
  const text = getUIText(locale);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {galleryImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
            onClick={() => setActiveIndex(index)}
            aria-label={`${text.common.openImage} ${index + 1}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
            onClick={() => setActiveIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label={text.common.imagePreview}
          >
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative h-[70vh] w-full max-w-3xl overflow-hidden rounded-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={galleryImages[activeIndex].src}
                alt={galleryImages[activeIndex].alt}
                fill
                sizes="90vw"
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
