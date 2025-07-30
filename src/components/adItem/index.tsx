import Link from "next/link";
import styles from "./adItem.module.css";
import Image from "next/image";

type AdItemInput = {
  title: string;
  url: string;
  infoL1: string;
  infoL2?: string;
  infoL3?: string;
  imageSrc?: string;
  alt?: string;
};
export default function AdItem({
  title,
  url,
  infoL1,
  infoL2,
  infoL3,
  imageSrc = "/thumbnail.jpg",
  alt = title,
}: AdItemInput) {
  return (
    <article className={styles.AdItemContainer}>
      <Link href={url}>
        <div className={styles.AdItemDetails}>
          <h2>{title}</h2>
          <div className={styles.AdItemDetailsInfo}>
            <span>{infoL1}</span>
            {!!infoL2 ? <span>{infoL2}</span> : null}
            {!!infoL3 ? <span>{infoL3}</span> : null}
          </div>
        </div>

        <Image
          className={styles.AdItemImage}
          src={imageSrc}
          alt={alt}
          width={136}
          height={136}
          loading="lazy"
          sizes="136px"
        />
      </Link>
    </article>
  );
}
