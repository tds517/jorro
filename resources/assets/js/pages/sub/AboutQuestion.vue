<template>
  <div>
    <slot name="question"></slot>
    <div v-if="type == 'single'">
      <ol>
        <li v-for="(choice, index) in choices">
          <el-radio v-model="answer" :label="choice">
            {{ choice }}
          </el-radio>
        </li>
      </ol>
    </div>

    <div v-else-if="type == 'multiple'">
      <el-checkbox-group v-model="answer">
        <ol>
          <li v-for="(choice, index) in choices">
            <el-checkbox :label="choice" />
          </li>
        </ol>
      </el-checkbox-group>
    </div>

    <div v-else-if="type == 'choice'">
      <el-button type="success" @click="checkAnswer(true)">
        <i class="fa fa-fw fa-circle-o"></i>
      </el-button>
      <el-button type="danger" @click="checkAnswer(false)">
        <i class="fa fa-fw fa-times"></i>
      </el-button>
    </div>

    <el-button type="primary" @click="checkAnswer" v-if="type !== 'choice'">
      <i class="fa fa-fw fa-arrow-right"></i>
    </el-button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      required: true,
      type: String
    },
    reversed: {
      type: Boolean,
      default: false
    },
    correctChoices: {
      required: true,
      type: [Array, Boolean]
    },
    dummyChoices: Array
  },
  data() {
    return {
      choices: [],
      answer: this.type != 'multiple' ? null : []
    }
  },
  mounted() {
    if (this.type == 'choice') {
      if (typeof this.correctChoices === 'boolean') {
        this.choices = [true, false]
      }
    } else if (this.type == 'single' || this.type == 'multiple') {
      if (!this.reversed && Array.isArray(this.correctChoices)
          || this.reversed && Array.isArray(this.dummyChoices)) {
        this.choices = this.correctChoices.concat(this.dummyChoices)
        this.sortRandom()

        if (this.type == 'single' && !this.reversed && this.correctChoices.length !== 1) {
          console.log('正解数は一つでなければなりません。', this.type, this.reversed, this.correctChoices)
        }
        else if (this.type == 'single' && this.reversed && this.dummyChoices.length != 1) {
          console.log('正解数は一つでなければなりません。', this.type, this.reversed, this.dummyChoices)
        }
      }
    }
  },
  computed: {
  },
  methods: {
    sortRandom() {
      for (var i = this.choices.length - 1; i > 0; i--) {
        let r = Math.floor(Math.random() * (i + 1));
        let tmp = this.choices[i];
        this.choices[i] = this.choices[r];
        this.choices[r] = tmp;
      }
    },
    checkAnswer(chosen) {
      let checked = false
      if (this.type == 'single') {
        let correct = this.reversed ? this.dummyChoices[0] : this.correctChoices[0]
        checked = (this.answer === correct)
      }
      else if (this.type == 'multiple') {
        let corrects = this.reversed ? this.dummyChoices : this.correctChoices
        let counter = { true: 0, false: 0}
        for (let i = 0; i < this.answer.length; i++) {
          // 正解選択肢の中に、回答の１つが含まれていれば正解 = trueカウントアップ
          counter[corrects.includes(this.answer[i])]++
        }
        // みつどもえ。正解の分だけチェックできていれば、ok
        checked = counter[true] === this.answer.length
                  && counter[true] === corrects.length
      }
      else if (this.type == 'choice') {
        checked = (chosen === this.correctChoices)
      }
      this.$emit('answerd', checked)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "resources/assets/sass/variables";

</style>
