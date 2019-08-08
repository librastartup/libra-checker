<template>
  <div class="reader">

    <div class="read-content" style="max-width: 800px; margin-top:-20px;">
      
      <h2>Address details</h2>
      <br>

      Address: {{ address }}
      <br>

      <span v-if="address == '0000000000000000000000000000000000000000000000000000000000000000'">
        Address that mints testnet Libra coins.
      </span>

      <span v-else-if="balance == 'error'" style="color:red;">
        The address doesn't exist.
      </span>

      <span v-else>

        <span v-if="balance != 0">
          Balance: {{ (balance / 10000000).toFixed(2) }} LBR
        </span>
        <span v-else>
          Loading... <span class="np-loading np-line" style="font-family: Arial, Helvetica, sans-serif;"></span>
        </span>
        <br>
        <br>
        
        <div style="border-top:1px solid #cccccc;width:100%;margin-top: 60px;padding-top:10px;"></div>

        <h2 v-if="balance != 'error'">Recent transactions</h2>

        <div style="height:20px;"></div>


        <table style="width:104%;margin-left:-2%;text-align:center;font-size:14px;">
          <tbody>
            <tr>
              <th width="10%">ID</th>
              <th width="30%" style="max-width:100px;">From</th>
              <th width="29%">To</th>
              <th width="12.5%">Value</th>
              <th width="18.5%">Time</th>
            </tr>
            <tr v-for="tx in txs">
              <td class="overflow-dots"><router-link v-bind:to="'/transaction/'+tx._id" class="link">{{tx._id}}</router-link></td>
              <td class="overflow-dots"><router-link class="link" v-bind:to="'/address/'+tx.from">{{tx.from}}</router-link></td>
              <td class="overflow-dots"><router-link v-bind:to="'/address/'+tx.to" class="link">{{tx.to}}</router-link></td>
              <td class="overflow-dots">{{ (tx.value / 10000000).toFixed(2) }} LBR</td>
              <td class="overflow-dots">{{ new Date(tx.time * 1000).toLocaleDateString("en-US", options) }}</td>
            </tr>
          </tbody>
        </table>


      </span>
    </div>

    <div class="reader-footer">
      <div class="width">

        A project by <a href="https://librastartup.com" target="_blank">Libra Startup</a>

        <div style="float:right;" class="sans-serif">
          <a href="https://twitter.com/librachecker" target="_blank">Twitter</a>
          &nbsp;|&nbsp;
          <a href="https://github.com/giekaton/libra-checker" target="_blank">GitHub</a>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'address',

  props: ['address'],
  components: {
    
  },
  data: function() {
    return {
      // addressData: null,
      balance: 0,
      txs: [],
      options: { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }
    }
  },

  beforeMount() {
    // console.log(this.address);
    // console.log(this.thHash);

    axios.post('https://api.librachecker.com', this.address)
    .then (
      response => {
        // console.log(response);
        this.balance = response.data.balance;
        this.txs = response.data.txs;
      }
    )
    .catch ( (error) => {
        this.balance = 'error';
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
