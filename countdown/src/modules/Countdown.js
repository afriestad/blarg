/*
All code in here is liberally lifted from https://github.com/joshhunt/seven/blob/main/bungie-website-output/site-source/Areas/Direct/BeyondLightArg/BeyondLightARGPart2.tsx
With thanks!
*/

import moment from "moment-timezone";
import React, { useEffect, useState } from "react";

import styles from './Countdown.module.css';

const pad = (str: string | number) => String(str).padStart(2, "0");

const Timer = () => {
  const [now, setNow] = useState(moment());
  const releaseGateDate = moment.tz("2020-11-05T19:00:00", "Europe/Oslo");

  useEffect(() => {
    setTimeout(() => setNow(moment()), 1000);
  }, [now]);

  const diff = releaseGateDate.diff(now);
  const duration = moment.duration(diff);
  const timer = {
    days: duration.days() === 0 ? duration.months() * 31 : duration.days(),
    hours: duration.hours(),
    minutes: duration.minutes(),
    seconds: duration.seconds(),
  };

  const timeRemaining = `${pad(timer.days)}:${pad(timer.hours)}:${pad(
    timer.minutes
  )}:${pad(timer.seconds)}`;

  return (
    <div className={styles.part2wrapper}>
      <div className={styles.timer}>
        {timeRemaining.split("").map((val, i) => (
          <span key={i} className={val === ":" ? styles.colon : undefined}>
            {val}
          </span>
        ))}
      </div>
      <div className={styles.bottomLabel}>
          Something is about to happen on Europa! Check <a href="../index">this writeup</a> for our progress so far, and come participate in the ARG on <a target="_blank" rel="noreferrer" href="https://discord.gg/Tue4PMf">The RaidSecrets Discord</a>!
      </div>
      <div className={styles.aboutMe}>
          This countdown adapted from Bungie.net by Lemonous (<a target="_blank" rel="noreferrer" href="https://github.com/afriestad">Github</a>, <a target="_blank" rel="noreferrer" href="https://twitter.com/Lemonous">Twitter</a>, <a target="_blank" rel="noreferrer" href="https://reddit.com/u/Aeluvium">Reddit</a>, Lemonous#2690 on Discord). Look at the code <a target="_blank" rel="noreferrer" href="https://github.com/afriestad/blarg">here!</a>
      </div>
    </div>
  );
};

export default Timer;
