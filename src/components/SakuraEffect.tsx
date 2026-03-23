import { useEffect, useState } from 'react';

const SakuraEffect = ({ world }: { world: string }) => {
    const [particles, setParticles] = useState<any[]>([]);

    useEffect(() => {
        const count = world === 'hankai' ? 40 : (world === 'wakai' ? 20 : 15);
        const newParticles = Array.from({ length: count }).map((_, i) => ({
            id: i,
            left: Math.random() * 100 + '%',
            size: world === 'hankai' ? Math.random() * 5 + 2 + 'px' : Math.random() * 10 + 10 + 'px',
            duration: Math.random() * 10 + 5 + 's',
            delay: Math.random() * 5 + 's',
        }));
        setParticles(newParticles);
    }, [world]);

    return (
        <div className={`sakura-container particle-mode-${world}`}>
            {particles.map(p => (
                <div
                    key={p.id}
                    className={`particle ${world === 'heikai' ? 'petal' : (world === 'wakai' ? 'mist' : 'ember')}`}
                    style={{
                        left: p.left,
                        width: p.size,
                        height: p.size,
                        animationDuration: p.duration,
                        animationDelay: p.delay,
                    }}
                />
            ))}
        </div>
    );
};

export default SakuraEffect;
