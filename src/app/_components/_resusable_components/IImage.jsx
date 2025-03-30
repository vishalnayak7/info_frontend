"use client"

import Image from "next/image";
import { useState } from "react";

export default function IImage({ url, alt, quality = 50, loading = 'lazy' }) {

     const [imgSrc, setImgSrc] = useState(url || "/images/error_image.png");

     return (
          
          <Image
               placeholder="blur"
               blurDataURL="/images/error_image.png"
               src={imgSrc}
               alt={alt ?? "Article Image"}
               fill
               loading={loading}
               quality={quality}
               className="object-cover"
               onError={() => setImgSrc("/images/error_image.png")}
          />
     )
}
