// ============================================================
//  PUZZLE DATA  – Cybersecurity & Risk (DEMO)
//  Grid: 23 rows × 15 cols  |  11 words
//  CYBERARK/BENCHMARK removed. RISKAPPETITE restored at col6.
//
//  Col:  0  1  2  3  4  5  6  7  8  9 10 11 12 13 14
//  r0:   .  .  .  .  .  .  .  .  I  .  .  .  .  .  .
//  r1:   .  .  .  .  .  .  .  .  N  .  .  C  .  .  .
//  r2:   .  .  .  .  .  .  .  .  H  .  .  O  .  .  .
//  r3:   .  .  .  .  .  .  .  .  E  .  .  N  .  .  .
//  r4:   .  .  .  .  .  .  R  .  R  .  .  F  .  .  .
//  r5:   .  .  .  .  .  .  I  .  E  .  .  I  .  .  .
//  r6:   .  .  .  .  .  .  S  .  N  .  .  D  .  .  .
//  r7:   .  .  R  O  O  T  K  I  T  .  .  E  .  T  .
//  r8:   .  .  .  .  .  .  A  .  .  .  .  N  .  H  .
//  r9:   .  .  .  .  .  .  P  .  .  .  .  T  .  R  .
//  r10:  .  .  .  .  A  P  P  S  E  C  .  I  .  E  .
//  r11:  .  R  .  .  .  .  E  O  .  .  .  A  .  A  .
//  r12:  .  A  .  .  M  A  T  E  R  I  A  L  I  T  Y
//  r13:  .  N  .  .  .  .  I  .  E  .  .  .  .  A  .
//  r14:  .  S  .  .  .  .  T  .  M  .  .  .  .  C  .
//  r15:  .  O  .  .  .  .  E  .  E  .  .  .  .  T  .
//  r16:  .  M  .  .  .  .  .  .  D  .  .  .  .  O  .
//  r17:  .  W  .  .  .  .  .  .  I  .  .  .  .  R  .
//  r18:  .  A  .  .  .  .  .  .  A  .  .  .  .  .  .
//  r19:  .  R  I  S  K  C  U  L  T  U  R  E  .  .  .
//  r20:  .  E  .  .  .  .  .  .  I  .  .  .  .  .  .
//  r21:  .  .  .  .  .  .  .  .  O  .  .  .  .  .  .
//  r22:  .  .  .  .  .  .  .  .  N  .  .  .  .  .  .
// ============================================================

export const PUZZLE = {
  ROWS: 23,
  COLS: 15,

  words: [
    // ── ACROSS ──────────────────────────────────────────────
    {
      number: 4,
      direction: 'across',
      answer: 'Uk9PVEtJVA==',            // ROOTKIT
      row: 7, col: 2,
      clue: 'Hides in your system like that one colleague who never responds but somehow attends every meeting'
    },
    {
      number: 6,
      direction: 'across',
      answer: 'QVBQU0VD',                // APPSEC
      row: 10, col: 4,
      clue: 'What developers claim they do but pen testers beg to differ'
    },
    {
      number: 10,
      direction: 'across',
      answer: 'TUFURVJJQUxJVFk=',        // MATERIALITY
      row: 12, col: 4,
      clue: 'The magic word that turns a "oh no" into a "we need to escalate this right now"'
    },
    {
      number: 12,
      direction: 'across',
      answer: 'UklTS0NVTFRVUkU=',        // RISKCULTURE
      row: 19, col: 1,
      clue: 'Said in every all-hands, measured in none'
    },

    // ── DOWN ─────────────────────────────────────────────────
    {
      number: 1,
      direction: 'down',
      answer: 'SU5IRVJFTlQ=',            // INHERENT
      row: 0, col: 8,
      clue: 'How bad things are before anyone tries to stop them — spoiler: pretty bad'
    },
    {
      number: 2,
      direction: 'down',
      answer: 'Q09ORklERU5USUFM',        // CONFIDENTIAL
      row: 1, col: 11,
      clue: 'Label slapped on documents that are emailed to the wrong person anyway'
    },
    {
      number: 3,
      direction: 'down',
      answer: 'UklTS0FQUEVUSVRF',        // RISKAPPETITE
      row: 4, col: 6,
      clue: 'How much spicy food the organisation claims it can handle vs. how much it actually can'
    },
    {
      number: 5,
      direction: 'down',
      answer: 'VEhSRUFUQUNUT1I=',        // THREATACTOR
      row: 7, col: 13,
      clue: 'Not a villain from a superhero movie, though the job description is suspiciously similar'
    },
    {
      number: 7,
      direction: 'down',
      answer: 'U09F',                    // SOE
      row: 10, col: 7,
      clue: 'The IT equivalent of "everyone gets the same haircut" — standardised for a reason'
    },
    {
      number: 8,
      direction: 'down',
      answer: 'UkFOU09NV0FSRQ==',        // RANSOMWARE
      row: 11, col: 1,
      clue: 'Opens like a gift, ruins your week like a tax audit, demands payment like both'
    },
    {
      number: 11,
      direction: 'down',
      answer: 'UkVNRURJQVRJT04=',        // REMEDIATION
      row: 12, col: 8,
      clue: 'The part of the action plan everyone agrees is urgent and then schedules for next quarter'
    },
  ]
};
