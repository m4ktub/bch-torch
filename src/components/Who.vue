<template>
  <div class="who">
    <span class="twitter" v-if="isTwitter">
      <a v-bind:href="details.twitter">{{ details.twitter | twitteruser }}</a>
    </span>
    <span class="reddit" v-if="isReddit">
      <a v-bind:href="details.reddit">{{ details.reddit | reddituser }}</a>
    </span>
    <span class="address" v-if="isLegacy">
      <a v-bind:href="address | linkaddress">{{ address | toslpaddr }}</a>
    </span>
    <div class="images">
      <span v-if="hasCountry" class="flag">
        <img v-bind:src="'https://www.countryflags.io/' + details.country + '/flat/32.png'">
      </span>
      <span v-if="hasBadge" class="badges">
        <img v-for="step in details.badges" :key="step" v-bind:src="'/bch-torch/images/' + step" height="32">
      </span>
    </div>
  </div>
</template>

<script>
import users from "../data/users";
import slpaddr from "bchaddrjs-slp";

export default {
  name: "who",
  props: {
    legacy: String,
    cashaddr: String
  },
  data() {
    return {
      address: this.cashaddr || this.legacy,
      details: users[this.legacy]
    };
  },
  computed: {
    isTwitter() {
      return this.details && !!this.details.twitter;
    },
    isReddit() {
      return this.details && !!this.details.reddit;
    },
    isLegacy() {
      return this.details == null;
    },
    hasCountry() {
      return this.details && !!this.details.country;
    },
    hasBadge() {
      return this.details && !!this.details.badges;
    }
  },
  filters: {
    twitteruser(url) {
      let match = url.match(/twitter.com\/([^/]+)/);
      return match ? "@" + match[1] : url;
    },
    reddituser(url) {
      let match = url.match(/reddit.com\/([^/]+\/[^/]+)/);
      return match ? "/" + match[1] : url;
    },
    linkaddress(address) {
      return "https://explorer.bitcoin.com/bch/address/" + slpaddr.toCashAddress(address);
    },
    toslpaddr(address) {
      return slpaddr.toSlpAddress(address).replace("simpleledger:", "");
    }
  }
};
</script>
