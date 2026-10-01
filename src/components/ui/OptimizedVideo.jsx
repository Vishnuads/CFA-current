import React, { useRef, useState, useEffect } from 'react';

const OptimizedVideo = ({ src, poster, alt }) => {
    const [isVisible, setIsVisible] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { rootMargin: '50px' }
        );
        if (videoRef.current) {
            observer.observe(videoRef.current);
        }
        return () => observer.disconnect();
    }, []);

    return (
        <div>
            <video ref={videoRef} poster={poster} controls width="100%" height="auto" preload="metadata" className="rounded-lg" alt={alt}
            >
                {isVisible && (
                    <>
                        {/* <source src={src + '.webm'} type="video/webm" /> */}
                        <source src={src} type="video/mp4" />
                    </>
                )}
            </video>
        </div>
    );
};

export default OptimizedVideo;