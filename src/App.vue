/* eslint-disable space-before-function-paren */
<template>
<div>
  <div id="test">
  </div>
    <button ref="buttonTOp" @click="submit">Generate token</button>

</div>
</template>

<script>
// import { StripeElementCard } from '@vue-stripe/vue-stripe'
// import axios from 'axios'
export default {
  components: {
    // StripeElementCard
  },
  data () {
    this.pulishableKey = 'pk_test_swApzrxK2K7euK0hDCykGfk600vMN1Uot0'
    return {
      token: null,
      clientSecret: null,
      count: 0,
      cardSaved: null
    }
  },
  mounted () {
    // axios({
    //   method: 'POST',
    //   url: 'http://127.0.0.1:8000/v1/organization/org/invoice/setup_intent/5320b465-e810-468d-ba47-2a2f3666b0f6/',
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //   }
    // }).then(res => {
    // this.clientSecret = res.data.client_secret
    this.clientSecret = 'seti_1JK2gTH0GXB0U1FI0Jz9InBA_secret_Jxydx5VGKYhbmqNFoBaCBVoiPIdPNw4'
    const elements = this.$stripe.elements()

    this.cardSaved = elements.create('card', {})
    this.cardSaved.mount('#test')

    console.log(this.clientSecret)
    // }).catch(err => console.log(err))
  },
  methods: {
    submit () {
      this.$refs.buttonTOp.disabled = true

      this.$stripe.confirmCardSetup(this.clientSecret, {
        payment_method: {
          card: this.cardSaved
        }
      })
    },
    tokenCreated (token) {
      console.log(token)
      // handle the token
      // send it to your server
    }
  }
}
</script>
