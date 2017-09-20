<template>
  <el-row>
    <el-col :span="2"><div>&nbsp;</div></el-col>
    <el-col :span="18">
      <el-form label-width="120px">
        <el-form-item label="氏名">
          <el-input v-model="forms.name" />
        </el-form-item>

        <el-form-item label="性別">
          <el-radio-group v-model="forms.sex">
            <el-radio-button label="男" />
            <el-radio-button label="女" />
          </el-radio-group>
        </el-form-item>

        <el-form-item label="生年月日">
          <el-date-picker type="date" v-model="forms.birthday" />
        </el-form-item>

        <el-form-item label="血液型">
          <el-radio-group v-model="forms.blood">
            <el-radio-button label="A" />
            <el-radio-button label="B" />
            <el-radio-button label="O" />
            <el-radio-button label="AB" />
          </el-radio-group>
        </el-form-item>

        <el-form-item label="出身地">
          <el-select v-model="forms.birthplace">
            <el-option v-for="item in prefectures"
                :key="item" :label="item" :value="item" />
          </el-select>
        </el-form-item>

        <el-form-item label="職業">
          <el-input v-model="forms.job" />
        </el-form-item>

        <el-form-item label="年数">
          <div>
            <span><pages-icon category="illusts" /> Illustrator</span>
            <el-slider v-model="forms.years.illust" :max="forms.years.max" />
          </div>
          <div>
            <span><pages-icon category="apps" /> Developer</span>
            <el-slider v-model="forms.years.app" :max="forms.years.max" />
          </div>
          <div>
            <span><pages-icon category="photos" /> Cameraman</span>
            <el-slider v-model="forms.years.photo" :max="forms.years.max" />
          </div>
        </el-form-item>

        <el-form-item label="好きなもの">
          <el-tree :data="forms.favorites" :props="forms.defaults" />
        </el-form-item>

        <el-form-item label="経験技術">
          <el-tag v-for="skill in forms.skills" :key="skill.name"
              :closable="true" :type="skill.type">
            {{ skill.name }}
          </el-tag>
        </el-form-item>

        <el-form-item label="クイズに挑戦...">
          <el-switch v-model="forms.enabledQuiz" :width="80"
              on-text="する!!" off-text="する??" />
        </el-form-item>
      </el-form>

      <el-dialog :visible.sync="forms.enabledQuiz" size="full">
        <h1 class="title">クイズ</h1>
        <el-row>
          <el-col :span="6"><div>&nbsp;</div></el-col>
          <el-col :span="12">
            <div v-show="q.stepDone < 0">
              <p>クイズは全部で5問です。</p>
              <p>5問全ての回答が終わってから結果が出ます。</p>
              <p>全て正解したあなたには、プレゼントがあります！</p>
              <br>
              <div class="t-center">
                <el-button type="primary" @click="nextStep" size="large">
                  <i class="fa fa-fw fa-play"></i>
                  スタート
                </el-button>
              </div>
            </div>

            <div v-show="0 <= q.stepDone && q.stepDone < q.amount">
              <div class="flex" style="margin-right: -50px;">
                <el-steps :space="80" :active="q.stepDone">
                  <el-step v-for="step in q.amount" :title="step + '問目'" :key="'step-' + step"></el-step>
                </el-steps>
              </div>

              <div class="flex">
                <div v-show="q.stepDone == 0">
                  <h2>{{ q.stepDone + 1 }}問目</h2>
                </div>

                <div v-show="q.stepDone == 1">
                  <h2>{{ q.stepDone + 1 }}問目</h2>
                </div>

                <div v-show="q.stepDone == 2">
                  <h2>{{ q.stepDone + 1 }}問目</h2>
                </div>

                <div v-show="q.stepDone == 3">
                  <h2>{{ q.stepDone + 1 }}問目</h2>
                </div>

                <div v-show="q.stepDone == 4">
                  <h2>{{ q.stepDone + 1 }}問目</h2>
                </div>

                <el-button type="primary" @click="nextStep"><i class="fa fa-fw fa-play"></i></el-button>
              </div>
            </div>

            <div v-show="q.stepDone == 5">
              <p>全部解き終わったー</p>
            </div>
          </el-col>
          <el-col :span="6"><div>&nbsp;</div></el-col>
        </el-row>
      </el-dialog>
    </el-col>
    <el-col :span="4"><div>&nbsp;</div></el-col>
  </el-row>
</template>

<script>
import PREFECTURES from '../../models/prefectures'
import QUESTIONS from '../../models/demodata/questions'
import F_ARTISTS from '../../models/demodata/favorite-artists'
import F_COMICS from '../../models/demodata/favorite-comics'
import F_GAMES from '../../models/demodata/favorite-games'

export default {
  data() {
    return {
      forms: {
        name: '村上　忠',
        sex: '男',
        birthday: '1989-05-17',
        birthplace: '愛知県',
        job: '会社員',
        blood: 'A',
        years: {
          illust: this.getHisoryYears(2001),
          app: this.getHisoryYears(2012),
          photo: this.getHisoryYears(2016),
          max: this.getHisoryYears(1989)
        },
        favorites: [
          { label: '音楽', children: this.getFavoriteLabels(F_ARTISTS)},
          { label: '漫画', children: [
              { label: 'ジャンプ', children: this.getFavoriteLabels(F_COMICS['JUMP'])},
              { label: '他少年誌', children: this.getFavoriteLabels(F_COMICS['JUNIOR'])},
              { label: '青年誌', children: this.getFavoriteLabels(F_COMICS['SENIOR'])}
            ]
          },
          { label: 'ゲーム', children: [
              { label: 'コンシューマ', children: this.getFavoriteLabels(F_GAMES['CONSUMER'])},
              { label: 'ネット', children: this.getFavoriteLabels(F_GAMES['NET'])},
              { label: 'アプリ', children: this.getFavoriteLabels(F_GAMES['APP'])}
            ]
          }
        ],
        default: { children: 'children', label: 'label' },
        skills: [
          { name: 'Javascript', type: 'primary' },
          { name: 'jQuery',     type: 'warning' },
          { name: 'Java',       type: 'danger' },
          { name: 'PHP',        type: 'gray' },
          { name: 'Android',    type: 'success' },
          { name: 'AR',         type: 'primary' },
          { name: 'HTML5',      type: 'warning' },
          { name: 'CSS3',       type: 'danger' },
          { name: 'bash',       type: 'gray' },
          { name: 'SQL',        type: 'success' },
        ],
        enabledQuiz: false
      },
      prefectures: PREFECTURES,
      q: {
        stepDone: -1,
        amount: 5
      }

    }
  },
  methods: {
    getHisoryYears(startYear) {
      return new Date().getFullYear() - startYear
    },
    getFavoriteLabels(list) {
      let ret = []
      list.forEach(function(item) {
        ret.push({label: item})
      })
      return ret
    },
    nextStep() {
      if (this.q.stepDone++ > 5) this.q.stepDone = 0
    }
  },
}
</script>

<style lang="scss" scoped>
@import "resources/assets/sass/variables";
.el-tag {
  margin: 0 6px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}

.title {
  text-align: center;
}

</style>
