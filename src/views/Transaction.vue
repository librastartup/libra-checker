<template>
  <div class="reader">

    <div class="read-content" style="margin-top:-20px;">
      
      <h2>Transaction details</h2>
      
      <div style="height:20px;"></div>

      <div v-if="tx == 'not exist'">
        <span style="color:red;">The transaction doesn't exist.</span>
      </div>

      <div v-else-if="tx != null">
        ID: {{ tx._id }}
        <br>
        From: <router-link v-bind:to="'/address/'+tx.from" class="link">{{ tx.from }}</router-link>
        <br>
        To: <router-link v-bind:to="'/address/'+tx.to" class="link">{{ tx.to }}</router-link>
        <br>
        Value: {{ (tx.value / 10000000).toFixed(2) }} LBR
        <br>
        Time: {{ new Date(tx.time * 1000).toLocaleDateString("en-US", options) }}
        <br>
        Sequence nr: {{ tx.seq_nr }}
        <br>
        Gas price: {{ tx.gas_price }}
        <br>
        Gas max: {{ tx.gas_max }}
        <br>
        Gas used: {{ tx.gas_used }}

        <div style="height:30px;"></div>

        <span style="color:#888;">
          senderPublicKey: {{ tx.senderPublicKey }}
          <br>
          senderSignature: {{ tx.senderSignature }}
          <br>
          signedTxnHash: {{ tx.signedTxnHash }}
          <br>
          stateRootHash: {{ tx.stateRootHash }}
          <br>
          eventRootHash: {{ tx.eventRootHash }}
          <br>
          rawTxnBytes: {{ tx.rawTxnBytes }}
        </span>

        <div style="border-top:1px solid #cccccc;width:100%;margin-top: 60px;padding-top:10px;"></div>

        <div class="reader-tx-details sans-serif" style="line-height:18px;">
          The above transaction is stored permanently on the Libra blockchain. It cannot be edited or deleted.
          <br><br>
        </div>

      </div>

      <div v-else>
        Loading... <span class="np-loading np-line" style="font-family: Arial, Helvetica, sans-serif;"></span>
      </div>

    </div>

    <lc-footer />
    
  </div>
</template>

<script>
import lcFooter from './Footer.vue';

export default {
  name: 'transaction',

  props: ['transaction'],
  components: {
    lcFooter
  },
  data: function() {
    return {
      tx: null,
      options: { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }
    }
  },

  beforeMount() {
    // console.log(this.thHash);
    axios.get(libraCheckerApi+'/txn_info/?_id='+this.transaction)
    .then (
      response => {
        // console.log(response.data)
        if (response.data == null) {
          this.tx = 'not exist';
        }
        else {
          this.tx = response.data;
        }
      }
    )
    .catch (
      function (error) {
        console.log (error);
      }
    );
  },

  mounted () {
    document.getElementById('splashScreen').style.display = 'none';
    window.scrollTo(0, 0);
  },
  methods: {
    
  }
}
</script>
