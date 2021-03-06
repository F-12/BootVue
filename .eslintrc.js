// module.exports = {
//   root: true,
//   parserOptions: {
//     sourceType: 'module'
//   },
//   // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
//   extends: 'standard',
//   // required to lint *.vue files
//   plugins: [
//     'html'
//   ],
//   // add your custom rules here
//   'rules': {
//     // allow paren-less arrow functions
//     'arrow-parens': 0,
//     // allow debugger during development
//     'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
//   }
// }

module.exports = {
  "env": {
    "browser": true,
    "node": true
  },
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
      'html'
    ],
  "rules": {
/**
 * Strict mode
 */
    "strict": [1, "global"],          // http://eslint.org/docs/rules/strict 强制严格模式

/**
 * Variables
 */
    "no-shadow-restricted-names": 2, // http://eslint.org/docs/rules/no-shadow-restricted-names 不能使用NaN, Infinity, undefined, eval and arguments 等作为变量声明
    "no-unused-vars": [2, {          // http://eslint.org/docs/rules/no-unused-vars 不能有未使用的变量
      "vars": "local",
      "args": "after-used"
      }],

/**
 * Possible errors
 */
    /* "comma-dangle": [2, "never"],    // http://eslint.org/docs/rules/comma-dangle */
    "no-cond-assign": [2, "always"], // http://eslint.org/docs/rules/no-cond-assign 不能在条件表达式中进行赋值
    "no-console": 1,                 // http://eslint.org/docs/rules/no-console 不能出现console.log
    "no-debugger": 2,                // http://eslint.org/docs/rules/no-debugger 不能出现debugger
    "no-alert": 1,                   // http://eslint.org/docs/rules/no-alert 不能出现alert
    "no-dupe-keys": 2,               // http://eslint.org/docs/rules/no-dupe-keys 同一对象中不能出现多个重复key
    "no-duplicate-case": 2,          // http://eslint.org/docs/rules/no-duplicate-case switch语句中不能出现相同的case
    "no-empty": 2,                   // http://eslint.org/docs/rules/no-empty 不允许空的块级域
    "no-empty-character-class": 2,   // http://eslint.org/docs/rules/no-empty-character-class 在正则表达式中不允许[]中为空
    "no-ex-assign": 2,               // http://eslint.org/docs/rules/no-ex-assign catch语句中不允许覆写error对象
    "no-extra-semi": 2,              // http://eslint.org/docs/rules/no-extra-semi 禁止额外的分号，例如多个分号
    "no-inner-declarations": 2,      // http://eslint.org/docs/rules/no-inner-declarations 禁止在块级区域内进行变量声明以及函数定义
    "no-invalid-regexp": 2,          // http://eslint.org/docs/rules/no-invalid-regexp 禁止语法有问题的正则表达式
    "no-irregular-whitespace": 2,    // http://eslint.org/docs/rules/no-irregular-whitespace 禁止非常规的空格符
    "no-new-require": 2,             // http://eslint.org/docs/rules/no-new-require 禁止在require前加new
    "no-regex-spaces": 2,            // http://eslint.org/docs/rules/no-regex-spaces 禁止在正则表达式中空格
    "no-sparse-arrays": 2,           // http://eslint.org/docs/rules/no-sparse-arrays 禁止未声明的数组元素
    "no-unreachable": 2,             // http://eslint.org/docs/rules/no-unreachable 禁止不会被运行的代码
    "use-isnan": 2,                  // http://eslint.org/docs/rules/use-isnan 使用isNaN来对比是否是数字而非使用与NaN做比较
    "valid-typeof": 2,               // http://eslint.org/docs/rules/valid-typeof 确保typeof表达式后面跟的是有效字符串

/**
 * Best practices
 */
    "curly": [2, "all"],      // http://eslint.org/docs/rules/curly 全部快级区域都要加大括号
    "default-case": 2,               // http://eslint.org/docs/rules/default-case switch语句中必须有default
    "eqeqeq": 1,                     // http://eslint.org/docs/rules/eqeqeq 必须使用三等号
    "no-caller": 2,                  // http://eslint.org/docs/rules/no-caller 禁止使用caller/callee
    "no-div-regex": 2,               // http://eslint.org/docs/rules/no-div-regex 禁止使用长得像除法的正则表达式
    "no-else-return": 2,             // http://eslint.org/docs/rules/no-else-return 禁止在else之前return
    "no-eq-null": 2,                 // http://eslint.org/docs/rules/no-eq-null 禁止对null使用==
    "no-eval": 2,                    // http://eslint.org/docs/rules/no-eval 禁止使用eval
    "no-extend-native": 2,           // http://eslint.org/docs/rules/no-extend-native 禁止扩展原生对象
    "no-fallthrough": 2,             // http://eslint.org/docs/rules/no-fallthrough 禁止Switch语句中不使用break
    "no-floating-decimal": 2,        // http://eslint.org/docs/rules/no-floating-decimal 禁止浮点数小数点的问题
    "no-implied-eval": 2,            // http://eslint.org/docs/rules/no-implied-eval 禁止含蓄的 eval
    "no-lone-blocks": 2,             // http://eslint.org/docs/rules/no-lone-blocks 禁止没有意义的块级域
    "no-native-reassign": 2,         // http://eslint.org/docs/rules/no-native-reassign 禁止重新定义原生对象
    "no-new": 2,                     // http://eslint.org/docs/rules/no-new 禁止单独的new
    "no-new-func": 2,                // http://eslint.org/docs/rules/no-new-func 禁止使用new Function
    "no-new-wrappers": 2,            // http://eslint.org/docs/rules/no-new-wrappers 禁止基本类型使用new来定义
    "no-octal": 2,                   // http://eslint.org/docs/rules/no-octal 禁止八进制字面量
    "no-redeclare": 2,               // http://eslint.org/docs/rules/no-redeclare 禁止重复定义变量
    "no-sequences": 2,               // http://eslint.org/docs/rules/no-sequences 禁止使用逗号操作符
    "no-undef": 2,                   // http://eslint.org/docs/rules/no-undef 禁止使用未定义的变量
    "no-undef-init": 2,              // http://eslint.org/docs/rules/no-undef-init 禁止初始化变量时赋值为undefined
    "no-with": 2,                    // http://eslint.org/docs/rules/no-with 禁止使用with
    "wrap-iife": [2, "any"],         // http://eslint.org/docs/rules/wrap-iife 使用iife的时候要用()包裹
    "yoda": 2,                       // http://eslint.org/docs/rules/yoda 常量不能在判断为左值
/**
 * Style
 */
    "indent": [2, 2],                // http://eslint.org/docs/rules/indent 缩进
    "brace-style": [2,               // http://eslint.org/docs/rules/brace-style 大括号风格
    "1tbs", {
      "allowSingleLine": true
      }],
    "quotes": [                      // http://eslint.org/docs/rules/quotes 统一单引号
    2, "single", "avoid-escape"
    ],
    "camelcase": [2, {               // http://eslint.org/docs/rules/camelcase 驼峰命名
      "properties": "never"
      }],
    "comma-spacing": [2, {           // http://eslint.org/docs/rules/comma-spacing 逗号之前不空格，逗号之后空格
      "before": false,
      "after": true
      }],
    "comma-style": [2, "last"],      // http://eslint.org/docs/rules/comma-style 逗号写在行尾
    "eol-last": 2,                   // http://eslint.org/docs/rules/eol-last 文件末尾空一行
    "key-spacing": [2, {             // http://eslint.org/docs/rules/key-spacing 属性中冒号前面不空格后面空格
        "beforeColon": false,
        "afterColon": true
        }],
    "new-parens": 2,                 // http://eslint.org/docs/rules/new-parens new生成新对象时要加()
    "no-lonely-if": 1,               // http://eslint.org/docs/rules/no-lonely-if 一个判断语句中只允许有一个if
    "no-multiple-empty-lines": [2, { // http://eslint.org/docs/rules/no-multiple-empty-lines 最多两行空行
      "max": 2
      }],
    "no-new-object": 2,              // http://eslint.org/docs/rules/no-new-object 使用对象字面量定义对象
    "no-spaced-func": 2,             // http://eslint.org/docs/rules/no-spaced-func function name和括号没有空格
    "no-trailing-spaces": 1,         // http://eslint.org/docs/rules/no-trailing-spaces 行尾没有空格
    "one-var": [2, "never"],         // http://eslint.org/docs/rules/one-var 强制多变量声明
    "padded-blocks": [2, "never"],   // http://eslint.org/docs/rules/padded-blocks 块级域不能有前后空行
    "semi": [2, "always"],           // http://eslint.org/docs/rules/semi
    "semi-spacing": [2, {            // http://eslint.org/docs/rules/semi-spacing 分号前无空格，分号后有空格
      "before": false,
      "after": true
      }],
    "keyword-spacing": 2,       // http://eslint.org/docs/rules/space-after-keywords as (in module declarations), break, case, catch, class, const, continue, debugger, default, delete, do, else, export, extends, finally, for, from (in module declarations), function, get (of getters), if, import, in, instanceof, let, new, of (in for-of statements), return, set (of setters), static, super, switch, this, throw, try, typeof, var, void, while, with, and yield 等后面加空格
    "space-before-blocks": 2,        // http://eslint.org/docs/rules/space-before-blocks 在块级域前加空格
    "space-before-function-paren": [2, "never"], // http://eslint.org/docs/rules/space-before-function-paren 函数参数括号前不加空格
    "space-infix-ops": 2,            // http://eslint.org/docs/rules/space-infix-ops 中序操作符前后加空格
    "space-unary-ops": 2,            // http://eslint.org/docs/rules/space-unary-ops 一元操作符前加空格
    "spaced-comment": [2, "always",  {// http://eslint.org/docs/rules/spaced-comment 注释开头要有空格
      "exceptions": ["-", "+"],
      "markers": ["=", "!"]          // space here to support sprockets directives
      }]
  },
  "globals": {
        // "MT": true,
        "$": true,
        "pageVersion": true,
        // "define": true
  }
}
