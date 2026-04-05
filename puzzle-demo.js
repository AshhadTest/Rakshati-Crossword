// ============================================================
//  PUZZLE DATA  – India-themed crossword  (DEMO)
//  Grid: 7 rows × 9 cols
//  All coordinates verified cell-by-cell.
//
//      0  1  2  3  4  5  6  7  8
//   0 [.  .  .  I  N  D  I  R  A]   ← 1-INDIRA across
//   1 [.  .  .  N  A  A  N  .  .]   ← 5-NAAN across
//   2 [.  B  .  D  .  .  .  P  .]
//   3 [L  O  T  U  S  .  T  A  J]   ← 8-LOTUS, 9-TAJ across
//   4 [.  L  .  S  .  .  .  I  .]
//   5 [.  L  .  .  .  A  S  S  I]   ← 10-ASSI across
//   6 [A  Y  U  R  .  .  .  A  .]   ← 11-AYUR across
//
//   Down: 1-INDUS(c3), 6-BOLLY(c1), 7-PAISA(c7)
// ============================================================

export const PUZZLE = {
  ROWS: 7,
  COLS: 9,

  words: [
    // ── ACROSS ──────────────────────────────────────────────
    {
      number: 1,
      direction: 'across',
      answer: 'SU5ESVJB',        // INDIRA
      row: 0, col: 3,
      clue: 'Female PM'
    },
    {
      number: 5,
      direction: 'across',
      answer: 'TkFBTg==',        // NAAN
      row: 1, col: 3,
      clue: 'A popular bread'
    },
    {
      number: 8,
      direction: 'across',
      answer: 'TE9UVVM=',        // LOTUS
      row: 3, col: 0,
      clue: 'National flower'
    },
    {
      number: 9,
      direction: 'across',
      answer: 'VEFK',            // TAJ
      row: 3, col: 6,
      clue: 'Most touristy mahal'
    },
    {
      number: 10,
      direction: 'across',
      answer: 'QVNTSQ==',        // ASSI
      row: 5, col: 5,
      clue: 'One of the rivers that combine to make Varanasi'
    },
    {
      number: 11,
      direction: 'across',
      answer: 'QVlVUg==',        // AYUR
      row: 6, col: 0,
      clue: 'First part of a traditional Indian medical system'
    },

    // ── DOWN ─────────────────────────────────────────────────
    {
      number: 1,
      direction: 'down',
      answer: 'SU5EVVM=',        // INDUS
      row: 0, col: 3,
      clue: 'Ancient river civilisation'
    },
    {
      number: 6,
      direction: 'down',
      answer: 'Qk9MTFk=',        // BOLLY
      row: 2, col: 1,
      clue: 'Short for Hindi movie industry'
    },
    {
      number: 7,
      direction: 'down',
      answer: 'UEFJU0E=',        // PAISA
      row: 2, col: 7,
      clue: 'Smaller than a rupee, now endangered'
    },
  ]
};
