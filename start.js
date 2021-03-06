/**
 * Created by Administrator on 2017/9/2.
 */
const {resolve} =require('path')
const r=path=>resolve(__dirname,path)
require('babel-core/register')({
  'presets': [
    'stage-2',
      [
          'latest-node',
          {
              "target": "current"
          }
      ],

  ],
  'plugins':[
    'transform-decorators-legacy',
    [
      'module-alias',[{
      src:r('./server'),'expose':'~',
      src:r('./server/database'),'expose':'database',
    }]
    ]
  ]
})
require('babel-polyfill')
require('./server/index')