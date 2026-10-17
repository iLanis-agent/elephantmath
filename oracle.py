import json

def article_num(n):
    return "an" if (n in (8, 11, 18) or 80 <= n <= 89) else "a"

def night_truth(guests, turn_min):
    minutes = guests * turn_min
    g = "guest" if guests == 1 else "guests"
    m = "minute" if turn_min == 1 else "minutes"
    return (f"{guests} {g} at {turn_min} {m} a turn is {article_num(minutes)} {minutes}-minute game before the "
            f"stealing starts - schedule dessert after, not during.")

def seat_truth(guests, seat):
    if seat > guests:
        raise ValueError("the seat must be in the game")
    seen = seat - 1
    if seat == 1:
        return (f"Seat 1 of {guests} shops blind - every gift is still wrapped, and the "
                f"whole table gets to steal your pick.")
    if seat == guests:
        return (f"Seat {seat} of {guests} sees all {seen} opened gifts and shops the whole "
                f"table - the last seat is the best seat, and everyone knows it.")
    behind = guests - seat
    gw = "gift" if seen == 1 else "gifts"
    sw = "seat" if behind == 1 else "seats"
    return (f"Seat {seat} of {guests} sees {seen} opened {gw} before choosing - "
            f"{behind} {sw} behind you can still take it.")

def ceiling_truth(guests, cap):
    steals = guests * cap
    g = "gift" if guests == 1 else "gifts"
    s = "steal" if steals == 1 else "steals"
    return (f"With {guests} {g} and a {cap}-steal cap, the stealing can run {steals} {s} "
            f"before every gift freezes - the cap is the only thing between you and midnight.")

cases = []
for g, t in [(12, 3), (8, 2), (20, 4), (1, 3)]:
    cases.append({"fn": "nightTruth", "args": [g, t], "expected": night_truth(g, t)})
for g, s in [(12, 1), (12, 12), (12, 5), (6, 2), (6, 5)]:
    cases.append({"fn": "seatTruth", "args": [g, s], "expected": seat_truth(g, s)})
for g, c in [(12, 3), (8, 2), (15, 1)]:
    cases.append({"fn": "ceilingTruth", "args": [g, c], "expected": ceiling_truth(g, c)})

with open("expected.json", "w") as f:
    json.dump(cases, f, indent=2)
    f.write("\n")
print(len(cases), "cases written")
