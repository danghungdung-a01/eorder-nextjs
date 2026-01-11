'use client';

import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

type Props = {
  videoId: string;
};

export default function VideoButton({ videoId }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="video-section">
      {/* Nút mở video */}
      <button className="video-section-btn" onClick={() => setOpen(true)}>
        <span className="ak-player-btn ak-accent-color">
          <span></span>
        </span>
      </button>

      {/* Modal video full màn hình */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        showCloseIcon={false}
        center={false}
        classNames={{
          overlay:
            "fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-0 m-0",
          modal:
            "w-screen h-screen max-w-none bg-black p-0 m-0 rounded-none overflow-hidden flex items-center justify-center border-0 shadow-none",
        }}
      >
        {/* iframe YouTube chiếm toàn bộ màn hình */}
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
          title="YouTube video player"
          allow="autoplay; fullscreen"
          allowFullScreen
          className="w-full h-full border-none"
        ></iframe>
      </Modal>
    </div>
  );
}
