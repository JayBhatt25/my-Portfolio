import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const [elements, setElements] = useState([]);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.current.unobserve(entry.target);
        }
      });
    }, options);

    const { current: currentObserver } = observer;

    elements.forEach((element) => {
      if (element) currentObserver.observe(element);
    });

    return () => {
      if (currentObserver) currentObserver.disconnect();
    };
  }, [elements, options]);

  return [setElements];
};
