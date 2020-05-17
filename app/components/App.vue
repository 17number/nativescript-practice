<template>
  <Page>
    <ActionBar title="Welcome to NativeScript-Vue!" />
    <GridLayout columns="*" rows="*,*,*,*">
      <Label class="message" :class="{ red_to_green: isAnimating }" :text="msg" col="0" row="0" />
      <Label class="message" :class="{ rotation: isAnimating }" text="R" col="0" row="1" />
      <Label class="message fas" :class="{ rotation: isAnimating }" :text="get_fa_text('fa-redo')" col="0" row="2" />
      <Button text="On/Off" @tap="toggleAnimation" col="0" row="3" />
    </GridLayout>
  </Page>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Hello World!',
        isAnimating: false,
      }
    },
    methods: {
      toggleAnimation() {
        this.isAnimating = !this.isAnimating;
      },
    },
  }
</script>

<style scoped lang="scss">
  .message {
    vertical-align: center;
    text-align: center;
    font-size: 20;
  }

  .ns-light {
    .message {
      color: #333333;
    }

    ActionBar {
      background-color: #53ba82;
      color: #ffffff;
    }
  }

  .ns-dark {
    .message {
      color: #ffffff;
    }

    ActionBar {
      color: #ffffff;
    }
  }

  @keyframes red_to_green {
    0% { background-color: red; }
    50% { background-color: green; }
    100% { background-color: red; }
  }
  .red_to_green {
    animation-name: red_to_green;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }

  @keyframes rotation {
    0% { transform: rotate(0); }
    50% { transform: rotate(180); }
    100% { transform: rotate(360); }
  }
  .rotation {
    animation-name: rotation;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
</style>
