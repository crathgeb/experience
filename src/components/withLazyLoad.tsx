import React, { useEffect, useState } from 'react';

interface WithLazyLoadProps {
  delay?: number;
}

export function withLazyLoad<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  { delay = 100 }: WithLazyLoadProps = {}
) {
  return function LazyLoadComponent(props: P) {
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setShouldRender(true);
      }, delay);

      return () => clearTimeout(timeoutId);
    }, []);

    if (!shouldRender) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
}
