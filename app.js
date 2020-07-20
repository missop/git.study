// require('./index.js')
// const a = undefined
// console.log(a)

// const rec_opt = (arr, i) => {
//   if (i === 0) return arr[0]
//   if (i === 1) return Math.max(arr[0], arr[1])

//   const a = arr[i] + rec_opt(arr, i - 2)
//   const b = rec_opt(arr, i - 1)
//   return Math.max(a, b)
// }

// const dp_opt = (arr) => {
//   const opt = new Array(arr.length).fill(0)
//   opt[0] = arr[0]
//   opt[1] = Math.max(arr[0], arr[1])

//   for (let i = 2; i < arr.length; i++) {
//     const a = arr[i] + opt[i - 2]
//     const b = opt[i - 1]
//     opt[i] = Math.max(a, b)
//   }

//   return opt[arr.length - 1]
// }

// console.log(dp_opt([1, 2, 4, 1, 7, 8, 3]))

// const dp_opt = (n) => {
//   const opt = new Array(n + 1).fill(1)

//   for (let i = 3; i <= n; i++) {
//     for (let j = 1; j < i; j++) {
//       const a = j * opt[i - j]
//       const b = opt[i]
//       const c = j * (i - j)

//       opt[i] = Math.max(a, b, c)
//     }
//   }

//   return opt[n]
// }

// console.log(dp_opt(8))
// const allAreas = [
//   '北京',
//   '上海',
//   '天津',
//   '广州',
//   '深圳',
//   '成都',
//   '杭州',
//   '大连',
// ]
// const selects = [
//   ['北京', '上海', '天津'],
//   ['广州', '北京'],
// ]
// const calculate = (maxKey) => {
//   return maxKey
// }
// const gr = () => {
//   const selections = []
//   while (allAreas.length) {
//     let maxKey
//     for (let i = 0; i < 5; i++) {
//       const temp = calculate(maxKey)
//       maxKey = temp > maxKey ? i : maxKey
//     }

//     selections.push(maxKey)
//     // allAreas删掉
//   }
// }
// const getNum = (start, end) => {
//   let rel = []
//   for (let i = start; i < end; i++) {
//     rel.push(i)
//   }
//   return rel
// }
// const findContinuousSequence = (target) => {
//   let a = 1,
//     b = 2,
//     sum = a + b
//   const res = []
//   while (a !== b && b <= target) {
//     if (sum === target) {
//       res.push(getNum(a, b))
//       b++
//       sum += b
//     } else if (sum < target) {
//       b++
//       sum += b
//     } else {
//       sum -= a
//       a++
//     }
//   }
//   return res
// }
