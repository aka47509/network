import { Component, Vue, Emit } from "vue-property-decorator";
import { Button, DatePicker, Modal, Row, Col, Card, Icon, Radio } from "ant-design-vue";
import Chart from "chart.js";
import { numFormat } from "@/utils/index";

import "./index.less";

@Component({
  name: "Dashboard",
  components: {}
})
export default class Dashboard extends Vue {
  render() {
    return <div class="container">欢迎来到腾讯PMS管理系统</div>;
  }
}
