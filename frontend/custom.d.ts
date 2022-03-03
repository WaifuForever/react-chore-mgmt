declare module "\*.svg" {
    import React from 'react';
    export const ReactComponent: React.SFC<React.SVGProps<SVGElement>>;
    const src: string;
    export default src;
  }
