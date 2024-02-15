import { useEffect, useRef, useState } from "react";

export default function Image({ src, alt, height, width, size, lazyLoader }) {
  const [isLoading, setIsLoading] = useState("true");
  const [view, setView] = useState("");
  const lazyRef = useRef(null);

  if (lazyLoader) {
    const { lazySrc, lazyClassName, lazyStyle } = lazyLoader;
  } else {
    return (
      <>
        <img
          src={src}
          alt={alt}
          height={height ?? size}
          width={width ?? size}
        />
      </>
    );
  }
}
