module.exports = {
  // plugins: {
  //   rtlcss: {
  //     autoRename: true,
  //     stringMap:
  //     [
  //       {
  //         name: 'left-right',
  //         priority: 100,
  //         search: ['left', 'Left', 'LEFT'],
  //         replace: ['right', 'Right', 'RIGHT'],
  //         options: {
  //           scope: '*',
  //           ignoreCase: false
  //         }
  //       },
  //       {
  //         name: 'ltr-rtl',
  //         priority: 100,
  //         search: ['ltr', 'Ltr', 'LTR'],
  //         replace: ['rtl', 'Rtl', 'RTL'],
  //         options: {
  //           scope: '*',
  //           ignoreCase: false
  //         }
  //       },
  //       {
  //         name: 'prev-next',
  //         search: ['prev', 'Prev', 'PREV'],
  //         replace: ['next', 'Next', 'NEXT'],
  //         options: {
  //           ignoreCase: false
  //         }
  //       }
  //     ]
  //   }
  // }
  plugins: ['postcss-rtlcss']
}
