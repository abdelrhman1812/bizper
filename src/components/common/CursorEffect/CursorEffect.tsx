"use client";
import { useEffect } from "react";

const CursorEffect = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    const updateCursorPosition = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
};

export default CursorEffect;
