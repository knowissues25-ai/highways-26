import type { CSSProperties } from 'react';

type SceneItem = {
    id: string;
    left: string;
    top?: string;
    bottom?: string;
    size: string;
    delay: string;
    duration: string;
    drift?: string;
    className?: string;
};

const lanterns: SceneItem[] = [
    { id: 'lantern-1', left: '4%', top: '16%', size: '72px', delay: '0s', duration: '14s' },
    { id: 'lantern-2', left: '88%', top: '20%', size: '84px', delay: '1.8s', duration: '16s' },
    { id: 'lantern-3', left: '10%', top: '72%', size: '64px', delay: '0.9s', duration: '13s', className: 'mobile-hide' },
    { id: 'lantern-4', left: '82%', top: '68%', size: '76px', delay: '2.4s', duration: '15s', className: 'mobile-hide' }
];

const orbs: SceneItem[] = [
    { id: 'orb-1', left: '18%', top: '24%', size: '220px', delay: '0s', duration: '18s' },
    { id: 'orb-2', left: '72%', top: '12%', size: '180px', delay: '2s', duration: '15s' },
    { id: 'orb-3', left: '58%', top: '78%', size: '260px', delay: '4s', duration: '20s', className: 'mobile-hide' },
    { id: 'orb-4', left: '8%', top: '82%', size: '160px', delay: '1.5s', duration: '17s', className: 'mobile-hide' }
];

const embers: SceneItem[] = Array.from({ length: 18 }, (_, index) => ({
    id: `ember-${index + 1}`,
    left: `${(index * 11) % 100}%`,
    bottom: `${-10 - (index % 5) * 4}%`,
    size: `${2 + (index % 3)}px`,
    delay: `${(index % 6) * 1.2}s`,
    duration: `${11 + (index % 5) * 2}s`,
    drift: `${-70 + (index % 7) * 22}px`,
    className: index > 9 ? 'mobile-hide' : undefined
}));

const toStyle = (variables: Record<string, string>) => variables as CSSProperties;

const AmbientScene = () => {
    return (
        <div className="ambient-scene" aria-hidden="true">
            <div className="ambient-scene__wash" />

            {orbs.map((orb) => (
                <span
                    key={orb.id}
                    className={`ambient-orb ${orb.className ?? ''}`.trim()}
                    style={toStyle({
                        '--left': orb.left,
                        '--top': orb.top ?? '0%',
                        '--size': orb.size,
                        '--delay': orb.delay,
                        '--duration': orb.duration
                    })}
                />
            ))}

            {lanterns.map((lantern) => (
                <span
                    key={lantern.id}
                    className={`ambient-lantern ${lantern.className ?? ''}`.trim()}
                    style={toStyle({
                        '--left': lantern.left,
                        '--top': lantern.top ?? '0%',
                        '--size': lantern.size,
                        '--delay': lantern.delay,
                        '--duration': lantern.duration
                    })}
                />
            ))}

            {embers.map((ember) => (
                <span
                    key={ember.id}
                    className={`ambient-ember ${ember.className ?? ''}`.trim()}
                    style={toStyle({
                        '--left': ember.left,
                        '--bottom': ember.bottom ?? '-10%',
                        '--size': ember.size,
                        '--delay': ember.delay,
                        '--duration': ember.duration,
                        '--drift': ember.drift ?? '0px'
                    })}
                />
            ))}
        </div>
    );
};

export default AmbientScene;