// ============================================================
//  PUZZLE DATA  – Cybersecurity crossword
//  ALL coordinates verified cell-by-cell from Excel grid.
//  Grid: 16 rows × 14 cols
//
//  Key: compound down words run continuously through intersections:
//    2-down  CHANGECONTROL  col2  r0–r12  (13 letters)
//    4-down  SYSTEMOUTAGE   col4  r4–r15  (12 letters)
//    6-down  PHISHINGEMAIL  col13 r2–r14  (13 letters)
// ============================================================

export const PUZZLE = {
  ROWS: 16,
  COLS: 14,

  words: [
    // ── ACROSS ──────────────────────────────────────────────
    {
      number: 2,
      direction: 'across',
      answer: 'Q09OVFJPTA==',            // CONTROL
      row: 0, col: 2,
      clue: 'The thing that was definitely in place before the incident, according to the report'
    },
    {
      number: 3,
      direction: 'across',
      answer: 'REFUQQ==',                // DATA
      row: 0, col: 10,
      clue: 'Oil of the 21st Century'
    },
    {
      number: 4,
      direction: 'across',
      answer: 'QVVESVQ=',                // AUDIT
      row: 2, col: 2,
      clue: 'Annual visit where everyone suddenly discovers their documentation was "just updated"'
    },
    {
      number: 5,
      direction: 'across',
      answer: 'QkFDS1VQ',                // BACKUP
      row: 2, col: 8,
      clue: 'Thing everyone has, nobody tests, and everyone desperately needs on a Friday afternoon'
    },
    {
      number: 9,
      direction: 'across',
      answer: 'QUNDRVNTUkVWSUVX',        // ACCESSREVIEW
      row: 6, col: 0,
      clue: 'Quarterly ritual where managers approve everything without reading it'
    },
    {
      number: 11,
      direction: 'across',
      answer: 'VlBO',                    // VPN
      row: 8, col: 11,
      clue: 'Makes you feel secure while working from a café with 47 other strangers on the same WiFi'
    },
    {
      number: 12,
      direction: 'across',
      answer: 'RExQ',                    // DLP
      row: 10, col: 9,
      clue: 'Tool that blocks you from emailing your own presentation but somehow missed the actual breach'
    },
    {
      number: 15,
      direction: 'across',
      answer: 'TUZB',                    // MFA
      row: 12, col: 11,
      clue: 'Second factor that your phone battery dies on at the worst possible moment'
    },
    {
      number: 16,
      direction: 'across',
      answer: 'QlJFQUNI',               // BREACH
      row: 15, col: 2,
      clue: 'The word that ends careers, starts investigations, and triples the security budget overnight'
    },

    // ── DOWN ─────────────────────────────────────────────────
    {
      number: 1,
      direction: 'down',
      answer: 'VEhJUkRQQVJUWVJJU0s=',   // THIRDPARTYRISK
      row: 0, col: 0,
      clue: 'Your vendor\'s vendor\'s vendor\'s problem that somehow became your problem'
    },
    {
      number: 2,
      direction: 'down',
      answer: 'Q0hBTkdFQ09OVFJPTA==',   // CHANGECONTROL
      row: 0, col: 2,
      clue: 'The process that was bypassed just this once because it was urgent, which caused the outage'
    },
    {
      number: 3,
      direction: 'down',
      answer: 'RE9D',                    // DOC
      row: 0, col: 10,
      clue: 'Paper or digital record of information, short form'
    },
    {
      number: 6,
      direction: 'down',
      answer: 'UEhJU0hJTkdFTUFJTA==',   // PHISHINGEMAIL
      row: 2, col: 13,
      clue: 'Message that somehow still fools people despite 47 mandatory awareness trainings'
    },
    {
      number: 7,
      direction: 'down',
      answer: 'U1lTVEVNT1VUQUdF',       // SYSTEMOUTAGE
      row: 4, col: 4,
      clue: 'Scheduled for 2am Sunday, actually happens 2pm Thursday during the board presentation'
    },
    {
      number: 8,
      direction: 'down',
      answer: 'VEhSRUFU',               // THREAT
      row: 4, col: 6,
      clue: 'Anything your CISO uses to justify next year\'s budget request'
    },
    {
      number: 10,
      direction: 'down',
      answer: 'SU5DSURFTlQ=',           // INCIDENT
      row: 6, col: 9,
      clue: 'An "issue" until legal gets involved, at which point it becomes one of these'
    },
    {
      number: 13,
      direction: 'down',
      answer: 'UEFN',                   // PAM
      row: 10, col: 11,
      clue: 'Keeps the keys to the kingdom — and the admin who manages it has a very stressful job'
    },
    {
      number: 14,
      direction: 'down',
      answer: 'UEFUQ0g=',               // PATCH
      row: 11, col: 7,
      clue: 'Fix that was available six months before the breach that nobody had time to apply'
    },
  ]
};
