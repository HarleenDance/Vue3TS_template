import type { App } from 'vue'

import { Button, Toast, Dialog,Tab, Tabs, Notify,Radio,RadioGroup, Loading, Cell, CellGroup, Field, Col, Row, Icon,Form,Switch,CheckboxGroup,Checkbox,ConfigProvider,Search,Uploader,Area,Popup,DatetimePicker,Picker,PullRefresh   } from 'vant';

// 导入vant css(由于采用配置主题方式，这里需要导入vant less 主题文件,如果不需要自定义主题注释下面代码，然后解除config/cdn.js 中vant主题样式的注释)
import "vant/lib/index.less";

export function setupVant(app: App<Element>) {

  app
    .use(Form)
    .use(Button)
    .use(Toast)
    .use(Dialog)
    .use(Notify)
    .use(Loading)
    .use(Cell)
    .use(CellGroup)
    .use(Col)
    .use(Row)
    .use(Field)
    .use(Icon)
    .use(Switch)
    .use(CheckboxGroup)
    .use(Checkbox)
    .use(Tab)
    .use(Tabs)
    .use(ConfigProvider)
    .use(Search)
    .use(Radio)
    .use(RadioGroup)
    .use(Uploader)
    .use(Area)
    .use(Popup)
    .use(DatetimePicker)
    .use(Picker)
    .use(PullRefresh)
}
