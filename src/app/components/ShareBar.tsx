"use client";
import { usePathname } from "next/navigation";
import {
  FacebookShareButton,
  FacebookIcon,
  // PinterestShareButton,
  // PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "next-share";

export default function ShareBar() {
  const pathname = usePathname();
  const domain = window.location.origin;
  const url = `${domain}/${pathname}`;
  return (
    <div
      className="fixed right-0 top-1/3 flex gap-2 flex-col"
      title="Compartilhe"
    >
      <TwitterShareButton url={url} title="DOMUS Petra">
        <TwitterIcon size={26} round />
      </TwitterShareButton>
      <FacebookShareButton url={url} quote="DOMUS Petra">
        <FacebookIcon size={26} round />
      </FacebookShareButton>
      <RedditShareButton url={url} title="DOMUS Petra">
        <RedditIcon size={26} round />
      </RedditShareButton>
      <WhatsappShareButton url={url} title="DOMUS Petra">
        <WhatsappIcon size={26} round />
      </WhatsappShareButton>
      <LinkedinShareButton url={url} title="DOMUS Petra">
        <LinkedinIcon size={26} round />
      </LinkedinShareButton>
    </div>
  );
}
