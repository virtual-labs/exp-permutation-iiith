// --- Problems (example, adapt as needed) ---
const problems = [
  {
    id: 1,
    title: "Problem 1",
    desc: "Given a positive integer n, compute the number of ways to arrange all n objects (i.e., n!).",
    template: [
      "int main() {",
      "    int n;",
      '    scanf("%d", &n);',
      "    int result = _____; // initial value",
      "    for (int i = 1; i <= n; i++) {",
      "        result _____ i; // update result",
      "    }",
      '    printf("%d\\n", result);',
      "    return 0;",
      "}",
    ],
    blanks: [
      { placeholder: "initial value", answers: ["1"] },
      { placeholder: "update result", answers: ["*=", "*= "] },
    ],
    hints: [
      "What should result be initialized to for multiplication?",
      "Which operator multiplies result by i?",
      "For n=4, output is 24. For n=3, output is 6.",
    ],
    compilerOutput: "Compiled successfully.",
    runtimeOutput: "For n=4, output is 24. For n=3, output is 6.",
  },
  {
    id: 2,
    title: "Problem 2",
    desc: "Given two positive integers n and r, compute the number of ways to arrange r objects out of n (i.e., n!/(n-r)!).",
    template: [
      "int main() {",
      "    int n, r;",
      '    scanf("%d %d", &n, &r);',
      "    int num = 1;",
      "    for (int i = 1; i <= n; i++) {",
      "        num *= i;",
      "    }",
      "    int denom = 1;",
      "    for (int i = 1; i <= (n - r); i++) {",
      "        denom _____ i; // update denom",
      "    }",
      "    int result = num _____ denom; // compute result",
      '    printf("%d\\n", result);',
      "    return 0;",
      "}",
    ],
    blanks: [
      { placeholder: "update denom", answers: ["*=", "*= "] },
      { placeholder: "compute result", answers: ["/", "/ "] },
    ],
    hints: [
      "How do you calculate the denominator for (n-r)! ?",
      "How do you compute n! divided by (n-r)! ?",
      "For n=5, r=3, output is 60. For n=4, r=2, output is 12.",
    ],
    compilerOutput: "Compiled successfully.",
    runtimeOutput: "For n=5, r=3, output is 60. For n=4, r=2, output is 12.",
  },
  {
    id: 3,
    title: "Problem 3",
    desc: "Given the word 'LEVEL', compute the number of distinct arrangements of its letters.",
    template: [
      "int n = 5; // L E V E L",
      "int count_L = 2, count_E = 2, count_V = 1;",
      "int num = 1;",
      "for (int i = 1; i <= n; i++) num *= i;",
      "int denom = 1;",
      "for (int i = 1; i <= count_L; i++) denom _____ i; // fill for L",
      "for (int i = 1; i <= count_E; i++) denom _____ i; // fill for E",
      "int result = num / denom;",
      'printf("%d\\n", result);',
      "// Output should be 30",
    ],
    blanks: [
      { placeholder: "fill for L", answers: ["*=", "*= "] },
      { placeholder: "fill for E", answers: ["*=", "*= "] },
    ],
    hints: [
      "How do you calculate the factorial for repeated letters?",
      "What operator do you use to multiply denom by i?",
      "Output is 30.",
    ],
    compilerOutput: "Compiled successfully.",
    runtimeOutput: "Output is 30.",
  },
];

let currentProblem = null;
let compileSuccess = false;

// --- DOM Elements ---
const problemSelect = document.getElementById("problem-select");
const problemDesc = document.getElementById("problem-desc");
const codeTemplateDiv = document.getElementById("code-template");
const submitBtn = document.getElementById("submit-btn");
const runBtn = document.getElementById("run-btn");
const feedbackDiv = document.getElementById("feedback");
const runtimeOutputDiv = document.getElementById("runtime-output");
const hintLevelSelect = document.getElementById("hint-level");
const hintsDiv = document.getElementById("hints");

// --- UI Logic ---
document.addEventListener("DOMContentLoaded", () => {
  populateProblemDropdown();
  problemSelect.onchange = () => loadProblem(problemSelect.value);
  submitBtn.onclick = checkAnswers;
  runBtn.onclick = showRuntimeOutput;
  hintLevelSelect.onchange = (e) => showHints(+e.target.value);
});

function populateProblemDropdown() {
  problemSelect.innerHTML = problems
    .map((p, i) => `<option value="${i}">Problem ${i + 1}</option>`)
    .join("");
  if (problems.length > 0) loadProblem(0);
}

function loadProblem(idx) {
  currentProblem = problems[idx];
  compileSuccess = false;
  problemDesc.textContent = currentProblem.desc;
  renderCodeTemplate();
  renderHints();
  feedbackDiv.textContent = "";
  runtimeOutputDiv.textContent = "";
  runBtn.disabled = true;
}

function renderCodeTemplate() {
  codeTemplateDiv.innerHTML = "";
  currentProblem.userInputs = Array(currentProblem.blanks.length).fill("");
  let blankIdx = 0;
  currentProblem.template.forEach((line) => {
    let html = line.replace(/_____+/g, () => {
      if (blankIdx >= currentProblem.blanks.length) return "_____";
      const blank = currentProblem.blanks[blankIdx];
      const input = `<input class=\"blank-input\" data-blank=\"${blankIdx}\" placeholder=\"${blank.placeholder}\" />`;
      blankIdx++;
      return input;
    });
    codeTemplateDiv.innerHTML += `<div class=\"template-line\">${html}</div>`;
  });
  // Attach input listeners
  codeTemplateDiv.querySelectorAll(".blank-input").forEach((input) => {
    input.addEventListener("input", (e) => {
      const bIdx = +e.target.getAttribute("data-blank");
      currentProblem.userInputs[bIdx] = e.target.value;
      feedbackDiv.textContent = "";
      runtimeOutputDiv.textContent = "";
      runBtn.disabled = true;
    });
  });
}

function renderHints() {
  hintLevelSelect.innerHTML = "";
  hintLevelSelect.innerHTML += `<option value="0" disabled selected>Hint 0</option>`;
  for (let i = 1; i <= currentProblem.hints.length; ++i) {
    hintLevelSelect.innerHTML += `<option value="${i}">Hint ${i}</option>`;
  }
  showHints(0);
  hintLevelSelect.onchange = (e) => showHints(+e.target.value);
}

function showHints(level) {
  if (level === 0) {
    hintsDiv.innerHTML = "";
    return;
  }
  hintsDiv.innerHTML = `<div class=\"hint\">${currentProblem.hints[level - 1]}</div>`;
}

function checkAnswers() {
  let allCorrect = true;
  let feedback = "";
  currentProblem.userInputs =
    currentProblem.userInputs || Array(currentProblem.blanks.length).fill("");
  currentProblem.blanks.forEach((blank, i) => {
    const userVal = (currentProblem.userInputs[i] || "").trim();
    if (blank.answers.map((a) => a.trim()).includes(userVal)) {
      feedback += `<div class=\"feedback-correct\">Blank ${i + 1}: Correct</div>`;
    } else {
      feedback += `<div class=\"feedback-incorrect\">Blank ${i + 1}: Incorrect</div>`;
      allCorrect = false;
    }
  });
  feedbackDiv.innerHTML = feedback;
  if (allCorrect) {
    feedbackDiv.innerHTML +=
      '<div class=\"feedback-all-correct\">All blanks correct! You can now run the code.</div>';
    compileSuccess = true;
    runBtn.disabled = false;
  } else {
    runBtn.disabled = true;
  }
}

function showRuntimeOutput() {
  if (compileSuccess && currentProblem) {
    runtimeOutputDiv.textContent = currentProblem.runtimeOutput;
  }
}
