export interface ReadingTimeViewModel {
  readingTime?: number;
}

export const getReadingTime = (readingTime?: ReadingTimeViewModel) => {
  const time = (readingTime?.readingTime) ?? 0;
  return `${time} ${time === 1 ? 'min' : 'mins'}`;
}
