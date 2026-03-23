import { useEffect, useState } from 'react';

const Hitodama = ({ world }: { world: string }) => {
    const [wisps, setWisps] = useState<any[]>([]);

    useEffect(() => {
        const wispCount = world === 'hankai' ? 20 : 12;
        const newWisps = Array.from({ length: wispCount }).map((_, i) => ({
            id: i,
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            size: world === 'hankai' ? Math.random() * 15 + 10 + 'px' : Math.random() * 60 + 20 + 'px',
            duration: Math.random() * 20 + 15 + 's',
            delay: Math.random() * -20 + 's',
            color: world === 'hankai' ? '#ff2400' : (world === 'heikai' ? 'var(--heikai-accent)' : '#00d2ff'),
        }));
        setWisps(newWisps);
    }, [world]);

    return (
        <div className={`hitodama-container world-${world}`}>
            {wisps.map(w => (
                <div
                    key={w.id}
                    className="wisp"
                    style={{
                        left: w.left,
                        top: w.top,
                        width: w.size,
                        height: w.size,
                        backgroundColor: w.color,
                        animationDuration: w.duration,
                        animationDelay: w.delay,
                        filter: `blur(${parseInt(w.size) / 2}px) brightness(1.5)`,
                        boxShadow: `0 0 30px ${w.color}`
                    }}
                />
            ))}
        </div>
    );
};

export default Hitodama;
