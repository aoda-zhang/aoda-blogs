import React, { FC, memo } from "react";

import SocialLink from "../SocialLink";

const Footer: FC = () => {
  return (
    <>
      <div>
        {`Copyright © ${new Date().getFullYear()} by Aoda. | All rights reserved.`}
      </div>
      <div>
        <SocialLink />
      </div>
    </>
  );
};
export default memo(Footer);
