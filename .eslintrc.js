module.exports = {
    env: {
      node: true,       // environment Node.js
      es2021: true,     // dukung ES2021 syntax
    },
    extends: ['eslint:recommended'], // pake aturan dasar yang direkomendasi ESLint
    parserOptions: {
      ecmaVersion: 12,  // set versi ECMAScript (2021)
    },
    rules: {
      'no-unused-vars': 'warn',   // kasih peringatan kalau ada var ga dipake (bukan error)
      'no-console': 'off',        // bebas pakai console.log tanpa error/warning
      'no-undef': 'error',        // error kalau pakai variabel belum didefinisikan (penting buat catch bug)
      'no-debugger': 'warn',      // debugger kasih warning saja
      'semi': ['warn', 'always'], // kasih warning kalau kurang titik koma
      'quotes': ['warn', 'single'], // pakai tanda petik tunggal, warning kalau pakai lain
    },
  };
   