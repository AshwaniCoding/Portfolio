/**
 * Experience Calculation Utility
 * Automatically calculates dynamic QA engineering experience from joining date.
 * Joining Date: 20 January 2025 (UST)
 * Standard tech/resume notation: Years.Months (e.g. 1 yr 7 mos -> "1.7", 1 yr 10 mos -> "1.10", 2 yrs 0 mos -> "2.0")
 */

export const JOINING_DATE = new Date(2025, 0, 20); // 20 Jan 2025

/**
 * Calculates current experience dynamically based on current date.
 * Automatically advances over time (e.g., after 3 months, 6 months, years).
 * 
 * @param {Date} [startDate=JOINING_DATE] The starting employment date
 * @param {Date} [currentDate=new Date()] The current comparison date
 * @returns {Object} Comprehensive experience metrics and formatted strings
 */
export function calculateExperience(startDate = JOINING_DATE, currentDate = new Date()) {
  const start = new Date(startDate);
  const now = new Date(currentDate);

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();

  // Adjust for negative days in the current month
  if (days < 0) {
    months -= 1;
    const prevMonthDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    days += prevMonthDays;
  }

  // Adjust for negative months
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  // Resume Years.Months notation (e.g. 1 year 7 months -> "1.7")
  const expNotation = months === 0 ? `${years}.0` : `${years}.${months}`;
  const totalMonthsCount = (years * 12) + months;

  // Human readable text: e.g. "1 Year 7 Months"
  let humanReadable = "";
  if (years > 0 && months > 0) {
    humanReadable = `${years} ${years === 1 ? 'Year' : 'Years'} ${months} ${months === 1 ? 'Month' : 'Months'}`;
  } else if (years > 0) {
    humanReadable = `${years} ${years === 1 ? 'Year' : 'Years'}`;
  } else {
    humanReadable = `${months} ${months === 1 ? 'Month' : 'Months'}`;
  }

  return {
    years,
    months,
    days,
    totalMonths: totalMonthsCount,
    decimal: expNotation, // "1.7"
    formattedDecimal: expNotation, // "1.7"
    yearsText: `${expNotation} Years`, // "1.7 Years"
    yrsExp: `${expNotation} Yrs Exp`, // "1.7 Yrs Exp"
    badge: `${expNotation} Yrs Exp`,
    humanReadable, // "1 Year 7 Months"
    period: "January 2025 – Present",
    company: "UST",
    startDateFormatted: "20 January 2025"
  };
}

// Current dynamically calculated experience instance
export const CURRENT_EXPERIENCE = calculateExperience();
