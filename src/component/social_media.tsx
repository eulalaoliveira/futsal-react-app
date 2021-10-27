import React from "react";

interface social_media {
  facebook: string;
  twitter: string;
  instagram: string;
}

function addSocialMedia(socialMedias: social_media) {
  return socialMedias;
}
export class SocialMedia extends React.Component {
  render() {
    return "Social Media accounts:";
  }
}
