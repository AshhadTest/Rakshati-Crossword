// ============================================================
//  PUZZLE DATA  – Cybersecurity crossword
//  Grid: 15 rows × 14 cols
// ============================================================

export const PUZZLE = {
  ROWS: 15,
  COLS: 14,

  words: [
    // ── ACROSS ──────────────────────────────────────────────
    {
      number: 2,
      direction: 'across',
      answer: 'Q09OVFJPTA==',            // CONTROL
      row: 0, col: 2,
      clue: 'A safeguard designed to prevent or detect issues──and prove that you tried'
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
      clue: 'Independent review that checks if you are doing what you said you were doing'
    },
    {
      number: 5,
      direction: 'across',
      answer: 'QkFDS1VQ',                // BACKUP
      row: 2, col: 8,
      clue: 'Kind of an old friend that you go back to when everything is lost'
    },
    {
      number: 9,
      direction: 'across',
      answer: 'QUNDRVNTUkVWSUVX',        // ACCESSREVIEW
      row: 6, col: 0,
      clue: 'Process of verifying who should still have access──in theory, not just clicking approve'
    },
    {
      number: 11,
      direction: 'across',
      answer: 'VlBO',                    // VPN
      row: 8, col: 11,
      clue: 'Makes you connect securely to the office network, while working from a café with 47 other strangers on the same WiFi'
    },
    {
      number: 12,
      direction: 'across',
      answer: 'RExQ',                    // DLP
      row: 10, col: 9,
      clue: 'Tool that monitors and prevents sensitive data from leaving where it shouldn\'t'
    },
    {
      number: 15,
      direction: 'across',
      answer: 'TUZB',                    // MFA
      row: 12, col: 11,
      clue: 'Authentication method requiring more than one proof of identity to log in '
    },

    // ── DOWN ─────────────────────────────────────────────────
    {
      number: 1,
      direction: 'down',
      answer: 'VEhJUkRQQVJUWVJJU0s=',   // THIRDPARTYRISK
      row: 0, col: 0,
      clue: 'Your vendor\'s vendor\'s vendor\'s security issue that somehow became your problem'
    },
    {
      number: 2,
      direction: 'down',
      answer: 'Q0hBTkdFQ09OVFJPTA==',   // CHANGECONTROL
      row: 0, col: 2,
      clue: 'Process to review and approve changes before they go-live──or at least before they go wrong'
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
      clue: 'Fake message designed to steal sensitive info──still surprisingly effective'
    },
    {
      number: 10,
      direction: 'down',
      answer: 'SU5DSURFTlQ=',           // INCIDENT
      row: 6, col: 9,
      clue: 'A security event that causes or could cause harm──depending on how bad your day is'
    },
    {
      number: 13,
      direction: 'down',
      answer: 'UEFN',                   // PAM
      row: 10, col: 11,
      clue: 'System that controls privileged access'
    },
  ]
};
