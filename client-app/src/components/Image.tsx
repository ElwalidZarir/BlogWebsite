import { IKImage } from "imagekitio-react";

interface IImageProps {
  src: string;
  className: string;
  alt: string;

}

const Image = ({ src, className, alt }: IImageProps) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      path={src}
      className={className}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      alt={alt}
    />
  );
};

export default Image;
