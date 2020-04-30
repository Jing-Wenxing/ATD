<template>
  <div>
    <vs-card class="mb-base">
      <vs-table stripe
                :data="expenditure">
        <template slot="header">
          <h3 class="mb-base">
            支出报表
          </h3>
        </template>

        <template slot="thead">
          <vs-th>
            项目明细
          </vs-th>
          <vs-th>
            金额
          </vs-th>
          <vs-th>
            审核
          </vs-th>
          <vs-th>
            日期
          </vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr :key="indextr"
                 v-for="(tr, indextr) in data">

            <vs-td>
              {{ tr.single }}
            </vs-td>

            <vs-td>
              {{ tr.money }}
            </vs-td>

            <vs-td>
              {{ tr.audit }}
            </vs-td>

            <vs-td>
              {{ tr.date }}
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </vs-card>

    <vs-card class="mb-base">
      <vs-table stripe
                :data="income">
        <template slot="header">
          <h3 class="mb-base">
            收入报表
          </h3>
        </template>

        <template slot="thead">
          <vs-th>
            项目明细
          </vs-th>
          <vs-th>
            金额
          </vs-th>
          <vs-th>
            审核
          </vs-th>
          <vs-th>
            日期
          </vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr :key="indextr"
                 v-for="(tr, indextr) in data">

            <vs-td>
              {{ tr.single }}
            </vs-td>

            <vs-td>
              {{ tr.money }}
            </vs-td>

            <vs-td>
              {{ tr.audit }}
            </vs-td>

            <vs-td>
              {{ tr.date }}
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </vs-card>

    <vs-card class="mb-base">
      <vs-table stripe
                :data="balance">
        <template slot="header">
          <h3 class="mb-base">
            2019下学期财政结余
          </h3>
        </template>

        <template slot="thead">
          <vs-th>
            项目明细
          </vs-th>
          <vs-th>
            金额
          </vs-th>
          <vs-th>
            审核
          </vs-th>
          <vs-th>
            日期
          </vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr :key="indextr"
                 v-for="(tr, indextr) in data">

            <vs-td>
              {{ tr.single }}
            </vs-td>

            <vs-td>
              {{ tr.money }}
            </vs-td>

            <vs-td>
              {{ tr.audit }}
            </vs-td>

            <vs-td>
              {{ tr.date }}
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </vs-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    expenditure: [
      {
        "single": "社团招新面试",
        "money": "322.7",
        "audit": "邓畅伟、王祯",
        "date": "2019.10.12",
      },
      {
        "single": "社团见面会——第一次例会",
        "money": "219",
        "audit": "邓畅伟、王祯",
        "date": "2019.10.20",
      },
      {
        "single": "CTF战队批款",
        "money": "236.6",
        "audit": "邓畅伟、王祯",
        "date": "2019.11.15",
      },
      {
        "single": "软件安装活动",
        "money": "196.4",
        "audit": "邓畅伟、王祯",
        "date": "2019.11.15",
      },
      {
        "single": "团建",
        "money": "437",
        "audit": "邓畅伟、王祯",
        "date": "2019.11.23",
      },
      {
        "single": "女神节活动",
        "money": "832.6",
        "audit": "邓畅伟、王祯",
        "date": "2019.12.05",
      },
      {
        "single": "二周年庆活动",
        "money": "937.1",
        "audit": "邓畅伟、王祯",
        "date": "2019.12.10",
      },
      {
        "single": "N次例会",
        "money": "790.5",
        "audit": "邓畅伟、王祯",
        "date": "2019.10.27 ~ 2019.12.06",
      },
      {
        "single": "社团例会活动奖品",
        "money": "297.9",
        "audit": "邓畅伟、王祯",
        "date": "2019.10.27 ~ 2019.12.06",
      },
      {
        "single": "课堂教学",
        "money": "76.3",
        "audit": "邓畅伟、王祯",
        "date": "2019.10.27 ~ 2019.12.06",
      },
      {
        "single": "总计",
        "money": "4346.1",
        "audit": "邓畅伟、王祯",
        "date": "2019.12.06",
      },
    ],
    income: [
      {
        "single": "2018年社团结余",
        "money": "562.7",
        "audit": "邓畅伟、王祯",
        "date": "2019.09.01",
      },
      {
        "single": "2019年社团会费收入",
        "money": "7500",
        "audit": "邓畅伟、王祯",
        "date": "2019.10.20",
      },
      {
        "single": "总计",
        "money": "8062.7",
        "audit": "邓畅伟、王祯",
        "date": "2019.10.20",
      },
    ],
    balance: [
      {
        "single": "社团发展需求",
        "money": "3716.6",
        "audit": "邓畅伟、王祯",
        "date": "2019.12.31",
      },
    ],
  })
}
</script>