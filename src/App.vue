<template>
  <div id="app">
    <div class="header">

      <div class="header-inner">
        <router-link to="/" >
          <div @click="content = false">
            <div style="float:left;height:22px;width:22px;">
              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240.95 240.94"><title>libra logos</title><path d="M425.95,279.32a96.1,96.1,0,0,1-19.22,19,73.28,73.28,0,0,1-14.7,8.42v36.11A104.83,104.83,0,0,0,425.95,329V279.32h0Zm-207,84.78A104.58,104.58,0,0,0,185,378.24v49.82a96.77,96.77,0,0,1,19.18-19,72.84,72.84,0,0,1,14.74-8.36v-36.6h0Zm69.24,6.06A127.15,127.15,0,0,0,253.54,362v34.15c11.56,1.17,22.07,4.93,34.62,10.93V370.17h0Zm69.24,27.15c-11.5-1.19-22-5-34.62-11v36.78a129.1,129.1,0,0,0,34.62,7.86V397.31h0Zm68.54-32a96.12,96.12,0,0,1-19.22,19,73.29,73.29,0,0,1-14.7,8.42v36.11A104.84,104.84,0,0,0,425.95,415V365.33h0Zm-207,84.78A104.63,104.63,0,0,0,185,464.23v49.82a96.58,96.58,0,0,1,19.18-19,72.21,72.21,0,0,1,14.74-8.38V450.11h0Zm69.24,6.06A127.13,127.13,0,0,0,253.54,448v34.16c11.56,1.17,22.07,4.93,34.62,10.93V456.16h0Zm69.24,27.15c-11.5-1.19-22-5-34.62-11v36.79a129.09,129.09,0,0,0,34.62,7.86V483.31h0Zm68.54-32a96,96,0,0,1-19.22,19,73.29,73.29,0,0,1-14.7,8.42v36.12a104.83,104.83,0,0,0,33.92-13.78V451.33h0Zm-207-173.21A104.71,104.71,0,0,0,185,292.25V342a96.79,96.79,0,0,1,19.18-19,72.83,72.83,0,0,1,14.74-8.36V278.12h0Zm69.24,6A127.06,127.06,0,0,0,253.54,276v34.16c11.56,1.17,22.07,4.93,34.62,10.93V284.15h0Zm69.24,27.15c-11.5-1.19-22-5-34.62-11v36.78a129.1,129.1,0,0,0,34.62,7.86V311.31h0Z" transform="translate(-185 -276)" style="fill:#39298c"/></svg>
            </div>
            <div style="float:left;padding-top:2px;padding-left:9px;font-size:15px;color:black;">Libra Checker</div>
          </div>
        </router-link>

        <div style="float:right;padding-top:2px;font-size:14px;" class="sans-serif">
          <router-link to="/about">About</router-link>
        </div>

      </div>
    </div>

    <router-view class="router-content"></router-view>

  </div>
</template>

<script>

export default {
  props: [''],

  components: {

  },

  data: function() {
    return {
      content: false
    }
  },

  mounted () {

  },

  methods: {

  }
}
</script>

<style>
html {
  position: relative;
  min-height: 100%;
}

body {
  margin: 0 0 50px;
  font-family: 'Roboto Condensed', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #181818;
}

* {
  box-sizing: border-box;
}

a, a:visited {
  color: rgb(0, 0, 238);
}

.link {
  text-decoration: none;
  cursor: pointer;
}

table { width:250px;table-layout:fixed; }
table tr { height:1em; }
td { overflow:hidden;white-space:nowrap;  } 

h1 {
  margin-top:20px;
  margin-bottom:7px;
  font-size:22px;
}

h3 {
  margin-top:10px;
  font-size:15px;
  text-align: center;
  font-weight:normal;
}

.home {
  max-width: 1032px;
  height: 100%;
  margin: 0 auto;
  margin-top: 20px;
}

/* Address and Transaction */

.reader {
  max-width: 1032px;
  height: 100%;
  margin: 0 auto;
  margin-top: 10px;
}

.read-content {
  max-width: 740px;
  margin: 0 auto;
  clear:both;
  padding-bottom: 120px;
  padding-top: 80px;
  padding-left:20px;
  padding-right:20px;  
  line-height: 180%;
  word-break: break-word;
}

@media only screen and (max-width: 600px) {
  .read-content {
    padding-top:100px;
    padding-bottom:80px;
  }
}

.pre-formatted {
  white-space: pre-line;
  word-break: break-word;
}

.reader-tx-details {
  color: grey;
  font-size: 12px;
  clear: both;
}

.reader-footer {
  background-color: rgb(231, 231, 231);
  border-top: 1px solid rgb(179, 179, 179);
  position: absolute;
  left: 0;
  bottom: 0;
  height: 50px;
  width: 100%;
  overflow: hidden;
  font-size: 14px;
  padding-top: 15px;
}

.width {
  max-width: 1032px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
}

.social-icon {
  width: 20px;
  margin-right: 10px;
  margin-top: 10px;
}
</style>
