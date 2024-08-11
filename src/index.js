import {Excel} from '@/components/excel/Excel'
import {Header} from '@/components/header/Header'
import {Toolbar} from '@/components/toolbar/Toolbar'
import {Formula} from '@/components/formula/Formula'
import {Table} from '@/components/table/Table'

import './scss/index.scss'
import 'core-js/stable';
import 'regenerator-runtime/runtime';

console.log('Stay hard!')

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table]
})

excel.render()


