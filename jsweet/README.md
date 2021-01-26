## README

Run the Node project from the `node` directory by using `node test.js`.

Currently gives me the following error:
```bash
andrewcarterhughes@pop-os: node test.js 
/home/andrewcarterhughes/Development/jsweet-candy-quickstart/node/j4ts.js:2419
                    return o1.compareTo(o2);
                              ^

TypeError: o1.compareTo is not a function
    at NaturalComparator.compare (/home/andrewcarterhughes/Development/jsweet-candy-quickstart/node/j4ts.js:2419:31)
    at TreeMap.insert (/home/andrewcarterhughes/Development/jsweet-candy-quickstart/node/j4ts.js:23838:38)
    at TreeMap.put$java_lang_Object$java_lang_Object (/home/andrewcarterhughes/Development/jsweet-candy-quickstart/node/j4ts.js:23524:34)
    at TreeMap.put (/home/andrewcarterhughes/Development/jsweet-candy-quickstart/node/j4ts.js:23516:33)
    at Function.TransConverter.addMapping (/home/andrewcarterhughes/Development/jsweet-candy-quickstart/node/myCandy.js:45:57)
    at Function.TransConverter.init (/home/andrewcarterhughes/Development/jsweet-candy-quickstart/node/myCandy.js:57:29)
    at Function.TransConverter.__static_initializer_0 (/home/andrewcarterhughes/Development/jsweet-candy-quickstart/node/myCandy.js:41:29)
    at Function.TransConverter.__static_initialize (/home/andrewcarterhughes/Development/jsweet-candy-quickstart/node/myCandy.js:17:29)
    at Function.TransConverter.replMapEwtsToAlalc_$LI$ (/home/andrewcarterhughes/Development/jsweet-candy-quickstart/node/myCandy.js:37:80)
    at module.exports (/home/andrewcarterhughes/Development/jsweet-candy-quickstart/node/myCandy.js:2714:25)

```
