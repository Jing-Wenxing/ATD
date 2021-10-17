<template>
  <div class="register">
    <div class="carousel-area">
      <div class="swiper">
        <div class="swiper-item">
          <h1>权利与义务</h1>
          <div class="des">
            <h2>会员权利</h2>
            <p>
              1. 可以免费参与协会内部的教学培训（如：C语言、Java、Web等教学）
            </p>
            <p>2. 优先、优惠或者免费获取协会内部的各种资料、软件等资源</p>
            <p>3. 可参加协会举办、承办的社内、社外活动</p>
            <p>4. 免费获得协会内部的技术支持（如：电脑维修、重装系统）</p>
            <p>5. 经过技术考试后，可加入ACM战队和CTF战队学习</p>
            <p>6. 入会一学年，可选举与被选举为协会内部管理人员</p>
            <br />
            <h2>会员义务</h2>
            <p>1. 积极服从协会内部的工作安排，并按时按量完成</p>
            <p>2. 保持个人诚信，确认参加的活动，不临时请假</p>
            <p>3. 积极维护协会日常相关事务</p>
            <p>4. 认真学习计算机及其相关的知识技术</p>
            <p>5. 推广、服务协会，对外保持协会形象</p>
            <br />
            <h2>会员隐私</h2>
            <p>1. 因日常管理需求，我们将向会员提出部分隐私要求</p>
            <p>2. 隐私内容我们会严格管理不会泄露他人</p>
            <p>3. 会员在社团内的一切活动都将通过官网站点进行记录</p>
            <p>4. 周年庆时将酌情发放会员活动日志及评语</p>
          </div>
          <div class="bottom">
            <el-checkbox v-model="agree">同意并接受条款</el-checkbox>
            <el-button :disabled="!agree" plain @click="next()" size="small"
              >下一步</el-button
            >
          </div>
        </div>
        <div class="swiper-item">
          <h1>基础信息</h1>
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="125px"
            label-position="left"
            class="demo-ruleForm"
          >
            <div class="dess">
              <el-form-item label="用户名" prop="account">
                <el-input
                  v-model="ruleForm.account"
                  placeholder="请输入用户名"
                  clearable
                ></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pass">
                <el-input
                  type="password"
                  v-model="ruleForm.pass"
                  placeholder="请输入密码"
                  clearable
                  show-password
                ></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="checkPass">
                <el-input
                  type="password"
                  v-model="ruleForm.checkPass"
                  placeholder="请再次输入密码"
                  clearable
                  show-password
                ></el-input>
              </el-form-item>
              <el-form-item label="昵称" prop="username">
                <el-input
                  v-model="ruleForm.username"
                  placeholder="请输入昵称"
                  clearable
                ></el-input>
              </el-form-item>
            </div>
            <div class="bottom">
              <el-button plain @click="prev()" size="small">上一步</el-button>
              <el-button
                :disabled="
                  ruleForm.account == '' ||
                  ruleForm.pass == '' ||
                  ruleForm.checkPass == '' ||
                  ruleForm.username == ''
                "
                plain
                @click="baseNext()"
                size="small"
                >下一步</el-button
              >
            </div>
          </el-form>
        </div>
        <div class="swiper-item">
          <h1>个人信息</h1>
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="person"
            label-width="125px"
            label-position="left"
            class="demo-ruleForm"
          >
            <div class="dess">
              <el-form-item label="姓名" prop="fullname">
                <el-input
                  v-model="ruleForm.fullname"
                  placeholder="请输入姓名"
                  clearable
                ></el-input>
              </el-form-item>
              <el-form-item label="学号" prop="school_id">
                <el-input
                  v-model.number="ruleForm.school_id"
                  placeholder="请输入学号"
                  clearable
                ></el-input>
              </el-form-item>
              <el-form-item label="手机号" prop="telephone">
                <el-input
                  v-model.number="ruleForm.telephone"
                  placeholder="请输入手机号"
                  clearable
                ></el-input>
              </el-form-item>
              <el-form-item label="QQ号" prop="qq">
                <el-input
                  v-model.number="ruleForm.qq"
                  placeholder="请输入QQ号"
                  clearable
                ></el-input>
              </el-form-item>
              <el-form-item label="性别" prop="sexy">
                <el-radio-group v-model="ruleForm.sexy">
                  <el-radio label="男生"></el-radio>
                  <el-radio label="女生"></el-radio>
                </el-radio-group>
              </el-form-item>
            </div>
            <div class="bottom">
              <el-button plain @click="prev()" size="small">上一步</el-button>
              <el-button @click="personNext()" size="small">下一步</el-button>
            </div>
          </el-form>
        </div>
        <div class="swiper-item">
          <h1>专业信息</h1>
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="classes"
            label-width="125px"
            label-position="left"
            class="demo-ruleForm"
          >
            <div class="dess">
              <el-form-item label="年级" prop="grade">
                <el-select
                  v-model="ruleForm.grade"
                  placeholder="请选择你的年级"
                >
                  <el-option label="2017" value="2017"></el-option>
                  <el-option label="2018" value="2018"></el-option>
                  <el-option label="2019" value="2019"></el-option>
                  <el-option label="2020" value="2020"></el-option>
                  <el-option label="2021" value="2021"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="专业" prop="professional">
                <el-select
                  v-model="ruleForm.professional"
                  placeholder="请选择你的专业"
                >
                  <el-option
                    label="国际经济与贸易"
                    value="国际经济与贸易"
                  ></el-option>
                  <el-option label="金融学" value="金融学"></el-option>
                  <el-option label="电子商务" value="电子商务"></el-option>
                  <el-option label="法学" value="法学"></el-option>
                  <el-option label="会计学" value="会计学"></el-option>
                  <el-option
                    label="人力资源管理"
                    value="人力资源管理"
                  ></el-option>
                  <el-option label="旅游管理" value="旅游管理"></el-option>
                  <el-option label="市场营销" value="市场营销"></el-option>
                  <el-option label="财务管理" value="财务管理"></el-option>
                  <el-option label="风景园林" value="风景园林"></el-option>
                  <el-option label="视觉传达" value="视觉传达"></el-option>
                  <el-option
                    label="播音与主持艺术"
                    value="播音与主持艺术"
                  ></el-option>
                  <el-option label="环境设计" value="环境设计"></el-option>
                  <el-option label="摄影" value="摄影"></el-option>
                  <el-option
                    label="广播电视编导"
                    value="广播电视编导"
                  ></el-option>
                  <el-option label="产品设计" value="产品设计"></el-option>
                  <el-option
                    label="计算机科学与技术"
                    value="计算机科学与技术"
                  ></el-option>
                  <el-option label="软件工程" value="软件工程"></el-option>
                  <el-option
                    label="电子信息工程"
                    value="电子信息工程"
                  ></el-option>
                  <el-option label="英语" value="英语"></el-option>
                  <el-option label="汉语言文学" value="汉语言文学"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="班级" prop="classes">
                <el-select
                  v-model="ruleForm.classes"
                  placeholder="请选择你的班级"
                >
                  <el-option label="1班" value="1"></el-option>
                  <el-option label="2班" value="2"></el-option>
                  <el-option label="3班" value="3"></el-option>
                  <el-option label="4班" value="4"></el-option>
                  <el-option label="5班" value="5"></el-option>
                  <el-option label="6班" value="6"></el-option>
                  <el-option label="7班" value="7"></el-option>
                  <el-option label="8班" value="8"></el-option>
                </el-select>
              </el-form-item>
            </div>
            <div class="bottom">
              <el-button plain @click="prev()" size="small">上一步</el-button>
              <el-button plain @click="End()" size="small">注册</el-button>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var validateAccount = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        let reg = /^[0-9A-Za-z]{6,15}$/;
        if (!reg.test(value)) {
          callback(new Error("密码仅允许由6-15位的字母和数字构成"));
        } else {
          const axios = require("axios").default;
          axios.defaults.withCredentials = true;
          axios({
            method: "post",
            url: "/api/user/accountCheck",
            data: {
              account: value,
            },
          }).then((response) => {
            if (response.data.Status == 1) {
              callback();
            } else {
              callback(new Error("已经存在"));
            }
          });
        }
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      index: 0,
      agree: false,
      // =====
      ruleForm: {
        account: "",
        pass: "",
        checkPass: "",
        username: "",
        fullname: "",
        sexy: "",
        school_id: "",
        telephone: "",
        qq: "",
        grade: "",
        professional: "",
        classes: "",
      },
      rules: {
        account: [
          { required: true, validator: validateAccount, trigger: "blur" },
        ],
        pass: [
          { required: true, validator: validatePass, trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
        username: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          {
            min: 3,
            max: 6,
            message: "长度在 3 到 6 个字符",
            trigger: "blur",
          },
        ],
        fullname: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        sexy: [{ required: true, message: "请选择性别", trigger: "blur" }],
        school_id: [
          { required: true, message: "请输入学号", trigger: "blur" },
          { type: "number", message: "学号必须为数字值" },
        ],
        telephone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { type: "number", message: "手机号必须为数字值" },
        ],
        qq: [
          { required: true, message: "请输入QQ", trigger: "blur" },
          { type: "number", message: "QQ必须为数字值" },
        ],
        grade: [{ required: true, message: "请选择年级", trigger: "change" }],
        professional: [
          { required: true, message: "请选择专业", trigger: "change" },
        ],
        classes: [{ required: true, message: "请选择班级", trigger: "change" }],
      },
    };
  },
  mounted() {
    let swiperList = document.getElementsByClassName("swiper")[0];
    if (Number(document.body.clientWidth) > 600) {
      swiperList.style.width = 4 * 700 + "px";
    } else {
      swiperList.style.width = 4 * Number(document.body.clientWidth) + "px";
    }
  },
  methods: {
    prev() {
      this.index--;
      this.change();
    },
    next() {
      this.index++;
      this.change();
    },
    change() {
      let swiperList = document.getElementsByClassName("swiper")[0];
      swiperList.style.transform =
        "translateX(-" + (this.index / 4) * 100 + "%)";
    },
    // =====
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        return valid;
      });
    },
    // =====

    // 第二页下一步
    baseNext() {
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          this.next();
        }
      });
    },
    // 第三页下一步
    personNext() {
      this.$refs["person"].validate((valid) => {
        if (valid) {
          this.next();
        }
      });
    },
    End() {
      this.$refs["classes"].validate((valid) => {
        if (valid) {
          const axios = require("axios").default;
          axios.defaults.withCredentials = true;
          axios({
            method: "post",
            url: "/api/user/register",
            data: {
              account: this.ruleForm.account,
              password: this.ruleForm.checkPass,
              username: this.ruleForm.username,
              fullname: this.ruleForm.fullname,
              sexy: this.ruleForm.sexy == "男生" ? 1 : 0,
              school_id: this.ruleForm.school_id,
              telephone: this.ruleForm.telephone,
              qq: this.ruleForm.qq,
              grade: this.ruleForm.grade,
              professional: this.ruleForm.professional,
              classes: this.ruleForm.classes,
            },
          }).then((response) => {
            this.$router.push({ path: "/" });
            this.$toast.success("注册成功");
          });
        }
      });
    },
  },
};
</script>

<style scoped>
.register {
}

.carousel-area {
  width: 700px;
  height: 475px;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.swiper {
  display: flex;
  transition-duration: 500ms;
}

.swiper-item {
  margin: 0 25px;
  padding: 25px;
  width: 600px;
  height: 400px;
  border-radius: 15px;
  background: rgb(255, 255, 255);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.swiper-item h1 {
  margin-bottom: 15px;
  line-height: 35px;
  font-size: 24px;
}

.swiper-item h2 {
  margin-bottom: 15px;
  font-size: 20px;
}

.swiper-item p {
  color: rgba(0, 0, 0, 0.7);
  font-size: 16px;
  line-height: 24px;
}

.swiper-item .des {
  padding: 15px;
  height: 255px;
  border-radius: 7px;
  overflow-y: scroll;
  background: rgb(0, 0, 0, 0.1);
}

.swiper-item .dess {
  height: 285px;
  border-radius: 7px;
}

.swiper-item .dess .input-item {
  margin-bottom: 20px;
  height: 40px;
  display: flex;
  align-items: center;
}

.swiper-item .dess .input-item span {
  width: 150px;
  font-size: 18px;
}

.swiper-item .dess .input-item .el-input {
  width: calc(100% - 150px);
}

.swiper-item .bottom {
  margin-top: 15px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media screen and (max-width: 600px) {
  .register {
  }

  .carousel-area {
    width: 100vw;
    height: 475px;
    overflow: hidden;
    display: flex;
    align-items: center;
  }

  .swiper {
    display: flex;
    transition-duration: 500ms;
  }

  .swiper-item {
    margin: 0 25px;
    padding: 25px;
    width: calc(100vw - 40px);
    height: 400px;
    border-radius: 15px;
    background: rgb(255, 255, 255);
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
  }

  .swiper-item h1 {
    margin-bottom: 15px;
    line-height: 35px;
    font-size: 24px;
  }

  .swiper-item h2 {
    margin-bottom: 15px;
    font-size: 20px;
  }

  .swiper-item p {
    color: rgba(0, 0, 0, 0.7);
    font-size: 16px;
    line-height: 24px;
  }

  .swiper-item .des {
    padding: 15px;
    height: 255px;
    border-radius: 7px;
    overflow-y: scroll;
    background: rgb(0, 0, 0, 0.1);
  }

  .swiper-item .dess {
    height: 285px;
    border-radius: 7px;
  }

  .swiper-item .dess .input-item {
    margin-bottom: 20px;
    height: 40px;
    display: flex;
    align-items: center;
  }

  .swiper-item .dess .input-item span {
    width: 150px;
    font-size: 18px;
  }

  .swiper-item .dess .input-item .el-input {
    width: calc(100% - 150px);
  }

  .swiper-item .bottom {
    margin-top: 15px;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>