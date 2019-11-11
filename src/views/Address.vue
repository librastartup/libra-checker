<template>
  <div class="reader">

    <div class="read-content" style="max-width: 800px; margin-top:-20px;">
      
      <div style="position:relative;width:100%;" v-if="addressExists">
        <div v-html="libraidenticon(address)" title="Libra Identicon" style="width:40px;position:absolute;right:0px;top:4px;"></div>
      </div>

      <h2>Address details</h2>

      <br>
      Address: {{ address }}
      <br>

      <span v-if="address.substring(0,16) == '0000000000000000' && addressExists">
        Address that mints testnet Libra coins.
        <div style="height:50px;"></div>
        Total Libra coins minted: <b>{{ formatterMethod((balance / 1000000) * -1) }} LBR</b>
      </span>

      <span v-else-if="!addressExists" style="color:red;">
        This address does not exist.
      </span>

      <span v-else>
        
        <div style="height:5px;"></div>
        <span v-if="balance > 0">
          Balance: <span v-if="balance != 0">{{ formatterMethod((balance / 1000000)) }}</span> LBR
        </span>
        <span v-else-if="balance < 0">
          Balance: <span v-if="balance != 0">{{ formatterMethod((balance / 1000000)) }}</span> LBR 🐛🐞💥
        </span>
        <span v-else-if="balance == 0">
          Balance: 0.00 LBR
        </span>
        <span v-else>
          Loading... <span class="np-loading np-line" style="font-family: Arial, Helvetica, sans-serif;"></span>
        </span>
      </span>

      <div style="height:20px;"></div>

      <span v-if="addressExists">

        <div style="border-top:1px solid #cccccc;width:100%;margin-top: 60px;padding-top:10px;"></div>

        <h2 v-if="balance != 'error'">Recent transactions</h2>

        <div style="height:20px;"></div>

        <table style="width:100%;margin-left:-2%;text-align:center;font-size:14px;">
          <tbody>
            <tr>
              <th width="10%">ID</th>
              <th width="30%" style="max-width:100px;">From</th>
              <th width="29%">To</th>
              <th width="12.5%"><div class="value-mobile">Value</div><div class="value-desktop">Value in LBR</div></th>
              <th width="18.5%"><div class="value-mobile">Time</div><div class="value-desktop">Expiration Time</div></th>
            </tr>
            <tr v-for="tx in txs" v-bind:key="tx.id">
              <td class="overflow-dots"><router-link v-bind:to="'/transaction/'+tx.id" class="link">{{tx.id}}</router-link></td>
              <td class="overflow-dots"><router-link v-bind:to="'/address/'+tx.sender"  class="link"><div style="display:inline-block;width:12px;height:12px;margin-right:4px;" v-html="libraidenticon(tx.sender)"></div>{{tx.sender}}</router-link></td>
              <td class="overflow-dots"><router-link v-bind:to="'/address/'+tx.receiver" class="link"><div style="display:inline-block;width:12px;height:12px;margin-right:4px;" v-html="libraidenticon(tx.receiver)"></div>{{tx.receiver}}</router-link></td>
              <td class="overflow-dots">{{ formatterMethod(tx.value / 1000000) }} ≋</td>
              <td class="overflow-dots">{{ new Date(tx.time * 1000).toLocaleDateString("en-US", options) }}</td>
            </tr>
          </tbody>
        </table>

      </span>

    </div>

    <lc-footer />

  </div>
</template>

<script>
import lcFooter from './Footer.vue';

export default {
  name: 'address',

  props: ['address'],

  components: {
    lcFooter
  },

  data: function() {
    return {
      // addressData: null,
      balance: 0,
      txs: [],
      addressExists: true,
      options: { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' },
      identicon: ''
    }
  },

  watch:{
    '$route' (to, from) {
      this.balance = 0;
      this.txs = [];
      this.getData();
      // this.identicon = libraidenticon(this.address);
    }
  },

  beforeMount() {
    // console.log(this.balance);
    // console.log('beforeMount');

    this.getData();
  },

  mounted () {
    // console.log(this.balance);
    // console.log('mounted');

    document.getElementById('splashScreen').style.display = 'none';
    window.scrollTo(0, 0);

    // this.identicon = libraidenticon(this.address);
  },

  // rendered () {
  //   this.identicon = libraidenticon(this.address);
  // },

  // beforeDestroy() {
  //   console.log(this.balance);
  //   console.log('beforeDestroy');
  // },

  methods: {
    
    libraidenticon(address) {
      return(libraidenticon(address));
    },

    formatterMethod: function(val) {
      let value = formatterLC.format(Number(val));
      return value;
    },

    getData () {
      axios.get(libraCheckerApi+'/address_info/?address='+this.address)
      .then (
        response => {
          // console.log(response);
          this.balance = response.data.addressBalance;

          this.txs = response.data.addressLatestTxn;
          if (this.txs.length == 0) {
            this.addressExists = false;
          }
          else {
            this.addressExists = true;
          }
        }
      )
      .catch ( (error) => {
          this.balance = 'error';
        }
      );
    },
  }
}
</script>
