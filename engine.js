// Elephant Math engine - white elephant party honesty.
// Pure counting arithmetic over your guest count and your house rules.

function assertPositive(value, label) {
  if (!Number.isFinite(value) || value <= 0) {
    throw new Error(label + " must be above zero");
  }
}

function articleNum(n) {
  return (n === 8 || n === 11 || n === 18 || (n >= 80 && n <= 89)) ? "an" : "a";
}

// The night truth: how long the game actually runs before the stealing starts.
function nightTruth(guests, turnMin) {
  assertPositive(guests, "the guest count");
  assertPositive(turnMin, "the turn length");
  const minutes = guests * turnMin;
  return guests + " " + (guests === 1 ? "guest" : "guests") + " at " + turnMin +
    " " + (turnMin === 1 ? "minute" : "minutes") + " a turn is " + articleNum(minutes) + " " + minutes +
    "-minute game before the stealing starts - schedule dessert after, not during.";
}

// The seat truth: how much of the table you get to see.
function seatTruth(guests, seat) {
  assertPositive(guests, "the guest count");
  assertPositive(seat, "the seat");
  if (seat > guests) {
    throw new Error("the seat must be in the game");
  }
  const seen = seat - 1;
  if (seat === 1) {
    return "Seat 1 of " + guests + " shops blind - every gift is still wrapped, " +
      "and the whole table gets to steal your pick.";
  }
  if (seat === guests) {
    return "Seat " + seat + " of " + guests + " sees all " + seen +
      " opened gifts and shops the whole table - the last seat is the best seat, and everyone knows it.";
  }
  return "Seat " + seat + " of " + guests + " sees " + seen + " opened " +
    (seen === 1 ? "gift" : "gifts") + " before choosing - " +
    (guests - seat) + " " + (guests - seat === 1 ? "seat" : "seats") + " behind you can still take it.";
}

// The ceiling truth: the steal cap is the only thing between you and midnight.
function ceilingTruth(guests, stealCap) {
  assertPositive(guests, "the guest count");
  assertPositive(stealCap, "the steal cap");
  const steals = guests * stealCap;
  return "With " + guests + " " + (guests === 1 ? "gift" : "gifts") + " and a " +
    stealCap + "-steal cap, the stealing can run " + steals + " " +
    (steals === 1 ? "steal" : "steals") + " before every gift freezes - the cap is the only " +
    "thing between you and midnight.";
}

if (typeof module !== "undefined") {
  module.exports = { nightTruth, seatTruth, ceilingTruth };
}
