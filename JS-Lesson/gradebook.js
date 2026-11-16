function getGrade(score) {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";

    else return "F"
}
const isPassed = (score) => score >= 70;

let passed = 0;
for (let s = 50; s <= 100; s += 10) {
    const ok = isPassed(s);
    console.log(`Оноо: ${s} -> ${getGrade(s)} (${ok ? "Тэнцсэн" : "Тэнцээгүй"})`);
    if (ok) passed++;
}
console.log(`Тэнцсэн : ${passed}`);

/* test */