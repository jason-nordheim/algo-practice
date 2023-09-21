/**
 * Helpers
 */

export const consecutiveDays = (days: number[]) => {
  const consecutive: number[][] = [[days[0]]];
  let lastItemIndex = 0;
  for (let i = 1; i < days.length; i++) {
    const lastDay = days[i - 1];
    const currentDay = days[i];
    if (currentDay - 1 == lastDay) {
      consecutive[lastItemIndex].push(currentDay);
    } else {
      lastItemIndex += 1;
      consecutive.push([currentDay]);
    }
  }
  return consecutive;
};

/**
 *
 * @param days days that you plan to train as an array of integers 1 - 365
 * @param costs cost of train pass, costs[0] = 1 day, costs[1] = 7 days, costs[2] = 30 days
 *  Constraints:
 *    - passes are only valid for consecutive days of travel
 *    - days array is in increasing order
 *    - there are only 3 possible cost options
 *    - ticket costs are between 1-1000
 */
export const minCostForTickets = (days: number[], costs: number[]) => {
  type TicketLengths = 1 | 7 | 30;
  type TicketMap = { [k in TicketLengths]: number };

  const daysConsecutive = consecutiveDays(days);
  if (daysConsecutive.length == 0) {
    return 0;
  }

  const ticketLengths: TicketLengths[] = [30, 7, 1];
  const prices: TicketMap = { 1: costs[0], 7: costs[1], 30: costs[2] };
  const longestTrip = Math.max(...daysConsecutive.map((arr) => arr.length + 1));
  const table: number[][] = new Array().fill([Infinity, 0], 0, longestTrip);
  table[0] = [0, 0];

  for (let tripDur = 1; tripDur < longestTrip; tripDur++) {
    let cost = 0;
    for (const ticketLength of ticketLengths) {
      if (ticketLength > tripDur) {
        continue;
      }

      if (ticketLength == tripDur) {
        cost = prices[ticketLength];
        table[tripDur] = [1, cost];
        break;
      }

      const multiples = Math.floor(tripDur / ticketLength);
      if (multiples > 1) {
        const complimentDays = Math.floor(tripDur - ticketLength * multiples);
        const compliment = table[complimentDays];
        table[tripDur] = [
          // number of days
          compliment[0] + multiples,
          // cost = cost of compliment +
          (compliment[1] = compliment[1] + multiples * prices[ticketLength]),
        ];
      }
    }
  }
  console.table(table);

  let totalCost = 0;
  for (let i = 0; i < daysConsecutive.length; i++) {
    const numDays = daysConsecutive[i].length;
    const costForDays = table[numDays][1];
    totalCost += costForDays;
  }

  return totalCost;
};
