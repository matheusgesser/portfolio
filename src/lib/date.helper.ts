/**
 * Decomposes an ISO 8601 date string into day, month, and year components.
 *
 * @example
 * decomposeDate('2025-06-05T00:00:00Z');
 * // { day: 5, month: 6, year: 2025 }
 */
export const decomposeDate = (dateString: string) => {
    const date = new Date(dateString);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return { day, month, year };
};

/**
 * Converts a 1-based month number to a short localized month name (e.g., 1 → 'Jan').
 *
 * @example
 * getShortMonth(2); // 'Feb'
 */
export const getShortMonth = (monthNumber: number): string => {
  if (monthNumber < 1 || monthNumber > 12) return '';

  const date = new Date(Date.UTC(2000, monthNumber - 1, 1)); // any static date

  return new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
};