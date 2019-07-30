<template>
  <div class="reader">

    <div class="read-content" style="margin-top:-20px;">
      
      <h2>Transaction details</h2>
      <br><br>

      <div v-if="tx != null">
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

        <div style="border-top:1px solid #cccccc;width:100%;margin-top: 80px;padding-top:10px;"></div>

        <div class="reader-tx-details sans-serif" style="line-height:18px;">
          The above transaction data is stored permanently on the Libra blockchain. It cannot be edited or deleted.
          <br><br>
          <!-- Metadata: 
          <br>
          <div class="overflow-dots">
            Metadata: 
          </div>
          <br><br> -->
        </div>

      </div>

      <div v-else>
        Loading...
        <br>
        <br>
        If it takes too much time, the transaction doesn't exist.
      </div>

    </div>

    <div class="reader-footer">
      <div class="width">
        A project by <a href="https://librastartup.com" target="_blank">Libra Startup</a>

        <div style="float:right;" class="sans-serif">
          <router-link to="/" style="color:#828282;">Home</router-link>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props: ['transaction'],
  components: {
    
  },
  data: function() {
    return {
      tx: null,
      options: { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }
    }
  },

  beforeMount() {
    console.log(this.thHash);
    axios.post('https://api.librachecker.com', this.transaction)
    .then (
      response => {
        this.tx = response.data;
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
