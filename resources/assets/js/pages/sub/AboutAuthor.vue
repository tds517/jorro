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
            <el-radio-button v-for="blood in ['A', 'B', 'O', 'AB']"
                :label="blood" :key="'forms.blood.' + blood" />
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
          <el-button type="primary" @click="forms.enabledQuiz = true"
              size="medium">
            する
          </el-button>
        </el-form-item>
      </el-form>

      <el-dialog :visible.sync="forms.enabledQuiz" :fullscreen="true">
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

            <div v-show="0 <= q.stepDone && q.stepDone < q.amount" style="margin-right: -130px;">
              <el-steps :space="200" :active="q.stepDone">
                <el-step v-for="step in q.amount" :title="step + '問目'"
                    :key="'step-' + step"></el-step>
              </el-steps>

                <div v-show="q.stepDone == 0">
                  <about-question　type="single" :reversed="false"
                      :correctChoices="['BUMP OF CHICKEN']"
                      :dummyChoices="['aiko', '関ジャニ∞']" @answerd="onAnswerd">
                    <p slot="question">
                      私の好きなアーティストは次のうちどれでしょう？
                    </p>
                  </about-question>
                </div>

                <div v-show="q.stepDone == 1">
                  <about-question type="multiple" :reversed="false"
                      :correctChoices="['BUMP OF CHICKEN', 'RADWIMPS']"
                      :dummyChoices="['EXILE', 'flumpool']" @answerd="onAnswerd">
                    <p slot="question">
                      私の好きなアーティストは次のうちどれでしょう？（複数選択）
                    </p>
                  </about-question>
                </div>

                <div v-show="q.stepDone == 2">
                  <about-question type="choice"
                      :correctChoices="false" @answerd="onAnswerd">
                    <p slot="question">
                      私の誕生日は、5月10日です。
                    </p>
                  </about-question>
                </div>

                <div v-show="q.stepDone == 3">
                  <about-question type="multiple" :reversed="true"
                      :correctChoices="['BUMP OF CHICKEN', 'RADWIMPS']"
                      :dummyChoices="['TOTALFAT', 'BABYMETAL']" @answerd="onAnswerd">
                    <p slot="question">
                      私が<b>好みでない</b>アーティストは次のうちどれでしょう？（複数選択）
                    </p>
                  </about-question>
                </div>

                <div v-show="q.stepDone == 4">
                  <about-question type="single" :reversed="true"
                      :correctChoices="['BUMP OF CHICKEN', '相対性理論']"
                      :dummyChoices="['AAA']" @answerd="onAnswerd">
                    <p slot="question">
                      私が<b>好みでない</b>アーティストは次のうちどれでしょう？
                    </p>
                  </about-question>
                </div>
                <!-- <el-button type="primary" @click="nextStep"><i class="fa fa-fw fa-play"></i></el-button> -->
              </div>
            </div>

            <div v-show="q.stepDone == 5">
              <p>全部解き終わったー</p>
              <p>{{ q.amount}} 問中、{{ q.result[true] }} 問正解です！！</p>
              <el-rate v-model="q.result[true]"></el-rate>
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

import AboutQuestion from './AboutQuestion'

export default {
  data() {
    return {
      data: {
        artists: F_ARTISTS,
        comics: F_COMICS,
        games: F_GAMES
      },
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
          { label: '音楽', children: this.toLabel(F_ARTISTS)},
          { label: '漫画', children: [
              { label: 'ジャンプ', children: this.toLabel(F_COMICS['JUMP'])},
              { label: '他少年誌', children: this.toLabel(F_COMICS['JUNIOR'])},
              { label: '青年誌', children: this.toLabel(F_COMICS['SENIOR'])}
            ]
          },
          { label: 'ゲーム', children: [
              { label: 'コンシューマ', children: this.toLabel(F_GAMES['CONSUMER'])},
              { label: 'ネット', children: this.toLabel(F_GAMES['NET'])},
              { label: 'アプリ', children: this.toLabel(F_GAMES['APP'])}
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
        amount: 5,
        result: { true: 0, false: 0}
      }
    }
  },
  methods: {
    getHisoryYears(startYear) {
      return new Date().getFullYear() - startYear
    },
    toLabel(list) {
      let ret = []
      list.forEach(function(item) {
        ret.push({label: item})
      })
      return ret
    },
    nextStep() {
      this.q.stepDone++
      if (this.q.stepDone > this.q.amount) this.q.stepDone = 0
      console.log(this.q)
    },
    onAnswerd(answer) {
      this.q.result[answer]++
      this.nextStep()
    },
    // TODO: パスから数だけ配列の値を取得して新しい配列を返す
  },
  watch: {
    'forms.enabledQuiz': function(newVal) {
      // ダイアログが閉じられた時に、初期化する１
      if (!newVal) {
        this.q = {
          stepDone: -1,
          amount: 5,
          result: { true: 0, false: 0}
        }
      }
    }
  },
  components: {
    AboutQuestion
  }
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
