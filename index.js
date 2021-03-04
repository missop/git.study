// reuquire('@/app')

// console.log(1);

// function a(){}

// function b(){}

// a.prototype.getFn = {};

// // 练习变基*******

// b.prototype.postFn = {};

// window.c = ()=>{
//   console.log('c')
// }

/* const ajax = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([])
    }, 1000)
  })

const wrappedAjax = (cb, fn) => {
  ajax()
    .then(cb)
    .catch(err => {
      if (err.code) {
        // do something
        alert(err.code)
      }
    })
    .finally(fn)
}
wrappedAjax(
  data => {
    console.log('data', data)
  },
  () => {
    console.log('finished')
  }
) */

const arr = enhancedArray([1, 2, 3, 4, 5])

// console.log(arr[-1]) //=> 5
// console.log(arr[[2, 4]]) //=> [ 3, 5 ]
// console.log(arr[[2, -2, 1]]) //=> [ 3, 4, 2 ]
// console.log(arr['2:4']) //=> [ 3, 4]
// console.log(arr['-2:3']) //=> [ 4, 5, 1, 2, 3 ]

function getRange(str) {
  var [start, end] = str.split(':').map(Number)
  if (typeof end === 'undefined') return false

  let range = []
  for (let i = start; i < end; i++) {
    range = range.concat(i)
  }
  return range
}

function getIndices(str) {
  return str.split(',').map(Number)
}
function enhancedArray(arr) {
  return new Proxy(arr, {
    get(target, property, receiver) {
      console.log('property', property)
      const range = getRange(property)
      const indices = range ? range : getIndices(property)
      const values = indices.map(function (index) {
        const key = index < 0 ? String(target.length + index) : index
        return Reflect.get(target, key, receiver)
      })
      return values.length === 1 ? values[0] : values
    },
  })
}

// window.enhancedArray=enhancedArray

// 排序数组的搜索问题使用二分法
// 合并两个有序数组？
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // 遍历数组nums1,比较nums2[i],如果小于nums[i],则插入
  // nums1Idx>>1
  // nums2Idx
  // 假设可以插入，那么数组的长度会增加;如果不能插入？
  // var nums1Idx = 0
  // var nums2Idx = 0
  // while (nums1Idx < m + n) {
  //   const num1Val = nums1[nums1Idx]
  //   // nums2Idx的值一直都小于num1,往num1的前面插入
  //   while (num1Val >= nums2[nums2Idx]) {
  //     nums1.splice(nums1Idx - 1, 0, nums2[nums2Idx])
  //     nums2Idx++
  //   }
  //   nums1Idx++
  // }
  // nums1.splice(-1,n)
  // return nums1

  nums1.push(...nums2)
  nums1.sort((a, b) => a - b).splice(0, n)
  return nums1
}
// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
// 由本题引发的思考？sort的时间复杂度是多少？不同浏览器有不同的实现
function sorters() {}
sorters.insertBefore = function insertBefore(arr, sourceIdx, targetIdx) {
  const target = arr.splice(sourceIdx, 1) // target为数组
  targetIdx - 1 < 0
    ? arr.unshift(target[0])
    : arr.splice(targetIdx - 1, 0, target)
}
// 插入排序
sorters.insert = function insert(arr) {
  var outerIdx = 1
  var innerIdx
  var temp
  while (outerIdx < arxr.length) {
    innerIdx = outerIdx
    temp = arr[outerIdx]
    while (innerIdx > 0 && temp <= arr[innerIdx - 1]) {
      /* 重要的操作 */
      arr[innerIdx] = arr[innerIdx - 1]
      innerIdx--
    }
    arr[innerIdx] = temp
    outerIdx++
  }

  return arr
}
// 快速排序,基准值、大数组、小数组
sorters.quick = function quick(arr) {
  if (!arr.length) return arr // 如果是空数组，那么直接返回[]
  var pivot = arr[0] // 基准值
  var lesser = []
  var greater = []
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      lesser.push(arr[i])
    } else {
      greater.push(arr[i])
    }
  }
  return this.quick(lesser).concat(pivot, this.quick(greater))
}
// 归并排序
// 视频看

// console.log(sorters.quick([1, 3, 7, 4, 5, 6, 1]))

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  var left = 0
  var len = nums.length
  var right = len - 1
  while (left <= right) {
    var mid = (left + right) >> 1
    if (target === nums[mid]) return true // 退出条件

    if (nums[mid] >= nums[left]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }
  return false
}

// console.log('search', search([1, 1, 1, 3, 3, 5, 5, 5, 5], 3))

// 找出第一个大于目标元素的索引
// 1.数组中包含该目标元素
// 2.数组不包含，且它比第一个元素小
// 3.数组不包含，且它比所有元素大，-1
// 4.数组不包含，在某两个元素之间
var mySearch = function (nums, target) {
  var left = 0
  var len = nums.length
  var right = len - 1
  while (left <= right) {
    var mid = left + ((right - left) >> 1)
    if (nums[mid] > target) {
      // 如果target=0，此时会一直执行到mid=0，第一个数字大于target/////
      if (mid === 0 || nums[mid - 1] <= target) {
        return mid
      } else {
        right = mid - 1
      }
    } else {
      left = mid + 1
    }
  }
  return -1
}
// 找出最后一个小于目标元素的索引
var mySearch = function (nums, target) {
  var left = 0
  var len = nums.length
  var right = len - 1
  while (left <= right) {
    var mid = left + ((right - left) >> 1)
    if (target <= nums[mid]) {
      right = mid - 1
    } else {
      debugger
      //mid === right就是表示遍历到最后一个值仍然小于目标值，直接返回最后一个索引
      if (mid === right || nums[mid + 1] >= target) {
        return mid
      } else {
        left = mid + 1
      }
    }
  }
  return -1
}
// console.log(mySearch([1, 3, 5, 5, 6, 6, 8, 9, 11], 12))
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  // 如果i-1的值是负的，那么尽量使得i也是负值
  // 如果i-1的值是正的，那么正
  // 动态规划转归方程
  // fmax(i) = Math.max(fmax(i-1),nums[i],fmax(i-1)*nums[i])
  // fmin(i) = Math.min(fmin(i-1),nums[i],fmin(i-1)*nums[i])
  var fmax = nums[0]
  var fmin = nums[0]
  var ans = nums[0]
  var len = nums.length

  for (var i = 1; i < len; i++) {
    var mx = fmax
    var mi = fmin
    fmax = Math.max(mx * nums[i], nums[i], mi * nums[i])
    fmin = Math.min(mi * nums[i], nums[i], mx * nums[i])
    ans = Math.max(ans, fmax)
  }
  return ans
}
// O(n)  O(2n)
// console.log(maxProduct([2, 3, -2, 4, -2]))

/**
 * @param {string} S
 * @return {string}
 */
var compressString = function (S) {
  var temp = S[0]
  var num = 1
  var result = ''
  var len = S.length
  for (var i = 1; i < len; i++) {
    if (S[i] === temp) {
      num++
    } else {
      result += temp + num
      num = 1
      temp = S[i]
    }
  }
  result += temp + num
  return result.length < S.length ? result : S
}
function callArr(arr, func) {
  arr.forEach(function (el) {
    console.log(func(el))
  })
}
// callArr(['aabcccccaa', 'abbccd'],compressString)

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  var repeatedStr = ''
  var len = s.length>>1
  for (var i = 0; i < len; i++) {
    // debugger
    repeatedStr += s[i]
    var repeatedNum = s.length / repeatedStr.length
    if (s.length % repeatedStr.length === 0&&repeatedNum>1 && s === repeatedStr.repeat(repeatedNum)) {
      return true
    }
  }
  return false
}
callArr(['abab','aba', 'abcabcabcabc',"aa"], repeatedSubstringPattern)
// cd git.study && node index.js
