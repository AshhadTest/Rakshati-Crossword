// ============================================================
//  PUZZLE DATA  – Cybersecurity crossword
//  Grid: 15 rows × 14 cols
//  Answers stored as SHA-256 hashes — cannot be reversed
// ============================================================

export const PUZZLE = {
  ROWS: 15,
  COLS: 14,

  words: [
    // ── ACROSS ──────────────────────────────────────────────
    {
      number: 2,
      direction: 'across',
      hash: '6fecf9081bd58fa5a91e8a1d8093dc89d0e2d87992138ca05ec4270060e69c2c',
      length: 7,
      row: 0, col: 2,
      clue: 'A safeguard designed to prevent or detect issues──and prove that you tried'
    },
    {
      number: 3,
      direction: 'across',
      hash: 'c97c29c7a71b392b437ee03fd17f09bb10b75e879466fc0eb757b2c4a78ac938',
      length: 4,
      row: 0, col: 10,
      clue: 'Oil of the 21st Century'
    },
    {
      number: 4,
      direction: 'across',
      hash: '7dd251bbda9c41bb364597d8a240e1824f62460234907abc4473e28ec3b95b69',
      length: 5,
      row: 2, col: 2,
      clue: 'Independent review that checks if you are doing what you said you were doing'
    },
    {
      number: 5,
      direction: 'across',
      hash: '4c2f023b97855c327e0829504d66d01075d31fc059358f4607331eb64815160d',
      length: 6,
      row: 2, col: 8,
      clue: 'Copies of document for future use'
    },
    {
      number: 9,
      direction: 'across',
      hash: '5f7aac6b60ebc6dd19e0a301fc35a9f1bd4697e470e5bf246d82084eed7f42fe',
      length: 12,
      hints: {2:'C', 8:'V'},
      row: 6, col: 0,
      clue: 'Process of verifying who should still have access──in theory, not just clicking approve'
    },
    {
      number: 11,
      direction: 'across',
      hash: '2762a0671924e3e56ca5e1730e4990d920e6129e80b13540a21914ee0cd19eac',
      length: 3,
      row: 8, col: 11,
      clue: 'Makes you connect securely to the office network, while working from a café'
    },
    {
      number: 12,
      direction: 'across',
      hash: 'bc8bb362d36ab1f6b627c126d88205021420f35bb00c8033dab6e4e3709d255f',
      length: 3,
      row: 10, col: 9,
      clue: 'Tool that monitors and prevents sensitive data from leaving where it shouldn\'t'
    },
    {
      number: 15,
      direction: 'across',
      hash: 'd39ce05308e4ec6d55d3599061c99041fece213b56e0938125661670df668ff8',
      length: 3,
      row: 12, col: 11,
      clue: 'Authentication method requiring more than one proof of identity to log in '
    },

    // ── DOWN ─────────────────────────────────────────────────
    {
      number: 1,
      direction: 'down',
      hash: '3c85978437cd002bf8cf381c88011e71a54f8e911c2482788bdabee415e551c1',
      length: 14,
      hints: {2:'I', 8:'R', 13:'K'},
      row: 0, col: 0,
      clue: 'Your vendor\'s security issue that somehow became your problem'
    },
    {
      number: 2,
      direction: 'down',
      hash: '1be982d3124058d369eaed4bf80b7f120028a6b6ab3f3ad43d078d3fa65682cc',
      length: 13,
      hints: {2:'A', 8:'T'},
      row: 0, col: 2,
      clue: 'Process to review and approve changes before they go-live──or at least before they go wrong'
    },
    {
      number: 3,
      direction: 'down',
      hash: 'c9ff9d7d29e892ae070c1d1c994458bff733dfad5f006865c3c7065193f789db',
      length: 3,
      row: 0, col: 10,
      clue: 'Paper or digital record of information, MS-Word created'
    },
    {
      number: 6,
      direction: 'down',
      hash: 'ea994c18082214880814fafdfce2f93792ef60c8d8a4dadb1f524988a47558a6',
      length: 13,
      hints: {2:'I', 8:'M'},
      row: 2, col: 13,
      clue: 'Fake message designed to steal sensitive info──still surprisingly effective'
    },
    {
      number: 10,
      direction: 'down',
      hash: '43f41584121a74725dce15273394855dbfd7bdc474f5932417ec9886ca733df0',
      length: 8,
      row: 6, col: 9,
      clue: 'Undesired event disrupting normal operations'
    },
    {
      number: 13,
      direction: 'down',
      hash: '14e140ffa1a767941932c8e3baaab6ba569bbafb36f1163a6e350b8193e5599c',
      length: 3,
      row: 10, col: 11,
      clue: 'System that controls privileged access'
    },
  ]
};
