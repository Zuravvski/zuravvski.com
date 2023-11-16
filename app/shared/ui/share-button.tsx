"use client";

import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { Button } from "./button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { useToggle } from "../hooks";
import { ArrowContainer, Popover } from "react-tiny-popover";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const ShareButton = () => {
  const [isVisible, toggleVisible] = useToggle(false);

  return (
    <Popover
      positions={["bottom", "left", "top", "right"]}
      isOpen={isVisible}
      onClickOutside={() => toggleVisible()}
      content={({ position, childRect, popoverRect }) => (
        <ArrowContainer
          position={position}
          childRect={childRect}
          popoverRect={popoverRect}
          arrowColor="#3F3F46"
          arrowSize={6}
        >
          <ul className="rounded-lg ring-1 bg-zinc-800 ring-zinc-700 p-4 space-x-2 flex items-center">
            <li className="cursor-pointer w-8 h-8">
              <CopyToClipboard
                text={document.URL}
                onCopy={() => toggleVisible()}
              >
                <span className="w-full h-full flex items-center justify-center bg-zinc-700">
                  <FontAwesomeIcon icon={faLink} />
                </span>
              </CopyToClipboard>
            </li>
            <li className="w-8 h-8">
              <TwitterShareButton url={document.URL} onClick={() => toggleVisible()}>
                <TwitterIcon size={32} />
              </TwitterShareButton>
            </li>
            <li className="w-8 h-8">
              <LinkedinShareButton url={document.URL} onClick={() => toggleVisible()}>
                <LinkedinIcon size={32} />
              </LinkedinShareButton>
            </li>
            <li className="w-8 h-8">
              <RedditShareButton url={document.URL} onClick={() => toggleVisible()}>
                <RedditIcon size={32} />
              </RedditShareButton>
            </li>
          </ul>
        </ArrowContainer>
      )}
    >
      <Button onClick={() => toggleVisible()} className="relative">
        Share
        <FontAwesomeIcon icon={faShareNodes} />
      </Button>
    </Popover>
  );
};
