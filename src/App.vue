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
import axios from 'axios'
export default {
  components: {
    // StripeElementCard
  },
  data () {
    this.pulishableKey = process.env.VUE_APP_STRIPE_PUBLISHABLE_KEY
    return {
      token: null,
      clientSecret: null,
      count: 0,
      cardSaved: null
    }
  },
  mounted () {
    axios({
      method: 'POST',
      url: 'https://922b15145e0a.ngrok.io/create-setup-intent',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }).then(res => {
      this.clientSecret = res.data.client_secret
      const elements = this.$stripe.elements()

      this.cardSaved = elements.create('card', {})
      this.cardSaved.mount('#test')

      console.log(this.clientSecret)
    }).catch(err => console.log(err))
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
