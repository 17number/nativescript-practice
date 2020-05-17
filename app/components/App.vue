<template>
  <Page>
    <ActionBar title="Welcome to NativeScript-Vue!" />
    <GridLayout columns="*" rows="*">
      <Label class="message" :text="msg" col="0" row="0" />
    </GridLayout>
  </Page>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Hello World!'
      }
    }
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
</style>
