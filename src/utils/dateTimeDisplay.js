import { DateTime } from 'luxon';

export const dateTimeDisplay = dateTime => {
  const date = DateTime.fromISO(dateTime);
  const diff = DateTime.now()
    .diff(date, [
      'years',
      'months',
      'weeks',
      'days',
      'hours',
      'minutes',
      'seconds',
    ])
    .toObject();
  if (diff.years > 0) {
    return `${diff.years} ${diff.years < 2 ? 'year ago' : 'years ago'}`;
  } else if (diff.months > 0) {
    return `${diff.months} ${diff.months < 2 ? 'month ago' : 'months ago'}`;
  } else if (diff.weeks > 0) {
    return `${diff.weeks} ${diff.weeks < 2 ? 'week ago' : 'weeks ago'}`;
  } else if (diff.days > 0) {
    return `${diff.days} ${diff.dayss < 2 ? 'day ago' : 'days ago'}`;
  } else if (diff.hours > 0) {
    return `${diff.hours} ${diff.hours < 2 ? 'hour ago' : 'hours ago'}`;
  } else if (diff.minutes > 0) {
    return `${diff.minutes} ${diff.minutes < 2 ? 'minute ago' : 'minutes ago'}`;
  } else if (diff.seconds >= 30) {
    return `${diff.seconds.toFixed(0)} seconds ago`;
  } else {
    return 'Just now';
  }
};
