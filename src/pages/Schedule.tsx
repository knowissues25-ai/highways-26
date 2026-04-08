import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const scheduleBackground = 'https://cdn.svcehighways.in/background.jpg';
const LINE_POSITION = '1.1rem';
const SCHEDULE_DATE = {
  year: 2026,
  monthIndex: 3,
  day: 9,
};

const parseTime = (time: string) => {
  const [t, modifier] = time.split(' ');
  let [hours, minutes] = t.split(':').map(Number);

  if (modifier === 'PM' && hours !== 12) hours += 12;
  if (modifier === 'AM' && hours === 12) hours = 0;

  return hours * 60 + minutes;
};

const getNowMinutes = () => {
  const now = new Date();
  return now.getHours() * 60 + now.getMinutes();
};

const isSameScheduleDate = (date: Date) =>
  date.getFullYear() === SCHEDULE_DATE.year &&
  date.getMonth() === SCHEDULE_DATE.monthIndex &&
  date.getDate() === SCHEDULE_DATE.day;

const schedule = [
  {
    time: '9:30 AM',
    title: 'Bus Arrival',
    note: 'Campus gates open and the festival convoy rolls in.',
  },
  {
    time: '10:00 AM',
    title: 'Commencement of Events',
    note: 'Competitive events and experiences kick off across the venue.',
  },
  {
    time: '4:30 PM',
    title: 'Events Conclude & Ticket Checking Begins',
    note: 'Final event wrap-up before the evening crowd enters for the proshow.',
  },
  {
    time: '5:00 PM',
    title: 'Proshow Begins',
    note: 'Main-stage entertainment takes over with the Day 1 lineup.',
  },
  {
    time: '8:30 PM',
    title: 'Conclusion of Day 1',
    note: 'Lights dim on the first chapter of Highways.',
  },
  {
    time: '9:00 PM',
    title: 'Bus Departure',
    note: 'Return transit departs after the closing window.',
  },
];

const proshow = [
  'Classical Performance - Dance Club',
  'Stand-up Comedy - Vikkals Vikram',
  'Music Club Performance',
  'Eternals Band Performance',
];

const Schedule = () => {
  const [progress, setProgress] = useState(0);
  const [nowMinutes, setNowMinutes] = useState(getNowMinutes());
  const [currentDateTime, setCurrentDateTime] = useState(() => new Date());

  const start = useMemo(() => parseTime(schedule[0].time), []);
  const end = useMemo(() => parseTime(schedule[schedule.length - 1].time), []);

  useEffect(() => {
    const updateProgress = () => {
      const nowDate = new Date();
      const now = getNowMinutes();
      const beforeScheduleDate =
        nowDate.getFullYear() < SCHEDULE_DATE.year ||
        (nowDate.getFullYear() === SCHEDULE_DATE.year &&
          (nowDate.getMonth() < SCHEDULE_DATE.monthIndex ||
            (nowDate.getMonth() === SCHEDULE_DATE.monthIndex &&
              nowDate.getDate() < SCHEDULE_DATE.day)));
      const afterScheduleDate =
        nowDate.getFullYear() > SCHEDULE_DATE.year ||
        (nowDate.getFullYear() === SCHEDULE_DATE.year &&
          (nowDate.getMonth() > SCHEDULE_DATE.monthIndex ||
            (nowDate.getMonth() === SCHEDULE_DATE.monthIndex &&
              nowDate.getDate() > SCHEDULE_DATE.day)));
      let nextProgress = 0;

      if (beforeScheduleDate) {
        nextProgress = 0;
      } else if (afterScheduleDate) {
        nextProgress = 100;
      } else {
        nextProgress = Math.min(
          Math.max(((now - start) / (end - start)) * 100, 0),
          100
        );
      }

      setNowMinutes(now);
      setCurrentDateTime(nowDate);
      setProgress(nextProgress);
    };

    updateProgress();
    const intervalId = window.setInterval(updateProgress, 30000);

    return () => window.clearInterval(intervalId);
  }, [end, start]);

  const activeIndex = useMemo(() => {
    if (!isSameScheduleDate(currentDateTime)) {
      if (
        currentDateTime.getFullYear() > SCHEDULE_DATE.year ||
        (currentDateTime.getFullYear() === SCHEDULE_DATE.year &&
          (currentDateTime.getMonth() > SCHEDULE_DATE.monthIndex ||
            (currentDateTime.getMonth() === SCHEDULE_DATE.monthIndex &&
              currentDateTime.getDate() > SCHEDULE_DATE.day)))
      ) {
        return schedule.length - 1;
      }

      return -1;
    }

    let currentIndex = -1;

    schedule.forEach((item, index) => {
      if (nowMinutes >= parseTime(item.time)) {
        currentIndex = index;
      }
    });

    return currentIndex;
  }, [currentDateTime, nowMinutes]);

  const markerTop = useMemo(() => {
    const markerSize = 36;
    const minOffset = markerSize / 2;
    const usablePercent = Math.min(Math.max(progress, 0), 100);
    return `clamp(${minOffset}px, calc(${usablePercent}% - ${minOffset}px), calc(100% - ${markerSize}px))`;
  }, [progress]);

  const canHover = progress > 4 && progress < 96;

  return (
    <section
      className="schedule-page"
      style={{
        paddingTop: '150px',
        minHeight: '100vh',
        paddingBottom: '100px',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: `url(${scheduleBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at top, rgba(255,77,77,0.12), transparent 38%), rgba(0,0,0,0.82)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="schedule-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span
            style={{
              color: '#ff4d4d',
              letterSpacing: '6px',
              fontWeight: 900,
              textTransform: 'uppercase',
              fontSize: '0.8rem',
              display: 'block',
              marginBottom: '1rem',
            }}
          >
            DAY 1 TIMELINE
          </span>

          <h1
            style={{
              fontSize: 'clamp(2.8rem, 8vw, 4.8rem)',
              fontWeight: 950,
              lineHeight: 1,
              marginBottom: '1rem',
            }}
          >
            FESTIVAL SCHEDULE
          </h1>

        </div>


        <div
          className="schedule-layout"
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.4fr) minmax(280px, 0.9fr)',
            gap: '2rem',
            alignItems: 'start',
          }}
        >
          <div
            className="schedule-panel"
            style={{
              background: 'rgba(255,255,255,0.035)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '28px',
              padding: '2rem',
              backdropFilter: 'blur(18px)',
            }}
          >
            <div style={{ marginBottom: '1.75rem' }}>
              <p
                style={{
                  margin: 0,
                  color: 'rgba(255,255,255,0.45)',
                  textTransform: 'uppercase',
                  letterSpacing: '3px',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                }}
              >
                Timeline
              </p>
              <h2 style={{ margin: '0.35rem 0 0', fontSize: '1.8rem', fontWeight: 900 }}>
                Day Flow
              </h2>
            </div>

            <div className="schedule-timeline" style={{ position: 'relative' }}>
              <div
                aria-hidden="true"
                className="schedule-track"
                style={{
                  position: 'absolute',
                  left: LINE_POSITION,
                  top: '0.25rem',
                  bottom: '0.25rem',
                  width: '2px',
                  background: 'rgba(255,255,255,0.08)',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: `${progress}%`,
                    background: 'linear-gradient(180deg, #22c55e 0%, #86efac 100%)',
                    boxShadow: '0 0 18px rgba(34,197,94,0.35)',
                    transition: 'height 700ms ease',
                  }}
                />
                  <motion.div
                    className="schedule-now-indicator"
                    animate={{
                      y: canHover ? [-6, 6, -6] : 0,
                  }}
                    transition={{
                      duration: 2.6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  style={{
                    position: 'absolute',
                    left: LINE_POSITION,
                    top: markerTop,
                    transform: 'translate(-50%, -50%)',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(34,197,94,0.14)',
                    border: '1px solid rgba(34,197,94,0.28)',
                    boxShadow: '0 0 0 10px rgba(34,197,94,0.1), 0 14px 32px rgba(0,0,0,0.35)',
                    transition: 'top 700ms ease',
                    zIndex: 3,
                  }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        inset: '-2px',
                        borderRadius: '50%',
                        border: '1px solid rgba(134,239,172,0.8)',
                      }}
                    />
                    <div
                      style={{
                        width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #22c55e 0%, #86efac 100%)',
                      border: '2px solid #fff',
                      boxShadow: '0 0 18px rgba(34,197,94,0.45)',
                    }}
                  />
                </motion.div>
              </div>

              {schedule.map((item, index) => {
                const isActive = index <= activeIndex;
                const isCurrent = index === activeIndex;

                return (
                  <div
                    key={`${item.time}-${item.title}`}
                    className={`schedule-item${isActive ? ' active' : ''}${isCurrent ? ' current' : ''}`}
                    style={{
                      position: 'relative',
                      paddingLeft: '3.1rem',
                      paddingBottom: index === schedule.length - 1 ? 0 : '1.75rem',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        left: LINE_POSITION,
                        top: '0.95rem',
                        width: '0.9rem',
                        height: '0.9rem',
                        transform: 'translateX(-50%)',
                        borderRadius: '50%',
                        background: isCurrent
                          ? 'linear-gradient(135deg, #22c55e 0%, #86efac 100%)'
                          : isActive
                            ? '#22c55e'
                            : 'rgba(255,255,255,0.16)',
                        border: `1px solid ${
                          isCurrent
                            ? 'rgba(255,255,255,0.7)'
                            : isActive
                              ? 'rgba(134,239,172,0.8)'
                              : 'rgba(255,255,255,0.12)'
                        }`,
                        boxShadow: isCurrent
                          ? '0 0 0 6px rgba(34,197,94,0.14), 0 0 18px rgba(34,197,94,0.45)'
                          : isActive
                            ? '0 0 10px rgba(34,197,94,0.3)'
                            : 'none',
                        zIndex: 2,
                      }}
                    />

                    <div
                      style={{
                        padding: '1.15rem 1.2rem',
                        borderRadius: '20px',
                        background: isCurrent
                          ? 'rgba(34,197,94,0.12)'
                          : 'rgba(255,255,255,0.025)',
                        border: `1px solid ${
                          isCurrent ? 'rgba(34,197,94,0.35)' : 'rgba(255,255,255,0.06)'
                        }`,
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          color: isActive ? '#bbf7d0' : 'rgba(255,255,255,0.45)',
                          fontSize: '0.8rem',
                          letterSpacing: '2px',
                          textTransform: 'uppercase',
                          fontWeight: 800,
                        }}
                      >
                        {item.time}
                      </p>
                      <h3 style={{ margin: '0.5rem 0', fontSize: '1.2rem', fontWeight: 900 }}>
                        {item.title}
                      </h3>
                      <p style={{ margin: 0, color: 'rgba(255,255,255,0.62)', lineHeight: 1.65 }}>
                        {item.note}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <aside
            style={{
              display: 'grid',
              gap: '1.5rem',
            }}
          >
            <div
              className="schedule-panel"
              style={{
                background: 'rgba(255,255,255,0.035)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '28px',
                padding: '2rem',
                backdropFilter: 'blur(18px)',
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: 'rgba(255,255,255,0.45)',
                  textTransform: 'uppercase',
                  letterSpacing: '3px',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                }}
              >
                Spotlight
              </p>
              <h2 style={{ margin: '0.35rem 0 1rem', fontSize: '1.6rem', fontWeight: 900 }}>
                Proshow Lineup
              </h2>

              <div style={{ display: 'grid', gap: '0.85rem' }}>
                {proshow.map((item, index) => (
                  <div
                    key={item}
                    style={{
                      display: 'flex',
                      gap: '0.9rem',
                      alignItems: 'flex-start',
                      padding: '0.9rem 1rem',
                      borderRadius: '18px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <div
                      style={{
                        width: '2rem',
                        height: '2rem',
                        borderRadius: '50%',
                        background: 'rgba(255,77,77,0.18)',
                        color: '#ffd1d1',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 900,
                        flexShrink: 0,
                      }}
                    >
                      {index + 1}
                    </div>
                    <p style={{ margin: 0, color: 'rgba(255,255,255,0.82)', lineHeight: 1.6 }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="schedule-panel"
              style={{
                background: 'linear-gradient(135deg, rgba(255,77,77,0.16), rgba(255,255,255,0.04))',
                border: '1px solid rgba(255,77,77,0.22)',
                borderRadius: '28px',
                padding: '2rem',
                backdropFilter: 'blur(18px)',
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: 'rgba(255,255,255,0.55)',
                  textTransform: 'uppercase',
                  letterSpacing: '3px',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                }}
              >
                Festival Note
              </p>
              <h2 style={{ margin: '0.35rem 0 0.75rem', fontSize: '1.5rem', fontWeight: 900 }}>
                Plan Around the Proshow
              </h2>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.76)', lineHeight: 1.75 }}>
                Events wrap up before evening access begins, so participants can transition smoothly
                from competitions to the main-stage experience.
              </p>
            </div>
          </aside>
        </div>
      </div>

      <style>{`
        .schedule-panel {
          transition: transform 0.35s ease, border-color 0.35s ease, background 0.35s ease, box-shadow 0.35s ease;
        }

        .schedule-panel:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 77, 77, 0.28) !important;
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 900px) {
          .schedule-page {
            padding-top: 110px !important;
            padding-bottom: 80px !important;
          }

          .schedule-layout {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 640px) {
          .schedule-panel {
            padding: 1.35rem !important;
            border-radius: 22px !important;
          }

          .schedule-header {
            margin-bottom: 2.5rem !important;
          }

          .schedule-item {
            padding-left: 2.8rem !important;
          }

        }
      `}</style>
    </section>
  );
};

export default Schedule;
