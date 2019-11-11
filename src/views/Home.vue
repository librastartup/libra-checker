<template>
  <div class="home">


    <div class="home-content">

      <div v-if="$route.name != 'about' && $route.name != 'faq'">

        <div class="centered home-search-div" v-if="!$parent.content">

          <span>

            <h1>
              Libra Cryptocurrency Blockchain Explorer
            </h1>

            <h3 style="margin-top:10px;margin-bottom:28px;font-size:14px;">
              Check Libra Wallet Address and Transaction Details
            </h3>

            <div style="height:3px;"></div>
          </span>
            
        </div>

        <div class="content-block" style="max-width:550px;margin:0 auto;margin-top:10px;text-align:center;">
        
          <div class="effect-9-parent">
            <input type="text" v-on:keyup.enter="searchClick" v-model="searchInput" placeholder="Address or Transaction ID" class="effect-9" style="text-align:center;">
            <span class="focus-border">
              <i></i>
            </span>
          </div>

          <div style="height:10px;clear:both;"></div>

          <button @click="searchClick" class="button-check">Check</button>

        </div>

        <!-- <div style="margin-top:50px;text-align:center;color:red;line-height:140%;">Breaking changes!<br>Follow status updates on <a href="https://twitter.com/librachecker" target="_blank">@librachecker</a></div> -->

        <div class="home-recent-txn"><h2 style="text-align:center;">Recent Transactions</h2>
        
          <span v-if="showTx">
            <table style="width:100%;" cellpadding="3">
              <tbody>
                <tr>
                  <th width="10%">ID</th>
                  <th width="27%" style="max-width:100px;">From</th>
                  <th width="26%">To</th>
                  <th width="16.5%"><div class="value-mobile">Value</div><div class="value-desktop">Value in LBR</div></th>
                  <th width="20.5%"><div class="value-mobile">Time</div><div class="value-desktop">Expiration Time</div></th>
                </tr>
                <tr v-for="tx in txs">
                  <td class="overflow-dots"><router-link v-bind:to="'/transaction/'+tx.id" class="link">{{tx.id}}</router-link></td>
                  <td class="overflow-dots"><router-link class="link" v-bind:to="'/address/'+tx.sender"><div style="display:inline-block;width:12px;height:12px;margin-right:4px;" v-html="libraidenticon(tx.sender)"></div>{{tx.sender}}</router-link></td>
                  <td class="overflow-dots"><router-link v-bind:to="'/address/'+tx.receiver" class="link"><div style="display:inline-block;width:12px;height:12px;margin-right:4px;" v-html="libraidenticon(tx.receiver)"></div>{{tx.receiver}}</router-link></td>
                  <td class="overflow-dots">{{ formatterMethod(tx.value / 1000000) }} ≋</td>
                  <td class="overflow-dots">{{ new Date(tx.time * 1000).toLocaleDateString("en-US", options) }}</td>
                </tr>
              </tbody>
            </table>
          </span>
          <span v-else style="font-size:18px;">
            <span class="np-loading np-line" style="font-family: Arial, Helvetica, sans-serif;"></span>
          </span>
        
        </div>

      </div>

      <div v-if="$route.name == 'faq'">
          <div class="content-block" style="margin-bottom:-20px;">

            <h2 style="text-align:left;margin-bottom:60px;">Frequently Asked Questions</h2>


            <div class="faq-question">
              <b>Question:</b> WHAT? Would you mind explaining how in the world do you have a block explorer for a blockchain that is not yet even released? The site is constantly listing new transactions, where are those transactions coming from? Not to mention that Libra is most probably NOT going to have an open blockchain for you to even see those transactions.
            </div>

            <div class="faq-answer">
              <b>Answer:</b> It will be open, see the whitepaper. Libra Checker is currently running on the Libra testnet, which is live.
            </div>


            <div class="faq-question">
              <b>Question:</b> But why? Do you think Facebook wouldn't create their own block explorer and have a beautiful API designed for developers to create their own apps?
            </div>

            <div class="faq-answer">
              <b>Answer:</b> Libra actively invites and encourages third-party developers to build products based around the Libra Blockchain.
              <br><br>
              A quote from the Libra whitepaper: "The Libra currency is built on the “Libra Blockchain.” Because it is intended to address a global audience, the software that implements the Libra Blockchain is open source — designed so that anyone can build on it, and billions of people can depend on it for their financial needs."
            </div>


            <div class="faq-question">
              <b>Question:</b> Libra is owned by Facebook, a big company, and they will most likely have a trademark for it like any other product they have. You have illegally created your own block explorer for it which I don't think will be a good idea especially when Facebook tries to shut you down. Libra isn't like Bitcoin where you can create Logos, Coins, and Services out of it simply because you need to ask permission first to Facebook since it is their product. It's better to delete your website now before Facebook even notice you have one.
            </div>

            <div class="faq-answer">
              <b>Answer:</b> Facebook will have similar rights to Libra as any other member of the Libra Association (see the whitepaper).
              <br><br>
              Libra is not supposed to be a commercial trademark.
              <br><br>
              To register it as a trademark and to restrict its use would be against Libra's mission and vision (see the whitepaper).
              <br><br>
              Furthermore, it would be close to impossible to protect Libra as a commercial trademark, because both the wordmark and the symbol are generic, something you would expect to be in the public domain.
              <br><br>
              Even the Libra logo is just a generic character: ≋
            </div>
            

            <div class="faq-question">
              <b>Question:</b> I see this (librastartup.com) is your parent company and you have many projects listed which are using/for Libra. Are you a Libra supporter, or maybe a part of Libra marketing team?
            </div>

            <div class="faq-answer">
              <b>Answer:</b> The creator of the Libra Checker is an independent serial maker and entrepreneur, who works on many apps. He also started the Libra Startup project and will try to make it unbiased and informative.
            </div>
            

            <div class="faq-question">
              <b>Question:</b> Quite surprising, there is news that Facebook's Libra coin is not going to launch at all, so what is this Libra explorer, it comes to early without the dev checking if the Libra coin is going to launch at all, or he is planning to launch his own libra coin since Facebook's libra coin will not push through.
              <br><br>
              Regulatory issues may be an insurmountable barrier to launch Libra global cryptocurrency project. It's been a month of speculation about Facebook's Libra coin and it's time for us to accept the reality that it's not going to happen anymore.
            </div>

            <div class="faq-answer">
              <b>Answer:</b> Yes, there is a risk. Though the initial hearings were quite positive.
            </div>
            
            <div class="faq-question">
              <b>Question:</b> The block explorer keeps showing new blocks every few seconds. What is the block time for this coin? It's awfully (too) fast.
            </div>

            <div class="faq-answer">
              <b>Answer:</b> A quote from the Libra whitepaper: "Unlike previous blockchains, which view the blockchain as a collection of blocks of transactions, the Libra Blockchain is a single data structure that records the history of transactions and states over time. This implementation simplifies the work of applications accessing the blockchain, allowing them to read any data from any point in time and verify the integrity of that data using a unified framework."
            </div>

            <div class="faq-question">
              <b>Question:</b> Is it possible to also include the raw transaction data in your explorer instead of just the hashes? I mean something like bitcoin explorers have? Is the site still under development? Because I can’t see the tx fee and others (Public Key/Hash). What information will Explorer provide? Will it differ greatly from "BTC/ETH" explorer?
            </div>

            <div class="faq-answer">
              <b>Answer:</b> Thanks for the suggestions, your feedback is always welcome. Yes, the blockchain provides more data, it will be included in the next version of the Libra Checker. Currently, it's in the early beta stage (MVP).
            </div>

          </div>
      </div>

      <div v-else-if="$route.name == 'about'">

        <div class="content-block" style="font-size:15px;">
          <h2 style="text-align:left;margin-bottom:40px;">About</h2>

          <p>
            Libra Checker is a Libra cryptocurrency block explorer.
          </p>

          <p>
            The mission of Libra Checker is to create access for the general public to read data from the Libra Blockchain in a simple and effortless way.
          </p>

          <p>
            With the help of Libra Checker, users can find information about Libra transactions, addresses, metadata, and in the future - Libra smart contracts data.
          </p>

          <p>
            Libra Checker is a privacy-focused service. Besides Google Analytics with IP anonymization, we do not use any trackers or cookies. We do not collect any personal information about website users.
          </p>

          <p>Libra Checker is currently running on the latest Libra blockchain testnet.</p>
  
          <p>Follow and fork Libra Checker on <a href="https://twitter.com/librachecker" target="_blank">Twitter</a> and <a href="https://github.com/giekaton/libra-checker" target="_blank">GitHub</a>.</p>
   
          <div style="height:20px;"></div>
          
          <p>
            To check address balance and transactions:
            <ul>
              <li>
                Enter the address in Libra Checker's search field.
              </li>
              <li style="margin-top:7px;">
                  Use a direct link: https://librachecker.com/address/ADDRESS
                  <!-- as in this example: <div class="overflow-dots" style="padding-bottom:1px;"><a href="/address/504c202566b97069c68f96faa1dd24a73d6c3b9b58deda2ce77d35c10960351d" style="font-size:13px;line-height:130%;" target="_blank">https://librachecker.com/address/504c202566b97069c68f96faa1dd24a73d6c3b9b58deda2ce77d35c10960351d</a><br>
                </div> -->
              </li>
            </ul>
          </p>

          <div style="height:20px;"></div>
          
          <p>
            To check transaction details:
            <ul>
              <li>
                Enter the transaction's ID (e.g. 1786) in Libra Checker's search field.
              </li>
              <li style="margin-top:7px;">
                  Use a direct link: https://librachecker.com/transaction/TRANSACTION
                  <!-- as in this example: <div class="overflow-dots" style="padding-bottom:1px;"><a href="/transaction/4684" style="font-size:13px;line-height:130%;" target="_blank">https://librachecker.com/transaction/4684</a><br> -->
                <!-- </div> -->
              </li>
            </ul>
          </p>

          <div style="height:40px;"></div>
          
          <h2 style="text-align:left;margin-bottom:40px;">Development</h2>

          <p>Libra is an open payments ecosystem that actively invites and encourages third-party developers to build products and services around the Libra Blockchain.</p>

          <div style="height:5px;"></div>
          
          <i>
            The Libra currency is built on the “Libra Blockchain.” Because it is intended to address a global audience, 
            the software that implements the Libra Blockchain is open source — designed so that anyone can build on it, and billions of people can depend on it for their 
            financial needs.
            <br>
            — <a href="https://librazilla.com/docs/LibraWhitePaper_en_US.pdf" target="_blank">Libra White Paper</a>
          </i>
          
          <div style="height:5px;"></div>
          
          <p>According to the white paper, Facebook will have similar rights to Libra as any other member of the Libra Association.</p>

          <p>Libra is not supposed to be a commercial trademark. To register it as a trademark and to restrict its use would be against Libra's Mission and Vision. 
          Furthermore, it would be close to impossible to protect Libra as a commercial trademark, because both the wordmark and the symbol are generic, something 
          you would expect to be in the public domain. Even the Libra symbol <a href="https://graphemica.com/%E2%89%8B" target="_blank">≋</a> is just a generic character.</p>

          <div style="height:20px;"></div>

          <p>Libra Checker is an independent project created by <a href="https://librastartup.com" target="_blank">Libra Startup</a>. It is not affiliated with Facebook.</p>

          <p>
            Currently, Libra Checker is in the early beta stage. It will continue improving to track millions (or billions) of 
            Libra transactions from the upcoming Libra live network. The planned launch for the Libra mainnet is for the 2-nd half of 2020.
          </p>

          <div style="height:40px;"></div>

          <h2 style="text-align:left;margin-bottom:40px;">Open Source</h2>

          <p>
          Libra Checker is open source and it also has a <a href="https://librastartup.com/blog/tutorial-how-to-create-block-explorer-for-libra-cryptocurrency-part-1-the-backend/" target="_blank">tutorial</a>.
          </p>

          <p>
          <a href="https://github.com/librastartup/libra-checker" target="_blank">/libra-chekcer</a> - Frontend Vue.js app
          <br>
          <a href="https://github.com/librastartup/libra-checker-grpc" target="_blank">/libra-chekcer-grpc</a> - Backend gRPC client
          <br>
          <a href="https://github.com/librastartup/libra-checker-api" target="_blank">/libra-checker-api</a> - Express.js app to connect backend-frontend
          </p>
          
          <p>
          Thanks to the Libra open-source developers community for their work and help.
          </p>
          
          <div style="height:30px;"></div>
        </div>

      </div>

    </div>

    <lc-footer />

  </div>
</template>

<script>
import lcFooter from './Footer.vue';

export default {
  name: 'home',

  components: {
    lcFooter
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

    libraidenticon(address) {
      return(libraidenticon(address));
    },

    formatterMethod: function(val) {
      let value = formatterLC.format(Number(val));
      return value;
    },

    getLatestTx: function() {
      this.interval = setInterval(() => {
        console.log('Update latest txs');
        axios.get(libraCheckerApi+'/recent_txn')
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
      this.searchInput = this.searchInput.trim();
      
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
  .home-recent-txn {
    margin-top:80px;
    text-align:center;
  }

  .home-search-div {
    padding-top:15px;
  }

  @media screen and (max-width: 430px) {
    .home-recent-txn {
      margin-top: 45px;
    }
    .home-search-div {
      padding-top: 0px;
    }
    .home-search-div h1 {
      margin-top: 5px;
    }
  }

  .faq-question {
    margin-bottom: 20px;
    /* font-weight: bold; */
  }

  .faq-answer {
    margin-bottom:60px;
  }

  .reader-footer {
    background-color: #0000000d
  }

  /*= input focus effects css
  =========================== */
  :focus{outline: none;}

  .effect-9 ~ .focus-border {position: absolute; bottom: 0; left: 0; width: 0; height: 1.4px; background-color: rgb(109, 109, 224);; transition: 0.4s;}
  .effect-9:focus ~ .focus-border {width: 100%; transition: 0.4s;}

  .effect-9-parent{float: left; width: 100%; position: relative;} /* necessary to give position: relative to parent. */
  
  input[type="text"]{
    color: #333;
    width: 100%;
    /* letter-spacing: 1px; */
    border: 1px solid rgb(179, 179, 179);
    height:34px;
    padding-top:3px;
    font-size: 15px;
    font-family: inherit;
  }

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: rgb(190, 190, 190);
    opacity: 1; /* Firefox */
    font-size: 14px;
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: rgb(190, 190, 190);
    font-size: 14px;
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    color: rgb(190, 190, 190);
    font-size: 14px;
  }

  .home-content {
    max-width: 800px;
    margin: 0 auto;
    clear:both;
    padding-top: 30px;
    padding-bottom: 100px;
    text-align: left;
    font-size: 14px;
    padding-left:20px;
    padding-right:20px;
  }

  .value-mobile {
    display: none;
  }

  @media screen and (max-width: 800px) {
    .value-mobile {
      display: block;
    }
    .value-desktop {
      display: none;
    }
  }

  .content-block {
    margin-top: 30px;
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
    border-color: #b9b9b9;
    color: white;
    cursor: pointer;
    width: 135px;
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
    color:var(--color-np-loading);
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