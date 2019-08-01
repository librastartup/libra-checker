<template>
  <div class="home">


    <div class="home-content">

      <div v-if="$route.name != 'about'">

        <div class="centered" v-if="!$parent.content">

          <span>

            <h1>
              Check Libra wallet address or transaction details
            </h1>

            <h3 style="margin-top:10px;margin-bottom:28px;font-size:14px;">
              A Minimalist Libra Cryptocurrency Blockchain Explorer
            </h3>

            <div style="height:3px;"></div>
          </span>
            
        </div>

        <div class="content-block" style="max-width:600px;margin:0 auto;margin-top:20px;text-align:center;">
        
          <div style="max-width:600px;margin:0 auto;">
            <input type="text" v-on:keyup.enter="searchClick" v-model="searchInput" placeholder="Address or Transaction ID" style="width:100%;height:35px;padding:5px;padding-top:6px;margin-bottom:2px;font-size:15px;margin-top:5px;outline:0;" autofocus>
          </div>
          <div style="height:10px;"></div>
          <button @click="searchClick" style="margin:5px;width:140px;">Check</button>

        </div>

        <div style="margin-top:100px;text-align:center;margin-bottom:-25px;"><h2 style="text-align:center;">Recent Transactions</h2>
        
          <span v-if="showTx">
            <table style="width:100%;" cellpadding="3">
              <tbody>
                <tr>
                  <th width="10%">ID</th>
                  <th width="27%" style="max-width:100px;">From</th>
                  <th width="26%">To</th>
                  <th width="16.5%">Value</th>
                  <th width="20.5%">Time</th>
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
          <span v-else style="font-size:14px;letter-spacing:3px;">
            Loading... <span class="np-loading np-line" style="font-family: Arial, Helvetica, sans-serif;"></span>
          </span>
        
        </div>

      </div>

      <div v-if="$route.name == 'about'">

        <div class="content-block" style="margin-top:0px;">
          <h2 style="text-align:left;margin-bottom:40px;">About</h2>

          Libra Checker is a Libra cryptocurrency block explorer. It is a web application that 
          allows the user to easily explore the blockchain ledger - read data about
          accounts, addresses and transactions.

          <br>
          <br>
          <br>
          <br>

          To check address balance and transactions:
          <ul>
            <li>
              Enter the address in Libra Checker's search field.
            </li>
            <li style="margin-top:7px;">
                Use a direct link (https://librachecker.com/address/<i>address_to_check</i>) as in this example: <div class="overflow-dots" style="padding-bottom:1px;"><a href="/address/504c202566b97069c68f96faa1dd24a73d6c3b9b58deda2ce77d35c10960351d" style="font-size:13px;line-height:130%;" target="_blank">https://librachecker.com/address/504c202566b97069c68f96faa1dd24a73d6c3b9b58deda2ce77d35c10960351d</a><br>
              </div>
            </li>
          </ul>

          <br>
          <br>
          
          To check transation details:
          <ul>
            <li>
              Enter transaction's ID (e.g. 156684) in Libra Checker's search field.
            </li>
            <li style="margin-top:7px;">
                Use a direct link (https://librachecker.com/transaction/<i>transaction_to_check</i>) as in this example: <div class="overflow-dots" style="padding-bottom:1px;"><a href="/transaction/83315" style="font-size:13px;line-height:130%;" target="_blank">https://librachecker.com/transaction/83315</a><br>
              </div>
            </li>
          </ul>

          <br>
          <br>

          <br><br>
          Besides Google Analytics with IP anonymization, we do not use any trackers or cookies. We do not collect any personal information about the website users.
          <br><br><br>
          Curious how Libra Checker was created? See this <a href="https://librastartup.com/blog/tutorial-how-to-create-block-explorer-for-libra-cryptocurrency-part-1-the-backend/" target="_blank">tutorial</a>.
          <br><br><br>
          Follow and fork Libra Checker on <a href="https://twitter.com/librachecker" target="_blank">Twitter</a> and <a href="https://github.com/giekaton/libra-checker" target="_blank">GitHub</a>.
          <br><br><br>
        </div>

      </div>

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
  name: 'home',

  components: {

  },

  data: function() {
    return {
      txs: [],
      options: { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' },
      searchInput: '',
      interval: undefined,
      showTx: false
    }
  },

  beforeMount () {
    
  },

  mounted () {
    document.getElementById('splashScreen').style.display = 'none';
    window.scrollTo(0, 0);

    if (this.$route.name == 'home') {
      this.getLatestTx();
    }
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  watch: {
    $route (to, from) {
      if(from.name == 'home') {
        clearInterval(this.interval);
      }
      if(to.name == 'home') {
        this.getLatestTx();
      }
    }
  },

  rendered () {
    window.scrollTo(0, 0);
  },

  updated () {
    // window.scrollTo(0, 0);
  },

  methods: {

    getLatestTx: function() {
      this.interval = setInterval(() => {
        console.log('Update latest txs');
        axios.get('https://api.librachecker.com')
        .then (
          response => {
            this.txs = [];
            response.data.forEach(tx => {
              this.txs.push(tx);
              this.showTx = true;
            });
          }
        )
        .catch (
          function (error) {
            console.log (error);
          }
        );
      }, 1000);
    },

    searchClick: function() {
      if (this.searchInput.length < 1) { alert('Please enter Libra address or transaction ID'); return; }

      else if (this.searchInput.length < 32) {
        this.$router.push({ name: 'transaction', params: { transaction: this.searchInput } });
      }
      
      else if (this.searchInput.length == 64) {
        this.$router.push({ name: 'address', params: { address: this.searchInput } });
      }

      else {
        alert('Please enter Libra address or transaction ID'); return;
      }
    },

    toTop: function() {
      window.scrollTo(0, 0);
    },
    
  }
}
</script>

<style>

  .home-content {
    max-width: 800px;
    margin: 0 auto;
    clear:both;
    padding-top: 80px;
    padding-bottom: 120px;
    text-align: left;
    font-size: 14px;
    padding-left:20px;
    padding-right:20px;
  }

  .content-block {
    margin-top: 80px;
  }

  .centered {
    text-align: center;
  }

  .border-top {
    border-top: 1px solid rgb(179, 179, 179);
    padding-top: 15px;
  }

  button {
    font-size: 15px;
    padding: 4px 17px 4px 15px;
    margin-top: 5px;
    margin-bottom: 5px;
    background-color: rgb(134, 134, 134);
    border-color: rgb(170, 170, 170);
    color: white;
    cursor: pointer;
  }

  button:focus {
    outline:0;
  }

  .overflow-dots {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .message-input {
    width:100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    height:220px;
    resize: vertical;
    border-color:1px solid rgb(145, 145, 145);
    padding: 4px;
  }

  .feedback {
    margin-top: 14px;
  }

  .notice {
    color: rgb(255, 94, 0);
  }

  .underlined {
    border-bottom: 2px solid rgb(255, 94, 0);
  }

  .underlined:hover {
    border-bottom: 2px solid rgb(255, 94, 0);
  }


  /* text spinner */

  .np-loading {
    display: inline-block;
    overflow: hidden;
    height: 1.3em;
    margin-top: -0.3em;
    line-height: 1.5em;
    vertical-align: text-bottom;
  }

  .np-loading::after {
    display: inline-table;
    white-space: pre;
    text-align: left;
  }

  .np-loading::after {
    content: "\A.\A..\A...";
    animation: spin4 2s steps(4) infinite;
  }

  .np-loading.np-line::after {
    content: "/\A–\A\\\A|";
    text-align: center;
    animation: spin4 1s steps(4) infinite;
  }

  @keyframes spin1  { to { transform: translateY( -1.5em); } }
  @keyframes spin2  { to { transform: translateY( -3.0em); } }
  @keyframes spin3  { to { transform: translateY( -4.5em); } }
  @keyframes spin4  { to { transform: translateY( -6.0em); } }
  @keyframes spin5  { to { transform: translateY( -7.5em); } }
  @keyframes spin6  { to { transform: translateY( -9.0em); } }
  @keyframes spin7  { to { transform: translateY(-10.5em); } }
  @keyframes spin8  { to { transform: translateY(-12.0em); } }
  @keyframes spin9  { to { transform: translateY(-13.5em); } }
  @keyframes spin10 { to { transform: translateY(-15.0em); } }
  @keyframes spin11 { to { transform: translateY(-16.5em); } }
  @keyframes spin12 { to { transform: translateY(-18.0em); } }

</style>